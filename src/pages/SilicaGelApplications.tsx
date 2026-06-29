import { Link } from "@/lib/router";
import { Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

type Row = {
  ko: string;
  en: string;
  ja: string;
  specsKo: string;
  specsEn: string;
  specsJa: string;
  apps: { ko: string; en: string; ja: string }[];
};

const rows: Row[] = [
  {
    ko: "미분 실리카",
    en: "Micronized Silica",
    ja: "微粉シリカ",
    specsKo: "입도 3–10 μm · 고활성 · 다공성",
    specsEn: "Particle size 3–10 μm · high activity · porous",
    specsJa: "粒径 3–10 μm・高活性・多孔質",
    apps: [
      { ko: "코팅 · 잉크 · 접착제 · 실란트", en: "Coatings, inks, adhesives, sealants", ja: "コーティング・インキ・接着剤・シーラント" },
      { ko: "플라스틱 · 고무 보강 필러", en: "Plastic & rubber reinforcing filler", ja: "プラスチック・ゴム補強フィラー" },
      { ko: "소포제 · 소광제", en: "Defoamer & matting agent", ja: "消泡剤・艶消し剤" },
    ],
  },
  {
    ko: "플라스틱 안티블로킹",
    en: "Anti-blocking Agent",
    ja: "プラスチック用アンチブロッキング剤",
    specsKo: "입도 2–10 μm · 고순도 99% · 흡유량 150–300 ml/100g",
    specsEn: "2–10 μm · 99% purity · oil absorption 150–300 ml/100g",
    specsJa: "粒径 2–10 μm・高純度99%・吸油量 150–300 ml/100g",
    apps: [
      { ko: "PE · PP · PET 필름 (점착 방지)", en: "PE / PP / PET films (anti-blocking)", ja: "PE・PP・PETフィルム(ブロッキング防止)" },
      { ko: "포장재 · 농업용 필름", en: "Packaging & agricultural films", ja: "包装材・農業用フィルム" },
      { ko: "식품 · 의료용 필름", en: "Food & medical films", ja: "食品・医療用フィルム" },
    ],
  },
  {
    ko: "소광제",
    en: "Matting Agent",
    ja: "艶消し剤",
    specsKo: "D50 3.5–10 μm · 흡유량 100–330 · 무처리/왁스 표면처리",
    specsEn: "D50 3.5–10 μm · oil absorption 100–330 · untreated / wax-treated",
    specsJa: "D50 3.5–10 μm・吸油量 100–330・未処理/ワックス表面処理",
    apps: [
      { ko: "목재 · 코일 · 가죽 코팅", en: "Wood, coil, leather coatings", ja: "木材・コイル・皮革コーティング" },
      { ko: "UV 도료 · 인쇄 잉크", en: "UV coatings & printing inks", ja: "UV塗料・印刷インキ" },
      { ko: "플라스틱 · 산업용 도료", en: "Plastic & industrial coatings", ja: "プラスチック・産業用塗料" },
    ],
  },
  {
    ko: "대공극 실리카겔",
    en: "Large Pore Silica Gel",
    ja: "大細孔シリカゲル",
    specsKo: "기공 16–25 nm · 비표면적 200–350 m²/g · 공극 1.2–2.2 ml/g",
    specsEn: "Pore 16–25 nm · BET 200–350 m²/g · pore volume 1.2–2.2 ml/g",
    specsJa: "細孔径 16–25 nm・比表面積 200–350 m²/g・細孔容積 1.2–2.2 ml/g",
    apps: [
      { ko: "촉매 담체 (석유화학 · 정유)", en: "Catalyst support (petrochemical & refining)", ja: "触媒担体(石油化学・精製)" },
      { ko: "단백질/효소 고정화", en: "Protein / enzyme immobilization", ja: "タンパク質・酵素固定化" },
      { ko: "흡습 · 의약품 정제", en: "Moisture adsorption & pharma purification", ja: "吸湿・医薬品精製" },
    ],
  },
  {
    ko: "내수 실리카겔 (FNG)",
    en: "FNG Water-Resistant Silica Gel",
    ja: "耐水性シリカゲル(FNG)",
    specsKo: "내수성 · 내후성 · 고화학적 안정성",
    specsEn: "Water-resistant · weather-resistant · high chemical stability",
    specsJa: "耐水性・耐候性・高い化学的安定性",
    apps: [
      { ko: "공기 건조 (습한 환경)", en: "Air drying (humid environments)", ja: "空気乾燥(高湿度環境)" },
      { ko: "변압기 오일 · 냉매 · 가스 정제", en: "Transformer oil, refrigerant, gas purification", ja: "変圧器油・冷媒・ガス精製" },
      { ko: "해상 운송 포장재용 건조제", en: "Desiccant for marine-transport packaging", ja: "海上輸送包装用乾燥剤" },
    ],
  },
  {
    ko: "조공극 실리카겔",
    en: "Coarse Pore Silica Gel",
    ja: "粗細孔シリカゲル",
    specsKo: "기공 8–12.5 nm · 비표면적 300–400 m²/g · 공극 0.8–1.0 ml/g",
    specsEn: "Pore 8–12.5 nm · BET 300–400 m²/g · pore volume 0.8–1.0 ml/g",
    specsJa: "細孔径 8–12.5 nm・比表面積 300–400 m²/g・細孔容積 0.8–1.0 ml/g",
    apps: [
      { ko: "가스 · 용매 흡착", en: "Gas & solvent adsorption", ja: "ガス・溶剤吸着" },
      { ko: "액체 정제 및 건조", en: "Liquid purification & drying", ja: "液体精製・乾燥" },
      { ko: "촉매 담체", en: "Catalyst support", ja: "触媒担体" },
    ],
  },
  {
    ko: "A형 실리카겔",
    en: "Silica Gel Type A",
    ja: "A型シリカゲル",
    specsKo: "기공 2.0–3.0 nm · 비표면적 650–800 m²/g",
    specsEn: "Pore 2.0–3.0 nm · BET 650–800 m²/g",
    specsJa: "細孔径 2.0–3.0 nm・比表面積 650–800 m²/g",
    apps: [
      { ko: "강력 흡습용 (의약 · 전자 · 계측기)", en: "High-power desiccant (pharma, electronics, instruments)", ja: "強力吸湿用(医薬・電子・計測機器)" },
      { ko: "정밀 화학물질 건조", en: "Precision chemical drying", ja: "精密化学品の乾燥" },
    ],
  },
  {
    ko: "B형 실리카겔",
    en: "Silica Gel Type B",
    ja: "B型シリカゲル",
    specsKo: "기공 4.5–7.0 nm · 비표면적 450–650 m²/g · 공극 0.6–0.85 ml/g",
    specsEn: "Pore 4.5–7.0 nm · BET 450–650 m²/g · pore volume 0.6–0.85 ml/g",
    specsJa: "細孔径 4.5–7.0 nm・比表面積 450–650 m²/g・細孔容積 0.6–0.85 ml/g",
    apps: [
      { ko: "범용 흡습제 (신발 · 의류 · 가방)", en: "General-purpose desiccant (shoes, clothing, bags)", ja: "汎用吸湿剤(靴・衣料・バッグ)" },
      { ko: "크로마토그래피 정제", en: "Chromatography purification", ja: "クロマトグラフィー精製" },
      { ko: "중간 흡습/흡착 용도", en: "Medium desiccant / adsorbent uses", ja: "中間吸湿・吸着用途" },
    ],
  },
];

const SilicaGelApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);
  const name = (r: Row) => t(r.ko, r.en, r.ja);
  const sub = (r: Row) => (lang === "ko" ? r.en : lang === "ja" ? r.ko : r.ko);
  const specs = (r: Row) => t(r.specsKo, r.specsEn, r.specsJa);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("응용 분야", "Applications", "用途分野")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            SILICA GEL · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("실리카겔 응용 분야", "Silica Gel Applications", "シリカゲルの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {t(
              "코팅·필름·촉매·건조·정밀 산업까지 — 고순도 실리카겔과 미분 실리카 8종의 핵심 특성과 주요 응용 분야를 정리했습니다.",
              "Eight high-purity silica gel and micronized silica products engineered for coatings, films, catalysts, drying and precision industries.",
              "コーティング・フィルム・触媒・乾燥・精密産業まで — 高純度シリカゲルと微粉シリカ8種の主要特性と用途分野をまとめました。"
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="w-[22%] px-6 py-4 font-semibold">{t("제품명", "Product", "製品名")}</th>
                <th className="w-[30%] px-6 py-4 font-semibold">{t("주요 특성", "Key Specs", "主要特性")}</th>
                <th className="px-6 py-4 font-semibold">{t("주요 응용 분야", "Applications", "主要用途分野")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.en}
                  className={`border-t border-border align-top transition hover:bg-secondary/30 ${
                    i % 2 === 1 ? "bg-secondary/15" : ""
                  }`}
                >
                  <td className="px-6 py-5">
                    <div className="font-semibold text-foreground">{name(r)}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{sub(r)}</div>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">{specs(r)}</td>
                  <td className="px-6 py-5">
                    <ul className="space-y-1.5">
                      {r.apps.map((a) => (
                        <li key={a.ko} className="flex gap-2 text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{t(a.ko, a.en, a.ja)}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          {rows.map((r) => (
            <div key={r.en} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-semibold">{name(r)}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{sub(r)}</div>
              <div className="mt-3 rounded-lg bg-secondary/40 p-3 text-xs text-muted-foreground">
                {specs(r)}
              </div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {r.apps.map((a) => (
                  <li key={a.ko} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{t(a.ko, a.en, a.ja)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaGelApplications;
