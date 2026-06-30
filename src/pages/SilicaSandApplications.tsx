import { Link } from "@/lib/router";
import { Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";
import { silicaAlt } from "@/lib/silicaAlt";
import silicaSandImg from "@/assets/silica-sand.jpg";

const SilicaSandApplications = () => {
  const { lang, t } = useLang();
  const tri = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const title = tri("규사 · Silica Sand 응용분야", "Silica Sand Applications", "珪砂 · シリカサンドの応用分野");
  const desc = tri(
    "고순도 규사는 유리·주조·여과·인조잔디·건축·골프장 등 광범위한 산업 분야의 핵심 원료로 사용됩니다. 상세 응용분야 내용은 곧 업데이트됩니다.",
    "High-purity silica sand is a core raw material across a wide range of industries — glass, foundry, filtration, artificial turf, construction, and golf course applications. Detailed content is coming soon.",
    "高純度シリカサンドは、ガラス・鋳造・濾過・人工芝・建築・ゴルフ場など幅広い産業分野の中核原料として使用されます。詳細な応用分野の内容は近日公開予定です。"
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
            SILICA SAND
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{desc}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={silicaSandImg} alt={silicaAlt(tri("규사", "Silica Sand", "珪砂"))} className="h-auto w-full object-cover" />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {tri("상세 응용분야 콘텐츠는 곧 추가될 예정입니다.", "Detailed application content coming soon.", "詳細な応用分野コンテンツは近日追加予定です。")}
        </p>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaSandApplications;
