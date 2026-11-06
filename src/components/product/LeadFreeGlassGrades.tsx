import { useLang } from "@/contexts/LanguageContext";

/** SN-ZT low-melting glass powder grade lineup (phosphate system + one lead-based grade). */
type Grade = {
  code: string;
  melt: number;
  hemi: number;
  full?: number;
  flow?: number;
  cte: number;
  color: "clear" | "yellow";
  whiteness?: number;
  heavy: "none" | "lead";
  bulk: number;
  oil: number;
  ph: number;
  moisture?: number;
};

export const LEAD_FREE_GLASS_GRADES: Grade[] = [
  { code: "SN-ZT350", melt: 350, hemi: 463, cte: 130, color: "clear", heavy: "none", bulk: 0.61, oil: 15, ph: 7.8 },
  { code: "SN-ZT400Pb", melt: 400, hemi: 595, cte: 85, color: "yellow", heavy: "lead", bulk: 1.16, oil: 13, ph: 7.2 },
  { code: "SN-ZT450", melt: 450, hemi: 635, full: 700, flow: 800, cte: 90, color: "clear", heavy: "none", bulk: 0.77, oil: 16, ph: 7.8 },
  { code: "SN-ZT500", melt: 500, hemi: 655, full: 750, flow: 850, cte: 80, color: "clear", heavy: "none", bulk: 0.8, oil: 16, ph: 7.9 },
  { code: "SN-ZT550", melt: 550, hemi: 765, cte: 85, color: "clear", heavy: "none", bulk: 0.66, oil: 16, ph: 7.7 },
  { code: "SN-ZT700", melt: 700, hemi: 835, full: 950, flow: 1050, cte: 55, color: "clear", whiteness: 96, heavy: "none", bulk: 0.57, oil: 16, ph: 9.2, moisture: 0.27 },
  { code: "SN-ZT900", melt: 900, hemi: 1125, cte: 50, color: "clear", heavy: "none", bulk: 0.63, oil: 16, ph: 7.2 },
];

export default function LeadFreeGlassGrades() {
  const { lang } = useLang();
  const tr = (ko: string, en: string, ja: string) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const dash = "—";
  const headers = [
    tr("품번", "Grade", "品番"),
    tr("연화(용융 개시) 온도 ℃", "Softening (melt onset) ℃", "軟化(溶融開始)温度 ℃"),
    tr("반구 온도 ℃", "Hemisphere ℃", "半球温度 ℃"),
    tr("완전 용융 ℃", "Full melt ℃", "完全溶融 ℃"),
    tr("유동 온도 ℃", "Flow ℃", "流動温度 ℃"),
    tr("열팽창계수 (×10⁻⁷/℃)", "CTE (×10⁻⁷/℃)", "熱膨張係数 (×10⁻⁷/℃)"),
    tr("용융 색상", "Fused color", "溶融色相"),
    tr("상온 백색도", "Whiteness", "白色度"),
    tr("유효 성분 %", "Active content %", "有効成分 %"),
    tr("중금속", "Heavy metals", "重金属"),
    tr("부피 밀도 g/cm³", "Bulk density g/cm³", "かさ密度 g/cm³"),
    tr("흡유량", "Oil absorption", "吸油量"),
    "pH",
    tr("함수율 %", "Moisture %", "含水率 %"),
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
        GRADE LINEUP
      </span>
      <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
        {tr("연화점별 등급 라인업", "Grades by Softening Point", "軟化点別グレードラインアップ")}
      </h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        {tr(
          "인산염계 무연 저융점 유리분말은 연화(용융 개시) 온도 350~900℃ 범위의 6개 등급으로 공급합니다. 연화점이 낮을수록 저온 소성에, 높을수록 내열 코팅에 적합합니다.",
          "Phosphate-based lead-free low-melting glass powder is supplied in six grades with softening (melt-onset) temperatures from 350 to 900 ℃. Lower grades suit low-temperature firing; higher grades suit heat-resistant coatings.",
          "リン酸塩系無鉛低融点ガラス粉末は、軟化(溶融開始)温度350~900℃の6グレードで供給します。軟化点が低いほど低温焼成に、高いほど耐熱コーティングに適しています。",
        )}
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[1100px] text-sm">
          <thead className="bg-muted/60 text-left text-xs text-muted-foreground">
            <tr>{headers.map((h) => <th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {LEAD_FREE_GLASS_GRADES.map((g) => {
              const lead = g.heavy === "lead";
              return (
                <tr key={g.code} className={`border-t border-border ${lead ? "bg-destructive/10" : ""}`}>
                  <td className="px-3 py-3 font-semibold text-foreground whitespace-nowrap">
                    {g.code}
                    <span className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${lead ? "bg-destructive text-destructive-foreground" : "bg-primary/15 text-primary"}`}>
                      {lead ? tr("유연(납 함유)", "Leaded", "有鉛") : tr("무연", "Pb-free", "無鉛")}
                    </span>
                  </td>
                  <td className="px-3 py-3 font-semibold text-foreground">{g.melt}</td>
                  <td className="px-3 py-3">{g.hemi}</td>
                  <td className="px-3 py-3">{g.full ?? dash}</td>
                  <td className="px-3 py-3">{g.flow ?? dash}</td>
                  <td className="px-3 py-3">{g.cte}</td>
                  <td className="px-3 py-3">{g.color === "yellow" ? tr("황색 투명", "Yellow clear", "黄透") : tr("투명", "Clear", "清透")}</td>
                  <td className="px-3 py-3">{g.whiteness ?? dash}</td>
                  <td className="px-3 py-3">97.6</td>
                  <td className="px-3 py-3">{lead ? tr("납 함유", "Contains Pb", "鉛含有") : tr("불검출", "Not detected", "未検出")}</td>
                  <td className="px-3 py-3">{g.bulk}</td>
                  <td className="px-3 py-3">{g.oil}</td>
                  <td className="px-3 py-3">{g.ph}</td>
                  <td className="px-3 py-3">{g.moisture ?? dash}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/5 p-5 text-sm">
        <p className="font-semibold text-foreground">
          {tr("⚠ 유연(납 함유) 제품 별도 안내 — SN-ZT400Pb", "⚠ Leaded grade notice — SN-ZT400Pb", "⚠ 有鉛製品のご案内 — SN-ZT400Pb")}
        </p>
        <p className="mt-2 text-muted-foreground">
          {tr(
            "SN-ZT400Pb는 무연 인산염계가 아닌 연산염(납)계 유리분말로, 납을 함유합니다. RoHS 등 환경 규제 대상 용도에는 사용할 수 없으며, 규제와 무관한 산업 용도에 한해 별도 협의로 공급합니다.",
            "SN-ZT400Pb is a lead-silicate (leaded) glass powder, not part of the lead-free phosphate series. It cannot be used where RoHS or similar rules apply and is supplied only for non-regulated industrial uses on consultation.",
            "SN-ZT400Pbは無鉛リン酸塩系ではなく鉛酸塩系ガラス粉末で、鉛を含有します。RoHS等の環境規制対象用途には使用できず、規制対象外の産業用途に限り別途ご相談で供給します。",
          )}
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {tr(
          "표기값은 대표치이며, 입도·연화점·열팽창계수는 고객 공정에 맞춘 맞춤 사양을 협의할 수 있습니다.",
          "Values are typical. Particle size, softening point and CTE can be customized to your process.",
          "記載値は代表値です。粒度・軟化点・熱膨張係数はお客様の工程に合わせたカスタム仕様をご相談いただけます。",
        )}
      </p>
    </section>
  );
}
