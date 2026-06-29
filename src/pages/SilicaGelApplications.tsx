import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";

type Row = {
  ko: string;
  en: string;
  specs: string;
  apps: string[];
};

const rows: Row[] = [
  {
    ko: "미분 실리카",
    en: "Micronized Silica",
    specs: "입도 3–10 μm · 고활성 · 다공성",
    apps: [
      "코팅 · 잉크 · 접착제 · 실란트",
      "플라스틱 · 고무 보강 필러",
      "소포제 · 소광제",
    ],
  },
  {
    ko: "플라스틱 안티블로킹",
    en: "Anti-blocking Agent",
    specs: "입도 2–10 μm · 고순도 99% · 흡유량 150–300 ml/100g",
    apps: [
      "PE · PP · PET 필름 (점착 방지)",
      "포장재 · 농업용 필름",
      "식품 · 의료용 필름",
    ],
  },
  {
    ko: "소광제",
    en: "Matting Agent",
    specs: "D50 3.5–10 μm · 흡유량 100–330 · 무처리/왁스 표면처리",
    apps: [
      "목재 · 코일 · 가죽 코팅",
      "UV 도료 · 인쇄 잉크",
      "플라스틱 · 산업용 도료",
    ],
  },
  {
    ko: "대공극 실리카겔",
    en: "Large Pore Silica Gel",
    specs: "기공 16–25 nm · 비표면적 200–350 m²/g · 공극 1.2–2.2 ml/g",
    apps: [
      "촉매 담체 (석유화학 · 정유)",
      "단백질/효소 고정화",
      "흡습 · 의약품 정제",
    ],
  },
  {
    ko: "내수 실리카겔 (FNG)",
    en: "FNG Water-Resistant Silica Gel",
    specs: "내수성 · 내후성 · 고화학적 안정성",
    apps: [
      "공기 건조 (습한 환경)",
      "변압기 오일 · 냉매 · 가스 정제",
      "해상 운송 포장재용 건조제",
    ],
  },
  {
    ko: "조공극 실리카겔",
    en: "Coarse Pore Silica Gel",
    specs: "기공 8–12.5 nm · 비표면적 300–400 m²/g · 공극 0.8–1.0 ml/g",
    apps: [
      "가스 · 용매 흡착",
      "액체 정제 및 건조",
      "촉매 담체",
    ],
  },
  {
    ko: "A형 실리카겔",
    en: "Silica Gel Type A",
    specs: "기공 2.0–3.0 nm · 비표면적 650–800 m²/g",
    apps: [
      "강력 흡습용 (의약 · 전자 · 계측기)",
      "정밀 화학물질 건조",
    ],
  },
  {
    ko: "B형 실리카겔",
    en: "Silica Gel Type B",
    specs: "기공 4.5–7.0 nm · 비표면적 450–650 m²/g · 공극 0.6–0.85 ml/g",
    apps: [
      "범용 흡습제 (신발 · 의류 · 가방)",
      "크로마토그래피 정제",
      "중간 흡습/흡착 용도",
    ],
  },
];

const SilicaGelApplications = () => {
  const { lang } = useLang();
  const isEn = lang !== "ko"; // ja falls back to English for hardcoded literal blocks

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {isEn ? "Applications" : "응용 분야"}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            SILICA GEL · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {isEn ? "Silica Gel Applications" : "실리카겔 응용 분야"}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {isEn
              ? "Eight high-purity silica gel and micronized silica products engineered for coatings, films, catalysts, drying and precision industries."
              : "코팅·필름·촉매·건조·정밀 산업까지 — 고순도 실리카겔과 미분 실리카 8종의 핵심 특성과 주요 응용 분야를 정리했습니다."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="w-[22%] px-6 py-4 font-semibold">{isEn ? "Product" : "제품명"}</th>
                <th className="w-[30%] px-6 py-4 font-semibold">{isEn ? "Key Specs" : "주요 특성"}</th>
                <th className="px-6 py-4 font-semibold">{isEn ? "Applications" : "주요 응용 분야"}</th>
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
                    <div className="font-semibold text-foreground">{isEn ? r.en : r.ko}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{isEn ? r.ko : r.en}</div>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">{r.specs}</td>
                  <td className="px-6 py-5">
                    <ul className="space-y-1.5">
                      {r.apps.map((a) => (
                        <li key={a} className="flex gap-2 text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{a}</span>
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
              <div className="font-semibold">{isEn ? r.en : r.ko}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{isEn ? r.ko : r.en}</div>
              <div className="mt-3 rounded-lg bg-secondary/40 p-3 text-xs text-muted-foreground">
                {r.specs}
              </div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {r.apps.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
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
