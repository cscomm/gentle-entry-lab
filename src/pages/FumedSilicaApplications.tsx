import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";

const FumedSilicaApplications = () => {
  const { lang } = useLang();
  const isEn = lang !== "ko"; // ja falls back to English for hardcoded literal blocks

  const sections = [
    {
      title: isEn ? "Silicone Rubber Reinforcement (HTV / RTV / LSR)" : "실리콘 고무 보강 (HTV · RTV · LSR)",
      desc: isEn
        ? "Fumed silica is the single most important reinforcing filler for silicone rubber. Unlike carbon black used in conventional rubber, silicone elastomers cannot achieve usable mechanical strength without fumed silica. Its nanoscale primary particles (around 7–40 nm) and chain-like aggregate structure form a strong physical and chemical network with the silicone polymer chains, dramatically improving tensile strength, tear resistance, elongation at break, hardness and dimensional stability. Hydrophilic grades (e.g. BET 150–300 m²/g) are typically used for HTV (high-temperature vulcanizing) silicone rubber where transparency and ultimate strength are critical, while surface-treated hydrophobic grades are essential for RTV (room-temperature vulcanizing) one-part and two-part silicone systems, LSR (liquid silicone rubber) for medical and baby-care products, and high-consistency rubber used in cable insulation, keypads, kitchenware, automotive ignition cables, gaskets, O-rings, and high-voltage insulator sheds. Without fumed silica, silicone rubber would tear like soft cheese — with it, the same material can endure repeated mechanical stress at temperatures from –60°C to +250°C while maintaining its elasticity and chemical inertness, which is why it dominates aerospace seals, medical implants and food-contact applications."
        : "흄드 실리카는 실리콘 고무 산업에서 가장 중요한 보강 필러입니다. 일반 고무에 사용되는 카본블랙과 달리, 실리콘 엘라스토머는 흄드 실리카 없이는 실용적인 기계적 강도를 얻을 수 없습니다. 나노 단위의 1차 입자(7~40 nm)와 사슬형 응집 구조가 실리콘 폴리머 사슬과 강력한 물리·화학적 네트워크를 형성하여 인장강도·인열강도·신장률·경도·치수 안정성을 극적으로 향상시킵니다. 친수성 등급(BET 150~300 m²/g)은 투명도와 극한 강도가 중요한 HTV(고온 가황) 실리콘 고무에 주로 사용되며, 표면 처리된 소수성 등급은 RTV(상온 경화) 1액형·2액형 실리콘 시스템, 의료·유아용품용 LSR(액상 실리콘 고무), 케이블 절연재·키패드·주방용품·자동차 점화 케이블·가스켓·O링·고전압 절연 부싱 등에 필수적으로 사용됩니다. 흄드 실리카가 없으면 실리콘 고무는 두부처럼 찢어지지만, 첨가하면 –60℃에서 +250℃에 이르는 극한 온도 범위에서 반복적인 기계적 스트레스를 견디면서 탄성과 화학적 불활성을 유지할 수 있어 항공우주 실링·의료용 임플란트·식품 접촉 용도에서 압도적인 점유율을 가집니다.",
      items: isEn
        ? [
            "HTV silicone rubber — cable insulation, automotive boots, keypads",
            "RTV 1K/2K sealants — construction, electronics potting, mold-making",
            "LSR — medical devices, baby bottle nipples, soft-touch consumer goods",
            "High-voltage insulators, aerospace O-rings, food-contact gaskets",
          ]
        : [
            "HTV 실리콘 고무 — 케이블 절연, 자동차 부츠, 키패드",
            "RTV 1액형/2액형 실란트 — 건축·전자 포팅·금형 제작",
            "LSR — 의료기기·유아용 젖꼭지·소프트터치 소비재",
            "고전압 절연 부싱·항공우주 O링·식품용 가스켓",
          ],
    },
    {
      title: isEn ? "Sealants, Adhesives & Anti-Sagging" : "실란트 · 접착제 · 안티-새깅",
      desc: isEn
        ? "Fumed silica is the industry-standard rheology modifier for sealants, adhesives, putties and caulks. Even at very low loadings (typically 2–10 wt%), it imparts pronounced thixotropic behavior — the material stays exactly where it is applied on a vertical surface (no sagging, no dripping) yet flows smoothly when squeezed from a cartridge or sheared by a mixing nozzle. This unique 'shear-thinning' property is created by hydrogen-bonded 3D networks of fumed silica aggregates dispersed in the resin, which break down under shear and rapidly rebuild at rest. It is the key additive that makes modern silicone bath sealants, polyurethane construction adhesives, epoxy structural bonders, MS-polymer sealants, automotive windshield adhesives and PVC plastisols possible. Hydrophilic grades work best in polar systems (epoxy, polyurethane, water-based), while hydrophobic, after-treated grades (treated with PDMS or HMDS) provide superior thickening efficiency, storage stability and humidity resistance in non-polar systems such as silicone, MS-polymer and solvent-based formulations — and are also used to prevent unwanted moisture-induced cure during storage."
        : "흄드 실리카는 실란트·접착제·퍼티·코킹의 표준 레올로지 조절제입니다. 매우 낮은 첨가량(보통 2~10 wt%)에서도 뚜렷한 틱소트로피(요변성)를 부여하여, 수직 표면에 도포해도 흘러내리거나 처지지 않으면서(Anti-Sagging) 카트리지에서 짜내거나 믹싱 노즐에서 전단을 받을 때는 부드럽게 흐르도록 만듭니다. 이러한 'shear-thinning(전단 박화)' 특성은 수지 내에 분산된 흄드 실리카 응집체가 수소결합으로 형성한 3차원 네트워크가 전단력에 의해 일시적으로 끊어졌다가 정지 시 빠르게 재구성되기 때문입니다. 이는 현대의 실리콘 욕실용 실란트, 폴리우레탄 건축용 접착제, 에폭시 구조 접착제, MS-폴리머 실란트, 자동차 윈드실드 접착제, PVC 플라스티졸을 가능케 하는 핵심 첨가제입니다. 친수성 등급은 극성 시스템(에폭시·폴리우레탄·수성)에 적합하며, PDMS나 HMDS로 표면 처리된 소수성 등급은 실리콘·MS-폴리머·용제계 등 비극성 시스템에서 우수한 증점 효율·저장 안정성·내습성을 발휘하고, 저장 중 수분에 의한 의도치 않은 경화도 방지합니다.",
      items: isEn
        ? [
            "Silicone & polyurethane construction sealants",
            "Epoxy structural adhesives & marine putties",
            "MS-polymer and hybrid sealants",
            "Automotive windshield & body adhesives",
            "PVC plastisol coatings & underbody coatings",
          ]
        : [
            "실리콘·폴리우레탄 건축용 실란트",
            "에폭시 구조 접착제·마린 퍼티",
            "MS-폴리머·하이브리드 실란트",
            "자동차 윈드실드·차체 접착제",
            "PVC 플라스티졸 코팅·차량 언더보디 코팅",
          ],
    },
    {
      title: isEn ? "Paints, Coatings, Inks & UPR" : "도료 · 코팅 · 잉크 · 불포화 폴리에스테르(UPR)",
      desc: isEn
        ? "In paints, coatings and printing inks, fumed silica functions simultaneously as a rheology modifier, anti-settling agent, matting aid and corrosion-resistance enhancer. By forming a weak 3D network in the wet film, it prevents heavy pigments (such as TiO₂, iron oxide, aluminum flakes) from settling during long storage, eliminates sagging on vertical surfaces during application, and improves edge coverage. Selected grades reduce gloss to give controlled matte and satin finishes without harming film transparency or scratch resistance. In high-build epoxy and zinc-rich primers it improves corrosion protection by tortuous-path effect. In UV-curable inks and screen-printing inks it gives the precise yield value needed for sharp dot reproduction. In unsaturated polyester resin (UPR) for solid surface, gel coats, marine composites and cultured marble, hydrophobic fumed silica provides the thixotropy required to coat vertical molds and prevent fiber-print-through while preserving cure speed and final mechanical properties."
        : "도료·코팅·인쇄 잉크에서 흄드 실리카는 레올로지 조절제, 침강 방지제, 소광 보조제, 방청 성능 향상제 역할을 동시에 수행합니다. 도막 내에서 약한 3차원 네트워크를 형성하여 TiO₂·산화철·알루미늄 플레이크와 같은 무거운 안료의 장기 저장 시 침강을 방지하고, 수직면 도포 시 흘러내림(sagging)을 막으며, 모서리 도장 피복성을 향상시킵니다. 특정 등급은 도막의 투명성과 내스크래치성을 해치지 않으면서 광택을 낮춰 균일한 무광·반광 효과를 만들어 줍니다. 고후도 에폭시·아연 다량 함유(zinc-rich) 프라이머에서는 미세 입자가 부식 경로를 우회시켜 방청 성능을 향상시키며, UV 경화 잉크·스크린 인쇄 잉크에서는 정밀한 항복응력(yield value)을 부여하여 도트 재현성을 높입니다. 인조대리석·젤코트·해양용 복합재·인공 대리석용 불포화 폴리에스테르(UPR)에서는 소수성 흄드 실리카가 수직 몰드 도포와 섬유 자국(fiber print-through) 방지에 필요한 틱소트로피를 부여하면서도 경화 속도와 최종 기계적 특성을 그대로 유지시켜 줍니다.",
      items: isEn
        ? [
            "Anti-settling for heavy-pigment paints and metallic finishes",
            "Matting agent for industrial, wood and coil coatings",
            "Anti-corrosion epoxy / zinc-rich primers",
            "UV, screen, gravure and offset printing inks",
            "UPR gel coats, solid surface, marine composites",
          ]
        : [
            "고비중 안료·메탈릭 도료의 침강 방지",
            "산업용·목재·코일 도료의 소광제",
            "방청용 에폭시·징크-리치 프라이머",
            "UV·스크린·그라비어·오프셋 인쇄 잉크",
            "UPR 젤코트·인조대리석·해양 복합재",
          ],
    },
    {
      title: isEn ? "Cosmetics, Personal Care & Pharmaceuticals" : "화장품 · 퍼스널 케어 · 의약품",
      desc: isEn
        ? "Pharmaceutical-grade fumed silica (Ph. Eur., USP/NF: Colloidal Silicon Dioxide) is one of the most widely used excipients in solid dosage forms. With its enormous surface area and free-flowing nature, it acts as a glidant in tablet compression (improving powder flow into the dies), a disintegrant aid that helps water penetrate the tablet matrix, an anti-caking agent in powder blends, and a stabilizer that adsorbs moisture and oils to keep hygroscopic actives free-flowing. In suspensions and creams, it suspends insoluble active ingredients and prevents phase separation. In cosmetics, fumed silica is the key thickener and stabilizer for gels, sunscreens, mascaras, foundations and lipsticks — it gives a silky skin feel, controls sebum and oil, and improves the durability and color payoff of color cosmetics. Hydrophobic surface-treated grades are used in water-resistant sunscreens, long-wear foundations and mascara, where they repel sebum and sweat while preserving the integrity of the makeup film throughout the day."
        : "의약품 등급의 흄드 실리카(Ph. Eur., USP/NF: Colloidal Silicon Dioxide)는 고형 제제에서 가장 널리 사용되는 부형제 중 하나입니다. 막대한 비표면적과 우수한 유동성을 바탕으로, 정제 타정 시 활제(glidant) 역할로 분말이 다이로 매끄럽게 흘러 들어가도록 하고, 정제 매트릭스에 물이 침투하도록 돕는 붕해 보조제, 분말 블렌드의 고결 방지제, 흡습성 원료의 수분·유분을 흡착하여 분체 흐름성을 유지시키는 안정화제로 작용합니다. 현탁액과 크림에서는 불용성 활성 성분을 분산시켜 상분리를 방지합니다. 화장품에서는 젤·자외선 차단제·마스카라·파운데이션·립스틱의 핵심 증점·안정화제로, 매끄러운 사용감, 피지·유분 조절, 색조 화장품의 지속력과 발색력을 향상시킵니다. 표면 처리된 소수성 등급은 워터프루프 자외선 차단제, 롱웨어 파운데이션·마스카라에 사용되며, 피지와 땀을 밀어내면서도 메이크업 막의 무결성을 하루 종일 유지해 줍니다.",
      items: isEn
        ? [
            "Tablet glidant, disintegrant aid, anti-caking excipient",
            "Suspension and ointment stabilizer",
            "Color cosmetics: foundations, mascara, lipsticks, eyeshadows",
            "Sunscreens, mattifying primers, anti-shine powders",
            "Hair care, deodorants, toothpaste",
          ]
        : [
            "정제 활제·붕해 보조·고결 방지 부형제",
            "현탁액·연고제 안정화제",
            "색조 화장품: 파운데이션·마스카라·립스틱·아이섀도",
            "자외선 차단제·매트 프라이머·피지 컨트롤 파우더",
            "헤어 케어·데오드란트·치약",
          ],
    },
    {
      title: isEn ? "Electronics, Cable Compounds & Thermal Insulation" : "전자재료 · 케이블 컴파운드 · 단열재",
      desc: isEn
        ? "High-purity fumed silica is a critical raw material for advanced electronic and energy applications. In epoxy molding compounds (EMC) for semiconductor packaging — especially in next-generation flip-chip and BGA encapsulation — it controls flow, lowers thermal expansion mismatch with silicon dies, and reduces moisture pickup, preventing 'popcorn' failure during reflow soldering. In silicone insulation for high-voltage cables, polymeric insulators and EV battery sealing, it reinforces the silicone matrix while maintaining excellent dielectric strength and tracking resistance even under extreme outdoor and humid conditions. In silica aerogel manufacturing and vacuum insulation panels (VIP), fumed silica forms the nanoporous network that delivers thermal conductivities lower than still air — used in building envelopes, cryogenic LNG carriers, satellites and high-end appliances. In lithium-ion battery electrolytes and gel polymer electrolytes, it acts as a nano-scale matrix to immobilize liquid electrolyte and improve safety. In toner powders for laser printers, hydrophobic fumed silica is the external additive that gives perfect flowability and triboelectric charging behavior."
        : "고순도 흄드 실리카는 첨단 전자·에너지 산업의 핵심 원료입니다. 반도체 패키징용 에폭시 몰딩 컴파운드(EMC) — 특히 차세대 플립칩·BGA 봉지재 — 에서는 흐름성을 제어하고 실리콘 다이와의 열팽창 계수 차이를 줄이며 흡습률을 낮춰, 리플로우 솔더링 시 발생하는 'popcorn 현상'을 방지합니다. 고전압 케이블용 실리콘 절연재, 폴리머 절연 부싱, EV 배터리 실링에서는 실리콘 매트릭스를 보강하면서도 우수한 절연 내력과 내트래킹성을 옥외·고습 조건에서도 유지시켜 줍니다. 실리카 에어로젤과 진공 단열 패널(VIP) 제조에서는 흄드 실리카가 정지 공기보다 낮은 열전도율을 구현하는 나노 다공성 네트워크를 형성하여 건축물 외피, 극저온 LNG 운반선, 인공위성, 고급 가전제품의 단열재로 사용됩니다. 리튬이온 배터리 전해질·겔 폴리머 전해질에서는 액상 전해질을 고정하는 나노 매트릭스 역할로 안전성을 향상시키며, 레이저 프린터용 토너 분말에서는 소수성 흄드 실리카가 외첨제로 사용되어 완벽한 유동성과 마찰대전 특성을 부여합니다.",
      items: isEn
        ? [
            "Semiconductor EMC (epoxy molding compound) and underfill",
            "Silicone insulation for HV cables and polymer insulators",
            "Silica aerogel and vacuum insulation panels (VIP)",
            "Li-ion battery electrolyte additive and separator coating",
            "Laser printer / copier toner external additive",
          ]
        : [
            "반도체 EMC(에폭시 몰딩 컴파운드)·언더필",
            "고전압 케이블·폴리머 절연 부싱용 실리콘 절연재",
            "실리카 에어로젤·진공 단열 패널(VIP)",
            "리튬이온 배터리 전해질 첨가제·분리막 코팅",
            "레이저 프린터·복사기 토너 외첨제",
          ],
    },
    {
      title: isEn ? "Food, Agrochemicals & Industrial Carriers" : "식품 · 농약 · 산업용 캐리어",
      desc: isEn
        ? "Food-grade fumed silica (E551) is approved worldwide as an anti-caking and free-flow agent. Its enormous surface area absorbs ambient moisture and oily components, keeping fine powders like table salt, spices, powdered milk, instant coffee, soup mixes, infant formula and protein powders dry, pourable and free of lumps even after long storage or temperature cycling. The same nano-particles act as a carrier matrix that converts liquid pesticides, herbicides, fungicides, vitamins, essential oils, fragrances and liquid catalysts into stable, free-flowing powders — extending shelf life, allowing precise dosing and enabling tablet or granule formulation. In animal feed and premix manufacturing, it improves mixing uniformity of micro-ingredients. In industrial chemistry, it is used as a defoamer carrier, fire-retardant synergist, and reinforcing filler for polyamide and other engineering thermoplastics."
        : "식품 등급의 흄드 실리카(E551)는 전 세계에서 고결방지제·분체 유동성 향상제로 인정받고 있습니다. 막대한 비표면적이 주변 수분과 유분을 흡착하여, 식염·향신료·분유·인스턴트 커피·수프 믹스·유아용 분유·단백질 분말 같은 미세 분체가 장기간 보관이나 온도 변화 후에도 건조하고 흐름성 좋게 유지되어 덩어리지지 않도록 합니다. 동일한 나노 입자가 액상 농약·제초제·살균제·비타민·에센셜 오일·향료·액상 촉매를 안정적인 자유 유동 분말로 만드는 캐리어 매트릭스로 작용하여 보관 수명 연장, 정밀 계량, 정제·과립 제형화를 가능케 합니다. 사료·프리믹스 제조에서는 미량 원료의 혼합 균일도를 향상시키며, 산업화학에서는 소포제 캐리어, 난연제 시너지스트, 폴리아미드 등 엔지니어링 열가소성 수지의 보강 필러로 사용됩니다.",
      items: isEn
        ? [
            "Anti-caking in salt, spices, milk powder, infant formula",
            "Liquid pesticide / fragrance / vitamin powderization carrier",
            "Animal feed premix and micro-ingredient uniformity",
            "Defoamer carrier, fire-retardant synergist",
            "Reinforcing filler for engineering thermoplastics",
          ]
        : [
            "식염·향신료·분유·유아용 분유의 고결 방지",
            "액상 농약·향료·비타민의 분말화 캐리어",
            "사료 프리믹스·미량 원료의 혼합 균일성",
            "소포제 캐리어·난연제 시너지스트",
            "엔지니어링 열가소성 수지 보강 필러",
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
            FUMED SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {isEn ? "Fumed Silica Applications" : "흄드 실리카 응용 분야"}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {isEn
              ? "Fumed silica is the most versatile nano-scale functional additive in modern industry. Produced by flame hydrolysis of SiCl₄, it brings unique combinations of reinforcement, thixotropy, anti-sagging, anti-settling, matting, free-flow and insulation — making it indispensable in silicone rubber, sealants, adhesives, paints, cosmetics, pharmaceuticals, food, electronics, batteries and high-performance insulation."
              : "흄드 실리카는 현대 산업에서 가장 다재다능한 나노 기능성 첨가제입니다. 사염화규소(SiCl₄)의 화염가수분해로 제조되며, 보강·틱소트로피·안티-새깅·침강 방지·소광·유동성 향상·단열의 독특한 조합을 동시에 제공하여 실리콘 고무·실란트·접착제·도료·화장품·의약품·식품·전자·배터리·고성능 단열재 분야에서 없어서는 안 될 소재로 자리잡고 있습니다."}
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
            {isEn ? "View Fumed Silica Products" : "흄드 실리카 제품 보기"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default FumedSilicaApplications;
