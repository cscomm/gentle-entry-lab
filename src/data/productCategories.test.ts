import { describe, expect, it } from "vitest";
import { productCatalog } from "./products";

describe("lead-free glass category", () => {
  it("keeps lead-free glass powder independent of applied silica materials", () => {
    const category = productCatalog.find((p) => p.slug === "lead-free-glass-powder");
    expect(category?.isCategoryIndex).toBe(true);
    expect(category?.parentSlug).toBeUndefined();
    const applied = productCatalog.find((p) => p.slug === "applied-silica-materials");
    expect(applied).toBeDefined();
    expect(applied?.subModels?.some((m) => m.slug === "lead-free-glass-powder")).toBe(false);
  });

  it("preserves the sealing frit URL under lead-free glass powder", () => {
    const category = productCatalog.find((p) => p.slug === "lead-free-glass-powder");
    expect(category?.subModels?.map((m) => m.slug)).toContain("sl-zt");
    expect(productCatalog.find((p) => p.slug === "sl-zt")?.parentSlug).toBe("lead-free-glass-powder");
  });
});