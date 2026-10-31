import { describe, expect, it } from "vitest";
import { legacyForwardPaths, resolveLegacyPath } from "./legacyRedirects";

const slugs = [
  "precipitated-silica-sn-ct-601",
  "precipitated-silica-sn-ct-1031",
  "silica-gel-sl-des-05",
  "silica-gel-fng",
  "sl-hf04",
];
const exists = (s: string) => slugs.includes(s);

describe("old addresses Google reported as soft 404", () => {
  it("sends SL- model pages to the SN- product", () => {
    expect(resolveLegacyPath("/ja/products/precipitated-silica-sl-ct-601/", exists)).toBe(
      "/ja/products/precipitated-silica-sn-ct-601/",
    );
    expect(resolveLegacyPath("/en/products/precipitated-silica-sl-ct-1031/", exists)).toBe(
      "/en/products/precipitated-silica-sn-ct-1031/",
    );
  });

  it("sends the old Type B silica gel to SN-DES-05, with or without /products", () => {
    expect(resolveLegacyPath("/ko/products/silica-gel-type-b/", exists)).toBe("/ko/products/silica-gel-sl-des-05/");
    expect(resolveLegacyPath("/en/silica-gel-type-b/", exists)).toBe("/en/products/silica-gel-sl-des-05/");
  });

  it("adds the missing /products to a product address", () => {
    expect(resolveLegacyPath("/ja/silica-gel-fng/", exists)).toBe("/ja/products/silica-gel-fng/");
  });

  it("leaves current pages and unknown addresses alone", () => {
    expect(resolveLegacyPath("/ko/products/sl-hf04/", exists)).toBeNull();
    expect(resolveLegacyPath("/ja/1015662262.m3u8/", exists)).toBeNull();
    expect(resolveLegacyPath("/ko/about/", exists)).toBeNull();
  });

  it("builds a static forward page for every reported old address", () => {
    const from = legacyForwardPaths(slugs).map((p) => p.from);
    for (const p of [
      "/ja/products/precipitated-silica-sl-ct-601/",
      "/en/products/precipitated-silica-sl-ct-1031/",
      "/ja/products/silica-gel-type-b/",
      "/ko/products/silica-gel-type-b/",
      "/en/silica-gel-type-b/",
      "/ja/silica-gel-type-b/",
      "/ja/silica-gel-fng/",
    ]) expect(from).toContain(p);
    // A current slug never gets overwritten by a forward page.
    expect(from).not.toContain("/ko/products/sl-hf04/");
  });

  it("sends old addresses without a language to the Korean page", () => {
    const fwd = new Map(
      legacyForwardPaths(["fused-silica-a-grade", "silica-gel-sl-des-05", "silica-gel"], [
        "/products/fused-silica-a-grade",
        "/products/silica-gel",
        "/applications/silica-gel",
      ]).map((p) => [p.from, p.to]),
    );
    expect(fwd.get("/products/fused-silica-a-grade/")).toBe("/ko/products/fused-silica-a-grade/");
    expect(fwd.get("/applications/silica-gel/")).toBe("/ko/applications/silica-gel/");
    expect(fwd.get("/products/silica-gel-type-b/")).toBe("/ko/products/silica-gel-sl-des-05/");
    expect(fwd.get("/ja/fused-silica-a-grade/")).toBe("/ja/products/fused-silica-a-grade/");
    expect(fwd.get("/en/silica-gel/")).toBe("/en/products/silica-gel/");
  });

  it("never turns a real page like /ko/about/ into a product address", () => {
    expect(resolveLegacyPath("/ko/about/", () => true)).toBeNull();
    const from = legacyForwardPaths(["about", "board"]).map((p) => p.from);
    expect(from).not.toContain("/ko/about/");
  });
});
