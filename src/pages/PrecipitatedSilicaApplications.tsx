import { Link } from "@/lib/router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";

const PrecipitatedSilicaApplications = () => {
  const { lang } = useLang();
  const isEn = lang !== "ko"; // ja falls back to English for hardcoded literal blocks

  const sections = [
    {
      title: isEn ? "Rubber Reinforcement" : "고무 보강재 (Rubber Reinforcement)",
      desc: isEn
        ? "Precipitated silica is one of the most important non-black reinforcing fillers for rubber. With high BET surface area and controlled DBP oil absorption, it bonds tightly to polymer chains, dramatically improving tensile strength, tear resistance, abrasion resistance and wet grip — the core property that makes 'green tires' possible by reducing rolling resistance and fuel consumption. Beyond tires, it reinforces shoe soles, conveyor belts, hoses, V-belts, seals, gaskets, silicone rubber and high-performance industrial rubber goods."
        : "침전 실리카는 고무 산업에서 카본블랙을 대체하는 가장 대표적인 비흑색 보강재입니다. 높은 비표면적(BET)과 조절된 흡유량(DBP)을 통해 고무 사슬과 강하게 결합하여 인장강도·인열강도·내마모성·습윤 노면 접지력(wet grip)을 크게 향상시키며, 구름 저항(rolling resistance)을 낮춰 연비를 개선하는 '그린타이어'의 핵심 원료로 사용됩니다. 타이어 외에도 신발 밑창, 컨베이어 벨트·호스·V벨트, 실리콘 고무, 산업용 패킹·가스켓 등 고기능성 고무 제품 전반에 적용됩니다.",
      items: isEn
        ? [
            "Green tires / high-performance tires (lower rolling resistance, better wet grip)",
            "Shoe soles, sports goods, industrial rubber parts",
            "Silicone rubber, sealants, gaskets, hoses, belts",
          ]
        : [
            "그린타이어 / 고성능 타이어 (저구름저항·웻 그립 향상)",
            "신발 밑창, 스포츠 용품, 산업용 고무 부품",
            "실리콘 고무, 실란트, 가스켓, 호스, 벨트",
          ],
    },
    {
      title: isEn ? "Paints, Coatings & Inks" : "페인트 · 코팅 · 잉크",
      desc: isEn
        ? "Thanks to its porous structure, high oil absorption and chemical inertness, precipitated silica works as a multi-functional additive in paints, coatings and printing inks. It acts as a matting agent (controlling gloss), an anti-settling and rheology modifier (suspending pigments and preventing hard sediment), a defoamer carrier, and a pigment dispersion aid. Surface-treated grades give uniform matte finishes on wood, metal, plastic and leather coatings, while keeping film clarity and scratch resistance high."
        : "다공성 구조와 높은 흡유량, 화학적 안정성을 바탕으로 침전 실리카는 페인트·코팅·인쇄 잉크 산업에서 다목적 첨가제로 사용됩니다. 광택을 제어하는 소광제(matting agent), 안료의 침강을 막고 점도를 조절하는 침강방지·레올로지 조절제, 소포제 캐리어, 안료 분산제 등 한 가지 소재로 여러 기능을 동시에 구현합니다. 표면 처리된 등급은 목재·금속·플라스틱·가죽 코팅에서 균일한 무광 효과와 함께 도막의 투명성과 내스크래치성을 동시에 유지시켜 줍니다.",
      items: isEn
        ? [
            "Matting agent for wood / coil / leather / UV coatings",
            "Anti-settling, thickening and rheology control",
            "Defoamer carrier and pigment dispersion aid",
            "Printing inks (offset, UV, screen)",
          ]
        : [
            "목재 · 코일 · 가죽 · UV 도료의 소광제",
            "침강 방지 · 증점 · 레올로지 조절",
            "소포제 캐리어 · 안료 분산제",
            "오프셋·UV·스크린 인쇄 잉크",
          ],
    },
    {
      title: isEn ? "Food & Pharmaceuticals" : "식품 · 의약품 · 사료",
      desc: isEn
        ? "Food- and pharma-grade precipitated silica is approved as an anti-caking agent (E551), free-flow agent and carrier for liquid actives. Its high specific surface area absorbs moisture and oily components, keeping powdered foods, spices, salt, dairy powders, instant beverages and animal feed dry and free-flowing. In tablets and capsules, it functions as a glidant and disintegration aid, and as a liquid-to-powder carrier for vitamins, flavors and essential oils."
        : "식·의약품 등급의 침전 실리카는 고결방지제(E551), 분체 유동성 향상제, 액상 원료의 분말화 캐리어로 사용됩니다. 높은 비표면적이 수분과 오일 성분을 효과적으로 흡착하여 분말 식품·향신료·소금·분유·인스턴트 음료·동물 사료를 항상 건조하고 흐름성 좋은 상태로 유지시킵니다. 의약품에서는 정제·캡슐의 활제(glidant)와 붕해 보조제, 비타민·향료·에센셜 오일 등 액상 활성성분을 분말로 만드는 캐리어로 활용됩니다.",
      items: isEn
        ? [
            "Anti-caking for salt, spices, milk powder, instant mixes",
            "Free-flow / glidant agent in tablets & capsules",
            "Liquid carrier for vitamins, flavors, essential oils",
            "Animal feed and premix carrier",
          ]
        : [
            "소금·향신료·분유·인스턴트 분말의 고결방지",
            "정제·캡슐의 활제(glidant) 및 붕해 보조",
            "비타민·향료·에센셜 오일의 분말화 캐리어",
            "동물 사료 및 프리믹스 캐리어",
          ],
    },
    {
      title: isEn ? "Plastics, Adhesives & Sealants" : "플라스틱 · 접착제 · 실란트",
      desc: isEn
        ? "In plastics and silicone rubber, precipitated silica acts as a reinforcing and anti-blocking filler — improving mechanical strength, dimensional stability and surface properties. In adhesives, sealants and putty, it provides thixotropic behavior so the product stays in place when applied vertically yet flows smoothly under shear. It is widely used in HTV/RTV silicone, polyurethane sealants, epoxy systems and pressure-sensitive adhesives."
        : "플라스틱과 실리콘 고무에서는 보강·안티블로킹 필러로 작용하여 기계적 강도·치수 안정성·표면 특성을 향상시킵니다. 접착제·실란트·퍼티에서는 틱소트로피(요변성)를 부여하여 수직면에 도포해도 흘러내리지 않고 전단력에는 부드럽게 흐르도록 만들어 줍니다. HTV/RTV 실리콘, 폴리우레탄 실란트, 에폭시 시스템, 점착제 등에 널리 사용됩니다.",
      items: isEn
        ? [
            "HTV / RTV silicone rubber reinforcement",
            "Thixotropic agent for sealants, adhesives, putty",
            "Anti-blocking and slip control in films",
          ]
        : [
            "HTV / RTV 실리콘 고무 보강",
            "실란트·접착제·퍼티의 틱소트로피 부여",
            "필름의 안티블로킹·슬립성 조절",
          ],
    },
    {
      title: isEn ? "Personal Care, Cosmetics & Industrial Carriers" : "퍼스널케어 · 화장품 · 산업용 캐리어",
      desc: isEn
        ? "Precipitated silica is a key abrasive and thickening agent in toothpaste, providing controlled cleaning power without damaging enamel. In cosmetics, it improves skin feel, oil absorption and pigment dispersion in powders, foundations and sunscreens. In agrochemicals and industrial chemistry it serves as a carrier to convert liquid pesticides, herbicides, catalysts and lubricants into easy-to-handle free-flowing powders."
        : "침전 실리카는 치약의 핵심 연마·증점 성분으로, 치아 법랑질을 손상시키지 않으면서도 효과적인 세정력을 제공합니다. 화장품에서는 파우더·파운데이션·자외선 차단제의 사용감을 개선하고 피지·유분을 흡수하며 안료를 균일하게 분산시켜 줍니다. 농약·산업용 화학에서는 액상 농약·제초제·촉매·윤활제를 다루기 쉬운 분말로 만드는 캐리어로 활용됩니다.",
      items: isEn
        ? [
            "Toothpaste abrasive and thickener",
            "Cosmetic powders, foundations, sunscreens",
            "Liquid pesticide / catalyst / lubricant carrier",
          ]
        : [
            "치약의 연마·증점 성분",
            "파우더·파운데이션·자외선 차단제",
            "액상 농약·촉매·윤활제 캐리어",
          ],
    },
  ];

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
            PRECIPITATED SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {isEn ? "Precipitated Silica Applications" : "침전/침강 실리카 응용 분야"}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {isEn
              ? "Precipitated silica is one of the most universally used forms of synthetic amorphous silicon dioxide. From green tires and high-performance rubber to paints, food, pharmaceuticals, cosmetics, agrochemicals and industrial carriers — almost every modern industry uses it as a reinforcement, rheology modifier, anti-caking agent or functional carrier."
              : "침전 실리카는 합성 무정형 이산화규소 중 가장 폭넓게 사용되는 형태입니다. 그린타이어와 고기능성 고무 제품, 페인트·잉크·접착제, 식품·의약품·화장품, 농약·산업용 캐리어에 이르기까지 — 거의 모든 현대 산업에서 보강재·레올로지 조절제·고결방지제·기능성 캐리어로 사용되고 있습니다."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
        <div className="space-y-8">
          {sections.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 md:p-10 shadow-sm transition hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-bold tracking-tight md:text-2xl">{s.title}</h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/products/precipitated-silica/"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {isEn ? "View Precipitated Silica Products" : "침전 실리카 제품 보기"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default PrecipitatedSilicaApplications;
