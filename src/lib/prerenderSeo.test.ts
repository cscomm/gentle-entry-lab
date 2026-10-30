import { describe, expect, it, afterEach } from "vitest";
import { catalogBySlug, listingHtml, loc, productBody, setHiddenSlugs } from "../../scripts/prerenderContent";
import { replaceRoot } from "../../scripts/prerender";

const HANGUL = /[\uAC00-\uD7A3]/;

describe("static HTML for search engines", () => {
  afterEach(() => setHiddenSlugs(new Set()));

  it("never puts Korean-only text on English or Japanese pages", () => {
    expect(loc("en", "한국어만")).toBe("");
    expect(loc("ja", "한국어만", "English")).toBe("English");
    expect(loc("ja", "≥ 99.9%")).toBe("≥ 99.9%");
  });

  it("writes the Japanese SN-HF04 page in Japanese", () => {
    const html = productBody(catalogBySlug.get("sl-hf04")!, "ja");
    expect(html).toContain("高純度");
    expect(HANGUL.test(html.replace(/<[^>]+>/g, ""))).toBe(false);
  });

  it("replaces the whole page body even when the app script sits in <head>", () => {
    const tpl =
      '<html><head><script type="module" src="/a.js"></script></head><body><div id="root"><div><div>old home</div></div></div></body></html>';
    const out = replaceRoot(tpl, "<p>new</p>");
    expect(out).not.toContain("old home");
    expect(out).toContain('<div id="root"><p>new</p>');
    expect(out.trim().endsWith("</div></body></html>")).toBe(true);
  });

  it("leaves products switched off in the admin out of category lists", () => {
    expect(listingHtml("/products/silica-gel", "ko")).toContain("silica-gel-fng");
    setHiddenSlugs(new Set(["silica-gel-fng"]));
    expect(listingHtml("/products/silica-gel", "ko")).not.toContain("silica-gel-fng");
  });
});
