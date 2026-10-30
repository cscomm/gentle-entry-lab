// Language-aware static HTML content for scripts/prerender.ts.
// Product pages are rendered from the product data (via the MCP catalog that
// scripts/generate-mcp-catalog.ts builds from src/data/products.ts), so every
// language gets its own name, description, features and specs in the HTML
// source — crawlers that don't run JavaScript (Naver, social bots) read it.
import { readFileSync } from "fs";
import { resolve } from "path";
import { productCatalog } from "../src/lib/mcp/catalog.generated";
import { faqItems, FAQ_INTRO } from "../src/data/faq";

export type LangCode = "ko" | "en" | "ja";
export type CatalogProduct = (typeof productCatalog)[number];

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const HANGUL = /[\uAC00-\uD7A3]/;

/** Pick the text for a language; never leak Korean into en/ja pages. */
export function loc(lang: LangCode, ko?: string, en?: string, ja?: string): string {
  if (lang === "ko") return ko ?? "";
  const own = lang === "en" ? en : ja;
  if (own) return own;
  if (lang === "ja" && en) return en;
  return ko && !HANGUL.test(ko) ? ko : "";
}

const href = (lang: LangCode, path: string) => `/${lang}${path === "/" ? "" : path.replace(/\/$/, "")}/`;

// ── Application name translations (kept in the site's language dictionary) ──
const appDict = (() => {
  const map = new Map<string, { en?: string; ja?: string }>();
  try {
    const text = readFileSync(resolve("src/contexts/LanguageContext.tsx"), "utf8");
    const re = /"app\.([^"]+)":\s*\{\s*ko:\s*"[^"]*",\s*en:\s*"([^"]*)"(?:,\s*ja:\s*"([^"]*)")?/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) map.set(m[1], { en: m[2], ja: m[3] });
  } catch {
    /* ignore — applications fall back to language-neutral names */
  }
  return map;
})();
const appName = (lang: LangCode, ko: string) => {
  const t = appDict.get(ko);
  return loc(lang, ko, t?.en, t?.ja);
};

// ── Visibility (admin 게시 toggles) ──
const CAT_TO_PAGE: Record<string, string> = {
  quartz: "high-purity-quartz",
  "silica-gel": "silica-gel",
  precipitated: "precipitated-silica",
  fumed: "fumed-silica",
  sand: "silica-sand",
  "sand-powder": "silica-powder",
  "advanced-series": "applied-silica-materials",
};
export const groupKeyOf = (p: CatalogProduct) =>
  p.isCategoryIndex ? p.slug : p.parentSlug ?? CAT_TO_PAGE[p.category ?? "quartz"] ?? "high-purity-quartz";

let hidden = new Set<string>();
export const setHiddenSlugs = (s: Set<string>) => {
  hidden = s;
};
export const isHidden = (p: CatalogProduct) => hidden.has(p.slug) || hidden.has(groupKeyOf(p));
export const isHiddenSlug = (slug: string) => {
  const p = catalogBySlug.get(slug);
  return p ? isHidden(p) : hidden.has(slug);
};

export const catalogBySlug = new Map<string, CatalogProduct>();
for (const p of productCatalog) if (!catalogBySlug.has(p.slug)) catalogBySlug.set(p.slug, p);
export const catalogSlugs = [...catalogBySlug.keys()];

export const productName = (p: CatalogProduct, lang: LangCode) =>
  loc(lang, p.name, p.enName, p.jaName) || p.enName || p.name;

// ── Shared labels ──
const L = {
  home: { ko: "홈", en: "Home", ja: "ホーム" },
  products: { ko: "제품", en: "Products", ja: "製品" },
  applications: { ko: "응용 분야", en: "Applications", ja: "用途" },
  guide: { ko: "사용가이드", en: "User Guide", ja: "ご利用ガイド" },
  features: { ko: "주요 특징", en: "Key Features", ja: "主な特長" },
  specs: { ko: "기술 사양", en: "Technical Specifications", ja: "技術仕様" },
  item: { ko: "항목", en: "Item", ja: "項目" },
  value: { ko: "값", en: "Value", ja: "値" },
  note: { ko: "비고", en: "Note", ja: "備考" },
  lineup: { ko: "제품 라인업", en: "Product Lineup", ja: "製品ラインアップ" },
  apps: { ko: "주요 응용 분야", en: "Main Applications", ja: "主な用途" },
  category: { ko: "상위 카테고리", en: "Parent Category", ja: "上位カテゴリ" },
  custom: {
    ko: "입도·순도·표면처리·포장 등 고객 요구 사양에 맞춘 맞춤 생산·공급이 가능합니다. 샘플·TDS·견적은 문의해 주세요.",
    en: "Particle size, purity, surface treatment and packaging can be customized to your specification. Contact us for samples, TDS and quotations.",
    ja: "粒度・純度・表面処理・梱包などお客様の仕様に合わせたカスタム生産・供給が可能です。サンプル・TDS・お見積りはお問い合わせください。",
  },
  menu: { ko: "사이트 메뉴", en: "Site Menu", ja: "サイトメニュー" },
  productMenu: { ko: "제품 카테고리", en: "Product Categories", ja: "製品カテゴリ" },
  appMenu: { ko: "응용 분야", en: "Applications", ja: "用途" },
  related: { ko: "제품 목록", en: "Products in this category", ja: "このカテゴリの製品" },
  noscript: {
    ko: "이 사이트의 모든 기능을 이용하시려면 JavaScript를 활성화해 주세요.",
    en: "Please enable JavaScript to use all features of this site.",
    ja: "本サイトのすべての機能をご利用いただくには JavaScript を有効にしてください。",
  },
  footer: {
    ko: "SiLiCA · 주식회사 비에이알 · 경기도 화성시 마도면 마도공단로 202 1F · 전화 070-4517-0773",
    en: "SiLiCA · BAR Co., Ltd. · 1F, 202 Madogongdan-ro, Mado-myeon, Hwaseong-si, Gyeonggi-do, Republic of Korea · Tel +82-70-4517-0773",
    ja: "SiLiCA · 株式会社BAR · 韓国 京畿道 華城市 麻道面 麻道工団路 202 1F · TEL +82-70-4517-0773",
  },
} satisfies Record<string, Record<LangCode, string>>;
export const label = (k: keyof typeof L, lang: LangCode) => L[k][lang];

// Same order as the site header product menu.
const PRODUCT_MENU: { path: string; ko: string; en: string; ja: string }[] = [
  { path: "/products/fused-silica", ko: "용융실리카", en: "Fused Silica", ja: "溶融シリカ" },
  { path: "/products/crystalline-silica", ko: "쿼츠 · 결정질 실리카", en: "Quartz · Crystalline Silica", ja: "クォーツ・結晶質シリカ" },
  { path: "/products/synthetic-silica", ko: "화학합성 실리카", en: "Chemically Synthesized Silica", ja: "化学合成シリカ" },
  { path: "/products/surface-modified-silica-powder", ko: "표면개질 실리카 분말", en: "Surface-Modified Silica Powder", ja: "表面改質シリカ粉末" },
  { path: "/products/spherical-silica-powder", ko: "구상 실리카 분말", en: "Spherical Silica Powder", ja: "球状シリカ粉末" },
  { path: "/products/round-corner-silica-powder", ko: "모서리 라운드 실리카 분말", en: "Round Corner Silica Powder", ja: "丸角シリカ粉末" },
  { path: "/products/angular-silica-powder", ko: "각상 실리카 분말", en: "Angular Silica Powder", ja: "角形シリカ粉末" },
  { path: "/products/low-radiation-silica-powder", ko: "저방사선 실리카 분말", en: "Low-Alpha Silica Powder", ja: "低α線シリカ粉末" },
  { path: "/products/lead-free-glass-powder", ko: "무연유리분말", en: "Lead-Free Glass Powder", ja: "無鉛ガラス粉末" },
  { path: "/products/precipitated-silica", ko: "침전 실리카", en: "Precipitated Silica", ja: "沈降シリカ" },
  { path: "/products/fumed-silica", ko: "흄드 실리카", en: "Fumed Silica", ja: "ヒュームドシリカ" },
  { path: "/products/silica-gel", ko: "실리카겔", en: "Silica Gel", ja: "シリカゲル" },
  { path: "/products/silica-sol", ko: "실리카졸", en: "Silica Sol (Colloidal Silica)", ja: "シリカゾル" },
  { path: "/products/silica-sand", ko: "규사", en: "Silica Sand", ja: "珪砂" },
  { path: "/products/silica-powder", ko: "규사분말", en: "Silica Powder", ja: "珪砂粉末" },
  { path: "/products/high-purity-quartz", ko: "천연 고순도규석", en: "Natural High-Purity Quartz", ja: "天然高純度石英" },
  { path: "/products/applied-silica-materials", ko: "실리카 응용 · 연관 소재", en: "Applied & Related Silica Materials", ja: "シリカ応用・関連素材" },
  { path: "/products/all", ko: "전체 제품", en: "All Products", ja: "全製品" },
];
const APP_MENU: { path: string; ko: string; en: string; ja: string }[] = [
  { path: "/guide/finder", ko: "나에게 적합한 제품은?", en: "Find My Product", ja: "私に合う製品は？" },
  { path: "/applications/fused-silica", ko: "용융실리카", en: "Fused Silica", ja: "溶融シリカ" },
  { path: "/applications/quartz", ko: "쿼츠 · 결정질 실리카", en: "Quartz · Crystalline Silica", ja: "クォーツ・結晶質シリカ" },
  { path: "/applications/precipitated-silica", ko: "침전/침강 실리카", en: "Precipitated Silica", ja: "沈降/沈殿シリカ" },
  { path: "/applications/fumed-silica", ko: "흄드 실리카", en: "Fumed Silica", ja: "ヒュームドシリカ" },
  { path: "/applications/silica-gel", ko: "실리카겔", en: "Silica Gel", ja: "シリカゲル" },
  { path: "/applications/silica-sol", ko: "콜로이달 실리카 시리즈", en: "Colloidal Silica Series", ja: "コロイダルシリカ シリーズ" },
  { path: "/applications/silica-sand", ko: "규사 · 규사분말", en: "Silica Sand & Powder", ja: "珪砂・珪砂粉末" },
  { path: "/applications/silica-powder", ko: "실리카 분말", en: "Silica Powder", ja: "シリカパウダー" },
];
const OTHER_MENU: { path: string; ko: string; en: string; ja: string }[] = [
  { path: "/", ko: "홈", en: "Home", ja: "ホーム" },
  { path: "/about", ko: "회사소개", en: "About Us", ja: "会社案内" },
  { path: "/guide/faq", ko: "FAQ", en: "FAQ", ja: "FAQ" },
  { path: "/board", ko: "게시판", en: "Board", ja: "掲示板" },
];

const navList = (lang: LangCode, items: typeof PRODUCT_MENU) =>
  `<ul>${items
    .filter((i) => !i.path.startsWith("/products/") || !isHiddenSlug(i.path.slice(10)))
    .map((i) => `<li><a href="${href(lang, i.path)}">${esc(i[lang])}</a></li>`)
    .join("")}</ul>`;

/** Localized site menu so every page links to the main categories in its own language. */
export const siteNav = (lang: LangCode) => `
        <nav aria-label="${esc(label("menu", lang))}">
          <h2>${esc(label("productMenu", lang))}</h2>${navList(lang, PRODUCT_MENU)}
          <h2>${esc(label("appMenu", lang))}</h2>${navList(lang, APP_MENU)}
          ${navList(lang, OTHER_MENU)}
        </nav>`;

/** Short label for a page path, used in breadcrumbs. */
export function pageLabel(path: string, lang: LangCode): string {
  const menu = [...PRODUCT_MENU, ...APP_MENU, ...OTHER_MENU].find((i) => i.path === path);
  if (menu) return menu[lang];
  const p = path.startsWith("/products/") ? catalogBySlug.get(path.slice(10)) : undefined;
  return p ? productName(p, lang) : "";
}

const paragraphs = (text: string) =>
  text
    .split(/\n{2,}|\n/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => `<p>${esc(t)}</p>`)
    .join("");

/** Breadcrumb trail (path list) for a route, without the current page. */
export function breadcrumbTrail(path: string): string[] {
  if (path === "/") return [];
  const trail = ["/"];
  if (path.startsWith("/products/")) {
    const p = catalogBySlug.get(path.slice(10));
    if (p?.parentSlug && catalogBySlug.has(p.parentSlug)) trail.push(`/products/${p.parentSlug}`);
    else if (p && !p.isCategoryIndex) {
      const page = CAT_TO_PAGE[p.category ?? ""];
      if (page && `/products/${page}` !== path) trail.push(`/products/${page}`);
    }
  }
  return trail;
}

export const breadcrumbHtml = (path: string, lang: LangCode, current: string) => {
  const trail = breadcrumbTrail(path);
  if (!trail.length) return "";
  const parts = trail.map((p) => `<a href="${href(lang, p)}">${esc(pageLabel(p, lang) || label("home", lang))}</a>`);
  return `<nav aria-label="breadcrumb"><p>${parts.join(" › ")} › ${esc(current)}</p></nav>`;
};

/** Full localized body for a product or product-category page. */
export function productBody(p: CatalogProduct, lang: LangCode): string {
  const out: string[] = [];
  const tagline = loc(lang, p.tagline, p.enTagline, p.jaTagline);
  if (tagline) out.push(`<p><strong>${esc(tagline)}</strong></p>`);
  const desc = loc(lang, p.description, p.enDescription, p.jaDescription);
  if (desc) out.push(paragraphs(desc));

  const features = (p.features ?? [])
    .map((f) => ({ t: loc(lang, f.title, f.enTitle, f.jaTitle), d: loc(lang, f.desc, f.enDesc, f.jaDesc) }))
    .filter((f) => f.t || f.d);
  if (features.length) {
    out.push(`<h2>${esc(label("features", lang))}</h2><ul>${features
      .map((f) => `<li>${f.t ? `<strong>${esc(f.t)}</strong>` : ""}${f.t && f.d ? " — " : ""}${esc(f.d)}</li>`)
      .join("")}</ul>`);
  }

  const specs = (p.specs ?? [])
    .map((s) => ({
      l: loc(lang, s.label, s.enLabel, s.jaLabel),
      v: loc(lang, s.value, s.enValue, s.jaValue),
      n: loc(lang, s.note, s.enNote, s.jaNote),
    }))
    .filter((s) => s.l && s.v);
  if (specs.length) {
    const withNote = specs.some((s) => s.n);
    out.push(
      `<h2>${esc(label("specs", lang))}</h2><table><thead><tr><th>${esc(label("item", lang))}</th><th>${esc(label("value", lang))}</th>${withNote ? `<th>${esc(label("note", lang))}</th>` : ""}</tr></thead><tbody>${specs
        .map((s) => `<tr><td>${esc(s.l)}</td><td>${esc(s.v)}</td>${withNote ? `<td>${esc(s.n)}</td>` : ""}</tr>`)
        .join("")}</tbody></table>`,
    );
  }

  const models = (p.subModels ?? []).filter((m) => !(m.slug && isHiddenSlug(m.slug)));
  if (models.length) {
    out.push(`<h2>${esc(label("lineup", lang))}</h2><ul>${models
      .map((m) => {
        const name = loc(lang, m.name, m.enName, m.jaName);
        const spec = loc(lang, m.spec, m.enSpec, m.jaSpec);
        const title = esc(name ? `${m.code} · ${name}` : m.code);
        const linked = m.slug && catalogBySlug.has(m.slug) ? `<a href="${href(lang, `/products/${m.slug}`)}">${title}</a>` : title;
        return `<li>${linked}${spec ? ` — ${esc(spec)}` : ""}</li>`;
      })
      .join("")}</ul>`);
  }

  const apps = (p.applications ?? []).map((a) => appName(lang, a)).filter(Boolean);
  if (apps.length) out.push(`<h2>${esc(label("apps", lang))}</h2><p>${apps.map(esc).join(" · ")}</p>`);

  const parent = p.parentSlug ? catalogBySlug.get(p.parentSlug) : undefined;
  if (parent && parent.slug !== p.slug) {
    out.push(`<p>${esc(label("category", lang))}: <a href="${href(lang, `/products/${parent.slug}`)}">${esc(productName(parent, lang))}</a></p>`);
  }
  out.push(`<p>${esc(label("custom", lang))}</p>`);
  return out.join("\n        ");
}

// Category pages that aren't catalog entries list their products from the catalog.
const LISTINGS: Record<string, (p: CatalogProduct) => boolean> = {
  "/products/silica-gel": (p) => p.category === "silica-gel",
  "/products/precipitated-silica": (p) => p.category === "precipitated" && !p.isCategoryIndex,
  "/products/fumed-silica": (p) => p.category === "fumed" && !p.isCategoryIndex,
  "/products/silica-sand": (p) => p.category === "sand",
  "/products/silica-powder": (p) => p.category === "sand-powder",
  "/products/all": (p) => !p.isCategoryIndex,
};

export function listingHtml(path: string, lang: LangCode): string {
  const filter = LISTINGS[path];
  if (!filter) return "";
  const items = [...catalogBySlug.values()].filter((p) => filter(p) && !isHidden(p) && `/products/${p.slug}` !== path);
  if (!items.length) return "";
  return `<h2>${esc(label("related", lang))}</h2><ul>${items
    .map((p) => {
      const tag = loc(lang, p.tagline, p.enTagline, p.jaTagline);
      return `<li><a href="${href(lang, `/products/${p.slug}`)}">${esc(productName(p, lang))}</a>${tag ? ` — ${esc(tag)}` : ""}</li>`;
    })
    .join("")}</ul>`;
}

/** Static FAQ text + FAQPage structured data for the 사용가이드 FAQ page. */
export function guideBody(lang: LangCode): string {
  const items = faqItems
    .map((f) => {
      const parts: string[] = [];
      let list: string[] = [];
      const flush = () => {
        if (list.length) parts.push(`<ul>${list.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`);
        list = [];
      };
      for (const line of f.a[lang]) {
        if (line.startsWith("- ")) list.push(line.slice(2));
        else {
          flush();
          parts.push(`<p>${esc(line)}</p>`);
        }
      }
      flush();
      return `<h3>Q. ${esc(f.q[lang])}</h3>${parts.join("")}`;
    })
    .join("\n");
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q[lang],
      acceptedAnswer: { "@type": "Answer", text: f.a[lang].map((l) => l.replace(/^- /, "• ")).join("\n") },
    })),
  };
  const heading = { ko: "자주 묻는 질문 (FAQ)", en: "Frequently Asked Questions (FAQ)", ja: "よくあるご質問 (FAQ)" }[lang];
  return `
      <p>${esc(FAQ_INTRO[lang])}</p>
      <h2>${heading}</h2>
      ${items}
      <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
}
