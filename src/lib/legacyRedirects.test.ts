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
});
