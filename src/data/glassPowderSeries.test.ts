import { describe, expect, it } from "vitest";
import { GLASS_POWDER_SERIES, glassCell } from "./glassPowderSeries";
import { productCatalog } from "./products";

describe("SN-prefixed MZ glass series", () => {
  it("retains the existing product URL and category without duplicate pages", () => {
    const products = productCatalog.filter((p) => p.slug === "sl-zt");
    expect(products).toHaveLength(1);
    expect(products[0]?.parentSlug).toBe("lead-free-glass-powder");
    expect(products[0]?.name).toContain("SN-MZ");
  });
  it("includes all five supplied series and 35 SN-prefixed grades", () => {
    expect(GLASS_POWDER_SERIES.map((s) => [s.id, s.grades.length])).toEqual([["G", 8], ["FR", 4], ["H", 8], ["E", 11], ["LC", 4]]);
    const grades = GLASS_POWDER_SERIES.flatMap((s) => s.grades);
    expect(grades.every((g) => /^SN-MZ-(G|FR|H|E|LC)\d+$/.test(g.code))).toBe(true);
    expect(new Set(grades.map((g) => g.code)).size).toBe(35);
  });
  it("distinguishes leaded grades from unspecified heavy metals", () => {
    expect(GLASS_POWDER_SERIES.flatMap((s) => s.grades).filter((g) => g.caution).map((g) => [g.code, g.caution])).toEqual([["SN-MZ-G3", "lead"], ["SN-MZ-H2", "lead"], ["SN-MZ-E2", "heavy"]]);
  });
  it("matches every numeric grade value in the source PDF", () => {
    const expected = [
      [[326,125,1.62,8,4.9],[350,136,1.29,7.2,5.5],[400,85,1.23,7.1,6.3],[450,90,0.75,6.7,6.3],[500,80,0.81,6.4,6.3],[550,85,0.61,6.4,6.3],[700,90,0.57,7,6.3],[900,73,0.6,8.2,6.3]],
      [[330,580,5,7.8,7,1.72,16],[430,670,6.3,7.9,8,1.73,15],[530,750,6.3,7,8,1.76,15],[700,900,6.3,7,8,1.76,15]],
      [[350,463,8.5,130,0.61,15,7.8],[400,595,8,89,1.16,13,7.2],[450,635,8,95,0.77,16,7.8],[500,655,8,93,0.8,16,7.9],[550,765,8,80,0.66,16,7.7],[650,765,8.5,0.81,14,7.2],[700,835,8,55,0.57,16,7.5],[900,1125,8,50,0.63,16,7.2]],
      [[330,500,135,1500],[400,550,99,1500],[450,650,110,1500],[450,650,101,2000],[500,700,93,1500],[600,750,93,6000],[650,760,70,1500],[650,800,85,3000],[680,950,57,1500],[950,1100,56,1500],[1100,1300,52,1500]],
      [[500,7,7,6.3,19],[700,7,7,6.3,19],[900,8.2,7,6.3,19],[1100,7.8,7,6.5,12]],
    ];
    expect(GLASS_POWDER_SERIES.map((s) => s.grades.map((g) => g.values.filter((v) => typeof v === "number")))).toEqual(expected);
  });
  it("preserves the missing H6 expansion value rather than inventing it", () => {
    const value = GLASS_POWDER_SERIES.find((s) => s.id === "H")?.grades.find((g) => g.code === "SN-MZ-H6")?.values[3];
    expect(value && glassCell(value, "en")).toBe("Exact value unavailable");
  });
  it("has a cell for every supplied specification column", () => {
    for (const series of GLASS_POWDER_SERIES) {
      for (const grade of series.grades) expect(grade.values.length).toBe(series.headers.length);
    }
  });
});