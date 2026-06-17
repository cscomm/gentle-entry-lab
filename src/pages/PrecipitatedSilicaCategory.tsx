import { Link } from "react-router-dom";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

const PrecipitatedSilicaCategory = () => {
  const { lang, t } = useLang();
  const products = getProductsByCategory("precipitated");
  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("products.cat")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            PRECIPITATED SILICA
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {isEn ? "Precipitated Silica · 침전 실리카" : "침전 실리카 · Precipitated Silica"}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {isEn
              ? "Precipitated silica is a pure-white, synthetic amorphous silicon dioxide powder produced by reacting a water-soluble silicate (e.g. water glass) with an acid. It is one of the most widely used silica forms across industries — for rubber reinforcement, paint defoaming and pigment dispersion, and as an anti-caking agent in food and pharmaceuticals."
              : "침전 실리카(Precipitated silica)는 수용성 규산염(예: 물유리)과 산의 반응을 통해 얻어지는 순백색의 합성 무정형 이산화규소 분말입니다. 주로 고무의 보강재, 페인트의 소포제 및 안료 분산제, 식품 및 의약품의 고결방지제 등 산업 전반에 가장 많이 쓰이는 형태 중 하나 입니다."}
          </p>
        </div>
      </section>

      {/* Product grid */}
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

export default PrecipitatedSilicaCategory;
