// Old product addresses that search engines still remember, mapped to today's pages.
// Pure module: used by the app (client-side forward) and by scripts/prerender.ts
// (static forward pages), so keep it free of "@/" imports.

const LANGS = ["ko", "en", "ja"] as const;

/** Old slug → current slug, for products that were renamed rather than code-renamed. */
export const LEGACY_PRODUCT_ALIASES: Record<string, string> = {
  "silica-gel-type-a": "silica-gel-sl-des-01",
  "silica-gel-type-b": "silica-gel-sl-des-05",
  "fused-silica-block": "fused-silica-a-grade",
  "fused-silica-sand": "fused-silica-b-grade",
  "fused-silica-powder": "fused-silica-c-grade",
};

/** Category pages that are their own app pages (not product entries), under /products/. */
export const CATEGORY_ROUTE_SLUGS = ["silica-gel", "precipitated-silica", "fumed-silica", "silica-sand", "silica-powder"];

/** First path segments that are real pages, never products. */
const RESERVED = new Set([
  "products", "applications", "about", "terms", "privacy", "guide", "board", "unsubscribe",
  "admin", "login", "signup", "account", "reset-password",
]);

/** Current slug for an old one, or null when `slug` is current or unknown. */
export function legacyProductSlug(slug: string, exists: (s: string) => boolean): string | null {
  const s = slug.toLowerCase();
  if (exists(s)) return s === slug ? null : s;
  const alias = LEGACY_PRODUCT_ALIASES[s];
  if (alias && exists(alias)) return alias;
  // Model codes were renamed from SL- to SN- (e.g. precipitated-silica-sl-ct-601).
  const renamed = s.replace(/(^|-)sl-/, "$1sn-");
  if (renamed !== s && exists(renamed)) return renamed;
  return null;
}

/**
 * Where an old address should go, or null if it is not a known old address.
 * Handles `/{lang}/products/{old-slug}/` and `/{lang}/{slug}/` (missing "/products").
 */
export function resolveLegacyPath(pathname: string, exists: (s: string) => boolean): string | null {
  const m = pathname.match(/^\/(ko|en|ja)\/(products\/)?([^/]+)\/?$/);
  if (!m) return null;
  const [, lang, productsPrefix, seg] = m;
  if (!productsPrefix && RESERVED.has(seg)) return null;
  const target = exists(seg.toLowerCase()) ? seg.toLowerCase() : legacyProductSlug(seg, exists);
  if (!target) return null;
  if (productsPrefix && target === seg) return null;
  return `/${lang}/products/${target}/`;
}

/**
 * Every old address worth a static forward page.
 * `slugs`: current product + category slugs. `routePaths`: every public page path without language
 * (e.g. "/products/silica-gel"), used to forward old addresses that had no language prefix.
 */
export function legacyForwardPaths(slugs: string[], routePaths: string[] = []): { from: string; to: string }[] {
  const known = new Set(slugs);
  const exists = (s: string) => known.has(s);
  const out: { from: string; to: string }[] = [];
  const seen = new Set<string>();
  const add = (from: string, to: string) => {
    if (seen.has(from)) return;
    seen.add(from);
    out.push({ from, to });
  };
  // Old product slug → current slug (aliases and SL- → SN- model codes).
  const renames: [string, string][] = Object.entries(LEGACY_PRODUCT_ALIASES).filter(([, cur]) => exists(cur));
  for (const slug of slugs) {
    const old = slug.replace(/(^|-)sn-/, "$1sl-");
    if (old !== slug && !exists(old)) renames.push([old, slug]);
  }
  for (const lang of LANGS) {
    for (const [old, cur] of renames) {
      add(`/${lang}/products/${old}/`, `/${lang}/products/${cur}/`);
      add(`/${lang}/${old}/`, `/${lang}/products/${cur}/`);
    }
    // Old pages lived directly under the language prefix (e.g. /ja/fused-silica-a-grade/).
    for (const slug of slugs) if (!RESERVED.has(slug)) add(`/${lang}/${slug}/`, `/${lang}/products/${slug}/`);
  }
  // Old addresses without a language prefix → Korean (the default language).
  for (const path of routePaths) if (path !== "/") add(`${path}/`, `/ko${path}/`);
  for (const [old, cur] of renames) add(`/products/${old}/`, `/ko/products/${cur}/`);
  return out;
}
