import { describe, expect, it } from "vitest";
import { localizedLegacyPath } from "./i18nRouting";

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