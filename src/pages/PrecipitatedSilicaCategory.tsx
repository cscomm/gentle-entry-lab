import { useMemo, useState } from "react";
import { Link } from "@/lib/router";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getProductsByCategory } from "@/data/products";
import { useLang } from "@/contexts/LanguageContext";

// 침전 실리카 용도별 분류 (KO / EN / JA)
const TAG_OPTIONS: { ko: string; en: string; ja: string }[] = [
  { ko: "도료", en: "Paint", ja: "塗料" },
  { ko: "소광", en: "Matting", ja: "艶消し" },
  { ko: "고무", en: "Rubber", ja: "ゴム" },
  { ko: "접착제", en: "Adhesive", ja: "接着剤" },
  { ko: "사료", en: "Feed", ja: "飼料" },
  { ko: "농약", en: "Agrochemical", ja: "農薬" },
  { ko: "도자기", en: "Ceramic", ja: "陶磁器" },
  { ko: "플라스틱", en: "Plastic", ja: "プラスチック" },
  { ko: "소포제", en: "Defoamer", ja: "消泡剤" },
  { ko: "식품", en: "Food", ja: "食品" },
  { ko: "치약", en: "Toothpaste", ja: "歯磨き粉" },
  { ko: "수의약품", en: "Veterinary", ja: "動物薬" },
];

const PrecipitatedSilicaCategory = () => {
  const { lang, t } = useLang();
  const products = useMemo(() => getProductsByCategory("precipitated"), []);
  const [tag, setTag] = useState<string>("__all__");
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const filtered = tag === "__all__" ? products : products.filter((p) => (p.useTags ?? []).includes(tag));

  const title = tri(
    "침전 실리카 · Precipitated Silica",
    "Precipitated Silica · 침전 실리카",
    "沈降シリカ · Precipitated Silica"
  );
  const desc = tri(
    "침전 실리카(Precipitated silica)는 수용성 규산염(예: 물유리)과 산의 반응을 통해 얻어지는 순백색의 합성 무정형 이산화규소 분말입니다. 도료 소광제·초미세 보강재·실리콘 고무·접착제·타이어 백탄흑·담체 및 충전재·소포제·식품 고결방지제·치약·수의약품 등 산업 전반에 가장 폭넓게 사용되는 형태 중 하나이며, 아래 용도별 카테고리에서 원하는 등급을 바로 탐색할 수 있습니다.",
    "Precipitated silica is a pure-white synthetic amorphous silicon dioxide powder produced by reacting a water-soluble silicate (e.g. water glass) with an acid. It is one of the most widely used silica forms — for paint matting, ultrafine reinforcement, silicone rubber, adhesives, tire white-carbon-black, carriers/fillers, defoamers, food anti-caking, toothpaste and veterinary drugs. Browse by application category below.",
    "沈降シリカ(Precipitated silica)は、水溶性ケイ酸塩(例:水ガラス)と酸の反応で得られる純白の合成非晶質二酸化ケイ素粉末です。塗料艶消し剤・超微細補強剤・シリコーンゴム・接着剤・タイヤ用白炭黒・担体/充填剤・消泡剤・食品固結防止剤・歯磨き粉・動物薬など、産業界で最も広く使用されるシリカ形態の一つです。下記の用途別カテゴリからお選びください。"
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
            PRECIPITATED SILICA
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

export default PrecipitatedSilicaCategory;
