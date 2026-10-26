import { describe, it, expect } from "vitest";
import { splitParagraphs } from "./paragraphs";

describe("splitParagraphs", () => {
  it("breaks the Grade A fused silica description after '인정받고 있습니다.'", () => {
    const text =
      "당사가 공급하는 A급 용융 실리카(Fused Silica)는 천연 석영 원석을 초고온에서 용융 및 급냉 과정을 거쳐 제조된 비정질(Amorphous) 이산화규소(SiO₂) 소재로, 반도체·정밀 화학·광학·고온 내열 소재 등 첨단 산업 분야의 핵심 원료로서 그 가치를 인정받고 있습니다. 본 제품은 일반 용융 실리카 대비 엄격한 품질 관리를 통해 불순물 함량을 획기적으로 저감하였으며, 우수한 물리적 특성과 화학적 안정성을 동시에 확보하여 까다로운 공정 환경에서도 최상의 성능을 발휘하도록 설계되었습니다.";
    const out = splitParagraphs(text);
    expect(out).toHaveLength(2);
    expect(out[0].endsWith("인정받고 있습니다.")).toBe(true);
    expect(out[1].startsWith("본 제품은")).toBe(true);
  });

  it("keeps short text as one paragraph", () => {
    expect(splitParagraphs("짧은 설명입니다. 두 번째 문장입니다.")).toHaveLength(1);
  });

  it("does not split on decimals like 99.96% or abbreviations like typ.", () => {
    const text =
      "SN-HF04 offers a typical SiO₂ purity of 99.96% (spec ≥99.95%, typ. 99.96) and extremely low iron content with a tightly controlled particle size distribution of D10 1.6 µm, D50 3.8 µm and D90 6.6 µm for demanding semiconductor packaging, underfill, encapsulant, CCL and high-frequency substrate uses across the advanced electronics industry.";
    expect(splitParagraphs(text)).toHaveLength(1);
  });

  it("always starts a new paragraph at explicit line breaks", () => {
    expect(splitParagraphs("첫 문단\n\n두 번째 문단")).toEqual(["첫 문단", "두 번째 문단"]);
  });
});
