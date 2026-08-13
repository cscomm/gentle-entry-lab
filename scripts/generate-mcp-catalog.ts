// Generates src/lib/mcp/catalog.generated.ts from src/data/products.ts,
// stripping image asset imports so the file can be bundled into the Deno
// MCP edge function. Run before `vite build` (see package.json scripts).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const src = resolve("src/data/products.ts");
const out = resolve("src/lib/mcp/catalog.generated.ts");

const text = readFileSync(src, "utf8");

// Collect image import identifiers, replace their imports with string constants
// pointing at the source asset path.
const importRe = /^import\s+(\w+)\s+from\s+"(@\/assets\/[^"]+)";?\s*$/gm;
const idents: { name: string; path: string; url?: string }[] = [];
let stripped = text.replace(importRe, (_m, name: string, path: string) => {
  idents.push({ name, path });
  const urlPath = path.replace("@/assets/", "/assets/");
  // For .asset.json pointer imports, emit an object with a `url` field so
  // downstream code that reads `.url` still typechecks and runs.
  if (path.endsWith(".asset.json")) {
    const assetPath = path.replace("@/assets/", "src/assets/");
    if (existsSync(assetPath)) {
      const assetJson = JSON.parse(readFileSync(assetPath, "utf8")) as { url: string };
      idents[idents.length - 1].url = assetJson.url;
      return `const ${name} = { url: ${JSON.stringify(assetJson.url)} } as const;`;
    }
    return `const ${name} = { url: ${JSON.stringify(urlPath)} } as const;`;
  }
  return `const ${name} = ${JSON.stringify(urlPath)};`;
});

// Also resolve `const X = importedAsset.url` assignments so the derived
// identifier stays a plain string in the generated catalog.
const derivedUrlRe = /^const\s+(\w+)\s*=\s*(\w+)\.url\s*;?\s*$/gm;
stripped = stripped.replace(derivedUrlRe, (_m, derivedName: string, srcName: string) => {
  const stub = idents.find(i => i.name === srcName);
  if (stub && stub.path.endsWith(".asset.json")) {
    if (stub.url) {
      return `const ${derivedName} = ${JSON.stringify(stub.url)};`;
    }
    return `const ${derivedName} = ${JSON.stringify(stub.path.replace("@/assets/", "/assets/"))};`;
  }
  return _m;
});

const banner = `// AUTO-GENERATED from src/data/products.ts by scripts/generate-mcp-catalog.ts.
// Do not edit by hand. Regenerated before every build.\n\n`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, banner + stripped, "utf8");
console.log(`Wrote ${out} (${idents.length} asset refs stubbed)`);
