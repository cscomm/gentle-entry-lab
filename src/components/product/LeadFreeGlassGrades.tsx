import { useLang } from "@/contexts/LanguageContext";
import Prose from "@/components/Prose";
import { GLASS_POWDER_SERIES, GLASS_SOURCE_NOTE, glassText, glassCell, glassCaution } from "@/data/glassPowderSeries";

export default function LeadFreeGlassGrades() {
  const { lang } = useLang();
  const tr = (ko: string, en: string, ja: string) => glassText([ko, en, ja], lang);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <span className="text-xs font-semibold text-muted-foreground">SN-MZ SERIES / GLASS POWDER & GLASS FRIT</span>
      <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
        {tr("유리 분말 · 유리 프리트 시리즈별 사양", "Glass Powder / Glass Frit Series Specifications", "ガラス粉末・ガラスフリット シリーズ別仕様")}
      </h2>
      <div className="mt-6 border-l-4 border-destructive bg-destructive/5 p-5 text-sm">
        <h3 className="font-semibold text-foreground">{tr("유연·중금속 함유 제품 별도 안내", "Leaded / Heavy-Metal Grade Notice", "有鉛・重金属含有品のご案内")}</h3>
        <Prose className="mt-2 text-muted-foreground">{tr(
          "SN-MZ-G3와 SN-MZ-H2는 납을 함유하는 유연 제품입니다. SN-MZ-E2는 중금속 함유로 표기되어 있지만 성분은 명시되지 않아, 납 함유 여부를 단정하거나 무연 제품으로 분류하지 않습니다. 환경 규제 적용 용도는 품번별 시험 성적과 적합성 자료를 확인해 주세요.",
          "SN-MZ-G3 and SN-MZ-H2 are leaded products. SN-MZ-E2 is listed as containing unspecified heavy metals: lead content cannot be inferred and it is not classified as lead-free. Check grade-specific test and compliance documents for regulated applications.",
          "SN-MZ-G3・SN-MZ-H2は鉛含有品です。SN-MZ-E2は重金属含有と記載されていますが成分は未記載のため、鉛含有と断定せず無鉛にも分類しません。規制対象用途は品番別の試験成績・適合性資料をご確認ください。",
        )}</Prose>
      </div>
      {GLASS_POWDER_SERIES.map((series) => (
        <div key={series.id} className="mt-12" data-no-reveal>
          <h3 className="text-xl font-semibold text-foreground">{glassText(series.title, lang)}</h3>
          <Prose className="mt-3 max-w-4xl text-muted-foreground">{glassText(series.description, lang)}</Prose>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border" role="region" aria-label={glassText(series.title, lang)} tabIndex={0}>
            <table className="w-full min-w-[980px] text-sm">
              <thead className="bg-muted text-left text-xs text-muted-foreground">
                <tr><th scope="col" className="px-4 py-4 font-semibold">{tr("품번", "Grade", "品番")}</th>{series.headers.map((header, i) => <th key={i} scope="col" className="px-3 py-4 font-semibold">{glassText(header, lang)}</th>)}</tr>
              </thead>
              <tbody>
                {series.grades.map((grade) => (
                  <tr key={grade.code} className={`border-t border-border ${grade.caution ? "bg-destructive/10" : "bg-card"}`}>
                    <th scope="row" className="whitespace-nowrap px-4 py-4 text-left font-semibold text-foreground">
                      {grade.code}
                      {grade.caution && <span className="mt-1 block text-xs font-semibold text-destructive">{glassCaution(grade.caution, lang)}</span>}
                    </th>
                    {grade.values.map((value, i) => <td key={i} className="min-w-[80px] px-3 py-4 text-foreground">{glassCell(value, lang)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <Prose className="mt-8 text-xs leading-relaxed text-muted-foreground">{glassText(GLASS_SOURCE_NOTE, lang)}</Prose>
    </section>
  );
}
