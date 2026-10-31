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
  const target = exists(seg.toLowerCase()) ? seg.toLowerCase() : legacyProductSlug(seg, exists);
  if (!target) return null;
  if (productsPrefix && target === seg) return null;
  return `/${lang}/products/${target}/`;
}

/** Every old address worth a static forward page, given the current slugs. */
export function legacyForwardPaths(slugs: string[]): { from: string; to: string }[] {
  const exists = (s: string) => slugs.includes(s);
  const out: { from: string; to: string }[] = [];
  const add = (from: string, to: string) => out.push({ from, to });
  for (const lang of LANGS) {
    for (const [old, cur] of Object.entries(LEGACY_PRODUCT_ALIASES)) {
      if (!exists(cur)) continue;
      add(`/${lang}/products/${old}/`, `/${lang}/products/${cur}/`);
      add(`/${lang}/${old}/`, `/${lang}/products/${cur}/`);
    }
    for (const slug of slugs) {
      const old = slug.replace(/(^|-)sn-/, "$1sl-");
      if (old !== slug && !exists(old)) add(`/${lang}/products/${old}/`, `/${lang}/products/${slug}/`);
      // Old silica gel pages lived directly under the language prefix.
      if (slug.startsWith("silica-gel-")) add(`/${lang}/${slug}/`, `/${lang}/products/${slug}/`);
    }
  }
  return out;
}
