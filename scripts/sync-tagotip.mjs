/**
 * Fetches TagoTiP.md and TagoTiPs.md from the tago-io/tagotip GitHub repo,
 * strips the license header, injects Docusaurus frontmatter, escapes curly
 * braces outside code blocks (so MDX doesn't parse them as JSX), rewrites
 * cross-references, and writes the results into docs/tagotip/.
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE_URL =
  "https://raw.githubusercontent.com/tago-io/tagotip/main/";
const REPO_URL = "https://github.com/tago-io/tagotip";

const FILES = [
  {
    remote: "TagoTiP.md",
    out: "docs/tagotip/specification.md",
    frontmatter: [
      "---",
      "sidebar_position: 2",
      "title: TagoTiP Specification",
      "---",
    ].join("\n"),
  },
  {
    remote: "TagoTiPs.md",
    out: "docs/tagotip/tagotips-specification.md",
    frontmatter: [
      "---",
      "sidebar_position: 3",
      "title: TagoTiPs Specification",
      "---",
    ].join("\n"),
  },
];

function stripLicenseHeader(text) {
  // Remove the leading HTML comment block (Apache license) and any blank line after it
  return text.replace(/^<!--[\s\S]*?-->\n?\n?/, "");
}

function escapeBraces(text) {
  // Escape { and } outside of fenced code blocks and inline code so MDX
  // doesn't interpret them as JSX expressions.
  const parts = [];
  // Split on fenced code blocks (``` ... ```) preserving them intact
  const fenceRe = /(```[\s\S]*?```)/g;
  let last = 0;
  for (const match of text.matchAll(fenceRe)) {
    // Process the text before this code block
    parts.push(escapeInline(text.slice(last, match.index)));
    // Keep the code block as-is
    parts.push(match[0]);
    last = match.index + match[0].length;
  }
  // Process remaining text after the last code block
  parts.push(escapeInline(text.slice(last)));
  return parts.join("");
}

function escapeInline(text) {
  // Within non-code-block text, preserve inline code (`...`) and escape
  // braces only in the surrounding prose.
  const parts = [];
  const inlineRe = /(`[^`]*`)/g;
  let last = 0;
  for (const match of text.matchAll(inlineRe)) {
    parts.push(
      text.slice(last, match.index).replace(/\{/g, "\\{").replace(/\}/g, "\\}"),
    );
    parts.push(match[0]); // keep inline code as-is
    last = match.index + match[0].length;
  }
  parts.push(
    text.slice(last).replace(/\{/g, "\\{").replace(/\}/g, "\\}"),
  );
  return parts.join("");
}

function rewriteLinks(text) {
  // Cross-references between the two spec files
  text = text.replace(
    /\(TagoTiP\.md(#[^)]+)?\)/g,
    (_, anchor) =>
      `(/docs/tagotip/specification${anchor || ""})`,
  );
  text = text.replace(
    /\(TagoTiPs\.md(#[^)]+)?\)/g,
    (_, anchor) =>
      `(/docs/tagotip/tagotips-specification${anchor || ""})`,
  );

  // LICENSE / NOTICE → GitHub repo URLs
  text = text.replace(/\(LICENSE\)/g, `(${REPO_URL}/blob/main/LICENSE)`);
  text = text.replace(/\(NOTICE\)/g, `(${REPO_URL}/blob/main/NOTICE)`);

  return text;
}

async function fetchFile(name) {
  const url = `${BASE_URL}${name}`;
  console.log(`  Fetching ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} fetching ${url}`);
  }
  return res.text();
}

async function main() {
  console.log("sync-tagotip: fetching specs from GitHub...");

  for (const file of FILES) {
    const outPath = join(ROOT, file.out);
    try {
      const raw = await fetchFile(file.remote);
      const stripped = stripLicenseHeader(raw);
      const escaped = escapeBraces(stripped);
      const rewritten = rewriteLinks(escaped);
      const content = `${file.frontmatter}\n\n${rewritten}`;

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, content);
      console.log(`  Wrote ${file.out}`);
    } catch (err) {
      if (existsSync(outPath)) {
        console.warn(
          `  Warning: failed to fetch ${file.remote} (${err.message}), using existing file`,
        );
      } else {
        console.error(
          `  Error: failed to fetch ${file.remote} and no cached file exists`,
        );
        process.exit(1);
      }
    }
  }

  console.log("sync-tagotip: done.");
}

main();
