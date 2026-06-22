import { Link } from "react-router-dom";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const FumedSilicaCategory = () => {
  const { lang, t } = useLang();
  const products = getProductsByCategory("fumed");
  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("products.cat")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            FUMED SILICA
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {isEn ? "Fumed Silica · 흄드 실리카" : "흄드 실리카 · Fumed Silica"}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {isEn
              ? "Fumed silica is an ultra-fine amorphous silicon dioxide produced by flame hydrolysis of silicon tetrachloride (SiCl₄). With nanoscale primary particles (around 7–40 nm) and extremely high BET specific surface area (100–400 m²/g), it is used as a reinforcing, thickening, thixotropic and anti-sagging additive across silicone rubber, sealants, adhesives, coatings, inks, cosmetics, pharmaceuticals and electronics."
              : "흄드 실리카(Fumed Silica)는 사염화규소(SiCl₄)를 수소·산소 화염 속에서 가수분해하여 제조한 초미세 무정형 이산화규소입니다. 1차 입자 크기 7~40 nm의 나노 입자와 BET 100~400 m²/g의 초고비표면적을 가지며, 실리콘 고무·실란트·접착제·도료·잉크·화장품·의약품·전자재료 등 전 산업에서 보강·증점·요변성·안티-새깅 첨가제로 사용됩니다."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}/`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={silicaAlt(isEn ? p.enName : p.name)}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug">{isEn ? p.enName : p.name}</h3>
                {!isEn && <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.enName}</p>}
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{p.tagline}</p>
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

export default FumedSilicaCategory;
