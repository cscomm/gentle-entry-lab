import { useMemo } from "react";
import { Link } from "@/lib/router";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const SilicaSandCategory = () => {
  const { lang, t } = useLang();
  const products = useMemo(() => getProductsByCategory("sand"), []);
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const title = tri(
    "규사 · Silica Sand",
    "Silica Sand · 규사",
    "珪砂 · Silica Sand"
  );
  const desc = tri(
    "천연 규석(Quartz)을 원료로 선별·세척·산처리 공정을 거쳐 생산한 고품질 산업용 규사 라인업입니다. 유리 원료, 정밀 주조, 연마재, 워터필터, 인조잔디, 건축 자재 등 광범위한 산업 분야에 사용되며, SN-S 표준 시리즈를 기본으로 고객사 요구 사양에 맞춘 맞춤 입도·저철·고백색 사양으로 공급됩니다.",
    "A high-quality industrial silica sand lineup produced from natural quartz through screening, washing, and acid-treatment processes. Used across glass, precision casting, abrasives, water filtration, artificial turf, and construction — supplied in customer-tailored grain sizes, low-iron, and high-whiteness grades based on the SN-S standard series.",
    "天然石英(Quartz)を原料に選別・洗浄・酸処理工程を経て生産する高品質な産業用シリカサンドラインアップです。ガラス原料、精密鋳造、研磨材、浄水フィルター、人工芝、建築資材など幅広い産業分野で使用され、SN-S標準シリーズを基本にお客様のご要求仕様に合わせた粒度・低鉄・高白色度グレードを供給します。"
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
            SILICA SAND
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

export default SilicaSandCategory;
