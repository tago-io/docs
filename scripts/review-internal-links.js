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
   * Find the target file for a given link path
   */
  findTargetFile(linkPath, fromDirectory) {
    // Remove .md extension if present for lookup
    const cleanPath = linkPath.replace(/\.md$/, "");

    // Try different variations of the path
    const variations = [
      linkPath, // Original path with .md
      cleanPath, // Without .md
      cleanPath + ".md", // Ensure .md
      path.basename(cleanPath), // Just filename
      path.basename(cleanPath) + ".md", // Just filename with .md
    ];

    for (const variation of variations) {
      // First try exact match by relative path
      if (this.allFiles.has(variation)) {
        const fileInfo = this.allFiles.get(variation);
        return {
          found: true,
          path: fileInfo.relativePath,
          needsMdExtension: !variation.endsWith(".md"),
        };
      }

      // Try to find by resolving relative path
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
              return {
                found: true,
                path: fileInfo.relativePath,
                needsMdExtension: !fileInfo.relativePath.endsWith(".md"),
              };
            }
          }
        } catch (error) {
          // Path resolution failed, continue to next variation
        }
      }
    }

    return { found: false, path: null, needsMdExtension: false };
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
          console.log(
            `    - ${fix.type}: ${fix.originalPath} → ${fix.fixedPath}`,
          );
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
