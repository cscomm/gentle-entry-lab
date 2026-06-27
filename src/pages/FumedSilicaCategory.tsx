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
          <div className="mt-5 max-w-3xl space-y-4 text-base text-muted-foreground md:text-lg">
            {isEn ? (
              <>
                <p>Fumed Silica is known by several names depending on its manufacturing method.</p>
                <div className="space-y-2">
                  <p><strong>Vapor Phase Silica:</strong> Named for using gaseous reactants during production.</p>
                  <p><strong>Dry Process Silica:</strong> Called &apos;dry&apos; in contrast to the wet precipitation process.</p>
                  <p><strong>Combustion Silica:</strong> Also called &apos;combustion silica&apos; because high-temperature flame is used.</p>
                  <p><strong>Nano Silica:</strong> Classified as &apos;nano silica&apos; because primary particles are 10–40 nm in size.</p>
                </div>
                <h3 className="pt-2 text-lg font-semibold text-foreground">📖 Definition of Fumed Silica</h3>
                <p>Fumed Silica is an ultra-fine amorphous (non-crystalline) silicon dioxide (SiO₂) powder. Simply put, it is a white powder made of nanometer-sized glass particles, characterized by extremely high purity of 99.8% or more.</p>
                <h3 className="pt-2 text-lg font-semibold text-foreground">⚙️ Simple Manufacturing Process</h3>
                <p>Fumed Silica is produced by the Vapor Phase Process (Dry Process). The main raw material is silicon tetrachloride (SiCl₄), which is hydrolyzed in a high-temperature hydrogen-oxygen flame. The overall process is as follows.</p>
                <div className="space-y-1 pl-4">
                  <p><strong>1. Raw Material Vaporization:</strong> Silicon tetrachloride (SiCl₄) is evaporated into gas.</p>
                  <p><strong>2. High-Temperature Reaction:</strong> Gaseous silicon tetrachloride (SiCl₄) is fed into a high-temperature flame (typically above 1,000°C) of mixed hydrogen (H₂) and oxygen (O₂) to induce hydrolysis.</p>
                  <p><strong>Reaction:</strong> SiCl₄ + 2H₂ + O₂ → SiO₂ + 4HCl</p>
                  <p><strong>3. Agglomeration &amp; Collection:</strong> The nano-sized silica particles generated in the reaction are extremely light and fine, so they undergo a separate agglomeration process to form larger particles before collection.</p>
                  <p><strong>4. Purification:</strong> The collected fumed silica is finished as the final product through desalination and impurity (hydrogen chloride, HCl, etc.) removal processes.</p>
                </div>
              </>
            ) : (
              <>
                <p>흄드 실리카(Fumed Silica)는 제조 방식에 따라 여러 이름으로 불립니다.</p>
                <div className="space-y-2">
                  <p><strong>기상 실리카(Vapor Phase Silica):</strong> 제조 과정에서 기체 상태의 반응물을 사용하기 때문에 붙여진 이름입니다.</p>
                  <p><strong>건식 실리카(Dry Process Silica):</strong> 습식 공정인 침전법(Wet Process)과 대비되는 &apos;건식(Dry)&apos; 공정으로 만들어져서 불리는 이름입니다.</p>
                  <p><strong>연소 실리카(Combustion Silica):</strong> 제조 과정에서 고온의 불꽃(연소, Combustion)을 이용하기 때문에 &apos;연소 실리카&apos;라고도 합니다.</p>
                  <p><strong>나노실리카(Nano Silica):</strong> 흄드 실리카의 1차 입자가 10~40 nm 수준의 나노미터(Nanometer) 크기이기 때문에 &apos;나노실리카&apos;로 분류되기도 합니다.</p>
                </div>
                <h3 className="pt-2 text-lg font-semibold text-foreground">📖 흄드 실리카의 정의</h3>
                <p>흄드 실리카(Fumed Silica)는 무정형(비결정질, Amorphous)의 초미세 이산화규소(SiO₂) 분말입니다. 쉽게 말해, 나노미터(Nanometer) 크기의 유리 입자가 모여 만들어진 하얀색 가루로, 순도가 매우 높아 99.8% 이상인 것이 특징입니다.</p>
                <h3 className="pt-2 text-lg font-semibold text-foreground">⚙️ 간단한 제조법</h3>
                <p>흄드 실리카는 기상법(Vapor Phase Process)·건식법(Dry Process)이라는 공정으로 만들어집니다. 주요 원료는 사염화규소(SiCl₄)이며, 이를 고온의 수소·산소 불꽃에서 가수분해(Hydrolysis)시켜 만듭니다. 전체 공정은 다음과 같습니다.</p>
                <div className="space-y-1 pl-4">
                  <p><strong>1. 원료 기화:</strong> 사염화규소(SiCl₄)를 증발시켜 기체로 만듭니다.</p>
                  <p><strong>2. 고온 반응:</strong> 기체 상태의 사염화규소(SiCl₄)를 수소(H₂)와 산소(O₂)가 혼합된 고온 불꽃(보통 1,000°C 이상)에 넣어 가수분해(Hydrolysis) 반응을 일으킵니다.</p>
                  <p><strong>반응식:</strong> SiCl₄ + 2H₂ + O₂ → SiO₂ + 4HCl</p>
                  <p><strong>3. 응집 및 포집:</strong> 반응에서 생성된 나노(Nano) 크기의 실리카 입자는 매우 가볍고 미세하여, 별도의 응집 과정을 거쳐 큰 입자로 뭉친 후 포집합니다.</p>
                  <p><strong>4. 정제:</strong> 포집된 흄드 실리카는 탈산 및 불순물(염화수소(HCl) 등) 제거 과정을 거쳐 최종 제품으로 완성됩니다.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
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
