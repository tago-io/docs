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

let changed = 0;
for (const file of files) {
  let src = readFileSync(file, "utf8");
  const before = src;
  src = src.replace(/src="\/img\//g, 'src="/docs_imagem/tagocore/');
  if (src !== before) {
    writeFileSync(file, src, "utf8");
    changed++;
  }
}
console.log(`Updated ${changed} files`);
