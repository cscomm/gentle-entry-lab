// Centralized helper to enforce a consistent, SEO-friendly alt prefix
// for every image on the site.
//
// Usage:
//   <img src={...} alt={silicaAlt(product.name)} />
//
// Rules:
//  - Always returns a non-empty alt string
//  - Always starts with "실리카 " (prefix)
//  - Avoids double-prefixing if the input already starts with "실리카"
//  - Trims known brand tokens ("SiLiCA", "SILICA") so we don't get
//    "실리카 SiLiCA 생산시설" style duplicates
export function silicaAlt(text?: string | null): string {
  const fallback = "제품 이미지";
  let s = (text ?? "").toString().trim();
  if (!s) s = fallback;

  // Strip leading brand tokens
  s = s.replace(/^(SiLiCA|SILICA|Silica|silica)\s*[-·:|]?\s*/i, "").trim();
  if (!s) s = fallback;

  // Avoid double prefix
  if (/^실리카(\s|$)/.test(s)) return s;

  return `실리카 ${s}`;
}
