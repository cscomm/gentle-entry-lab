// Generates src/lib/mcp/catalog.generated.ts from src/data/products.ts,
// stripping image asset imports so the file can be bundled into the Deno
// MCP edge function. Run before `vite build` (see package.json scripts).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const src = resolve("src/data/products.ts");
const out = resolve("src/lib/mcp/catalog.generated.ts");

const text = readFileSync(src, "utf8");

// Collect image import identifiers, replace their imports with string constants
// pointing at the source asset path.
const importRe = /^import\s+(\w+)\s+from\s+"(@\/assets\/[^"]+)";?\s*$/gm;
const idents: { name: string; path: string }[] = [];
let stripped = text.replace(importRe, (_m, name: string, path: string) => {
  idents.push({ name, path });
  return `const ${name} = ${JSON.stringify(path.replace("@/assets/", "/assets/"))};`;
});

const banner = `// AUTO-GENERATED from src/data/products.ts by scripts/generate-mcp-catalog.ts.
// Do not edit by hand. Regenerated before every build.\n\n`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, banner + stripped, "utf8");
console.log(`Wrote ${out} (${idents.length} asset refs stubbed)`);
