import { useMemo, useState } from "react";
import { Link } from "@/lib/router";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

// 실리카겔 용도별 분류 (KO / EN / JA)
const TAG_OPTIONS: { ko: string; en: string; ja: string }[] = [
  { ko: "크로마토그래피", en: "Chromatography", ja: "クロマトグラフィー" },
  { ko: "촉매", en: "Catalyst", ja: "触媒" },
  { ko: "산업·공정", en: "Industrial", ja: "産業・工程" },
  { ko: "건조·흡습", en: "Desiccant", ja: "乾燥・吸湿" },
  { ko: "습도지시", en: "Humidity Indicator", ja: "湿度指示" },
  { ko: "소광", en: "Matting", ja: "艶消し" },
  { ko: "안티블로킹", en: "Anti-blocking", ja: "アンチブロッキング" },
  { ko: "반려동물", en: "Pet", ja: "ペット" },
  { ko: "식품·의약", en: "Food & Pharma", ja: "食品・医薬" },
  { ko: "알루미나·분자체", en: "Alumina & Sieve", ja: "アルミナ・分子篩" },
];

const SilicaGelCategory = () => {
  const { lang, t } = useLang();
  const products = useMemo(() => getProductsByCategory("silica-gel"), []);
  const [tag, setTag] = useState<string>("__all__");
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const filtered =
    tag === "__all__" ? products : products.filter((p) => (p.useTags ?? []).includes(tag));

  const title = tri(
    "실리카겔 · Silica Gel",
    "Silica Gel · 실리카겔",
    "シリカゲル · Silica Gel"
  );
  const desc = tri(
    "고순도 이산화규소(SiO₂) 기반의 실리카겔 종합 라인업 — 크로마토그래피용, 산업·공정용(촉매·맥주 여과·오일 탈색·유로키나제 흡착), 건조제·흡습제(A형·B형·PSA·습도지시·내수성 FNG·반려동물 크리스탈 리터), 실리카알루미나겔·활성알루미나볼·분자체(4A)까지 20여 종의 등급을 폭넓게 공급합니다.",
    "A comprehensive silica gel lineup based on high-purity SiO₂ — chromatography grades, industrial/process grades (catalyst, beer filtration, oil bleaching, urokinase), desiccants (Type A/B, PSA, humidity indicators, water-resistant FNG, crystal cat litter) and silica-alumina/activated alumina/molecular sieve (4A). Over 20 grades available.",
    "高純度SiO₂ベースのシリカゲル総合ラインアップ — クロマトグラフィー用、産業・工程用(触媒、ビール濾過、オイル脱色、ウロキナーゼ吸着)、乾燥剤・吸湿剤(A型・B型・PSA・湿度指示・耐水FNG・ペット用クリスタルリター)、シリカアルミナゲル・活性アルミナボール・分子篩(4A)まで20種類以上のグレードを幅広く供給します。"
  );

  const allLabel = pick(lang, "전체", "All", "全体");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("products.cat")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            SILICA GEL
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">{desc}</p>
        </div>
      </section>

      {/* 용도별 필터 */}
      <section className="mx-auto max-w-7xl px-6 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setTag("__all__")}
            className={`rounded-full border px-4 py-1.5 text-xs md:text-sm transition ${
              tag === "__all__"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {allLabel}
          </button>
          {TAG_OPTIONS.map((opt) => {
            const label = pick(lang, opt.ko, opt.en, opt.ja);
            const active = tag === opt.ko;
            return (
              <button
                key={opt.ko}
                onClick={() => setTag(opt.ko)}
                className={`rounded-full border px-4 py-1.5 text-xs md:text-sm transition ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {pick(lang, "총", "Total", "合計")} {filtered.length}
          {pick(lang, "개 제품", " products", " 製品")}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}/`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={silicaAlt(pick(lang, p.name, p.enName, p.jaName))}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2">{pick(lang, p.name, p.enName, p.jaName)}</h3>
                {lang === "ko" && <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.enName}</p>}
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{pick(lang, p.tagline, p.enTagline ?? p.tagline, p.jaTagline ?? p.tagline)}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary transition group-hover:gap-2">
                  {t("products.detail")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaGelCategory;
