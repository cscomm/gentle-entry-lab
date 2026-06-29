import { Link } from "@/lib/router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

const PrecipitatedSilicaApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const sections = [
    {
      title: t(
        "고무 보강재 (Rubber Reinforcement)",
        "Rubber Reinforcement",
        "ゴム補強材(Rubber Reinforcement)"
      ),
      desc: t(
        "침전 실리카는 고무 산업에서 카본블랙을 대체하는 가장 대표적인 비흑색 보강재입니다. 높은 비표면적(BET)과 조절된 흡유량(DBP)을 통해 고무 사슬과 강하게 결합하여 인장강도·인열강도·내마모성·습윤 노면 접지력(wet grip)을 크게 향상시키며, 구름 저항(rolling resistance)을 낮춰 연비를 개선하는 '그린타이어'의 핵심 원료로 사용됩니다. 타이어 외에도 신발 밑창, 컨베이어 벨트·호스·V벨트, 실리콘 고무, 산업용 패킹·가스켓 등 고기능성 고무 제품 전반에 적용됩니다.",
        "Precipitated silica is one of the most important non-black reinforcing fillers for rubber. With high BET surface area and controlled DBP oil absorption, it bonds tightly to polymer chains, dramatically improving tensile strength, tear resistance, abrasion resistance and wet grip — the core property that makes 'green tires' possible by reducing rolling resistance and fuel consumption. Beyond tires, it reinforces shoe soles, conveyor belts, hoses, V-belts, seals, gaskets, silicone rubber and high-performance industrial rubber goods.",
        "沈降シリカは、ゴム業界においてカーボンブラックに代わる代表的な非黒色補強材です。高い比表面積(BET)と精密に制御された吸油量(DBP)によりポリマー鎖と強固に結合し、引張強度・引裂強度・耐摩耗性・ウェットグリップ性能を大幅に向上させます。転がり抵抗(rolling resistance)を低減し、燃費を改善する「グリーンタイヤ」の中核原料として広く採用されています。タイヤ用途のほか、靴底、コンベヤーベルト・ホース・Vベルト、シリコーンゴム、産業用パッキン・ガスケットなど、高機能ゴム製品全般に使用されています。"
      ),
      items: [
        t(
          "그린타이어 / 고성능 타이어 (저구름저항·웻 그립 향상)",
          "Green tires / high-performance tires (lower rolling resistance, better wet grip)",
          "グリーンタイヤ / 高性能タイヤ(低転がり抵抗・ウェットグリップ向上)"
        ),
        t(
          "신발 밑창, 스포츠 용품, 산업용 고무 부품",
          "Shoe soles, sports goods, industrial rubber parts",
          "靴底、スポーツ用品、産業用ゴム部品"
        ),
        t(
          "실리콘 고무, 실란트, 가스켓, 호스, 벨트",
          "Silicone rubber, sealants, gaskets, hoses, belts",
          "シリコーンゴム、シーラント、ガスケット、ホース、ベルト"
        ),
      ],
    },
    {
      title: t("페인트 · 코팅 · 잉크", "Paints, Coatings & Inks", "塗料・コーティング・インキ"),
      desc: t(
        "다공성 구조와 높은 흡유량, 화학적 안정성을 바탕으로 침전 실리카는 페인트·코팅·인쇄 잉크 산업에서 다목적 첨가제로 사용됩니다. 광택을 제어하는 소광제(matting agent), 안료의 침강을 막고 점도를 조절하는 침강방지·레올로지 조절제, 소포제 캐리어, 안료 분산제 등 한 가지 소재로 여러 기능을 동시에 구현합니다. 표면 처리된 등급은 목재·금속·플라스틱·가죽 코팅에서 균일한 무광 효과와 함께 도막의 투명성과 내스크래치성을 동시에 유지시켜 줍니다.",
        "Thanks to its porous structure, high oil absorption and chemical inertness, precipitated silica works as a multi-functional additive in paints, coatings and printing inks. It acts as a matting agent (controlling gloss), an anti-settling and rheology modifier (suspending pigments and preventing hard sediment), a defoamer carrier, and a pigment dispersion aid. Surface-treated grades give uniform matte finishes on wood, metal, plastic and leather coatings, while keeping film clarity and scratch resistance high.",
        "多孔質構造・高い吸油量・優れた化学的安定性を備えた沈降シリカは、塗料・コーティング・印刷インキ業界において多機能添加剤として活用されます。光沢を制御する艶消し剤(マットエージェント)、顔料の沈降を防ぎ粘度を調整する沈降防止・レオロジー調整剤、消泡剤キャリア、顔料分散助剤など、一種類の素材で複数の機能を同時に発揮します。表面処理グレードは、木材・金属・プラスチック・皮革コーティングにおいて均一なマット仕上げを実現しながら、塗膜の透明性と耐スクラッチ性を高水準で維持します。"
      ),
      items: [
        t(
          "목재 · 코일 · 가죽 · UV 도료의 소광제",
          "Matting agent for wood / coil / leather / UV coatings",
          "木材・コイル・皮革・UV塗料の艶消し剤"
        ),
        t(
          "침강 방지 · 증점 · 레올로지 조절",
          "Anti-settling, thickening and rheology control",
          "沈降防止・増粘・レオロジー調整"
        ),
        t(
          "소포제 캐리어 · 안료 분산제",
          "Defoamer carrier and pigment dispersion aid",
          "消泡剤キャリア・顔料分散助剤"
        ),
        t(
          "오프셋·UV·스크린 인쇄 잉크",
          "Printing inks (offset, UV, screen)",
          "オフセット・UV・スクリーン印刷インキ"
        ),
      ],
    },
    {
      title: t("식품 · 의약품 · 사료", "Food & Pharmaceuticals", "食品・医薬品・飼料"),
      desc: t(
        "식·의약품 등급의 침전 실리카는 고결방지제(E551), 분체 유동성 향상제, 액상 원료의 분말화 캐리어로 사용됩니다. 높은 비표면적이 수분과 오일 성분을 효과적으로 흡착하여 분말 식품·향신료·소금·분유·인스턴트 음료·동물 사료를 항상 건조하고 흐름성 좋은 상태로 유지시킵니다. 의약품에서는 정제·캡슐의 활제(glidant)와 붕해 보조제, 비타민·향료·에센셜 오일 등 액상 활성성분을 분말로 만드는 캐리어로 활용됩니다.",
        "Food- and pharma-grade precipitated silica is approved as an anti-caking agent (E551), free-flow agent and carrier for liquid actives. Its high specific surface area absorbs moisture and oily components, keeping powdered foods, spices, salt, dairy powders, instant beverages and animal feed dry and free-flowing. In tablets and capsules, it functions as a glidant and disintegration aid, and as a liquid-to-powder carrier for vitamins, flavors and essential oils.",
        "食品・医薬品グレードの沈降シリカは、固結防止剤(E551)、粉体流動性向上剤、液状原料の粉末化キャリアとして使用されます。高い比表面積により水分や油分を効果的に吸着し、粉末食品・スパイス・食塩・粉ミルク・インスタント飲料・動物用飼料を常に乾燥した良好な流動性で保ちます。医薬品分野では錠剤・カプセルの滑沢剤(glidant)・崩壊補助剤として、またビタミン・香料・エッセンシャルオイルなど液状有効成分を粉末化するキャリアとして広く活用されています。"
      ),
      items: [
        t(
          "소금·향신료·분유·인스턴트 분말의 고결방지",
          "Anti-caking for salt, spices, milk powder, instant mixes",
          "食塩・スパイス・粉ミルク・インスタント粉末の固結防止"
        ),
        t(
          "정제·캡슐의 활제(glidant) 및 붕해 보조",
          "Free-flow / glidant agent in tablets & capsules",
          "錠剤・カプセルの滑沢剤(glidant)・崩壊補助"
        ),
        t(
          "비타민·향료·에센셜 오일의 분말화 캐리어",
          "Liquid carrier for vitamins, flavors, essential oils",
          "ビタミン・香料・エッセンシャルオイルの粉末化キャリア"
        ),
        t(
          "동물 사료 및 프리믹스 캐리어",
          "Animal feed and premix carrier",
          "動物用飼料・プレミックスキャリア"
        ),
      ],
    },
    {
      title: t(
        "플라스틱 · 접착제 · 실란트",
        "Plastics, Adhesives & Sealants",
        "プラスチック・接着剤・シーラント"
      ),
      desc: t(
        "플라스틱과 실리콘 고무에서는 보강·안티블로킹 필러로 작용하여 기계적 강도·치수 안정성·표면 특성을 향상시킵니다. 접착제·실란트·퍼티에서는 틱소트로피(요변성)를 부여하여 수직면에 도포해도 흘러내리지 않고 전단력에는 부드럽게 흐르도록 만들어 줍니다. HTV/RTV 실리콘, 폴리우레탄 실란트, 에폭시 시스템, 점착제 등에 널리 사용됩니다.",
        "In plastics and silicone rubber, precipitated silica acts as a reinforcing and anti-blocking filler — improving mechanical strength, dimensional stability and surface properties. In adhesives, sealants and putty, it provides thixotropic behavior so the product stays in place when applied vertically yet flows smoothly under shear. It is widely used in HTV/RTV silicone, polyurethane sealants, epoxy systems and pressure-sensitive adhesives.",
        "プラスチックやシリコーンゴムでは補強・アンチブロッキングフィラーとして機能し、機械的強度・寸法安定性・表面特性を向上させます。接着剤・シーラント・パテにはチキソトロピー(揺変性)を付与し、垂直面に塗布しても垂れずに、せん断力下では滑らかに流れる特性を実現します。HTV/RTVシリコーン、ポリウレタンシーラント、エポキシ系、感圧接着剤など幅広い用途で使用されています。"
      ),
      items: [
        t(
          "HTV / RTV 실리콘 고무 보강",
          "HTV / RTV silicone rubber reinforcement",
          "HTV / RTVシリコーンゴム補強"
        ),
        t(
          "실란트·접착제·퍼티의 틱소트로피 부여",
          "Thixotropic agent for sealants, adhesives, putty",
          "シーラント・接着剤・パテへのチキソトロピー付与"
        ),
        t(
          "필름의 안티블로킹·슬립성 조절",
          "Anti-blocking and slip control in films",
          "フィルムのアンチブロッキング・スリップ性調整"
        ),
      ],
    },
    {
      title: t(
        "퍼스널케어 · 화장품 · 산업용 캐리어",
        "Personal Care, Cosmetics & Industrial Carriers",
        "パーソナルケア・化粧品・産業用キャリア"
      ),
      desc: t(
        "침전 실리카는 치약의 핵심 연마·증점 성분으로, 치아 법랑질을 손상시키지 않으면서도 효과적인 세정력을 제공합니다. 화장품에서는 파우더·파운데이션·자외선 차단제의 사용감을 개선하고 피지·유분을 흡수하며 안료를 균일하게 분산시켜 줍니다. 농약·산업용 화학에서는 액상 농약·제초제·촉매·윤활제를 다루기 쉬운 분말로 만드는 캐리어로 활용됩니다.",
        "Precipitated silica is a key abrasive and thickening agent in toothpaste, providing controlled cleaning power without damaging enamel. In cosmetics, it improves skin feel, oil absorption and pigment dispersion in powders, foundations and sunscreens. In agrochemicals and industrial chemistry it serves as a carrier to convert liquid pesticides, herbicides, catalysts and lubricants into easy-to-handle free-flowing powders.",
        "沈降シリカは歯磨剤の主要な研磨・増粘成分として、エナメル質を傷つけずに効果的な洗浄力を発揮します。化粧品ではパウダー・ファンデーション・日焼け止めの使用感を改善し、皮脂・油分を吸収しながら顔料を均一に分散させます。農薬・産業用化学分野では、液状農薬・除草剤・触媒・潤滑剤を扱いやすい流動性粉末へ変換するキャリアとして活用されています。"
      ),
      items: [
        t(
          "치약의 연마·증점 성분",
          "Toothpaste abrasive and thickener",
          "歯磨剤の研磨・増粘成分"
        ),
        t(
          "파우더·파운데이션·자외선 차단제",
          "Cosmetic powders, foundations, sunscreens",
          "パウダー・ファンデーション・日焼け止め"
        ),
        t(
          "액상 농약·촉매·윤활제 캐리어",
          "Liquid pesticide / catalyst / lubricant carrier",
          "液状農薬・触媒・潤滑剤のキャリア"
        ),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentAtTop={false} />

      <section className="bg-gradient-to-br from-secondary/60 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/#applications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            ← {t("응용 분야", "Applications", "用途分野")}
          </Link>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            PRECIPITATED SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("침전/침강 실리카 응용 분야", "Precipitated Silica Applications", "沈降シリカの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(
              "침전 실리카는 합성 무정형 이산화규소 중 가장 폭넓게 사용되는 형태입니다. 그린타이어와 고기능성 고무 제품, 페인트·잉크·접착제, 식품·의약품·화장품, 농약·산업용 캐리어에 이르기까지 — 거의 모든 현대 산업에서 보강재·레올로지 조절제·고결방지제·기능성 캐리어로 사용되고 있습니다.",
              "Precipitated silica is one of the most universally used forms of synthetic amorphous silicon dioxide. From green tires and high-performance rubber to paints, food, pharmaceuticals, cosmetics, agrochemicals and industrial carriers — almost every modern industry uses it as a reinforcement, rheology modifier, anti-caking agent or functional carrier.",
              "沈降シリカは、合成非晶質二酸化ケイ素の中でも最も幅広く利用されている形態です。グリーンタイヤや高性能ゴム製品、塗料・インキ・接着剤、食品・医薬品・化粧品、農薬・産業用キャリアに至るまで、現代産業のほぼあらゆる分野で補強材・レオロジー調整剤・固結防止剤・機能性キャリアとして使用されています。"
            )}
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
            {t("침전 실리카 제품 보기", "View Precipitated Silica Products", "沈降シリカ製品を見る")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default PrecipitatedSilicaApplications;
