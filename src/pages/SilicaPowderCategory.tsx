import { useMemo } from "react";
import { Link } from "@/lib/router";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const SilicaPowderCategory = () => {
  const { lang, t } = useLang();
  const products = useMemo(() => getProductsByCategory("sand-powder"), []);
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const title = tri(
    "규사분말 · Silica Powder",
    "Silica Powder · 규사분말",
    "珪砂粉末 · Silica Powder"
  );
  const desc = tri(
    "고순도 규사를 정밀 미세 분쇄하여 생산한 산업용 실리카 분말 라인업입니다. 균일한 입도 분포와 우수한 백색도, 높은 SiO₂ 순도를 바탕으로 도료·코팅, 플라스틱·고무, 인조대리석, 퍼티·실란트, 건축 자재 등 다양한 산업의 기능성 충진재로 사용되며, SN-P 표준 시리즈를 기본으로 고객사 요구 사양(입도·저철·고백색)에 맞춘 맞춤 생산이 가능합니다.",
    "An industrial silica powder lineup produced by precisely micronizing high-purity silica sand. With uniform particle-size distribution, excellent whiteness and high SiO₂ purity, it serves as a functional filler for paints & coatings, plastics & rubber, engineered stone, putties & sealants and construction materials — supplied in customer-tailored grain sizes, low-iron and high-whiteness grades based on the SN-P standard series.",
    "高純度シリカサンドを精密に微粉砕して生産した産業用シリカ粉末ラインアップです。均一な粒度分布と優れた白色度、高いSiO₂純度により、塗料・コーティング、プラスチック・ゴム、人造大理石、パテ・シーラント、建築資材などの機能性フィラーとして使用され、SN-P標準シリーズを基本にお客様のご要求仕様(粒度・低鉄・高白色度)に合わせたカスタム生産が可能です。"
  );

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
            SILICA POWDER
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">{desc}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <p className="mb-4 text-xs text-muted-foreground">
          {pick(lang, "총", "Total", "合計")} {products.length}
          {pick(lang, "개 시리즈", " series", " シリーズ")}
        </p>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((p) => (
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
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{pick(lang, p.tagline, p.enTagline, p.jaTagline)}</p>
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

export default SilicaPowderCategory;
