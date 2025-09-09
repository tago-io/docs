#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

class LinkFixer {
  constructor(docsRoot) {
    this.docsRoot = docsRoot;
    this.allFiles = new Map();
    this.linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
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
   * Check if a link is relative (starts with ./ or ../)
   */
  isRelativeLink(linkPath) {
    return linkPath.startsWith("./") || linkPath.startsWith("../");
  }

  /**
   * Check if a link is an external link (starts with http:// or https://)
   */
  isExternalLink(linkPath) {
    return linkPath.startsWith("http://") || linkPath.startsWith("https://");
  }

  /**
   * Resolve a relative path to an absolute path
   */
  resolveRelativePath(relativePath, fromDirectory) {
    const resolved = path.resolve(fromDirectory, relativePath);
    const relativeToDocs = path.relative(this.docsRoot, resolved);
    return "/" + relativeToDocs.replace(/\\/g, "/");
  }

  /**
   * Find the correct file for a given path
   */
  findTargetFile(targetPath, fromDirectory) {
    // Remove .md extension if present
    const cleanPath = targetPath.replace(/\.md$/, "");

    // Try different variations of the path
    const variations = [
      cleanPath,
      cleanPath + ".md",
      path.basename(cleanPath),
      path.basename(cleanPath) + ".md",
    ];

    for (const variation of variations) {
      // First try exact match
      if (this.allFiles.has(variation)) {
        const fileInfo = this.allFiles.get(variation);
        return "/" + fileInfo.relativePath.replace(/\\/g, "/");
      }

      // Try to find by resolving relative path
      if (
        variation.includes("/") ||
        variation.startsWith("../") ||
        variation.startsWith("./")
      ) {
        try {
          const resolved = this.resolveRelativePath(variation, fromDirectory);
          const resolvedPath = resolved.replace(/^\//, "");

          // Check if this resolved path exists in our file map
          for (const [fileName, fileInfo] of this.allFiles) {
            if (
              fileInfo.relativePath === resolvedPath ||
              fileInfo.relativePath === resolvedPath + ".md" ||
              fileInfo.relativePath.replace(/\.md$/, "") === resolvedPath
            ) {
              return "/" + fileInfo.relativePath.replace(/\\/g, "/");
            }
          }
        } catch (error) {
          // Path resolution failed, continue to next variation
        }
      }
    }

    return null;
  }

  /**
   * Fix relative links in a single file
   */
  fixFileLinks(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const directory = path.dirname(path.relative(this.docsRoot, filePath));
    const links = this.findLinks(content);
    let fixed = 0;
    const errors = [];
    let newContent = content;

    // Process links in reverse order to maintain correct indices
    for (let i = links.length - 1; i >= 0; i--) {
      const link = links[i];

      // Skip external links
      if (this.isExternalLink(link.linkPath)) {
        continue;
      }

      // Skip absolute links that already start with /docs
      if (link.linkPath.startsWith("/docs")) {
        continue;
      }

      // Only process relative links
      if (this.isRelativeLink(link.linkPath)) {
        const targetPath = this.findTargetFile(link.linkPath, directory);

        if (targetPath) {
          const newLink = `[${link.linkText}](${targetPath})`;
          newContent =
            newContent.substring(0, link.startIndex) +
            newLink +
            newContent.substring(link.endIndex);
          fixed++;
          console.log(`  ✓ Fixed: ${link.fullMatch} → ${newLink}`);
        } else {
          const error = `  ✗ Could not resolve: ${link.fullMatch} in ${path.relative(this.docsRoot, filePath)}`;
          errors.push(error);
          console.log(error);
        }
      }
    }

    // Write the file if changes were made
    if (fixed > 0) {
      fs.writeFileSync(filePath, newContent, "utf-8");
    }

    return { fixed, errors };
  }

  /**
   * Fix all relative links in the documentation
   */
  fixAllLinks() {
    console.log("Starting link fixing process...");

    this.buildFileMap();

    const files = this.findMarkdownFiles(this.docsRoot);
    let totalFixed = 0;
    const allErrors = [];
    const processedFiles = [];

    console.log(`\nProcessing ${files.length} files...\n`);

    for (const file of files) {
      const relativePath = path.relative(this.docsRoot, file);
      console.log(`Processing: ${relativePath}`);

      const result = this.fixFileLinks(file);
      totalFixed += result.fixed;
      allErrors.push(...result.errors);

      if (result.fixed > 0) {
        processedFiles.push(relativePath);
      }
    }

    console.log(`\n=== SUMMARY ===`);
    console.log(`Files processed: ${files.length}`);
    console.log(`Files modified: ${processedFiles.length}`);
    console.log(`Total links fixed: ${totalFixed}`);
    console.log(`Total errors: ${allErrors.length}`);

    if (processedFiles.length > 0) {
      console.log(`\nModified files:`);
      processedFiles.forEach((file) => console.log(`  - ${file}`));
    }

    if (allErrors.length > 0) {
      console.log(`\nErrors encountered:`);
      allErrors.forEach((error) => console.log(error));
    }
  }

  /**
   * Dry run - show what would be fixed without making changes
   */
  dryRun() {
    console.log("Starting dry run...");

    this.buildFileMap();

    const files = this.findMarkdownFiles(this.docsRoot);
    let totalWouldFix = 0;
    const allErrors = [];

    console.log(`\nAnalyzing ${files.length} files...\n`);

    for (const file of files) {
      const relativePath = path.relative(this.docsRoot, file);
      const content = fs.readFileSync(file, "utf-8");
      const directory = path.dirname(relativePath);
      const links = this.findLinks(content);
      let fileWouldFix = 0;

      console.log(`Analyzing: ${relativePath}`);

      for (const link of links) {
        if (
          this.isExternalLink(link.linkPath) ||
          link.linkPath.startsWith("/docs")
        ) {
          continue;
        }

        if (this.isRelativeLink(link.linkPath)) {
          const targetPath = this.findTargetFile(link.linkPath, directory);

          if (targetPath) {
            const newLink = `[${link.linkText}](${targetPath})`;
            console.log(`  Would fix: ${link.fullMatch} → ${newLink}`);
            fileWouldFix++;
            totalWouldFix++;
          } else {
            const error = `  ✗ Could not resolve: ${link.fullMatch}`;
            allErrors.push(error);
            console.log(error);
          }
        }
      }

      if (fileWouldFix > 0) {
        console.log(`  → Would fix ${fileWouldFix} links in this file\n`);
      } else {
        console.log(`  → No changes needed\n`);
      }
    }

    console.log(`\n=== DRY RUN SUMMARY ===`);
    console.log(`Files analyzed: ${files.length}`);
    console.log(`Total links that would be fixed: ${totalWouldFix}`);
    console.log(`Total errors: ${allErrors.length}`);

    if (allErrors.length > 0) {
      console.log(`\nErrors that would prevent fixing:`);
      allErrors.forEach((error) => console.log(error));
    }
  }
}

// Main execution
function main() {
  const docsRoot = path.join(__dirname, "..", "docs");
  const fixer = new LinkFixer(docsRoot);

  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run") || args.includes("-d");

  try {
    if (isDryRun) {
      fixer.dryRun();
    } else {
      fixer.fixAllLinks();
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { LinkFixer };
