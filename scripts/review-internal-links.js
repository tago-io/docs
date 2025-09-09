#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

class InternalLinkReviewer {
  constructor(docsRoot) {
    this.docsRoot = docsRoot;
    this.allFiles = new Map();
    this.linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    this.issues = [];
    this.fixes = [];
  }

  /**
   * Recursively find all markdown files in a directory
   */
  findMarkdownFiles(dir) {
    const files = [];

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          files.push(...this.findMarkdownFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(
        `Warning: Could not read directory ${dir}: ${error.message}`,
      );
    }

    return files;
  }

  /**
   * Build a map of all markdown files for quick lookup
   */
  buildFileMap() {
    console.log("Building file map...");
    const files = this.findMarkdownFiles(this.docsRoot);

    for (const file of files) {
      const relativePath = path.relative(this.docsRoot, file);
      const directory = path.dirname(relativePath);
      const fileName = path.basename(relativePath, ".md");

      this.allFiles.set(fileName, {
        filePath: file,
        relativePath,
        directory,
        fileName,
      });

      // Also map by full relative path for easier lookup
      this.allFiles.set(relativePath, {
        filePath: file,
        relativePath,
        directory,
        fileName,
      });
    }

    console.log(`Found ${this.allFiles.size} markdown files`);
  }

  /**
   * Find all markdown links in a file
   */
  findLinks(content) {
    const matches = [];
    let match;

    while ((match = this.linkRegex.exec(content)) !== null) {
      matches.push({
        fullMatch: match[0],
        linkText: match[1],
        linkPath: match[2],
        startIndex: match.index,
        endIndex: match.index + match[0].length,
      });
    }

    return matches;
  }

  /**
   * Check if a link is external (starts with http:// or https://)
   */
  isExternalLink(linkPath) {
    return linkPath.startsWith("http://") || linkPath.startsWith("https://");
  }

  /**
   * Check if a link is an anchor link (starts with #)
   */
  isAnchorLink(linkPath) {
    return linkPath.startsWith("#");
  }

  /**
   * Check if a link is a mailto link
   */
  isMailtoLink(linkPath) {
    return linkPath.startsWith("mailto:");
  }

  /**
   * Check if a link is internal (not external, not anchor, not mailto)
   */
  isInternalLink(linkPath) {
    return (
      !this.isExternalLink(linkPath) &&
      !this.isAnchorLink(linkPath) &&
      !this.isMailtoLink(linkPath)
    );
  }

  /**
   * Resolve a relative path to an absolute path
   */
  resolveRelativePath(relativePath, fromDirectory) {
    const resolved = path.resolve(fromDirectory, relativePath);
    const relativeToDocs = path.relative(this.docsRoot, resolved);
    return relativeToDocs.replace(/\\/g, "/");
  }

  /**
   * Verify if a file actually exists on disk
   */
  fileExists(filePath) {
    try {
      return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
    } catch (error) {
      return false;
    }
  }

  /**
   * Search for a file by name across all directories
   */
  searchFileByName(fileName) {
    const results = [];
    const cleanName = fileName.replace(/\.md$/, "");

    for (const [key, fileInfo] of this.allFiles) {
      if (fileInfo.fileName === cleanName) {
        results.push(fileInfo);
      }
    }

    return results;
  }

  /**
   * Calculate the best matching file based on directory similarity
   */
  findBestMatch(candidates, fromDirectory) {
    if (candidates.length === 0) return null;
    if (candidates.length === 1) return candidates[0];

    // Score candidates based on directory similarity
    const scored = candidates.map((candidate) => {
      const candidateDir = candidate.directory;
      const fromDirParts = fromDirectory.split("/").filter((p) => p);
      const candidateDirParts = candidateDir.split("/").filter((p) => p);

      // Calculate similarity score
      let score = 0;
      const minLength = Math.min(fromDirParts.length, candidateDirParts.length);

      for (let i = 0; i < minLength; i++) {
        if (fromDirParts[i] === candidateDirParts[i]) {
          score += 1;
        } else {
          break;
        }
      }

      // Prefer files in the same product area (tagoio, tagorun, etc.)
      if (fromDirParts[0] === candidateDirParts[0]) {
        score += 10;
      }

      return { candidate, score };
    });

    // Sort by score (descending) and return the best match
    scored.sort((a, b) => b.score - a.score);
    return scored[0].candidate;
  }

  /**
   * Find the target file for a given link path with comprehensive search
   */
  findTargetFile(linkPath, fromDirectory) {
    // Remove .md extension if present for lookup
    const cleanPath = linkPath.replace(/\.md$/, "");
    const originalHadMdExtension = linkPath.endsWith(".md");

    // Step 1: Try exact path resolution first
    const variations = [
      linkPath, // Original path
      cleanPath, // Without .md
      cleanPath + ".md", // Ensure .md
    ];

    for (const variation of variations) {
      // Check by exact relative path match
      if (this.allFiles.has(variation)) {
        const fileInfo = this.allFiles.get(variation);
        // Verify file actually exists on disk
        if (this.fileExists(fileInfo.filePath)) {
          return {
            found: true,
            path: fileInfo.relativePath,
            needsMdExtension: !originalHadMdExtension,
            reconstructed: false,
          };
        }
      }

      // Try to resolve relative paths
      if (
        variation.includes("/") ||
        variation.startsWith("../") ||
        variation.startsWith("./")
      ) {
        try {
          const resolved = this.resolveRelativePath(variation, fromDirectory);

          // Check if this resolved path exists in our file map
          for (const [key, fileInfo] of this.allFiles) {
            if (
              fileInfo.relativePath === resolved ||
              fileInfo.relativePath === resolved + ".md" ||
              fileInfo.relativePath.replace(/\.md$/, "") === resolved
            ) {
              // Verify file actually exists on disk
              if (this.fileExists(fileInfo.filePath)) {
                return {
                  found: true,
                  path: fileInfo.relativePath,
                  needsMdExtension: !originalHadMdExtension,
                  reconstructed: false,
                };
              }
            }
          }
        } catch (error) {
          // Path resolution failed, continue
        }
      }
    }

    // Step 2: If exact path not found, search by filename across all directories
    const fileName = path.basename(cleanPath);
    const candidates = this.searchFileByName(fileName);

    if (candidates.length > 0) {
      // Filter candidates that actually exist on disk
      const existingCandidates = candidates.filter((candidate) =>
        this.fileExists(candidate.filePath),
      );

      if (existingCandidates.length > 0) {
        const bestMatch = this.findBestMatch(existingCandidates, fromDirectory);

        if (bestMatch) {
          return {
            found: true,
            path: bestMatch.relativePath,
            needsMdExtension: !originalHadMdExtension,
            reconstructed: true,
            originalPath: linkPath,
            suggestedPath: "/" + bestMatch.relativePath,
          };
        }
      }
    }

    // Step 3: Try fuzzy matching for common variations
    const fuzzyVariations = [
      fileName.replace(/-/g, "_"), // Replace hyphens with underscores
      fileName.replace(/_/g, "-"), // Replace underscores with hyphens
      fileName.toLowerCase(),
      fileName.replace(/\s+/g, "-").toLowerCase(),
    ];

    for (const fuzzyName of fuzzyVariations) {
      const fuzzyCandidates = this.searchFileByName(fuzzyName);
      if (fuzzyCandidates.length > 0) {
        const existingCandidates = fuzzyCandidates.filter((candidate) =>
          this.fileExists(candidate.filePath),
        );

        if (existingCandidates.length > 0) {
          const bestMatch = this.findBestMatch(
            existingCandidates,
            fromDirectory,
          );

          if (bestMatch) {
            return {
              found: true,
              path: bestMatch.relativePath,
              needsMdExtension: !originalHadMdExtension,
              reconstructed: true,
              originalPath: linkPath,
              suggestedPath: "/" + bestMatch.relativePath,
              fuzzyMatch: true,
            };
          }
        }
      }
    }

    return {
      found: false,
      path: null,
      needsMdExtension: false,
      reconstructed: false,
    };
  }

  /**
   * Review links in a single file
   */
  reviewFileLinks(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const relativePath = path.relative(this.docsRoot, filePath);
    const directory = path.dirname(relativePath);
    const links = this.findLinks(content);
    const fileIssues = [];
    const fileFixes = [];

    for (const link of links) {
      // Skip external links, anchor links, and mailto links
      if (!this.isInternalLink(link.linkPath)) {
        continue;
      }

      const target = this.findTargetFile(link.linkPath, directory);

      if (!target.found) {
        const issue = {
          type: "missing",
          file: relativePath,
          link: link.fullMatch,
          linkPath: link.linkPath,
          message: `Link points to non-existent file: ${link.linkPath}`,
        };
        fileIssues.push(issue);
        this.issues.push(issue);
      } else {
        // Check if the link needs to be fixed
        const correctPath = target.path;
        const currentPath = link.linkPath;

        // If the file was reconstructed (found in a different location), suggest the new path
        if (target.reconstructed) {
          const suggestedPath = target.suggestedPath || "/" + correctPath;
          const fixedLink = `[${link.linkText}](${suggestedPath})`;

          const fix = {
            type: target.fuzzyMatch
              ? "reconstruct_with_fuzzy_match"
              : "reconstruct_path",
            file: relativePath,
            originalLink: link.fullMatch,
            fixedLink: fixedLink,
            originalPath: currentPath,
            fixedPath: suggestedPath,
            startIndex: link.startIndex,
            endIndex: link.endIndex,
            message: target.fuzzyMatch
              ? `Found similar file with fuzzy matching: ${currentPath} → ${suggestedPath}`
              : `File found in different location: ${currentPath} → ${suggestedPath}`,
          };
          fileFixes.push(fix);
          this.fixes.push(fix);
        } else {
          // Apply standard fixes for correctly located files

          // Check if path needs .md extension
          if (target.needsMdExtension && !currentPath.endsWith(".md")) {
            const fixedPath = currentPath + ".md";
            const fixedLink = `[${link.linkText}](${fixedPath})`;

            const fix = {
              type: "add_md_extension",
              file: relativePath,
              originalLink: link.fullMatch,
              fixedLink: fixedLink,
              originalPath: currentPath,
              fixedPath: fixedPath,
              startIndex: link.startIndex,
              endIndex: link.endIndex,
            };
            fileFixes.push(fix);
            this.fixes.push(fix);
          }

          // Check if path needs to be converted to absolute path
          if (currentPath.startsWith("./") || currentPath.startsWith("../")) {
            const absolutePath = "/" + correctPath;
            const fixedLink = `[${link.linkText}](${absolutePath})`;

            const fix = {
              type: "convert_to_absolute",
              file: relativePath,
              originalLink: link.fullMatch,
              fixedLink: fixedLink,
              originalPath: currentPath,
              fixedPath: absolutePath,
              startIndex: link.startIndex,
              endIndex: link.endIndex,
            };
            fileFixes.push(fix);
            this.fixes.push(fix);
          }

          // Check if path needs to be converted to lowercase
          const lowercasePath = currentPath.toLowerCase();
          if (currentPath !== lowercasePath) {
            const fixedLink = `[${link.linkText}](${lowercasePath})`;

            const fix = {
              type: "convert_to_lowercase",
              file: relativePath,
              originalLink: link.fullMatch,
              fixedLink: fixedLink,
              originalPath: currentPath,
              fixedPath: lowercasePath,
              startIndex: link.startIndex,
              endIndex: link.endIndex,
            };
            fileFixes.push(fix);
            this.fixes.push(fix);
          }
        }
      }
    }

    return { issues: fileIssues, fixes: fileFixes };
  }

  /**
   * Review all internal links in the documentation
   */
  reviewAllLinks() {
    console.log("Starting internal link review...");

    this.buildFileMap();

    const files = this.findMarkdownFiles(this.docsRoot);
    let totalIssues = 0;
    let totalFixes = 0;
    const filesWithIssues = [];
    const filesWithFixes = [];

    console.log(`\nReviewing ${files.length} files...\n`);

    for (const file of files) {
      const relativePath = path.relative(this.docsRoot, file);
      console.log(`Reviewing: ${relativePath}`);

      const result = this.reviewFileLinks(file);
      totalIssues += result.issues.length;
      totalFixes += result.fixes.length;

      if (result.issues.length > 0) {
        filesWithIssues.push(relativePath);
        console.log(`  ⚠️  Found ${result.issues.length} issues`);
        result.issues.forEach((issue) => {
          console.log(`    - ${issue.message}`);
        });
      }

      if (result.fixes.length > 0) {
        filesWithFixes.push(relativePath);
        console.log(`  🔧 Found ${result.fixes.length} fixes needed`);
        result.fixes.forEach((fix) => {
          if (fix.message) {
            console.log(`    - ${fix.type}: ${fix.message}`);
          } else {
            console.log(
              `    - ${fix.type}: ${fix.originalPath} → ${fix.fixedPath}`,
            );
          }
        });
      }

      if (result.issues.length === 0 && result.fixes.length === 0) {
        console.log(`  ✅ No issues found`);
      }

      console.log();
    }

    console.log(`\n=== REVIEW SUMMARY ===`);
    console.log(`Files reviewed: ${files.length}`);
    console.log(`Files with issues: ${filesWithIssues.length}`);
    console.log(`Files needing fixes: ${filesWithFixes.length}`);
    console.log(`Total issues: ${totalIssues}`);
    console.log(`Total fixes needed: ${totalFixes}`);

    if (filesWithIssues.length > 0) {
      console.log(`\nFiles with issues:`);
      filesWithIssues.forEach((file) => console.log(`  - ${file}`));
    }

    if (filesWithFixes.length > 0) {
      console.log(`\nFiles needing fixes:`);
      filesWithFixes.forEach((file) => console.log(`  - ${file}`));
    }

    return { issues: this.issues, fixes: this.fixes };
  }

  /**
   * Apply fixes to files
   */
  applyFixes() {
    if (this.fixes.length === 0) {
      console.log("No fixes to apply.");
      return;
    }

    console.log(`\nApplying ${this.fixes.length} fixes...`);

    // Group fixes by file
    const fixesByFile = {};
    for (const fix of this.fixes) {
      if (!fixesByFile[fix.file]) {
        fixesByFile[fix.file] = [];
      }
      fixesByFile[fix.file].push(fix);
    }

    let appliedFixes = 0;

    for (const [file, fileFixes] of Object.entries(fixesByFile)) {
      const fullPath = path.join(this.docsRoot, file);
      let content = fs.readFileSync(fullPath, "utf-8");

      console.log(`\nFixing: ${file}`);

      // Sort fixes by start index in descending order to maintain correct indices
      fileFixes.sort((a, b) => b.startIndex - a.startIndex);

      for (const fix of fileFixes) {
        content =
          content.substring(0, fix.startIndex) +
          fix.fixedLink +
          content.substring(fix.endIndex);
        appliedFixes++;
        console.log(`  ✓ Applied: ${fix.originalLink} → ${fix.fixedLink}`);
      }

      // Write the updated content
      fs.writeFileSync(fullPath, content, "utf-8");
    }

    console.log(`\n=== FIXES APPLIED ===`);
    console.log(`Total fixes applied: ${appliedFixes}`);
    console.log(`Files modified: ${Object.keys(fixesByFile).length}`);
  }

  /**
   * Generate a detailed report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.findMarkdownFiles(this.docsRoot).length,
        totalIssues: this.issues.length,
        totalFixes: this.fixes.length,
      },
      issues: this.issues,
      fixes: this.fixes,
    };

    const reportPath = path.join(__dirname, "internal-links-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nDetailed report saved to: ${reportPath}`);

    return report;
  }
}

// Main execution
function main() {
  const docsRoot = path.join(__dirname, "..", "docs");
  const reviewer = new InternalLinkReviewer(docsRoot);

  const args = process.argv.slice(2);
  const applyFixes = args.includes("--apply") || args.includes("-a");
  const generateReport = args.includes("--report") || args.includes("-r");

  try {
    // Always run the review first
    const result = reviewer.reviewAllLinks();

    if (generateReport) {
      reviewer.generateReport();
    }

    if (applyFixes) {
      if (result.fixes.length > 0) {
        console.log(`\nProceeding to apply ${result.fixes.length} fixes...`);
        reviewer.applyFixes();
      } else {
        console.log("\nNo fixes to apply.");
      }
    } else if (result.fixes.length > 0) {
      console.log(
        `\nTo apply the fixes, run: node scripts/review-internal-links.js --apply`,
      );
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { InternalLinkReviewer };
