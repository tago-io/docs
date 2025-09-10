import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../docs/tagocore", import.meta.url).pathname;

const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (p.endsWith(".md") || p.endsWith(".mdx")) files.push(p);
  }
}
walk(root);

for (const file of files) {
  let src = readFileSync(file, "utf8");
  // Fix slug front matter: slug: /... -> slug: /tagocore/...
  src = src.replace(
    /(^|\n)slug:\s*\/(?!tagocore\b)/,
    (_m, p1) => `${p1}slug: /tagocore/`,
  );
  // Fix markdown links: ](/something) -> ](/docs/tagocore/something) when not already prefixed
  src = src.replace(/\]\(\/(?!tagocore\b)/g, "](/docs/tagocore/");
  writeFileSync(file, src, "utf8");
}

console.log(`Processed ${files.length} files`);
