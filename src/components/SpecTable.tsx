import { pick } from "@/lib/lang";
import { useLang } from "@/contexts/LanguageContext";
import type { SilicaGelSpec, SpecSection } from "@/data/silicaGelSpecs";

/**
 * Redesigned technical spec table for silica-gel products.
 * Replaces low-legibility scanned images with a clean, high-contrast,
 * fully accessible HTML table that renders crisply at any zoom level.
 */
function SectionTable({ section }: { section: SpecSection }) {
  const { lang } = useLang();
  const headers = section.headers ?? [{ ko: "규격", en: "Specifications", ja: "スペック" }];
  const hasUnit = section.rows.some((r) => r.unit);
  const nCols = headers.length;
  // Total columns = Item + optional Unit + value columns
  const totalCols = 1 + (hasUnit ? 1 : 0) + nCols;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {section.title && (
        <div className="border-b border-border bg-primary/5 px-5 py-4 md:px-7">
          <h4 className="text-base font-bold tracking-tight text-primary md:text-lg">
            {pick(lang, section.title.ko, section.title.en, section.title.ja)}
          </h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px] md:text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
          <thead>
            {section.groupHeaders && (
              <tr className="bg-foreground text-background">
                <th rowSpan={2} className="border-r border-background/20 px-4 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4">
                  {pick(lang, "항목", "Item", "項目")}
                </th>
                {hasUnit && (
                  <th rowSpan={2} className="border-r border-background/20 px-4 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4">
                    {pick(lang, "단위", "Unit", "単位")}
                  </th>
                )}
                {section.groupHeaders.map((g, i) => (
                  <th
                    key={i}
                    colSpan={g.span}
                    className={`px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4 ${
                      i < section.groupHeaders!.length - 1 ? "border-r border-background/20" : ""
                    }`}
                  >
                    {pick(lang, g.label.ko, g.label.en, g.label.ja)}
                  </th>
                ))}
              </tr>
            )}
            <tr className={section.groupHeaders ? "bg-foreground/90 text-background" : "bg-foreground text-background"}>
              {!section.groupHeaders && (
                <>
                  <th className="border-r border-background/20 px-4 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4">
                    {pick(lang, "항목", "Item", "項目")}
                  </th>
                  {hasUnit && (
                    <th className="border-r border-background/20 px-4 py-3 text-left text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4">
                      {pick(lang, "단위", "Unit", "単位")}
                    </th>
                  )}
                </>
              )}
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 text-center text-xs font-semibold tracking-[0.15em] md:px-6 md:py-4 ${
                    i < headers.length - 1 ? "border-r border-background/20" : ""
                  }`}
                >
                  {pick(lang, h.ko, h.en, h.ja)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {section.rows.map((row, ri) => {
              const isMerged = typeof row.values === "string";
              const values = isMerged ? [row.values as string] : (row.values as string[]);
              return (
                <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                  <td className="border-r border-border px-4 py-3 font-medium text-foreground md:px-6 md:py-3.5">
                    {pick(lang, row.label.ko, row.label.en, row.label.ja)}
                  </td>
                  {hasUnit && (
                    <td className="border-r border-border px-4 py-3 font-mono text-xs text-muted-foreground md:px-6 md:py-3.5">
                      {row.unit ?? ""}
                    </td>
                  )}
                  {isMerged ? (
                    <td
                      colSpan={nCols}
                      className="px-4 py-3 text-center font-mono text-sm font-semibold text-primary md:px-6 md:py-3.5"
                    >
                      {values[0]}
                    </td>
                  ) : (
                    values.map((v, vi) => (
                      <td
                        key={vi}
                        className={`px-4 py-3 text-center font-mono text-sm font-semibold text-foreground md:px-6 md:py-3.5 ${
                          vi < values.length - 1 ? "border-r border-border" : ""
                        }`}
                      >
                        {v}
                      </td>
                    ))
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {section.footnotes && section.footnotes.length > 0 && (
        <div className="border-t border-border bg-secondary/20 px-5 py-4 md:px-7">
          <ul className="space-y-1.5 text-xs text-muted-foreground md:text-sm">
            {section.footnotes.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-primary">•</span>
                <span>{pick(lang, f.ko, f.en, f.ja)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function SpecTable({ spec }: { spec: SilicaGelSpec }) {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
        TECHNICAL DATA · {spec.code}
      </span>
      <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        📊 {pick(lang, "기술 데이터 시트", "Technical Data Sheet", "技術データシート")}
      </h3>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        {pick(
          lang,
          `${spec.code}의 공식 스펙 데이터입니다. 항목·단위·규격 범위를 한눈에 확인하실 수 있으며, 각 값은 제조사 발행 표준을 기준으로 합니다.`,
          `Official specification data for ${spec.code}. Items, units and value ranges are laid out for at-a-glance reference and reflect the manufacturer's published standard.`,
          `${spec.code}の公式仕様データです。項目・単位・値の範囲を一目で確認でき、各値はメーカー発行の標準に基づきます。`,
        )}
      </p>
      {spec.sections.map((s, i) => (
        <SectionTable key={i} section={s} />
      ))}
    </section>
  );
}
