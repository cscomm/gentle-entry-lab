import { Link } from "@/lib/router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

const FumedSilicaApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const sections = [
    {
      title: t(
        "실리콘 고무 보강 (HTV · RTV · LSR)",
        "Silicone Rubber Reinforcement (HTV / RTV / LSR)",
        "シリコーンゴム補強(HTV・RTV・LSR)"
      ),
      desc: t(
        "흄드 실리카는 실리콘 고무 산업에서 가장 중요한 보강 필러입니다. 일반 고무에 사용되는 카본블랙과 달리, 실리콘 엘라스토머는 흄드 실리카 없이는 실용적인 기계적 강도를 얻을 수 없습니다. 나노 단위의 1차 입자(7~40 nm)와 사슬형 응집 구조가 실리콘 폴리머 사슬과 강력한 물리·화학적 네트워크를 형성하여 인장강도·인열강도·신장률·경도·치수 안정성을 극적으로 향상시킵니다. 친수성 등급(BET 150~300 m²/g)은 투명도와 극한 강도가 중요한 HTV(고온 가황) 실리콘 고무에 주로 사용되며, 표면 처리된 소수성 등급은 RTV(상온 경화) 1액형·2액형 실리콘 시스템, 의료·유아용품용 LSR(액상 실리콘 고무), 케이블 절연재·키패드·주방용품·자동차 점화 케이블·가스켓·O링·고전압 절연 부싱 등에 필수적으로 사용됩니다.",
        "Fumed silica is the single most important reinforcing filler for silicone rubber. Unlike carbon black used in conventional rubber, silicone elastomers cannot achieve usable mechanical strength without fumed silica. Its nanoscale primary particles (around 7–40 nm) and chain-like aggregate structure form a strong physical and chemical network with the silicone polymer chains, dramatically improving tensile strength, tear resistance, elongation at break, hardness and dimensional stability. Hydrophilic grades (e.g. BET 150–300 m²/g) are typically used for HTV (high-temperature vulcanizing) silicone rubber where transparency and ultimate strength are critical, while surface-treated hydrophobic grades are essential for RTV (room-temperature vulcanizing) one-part and two-part silicone systems, LSR (liquid silicone rubber) for medical and baby-care products, and high-consistency rubber used in cable insulation, keypads, kitchenware, automotive ignition cables, gaskets, O-rings, and high-voltage insulator sheds.",
        "ヒュームドシリカは、シリコーンゴム産業において最も重要な補強フィラーです。一般ゴムに用いられるカーボンブラックとは異なり、シリコーンエラストマーはヒュームドシリカなしでは実用的な機械強度を得ることができません。ナノオーダーの一次粒子(7~40 nm)と鎖状の凝集構造がシリコーンポリマー鎖と強固な物理・化学的ネットワークを形成し、引張強度・引裂強度・伸び・硬度・寸法安定性を飛躍的に向上させます。親水性グレード(BET 150~300 m²/g)は透明性と極限強度が求められるHTV(高温加硫)シリコーンゴムに、表面処理された疎水性グレードはRTV(室温硬化)1液型・2液型シリコーン、医療・ベビーケア用LSR(液状シリコーンゴム)、ケーブル絶縁材・キーパッド・キッチン用品・自動車点火ケーブル・ガスケット・Oリング・高電圧絶縁ブッシングなどに不可欠です。–60℃から+250℃の広い温度域で弾性と化学的不活性を維持できるため、航空宇宙シール・医療用インプラント・食品接触用途で圧倒的なシェアを持ちます。"
      ),
      items: [
        t(
          "HTV 실리콘 고무 — 케이블 절연, 자동차 부츠, 키패드",
          "HTV silicone rubber — cable insulation, automotive boots, keypads",
          "HTVシリコーンゴム — ケーブル絶縁、自動車用ブーツ、キーパッド"
        ),
        t(
          "RTV 1액형/2액형 실란트 — 건축·전자 포팅·금형 제작",
          "RTV 1K/2K sealants — construction, electronics potting, mold-making",
          "RTV 1液型/2液型シーラント — 建築、電子ポッティング、金型製作"
        ),
        t(
          "LSR — 의료기기·유아용 젖꼭지·소프트터치 소비재",
          "LSR — medical devices, baby bottle nipples, soft-touch consumer goods",
          "LSR — 医療機器、哺乳瓶ニップル、ソフトタッチ消費財"
        ),
        t(
          "고전압 절연 부싱·항공우주 O링·식품용 가스켓",
          "High-voltage insulators, aerospace O-rings, food-contact gaskets",
          "高電圧絶縁ブッシング、航空宇宙用Oリング、食品接触ガスケット"
        ),
      ],
    },
    {
      title: t(
        "실란트 · 접착제 · 안티-새깅",
        "Sealants, Adhesives & Anti-Sagging",
        "シーラント・接着剤・アンチサギング"
      ),
      desc: t(
        "흄드 실리카는 실란트·접착제·퍼티·코킹의 표준 레올로지 조절제입니다. 매우 낮은 첨가량(보통 2~10 wt%)에서도 뚜렷한 틱소트로피(요변성)를 부여하여, 수직 표면에 도포해도 흘러내리거나 처지지 않으면서(Anti-Sagging) 카트리지에서 짜내거나 믹싱 노즐에서 전단을 받을 때는 부드럽게 흐르도록 만듭니다. 이러한 'shear-thinning(전단 박화)' 특성은 수지 내에 분산된 흄드 실리카 응집체가 수소결합으로 형성한 3차원 네트워크가 전단력에 의해 일시적으로 끊어졌다가 정지 시 빠르게 재구성되기 때문입니다. 친수성 등급은 극성 시스템(에폭시·폴리우레탄·수성)에 적합하며, PDMS나 HMDS로 표면 처리된 소수성 등급은 실리콘·MS-폴리머·용제계 등 비극성 시스템에서 우수한 증점 효율·저장 안정성·내습성을 발휘합니다.",
        "Fumed silica is the industry-standard rheology modifier for sealants, adhesives, putties and caulks. Even at very low loadings (typically 2–10 wt%), it imparts pronounced thixotropic behavior — the material stays exactly where it is applied on a vertical surface (no sagging, no dripping) yet flows smoothly when squeezed from a cartridge or sheared by a mixing nozzle. Hydrophilic grades work best in polar systems (epoxy, polyurethane, water-based), while hydrophobic, after-treated grades (treated with PDMS or HMDS) provide superior thickening efficiency, storage stability and humidity resistance in non-polar systems such as silicone, MS-polymer and solvent-based formulations.",
        "ヒュームドシリカは、シーラント・接着剤・パテ・コーキング材における標準的なレオロジー調整剤です。ごく少量の添加(通常2~10 wt%)でも明確なチキソトロピー(揺変性)を付与し、垂直面に塗布しても垂れない(アンチサギング)一方、カートリッジから押し出したりミキシングノズルでせん断を受けた際にはスムーズに流れます。この「shear-thinning(ずり減粘)」特性は、樹脂中に分散したヒュームドシリカ凝集体が水素結合により形成する3次元ネットワークが、せん断力で一時的に破壊され、静止時に速やかに再構築される性質によるものです。親水性グレードは極性系(エポキシ・ポリウレタン・水系)に適しており、PDMSやHMDSで表面処理した疎水性グレードはシリコーン・MSポリマー・溶剤系などの非極性系で優れた増粘効率・保存安定性・耐湿性を発揮します。"
      ),
      items: [
        t(
          "실리콘·폴리우레탄 건축용 실란트",
          "Silicone & polyurethane construction sealants",
          "シリコーン・ポリウレタン建築用シーラント"
        ),
        t(
          "에폭시 구조 접착제·마린 퍼티",
          "Epoxy structural adhesives & marine putties",
          "エポキシ構造接着剤・マリンパテ"
        ),
        t(
          "MS-폴리머·하이브리드 실란트",
          "MS-polymer and hybrid sealants",
          "MSポリマー・ハイブリッドシーラント"
        ),
        t(
          "자동차 윈드실드·차체 접착제",
          "Automotive windshield & body adhesives",
          "自動車ウインドシールド・車体接着剤"
        ),
        t(
          "PVC 플라스티졸 코팅·차량 언더보디 코팅",
          "PVC plastisol coatings & underbody coatings",
          "PVCプラスチゾルコーティング・車両アンダーボディコーティング"
        ),
      ],
    },
    {
      title: t(
        "도료 · 코팅 · 잉크 · 불포화 폴리에스테르(UPR)",
        "Paints, Coatings, Inks & UPR",
        "塗料・コーティング・インキ・不飽和ポリエステル(UPR)"
      ),
      desc: t(
        "도료·코팅·인쇄 잉크에서 흄드 실리카는 레올로지 조절제, 침강 방지제, 소광 보조제, 방청 성능 향상제 역할을 동시에 수행합니다. 도막 내에서 약한 3차원 네트워크를 형성하여 TiO₂·산화철·알루미늄 플레이크와 같은 무거운 안료의 장기 저장 시 침강을 방지하고, 수직면 도포 시 흘러내림(sagging)을 막으며, 모서리 도장 피복성을 향상시킵니다. 인조대리석·젤코트·해양용 복합재용 불포화 폴리에스테르(UPR)에서는 소수성 흄드 실리카가 수직 몰드 도포와 섬유 자국(fiber print-through) 방지에 필요한 틱소트로피를 부여하면서도 경화 속도와 최종 기계적 특성을 그대로 유지시켜 줍니다.",
        "In paints, coatings and printing inks, fumed silica functions simultaneously as a rheology modifier, anti-settling agent, matting aid and corrosion-resistance enhancer. By forming a weak 3D network in the wet film, it prevents heavy pigments (such as TiO₂, iron oxide, aluminum flakes) from settling during long storage, eliminates sagging on vertical surfaces during application, and improves edge coverage. In unsaturated polyester resin (UPR) for solid surface, gel coats and marine composites, hydrophobic fumed silica provides the thixotropy required to coat vertical molds and prevent fiber-print-through while preserving cure speed and final mechanical properties.",
        "塗料・コーティング・印刷インキにおいて、ヒュームドシリカはレオロジー調整剤、沈降防止剤、艶消し助剤、防錆性能向上剤として同時に機能します。塗膜内に弱い3次元ネットワークを形成し、TiO₂・酸化鉄・アルミフレークなど比重の大きい顔料の長期保管時の沈降を防止し、垂直面塗布時の垂れ(サギング)を抑え、エッジカバー性を向上させます。人工大理石・ゲルコート・マリン複合材向け不飽和ポリエステル樹脂(UPR)では、疎水性ヒュームドシリカが垂直金型への塗布や繊維跡(fiber print-through)防止に必要なチキソトロピーを付与しつつ、硬化速度や最終的な機械特性を損なわずに維持します。"
      ),
      items: [
        t(
          "고비중 안료·메탈릭 도료의 침강 방지",
          "Anti-settling for heavy-pigment paints and metallic finishes",
          "高比重顔料・メタリック塗料の沈降防止"
        ),
        t(
          "산업용·목재·코일 도료의 소광제",
          "Matting agent for industrial, wood and coil coatings",
          "産業用・木材・コイル塗料の艶消し剤"
        ),
        t(
          "방청용 에폭시·징크-리치 프라이머",
          "Anti-corrosion epoxy / zinc-rich primers",
          "防錆用エポキシ・ジンクリッチプライマー"
        ),
        t(
          "UV·스크린·그라비어·오프셋 인쇄 잉크",
          "UV, screen, gravure and offset printing inks",
          "UV・スクリーン・グラビア・オフセット印刷インキ"
        ),
        t(
          "UPR 젤코트·인조대리석·해양 복합재",
          "UPR gel coats, solid surface, marine composites",
          "UPRゲルコート・人工大理石・マリン複合材"
        ),
      ],
    },
    {
      title: t(
        "화장품 · 퍼스널 케어 · 의약품",
        "Cosmetics, Personal Care & Pharmaceuticals",
        "化粧品・パーソナルケア・医薬品"
      ),
      desc: t(
        "의약품 등급의 흄드 실리카(Ph. Eur., USP/NF: Colloidal Silicon Dioxide)는 고형 제제에서 가장 널리 사용되는 부형제 중 하나입니다. 막대한 비표면적과 우수한 유동성을 바탕으로, 정제 타정 시 활제(glidant) 역할로 분말이 다이로 매끄럽게 흘러 들어가도록 하고, 정제 매트릭스에 물이 침투하도록 돕는 붕해 보조제, 분말 블렌드의 고결 방지제, 흡습성 원료의 수분·유분을 흡착하여 분체 흐름성을 유지시키는 안정화제로 작용합니다. 화장품에서는 젤·자외선 차단제·마스카라·파운데이션·립스틱의 핵심 증점·안정화제로, 매끄러운 사용감, 피지·유분 조절, 색조 화장품의 지속력과 발색력을 향상시킵니다.",
        "Pharmaceutical-grade fumed silica (Ph. Eur., USP/NF: Colloidal Silicon Dioxide) is one of the most widely used excipients in solid dosage forms. With its enormous surface area and free-flowing nature, it acts as a glidant in tablet compression, a disintegrant aid, an anti-caking agent and a stabilizer that adsorbs moisture and oils to keep hygroscopic actives free-flowing. In cosmetics, fumed silica is the key thickener and stabilizer for gels, sunscreens, mascaras, foundations and lipsticks — it gives a silky skin feel, controls sebum and oil, and improves the durability and color payoff of color cosmetics.",
        "医薬品グレードのヒュームドシリカ(Ph. Eur., USP/NF: コロイダル二酸化ケイ素)は、固形製剤において最も広く使用される添加剤の一つです。極めて大きな比表面積と優れた流動性により、錠剤打錠時の滑沢剤(glidant)として粉体がダイへ滑らかに流れ込むようにし、錠剤マトリックスへの水の浸透を助ける崩壊補助剤、粉体ブレンドの固結防止剤、吸湿性原料の水分・油分を吸着して粉体流動性を維持する安定化剤として作用します。化粧品ではジェル・日焼け止め・マスカラ・ファンデーション・口紅の中核となる増粘・安定化剤として、シルキーな使用感、皮脂・油分コントロール、メイクアップの持続力・発色性向上に寄与します。"
      ),
      items: [
        t(
          "정제 활제·붕해 보조·고결 방지 부형제",
          "Tablet glidant, disintegrant aid, anti-caking excipient",
          "錠剤滑沢剤・崩壊補助・固結防止用添加剤"
        ),
        t(
          "현탁액·연고제 안정화제",
          "Suspension and ointment stabilizer",
          "懸濁液・軟膏剤の安定化剤"
        ),
        t(
          "색조 화장품: 파운데이션·마스카라·립스틱·아이섀도",
          "Color cosmetics: foundations, mascara, lipsticks, eyeshadows",
          "メイクアップ化粧品:ファンデーション、マスカラ、口紅、アイシャドウ"
        ),
        t(
          "자외선 차단제·매트 프라이머·피지 컨트롤 파우더",
          "Sunscreens, mattifying primers, anti-shine powders",
          "日焼け止め、マットプライマー、皮脂コントロールパウダー"
        ),
        t(
          "헤어 케어·데오드란트·치약",
          "Hair care, deodorants, toothpaste",
          "ヘアケア、デオドラント、歯磨剤"
        ),
      ],
    },
    {
      title: t(
        "전자재료 · 케이블 컴파운드 · 단열재",
        "Electronics, Cable Compounds & Thermal Insulation",
        "電子材料・ケーブルコンパウンド・断熱材"
      ),
      desc: t(
        "고순도 흄드 실리카는 첨단 전자·에너지 산업의 핵심 원료입니다. 반도체 패키징용 에폭시 몰딩 컴파운드(EMC)에서 흐름성을 제어하고 실리콘 다이와의 열팽창 계수 차이를 줄이며 흡습률을 낮춰, 리플로우 솔더링 시 발생하는 'popcorn 현상'을 방지합니다. 실리카 에어로젤과 진공 단열 패널(VIP) 제조에서는 흄드 실리카가 정지 공기보다 낮은 열전도율을 구현하는 나노 다공성 네트워크를 형성하여 건축물 외피, LNG 운반선, 인공위성, 고급 가전제품의 단열재로 사용됩니다. 리튬이온 배터리 전해질·겔 폴리머 전해질에서는 액상 전해질을 고정하는 나노 매트릭스 역할로 안전성을 향상시키며, 레이저 프린터용 토너 분말에서는 소수성 흄드 실리카가 외첨제로 사용됩니다.",
        "High-purity fumed silica is a critical raw material for advanced electronic and energy applications. In epoxy molding compounds (EMC) for semiconductor packaging it controls flow, lowers thermal expansion mismatch with silicon dies, and reduces moisture pickup, preventing 'popcorn' failure during reflow soldering. In silica aerogel manufacturing and vacuum insulation panels (VIP), fumed silica forms the nanoporous network that delivers thermal conductivities lower than still air — used in building envelopes, cryogenic LNG carriers, satellites and high-end appliances. In lithium-ion battery electrolytes it acts as a nano-scale matrix to immobilize liquid electrolyte and improve safety. In toner powders for laser printers, hydrophobic fumed silica is the external additive that gives perfect flowability and triboelectric charging behavior.",
        "高純度ヒュームドシリカは、先端電子・エネルギー産業の中核原料です。半導体パッケージング用エポキシモールディングコンパウンド(EMC)では流動性を制御し、シリコンダイとの熱膨張率差を低減、吸湿率を下げてリフローはんだ付け時のポップコーン現象を防止します。シリカエアロゲルや真空断熱パネル(VIP)製造では、ヒュームドシリカが静止空気よりも低い熱伝導率を実現するナノ多孔ネットワークを形成し、建築外皮、極低温LNG運搬船、人工衛星、高級家電の断熱材として活用されます。リチウムイオン電池の電解液・ゲルポリマー電解質では、液状電解液を固定するナノマトリックスとして安全性を向上。レーザープリンタ用トナー粉末では疎水性ヒュームドシリカが外添剤として優れた流動性と摩擦帯電特性を付与します。"
      ),
      items: [
        t(
          "반도체 EMC(에폭시 몰딩 컴파운드)·언더필",
          "Semiconductor EMC (epoxy molding compound) and underfill",
          "半導体EMC(エポキシモールディングコンパウンド)・アンダーフィル"
        ),
        t(
          "고전압 케이블·폴리머 절연 부싱용 실리콘 절연재",
          "Silicone insulation for HV cables and polymer insulators",
          "高電圧ケーブル・ポリマー絶縁ブッシング用シリコーン絶縁材"
        ),
        t(
          "실리카 에어로젤·진공 단열 패널(VIP)",
          "Silica aerogel and vacuum insulation panels (VIP)",
          "シリカエアロゲル・真空断熱パネル(VIP)"
        ),
        t(
          "리튬이온 배터리 전해질 첨가제·분리막 코팅",
          "Li-ion battery electrolyte additive and separator coating",
          "リチウムイオン電池電解液添加剤・セパレータコーティング"
        ),
        t(
          "레이저 프린터·복사기 토너 외첨제",
          "Laser printer / copier toner external additive",
          "レーザープリンタ・複写機トナー外添剤"
        ),
      ],
    },
    {
      title: t(
        "식품 · 농약 · 산업용 캐리어",
        "Food, Agrochemicals & Industrial Carriers",
        "食品・農薬・産業用キャリア"
      ),
      desc: t(
        "식품 등급의 흄드 실리카(E551)는 전 세계에서 고결방지제·분체 유동성 향상제로 인정받고 있습니다. 막대한 비표면적이 주변 수분과 유분을 흡착하여, 식염·향신료·분유·인스턴트 커피·수프 믹스·유아용 분유·단백질 분말 같은 미세 분체가 장기간 보관이나 온도 변화 후에도 건조하고 흐름성 좋게 유지되어 덩어리지지 않도록 합니다. 동일한 나노 입자가 액상 농약·제초제·살균제·비타민·에센셜 오일·향료·액상 촉매를 안정적인 자유 유동 분말로 만드는 캐리어 매트릭스로 작용하여 보관 수명 연장, 정밀 계량, 정제·과립 제형화를 가능케 합니다.",
        "Food-grade fumed silica (E551) is approved worldwide as an anti-caking and free-flow agent. Its enormous surface area absorbs ambient moisture and oily components, keeping fine powders like table salt, spices, powdered milk, instant coffee, soup mixes, infant formula and protein powders dry, pourable and free of lumps even after long storage or temperature cycling. The same nano-particles act as a carrier matrix that converts liquid pesticides, herbicides, fungicides, vitamins, essential oils, fragrances and liquid catalysts into stable, free-flowing powders.",
        "食品グレードのヒュームドシリカ(E551)は、世界各国で固結防止剤・粉体流動性向上剤として認可されています。極めて大きな比表面積が周囲の水分・油分を吸着し、食塩・スパイス・粉ミルク・インスタントコーヒー・スープミックス・乳児用粉ミルク・プロテインパウダーなどの微粉体を、長期保管や温度変化後も乾燥・良好な流動性を保ち、ダマにならない状態で維持します。同じナノ粒子は、液状農薬・除草剤・殺菌剤・ビタミン・エッセンシャルオイル・香料・液状触媒を安定した自由流動性粉末へ変換するキャリアマトリックスとして機能し、保存期間延長、精密計量、錠剤・顆粒化を可能にします。"
      ),
      items: [
        t(
          "식염·향신료·분유·유아용 분유의 고결 방지",
          "Anti-caking in salt, spices, milk powder, infant formula",
          "食塩・スパイス・粉ミルク・乳児用粉ミルクの固結防止"
        ),
        t(
          "액상 농약·향료·비타민의 분말화 캐리어",
          "Liquid pesticide / fragrance / vitamin powderization carrier",
          "液状農薬・香料・ビタミンの粉末化キャリア"
        ),
        t(
          "사료 프리믹스·미량 원료의 혼합 균일성",
          "Animal feed premix and micro-ingredient uniformity",
          "飼料プレミックス・微量原料の混合均一性"
        ),
        t(
          "소포제 캐리어·난연제 시너지스트",
          "Defoamer carrier, fire-retardant synergist",
          "消泡剤キャリア・難燃剤シナジスト"
        ),
        t(
          "엔지니어링 열가소성 수지 보강 필러",
          "Reinforcing filler for engineering thermoplastics",
          "エンジニアリング熱可塑性樹脂用補強フィラー"
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
            FUMED SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("흄드 실리카 응용 분야", "Fumed Silica Applications", "ヒュームドシリカの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(
              "흄드 실리카는 현대 산업에서 가장 다재다능한 나노 기능성 첨가제입니다. 사염화규소(SiCl₄)의 화염가수분해로 제조되며, 보강·틱소트로피·안티-새깅·침강 방지·소광·유동성 향상·단열의 독특한 조합을 동시에 제공하여 실리콘 고무·실란트·접착제·도료·화장품·의약품·식품·전자·배터리·고성능 단열재 분야에서 없어서는 안 될 소재로 자리잡고 있습니다.",
              "Fumed silica is the most versatile nano-scale functional additive in modern industry. Produced by flame hydrolysis of SiCl₄, it brings unique combinations of reinforcement, thixotropy, anti-sagging, anti-settling, matting, free-flow and insulation — making it indispensable in silicone rubber, sealants, adhesives, paints, cosmetics, pharmaceuticals, food, electronics, batteries and high-performance insulation.",
              "ヒュームドシリカは、現代産業において最も多機能なナノスケール機能性添加剤です。四塩化ケイ素(SiCl₄)の火炎加水分解により製造され、補強・チキソトロピー・アンチサギング・沈降防止・艶消し・流動性向上・断熱という独自の特性の組み合わせを同時に発揮します。シリコーンゴム・シーラント・接着剤・塗料・化粧品・医薬品・食品・電子部材・電池・高性能断熱材など、幅広い分野で欠かせない素材として活用されています。"
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
            to="/products/fumed-silica/"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {t("흄드 실리카 제품 보기", "View Fumed Silica Products", "ヒュームドシリカ製品を見る")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default FumedSilicaApplications;
