import { describe, expect, it } from "vitest";
import { localizedLegacyPath, normalizePageLink } from "./i18nRouting";

describe("reported unprefixed legacy addresses", () => {
  it("preserves the company page rather than sending it to home", () => {
    expect(localizedLegacyPath("ko", "/about")).toBe("/ko/about");
    expect(localizedLegacyPath("ko", "/about/")).toBe("/ko/about/");
  });
  it("preserves the terms page", () => {
    expect(localizedLegacyPath("ko", "/terms")).toBe("/ko/terms");
  });
  it("preserves every segment of a product address", () => {
    expect(localizedLegacyPath("ko", "/products/fused-silica-a-grade")).toBe("/ko/products/fused-silica-a-grade");
    expect(localizedLegacyPath("ko", "/products/fused-silica-block")).toBe("/ko/products/fused-silica-block");
  });
  it("keeps already localized addresses unchanged", () => {
    expect(localizedLegacyPath("ko", "/en/applications/silica-powder/")).toBe("/en/applications/silica-powder/");
  });
});

describe("links to canonical public addresses", () => {
  it("uses the trailing-slash Japanese home and Korean company addresses", () => {
    expect(normalizePageLink("/ja")).toBe("/ja/");
    expect(normalizePageLink("/ko/about")).toBe("/ko/about/");
  });
  it("preserves query parameters and anchors", () => {
    expect(normalizePageLink("/ja/products/all?category=sand#items")).toBe("/ja/products/all/?category=sand#items");
  });
  it("does not rewrite media, external addresses or the exact sign-in callback", () => {
    expect(normalizePageLink("/en/396922001.m3u8/")).toBe("/en/396922001.m3u8/");
    expect(normalizePageLink("/auth/callback")).toBe("/auth/callback");
    expect(normalizePageLink("https://www.silica.co.kr/ja")).toBe("https://www.silica.co.kr/ja");
  });
});