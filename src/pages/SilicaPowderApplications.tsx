import { Link } from "@/lib/router";
import { Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import silicaPowderImg from "@/assets/silica-powder.jpg";

const SilicaPowderApplications = () => {
  const { lang, t } = useLang();
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const title = tri("규사분말 · Silica Powder 응용분야", "Silica Powder Applications", "珪砂粉末 · シリカパウダーの応用分野");
  const desc = tri(
    "고백색·고순도 규사분말은 페인트·코팅·플라스틱 충진재·인조대리석·건축 자재 등 다양한 산업 분야의 기능성 필러로 사용됩니다. 상세 응용분야 내용은 곧 업데이트됩니다.",
    "High-whiteness, high-purity silica powder serves as a functional filler across paints, coatings, plastic fillers, engineered stone, and construction materials. Detailed content is coming soon.",
    "高白色・高純度のシリカパウダーは、塗料・コーティング・プラスチック充填材・人造大理石・建築資材など多様な産業分野の機能性フィラーとして使用されます。詳細な応用分野の内容は近日公開予定です。"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("nav.applications")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            SILICA POWDER
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{desc}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={silicaPowderImg} alt={silicaAlt(tri("규사분말", "Silica Powder", "珪砂粉末"))} className="h-auto w-full object-cover" />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {tri("상세 응용분야 콘텐츠는 곧 추가될 예정입니다.", "Detailed application content coming soon.", "詳細な応用分野コンテンツは近日追加予定です。")}
        </p>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaPowderApplications;
