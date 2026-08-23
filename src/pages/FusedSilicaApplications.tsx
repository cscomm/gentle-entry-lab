import { Link } from "@/lib/router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

const FusedSilicaApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);

  const sections = [
    {
      title: t(
        "반도체 EMC · 언더필 · 어드밴스드 패키징",
        "Semiconductor EMC · Underfill · Advanced Packaging",
        "半導体EMC・アンダーフィル・先端パッケージング"
      ),
      desc: t(
        "용융실리카는 반도체 후공정(Back-End)에서 가장 중요한 무기 필러입니다. 에폭시 몰딩 컴파운드(EMC)에 최대 88~92 wt%까지 고충전되어, 실리콘 다이와 유사한 극저 열팽창계수(CTE 0.5×10⁻⁶/℃)를 구현함으로써 리플로우 솔더링·온도 사이클 시 다이·기판 간 열응력에 의한 크랙·박리·와이어 단선을 근본적으로 억제합니다. 완전 무정형(Amorphous) 구조와 초저 α선 방사(Low-α 그레이드 ≤ 0.001 cph/cm²)는 HBM·DDR5·AI 반도체의 소프트 에러(SEU)를 원천 차단하며, 구상(SN-QG) · 초미분(SN-HF04) 그레이드는 언더필(Capillary Underfill, MUF), 어드밴스드 패키징(FC-BGA, 2.5D/3D 인터포저, WLP, PoP, Fan-Out) 등 미세 갭 충전이 요구되는 최첨단 공정에 필수적으로 사용됩니다.",
        "Fused silica is the single most important inorganic filler in semiconductor back-end packaging. Loaded up to 88–92 wt% in epoxy molding compounds (EMC), its ultra-low CTE (0.5×10⁻⁶/°C) matches the silicon die and eliminates cracking, delamination and wire-bond breakage caused by thermal stress during reflow soldering and temperature cycling. Its fully amorphous structure and ultra-low alpha emission (Low-α grade ≤ 0.001 cph/cm²) suppress soft errors (SEU) in HBM, DDR5 and AI semiconductors, while spherical (SN-QG) and ultra-fine (SN-HF04) grades are essential for underfill (capillary underfill, MUF) and advanced packaging processes — FC-BGA, 2.5D/3D interposers, WLP, PoP and Fan-Out — where narrow-gap flow is critical.",
        "溶融シリカは、半導体後工程(バックエンド)において最も重要な無機フィラーです。エポキシモールドコンパウンド(EMC)に最大88~92 wt%まで高充填され、シリコンダイに近い極低熱膨張係数(CTE 0.5×10⁻⁶/℃)を実現することで、リフローはんだ付けや温度サイクル時の熱応力によるクラック・剥離・ワイヤ断線を根本から抑制します。完全非晶質(Amorphous)構造と超低α線放射(Low-αグレード ≤ 0.001 cph/cm²)はHBM・DDR5・AI半導体のソフトエラー(SEU)を防止し、球状(SN-QG)・超微粉(SN-HF04)グレードはアンダーフィル(キャピラリーアンダーフィル、MUF)、先端パッケージング(FC-BGA、2.5D/3Dインターポーザ、WLP、PoP、Fan-Out)など微細ギャップ充填が要求される最先端工程に不可欠です。"
      ),
      items: [
        t("에폭시 몰딩 컴파운드 (EMC)", "Epoxy molding compound (EMC)", "エポキシモールドコンパウンド(EMC)"),
        t("언더필 (CUF / MUF / NCF)", "Underfill (CUF / MUF / NCF)", "アンダーフィル(CUF/MUF/NCF)"),
        t("어드밴스드 패키징 — FC-BGA · 2.5D/3D · WLP · PoP · Fan-Out", "Advanced packaging — FC-BGA / 2.5D/3D / WLP / PoP / Fan-Out", "先端パッケージング — FC-BGA・2.5D/3D・WLP・PoP・Fan-Out"),
        t("HBM · DDR5 · AI 반도체용 저방사선(Low-α) EMC", "HBM / DDR5 / AI-semiconductor Low-α EMC", "HBM・DDR5・AI半導体向け低α線EMC"),
        t("다이 어태치 · 봉지재 · 언더-몰드 접착제", "Die-attach, encapsulants, under-mold adhesives", "ダイアタッチ・封止材・アンダーモールド接着剤"),
      ],
    },
    {
      title: t(
        "CCL · PCB · 5G 고주파 기판",
        "CCL · PCB · 5G High-Frequency Substrates",
        "CCL・PCB・5G高周波基板"
      ),
      desc: t(
        "동박적층판(CCL)과 PCB 프리프레그에서 용융실리카는 저 유전율(Dk)·저 유전손실(Df)·저 CTE·고 절연을 동시에 부여하는 필수 필러입니다. 5G/6G·mmWave 통신, 광-전 융합(CPO), 자율주행 레이더, 서버·데이터센터 스위칭 IC 등 신호 손실이 곧 성능 저하로 이어지는 고주파 응용에서, 구상·모서리 라운드 용융실리카(SN-QG / SN-YRG)는 수지 유동성을 유지하면서도 배선 밀도가 극단적으로 높은 고밀도 다층 기판(HDI, IC 기판, ABF)의 치수 안정성과 신뢰성을 확보합니다. 초미분 SN-HF04(D50 3.8µm)는 초박형 프리프레그 및 5G AiP(Antenna-in-Package) 기판 등 극박·초정밀 층 구성에도 대응합니다.",
        "In copper-clad laminates (CCL) and PCB prepregs, fused silica delivers low dielectric constant (Dk), low dissipation factor (Df), low CTE and high insulation simultaneously. For 5G/6G, mmWave, co-packaged optics (CPO), automotive radar and data-center switching ICs — where signal loss directly translates to lost performance — spherical and round-corner fused silica (SN-QG, SN-YRG) preserve resin flow while ensuring the dimensional stability and reliability of ultra-high-density HDI, IC substrates and ABF layers. Ultra-fine SN-HF04 (D50 3.8 µm) supports ultra-thin prepregs and 5G AiP (Antenna-in-Package) substrates.",
        "銅張積層板(CCL)およびPCBプリプレグにおいて、溶融シリカは低誘電率(Dk)・低誘電損失(Df)・低CTE・高絶縁性を同時に付与する必須フィラーです。5G/6G・mmWave通信、光電融合(CPO)、車載レーダー、サーバー・データセンター向けスイッチングICなど信号損失が性能低下に直結する高周波用途で、球状・丸角溶融シリカ(SN-QG / SN-YRG)は樹脂流動性を維持しつつ、高密度多層基板(HDI、ICパッケージ基板、ABF)の寸法安定性と信頼性を確保します。超微粉SN-HF04(D50 3.8µm)は超薄型プリプレグや5G AiP(Antenna-in-Package)基板にも対応します。"
      ),
      items: [
        t("고주파 CCL · IC 기판 · ABF 필름", "High-frequency CCL, IC substrates, ABF film", "高周波CCL・IC基板・ABFフィルム"),
        t("HDI 다층 기판 · 리지드-플렉스 PCB", "HDI multilayer boards & rigid-flex PCB", "HDI多層基板・リジッドフレックスPCB"),
        t("5G/6G · mmWave · 자율주행 레이더 기판", "5G/6G · mmWave · autonomous-driving radar boards", "5G/6G・mmWave・自動運転レーダー基板"),
        t("서버·스위칭 IC · 광-전 융합(CPO) 기판", "Server / switching IC / co-packaged optics (CPO)", "サーバー・スイッチングIC・光電融合(CPO)基板"),
        t("Antenna-in-Package(AiP) · 안테나 모듈", "Antenna-in-Package (AiP) & antenna modules", "Antenna-in-Package(AiP)・アンテナモジュール"),
      ],
    },
    {
      title: t(
        "정밀 주조 · 세라믹 코어 · 인베스트먼트 캐스팅",
        "Precision Investment Casting & Ceramic Cores",
        "精密鋳造・セラミックコア・インベストメント鋳造"
      ),
      desc: t(
        "용융실리카는 항공기·발전용 가스터빈 블레이드, 임플란트, 정밀 부품 등의 인베스트먼트 캐스팅(로스트왁스 주조) 공정에서 몰드 백업층과 세라믹 코어의 핵심 원료로 사용됩니다. 초저 열팽창계수(0.5×10⁻⁶/℃)와 우수한 열충격 저항으로 1500℃ 이상의 초고온 몰드 소성·용탕 주입 시에도 균열이 발생하지 않으며, 응고 후에는 알칼리 용해(AutoClave leaching)에 의해 세라믹 코어가 깨끗이 제거되어 니켈·티타늄 초합금 블레이드의 복잡한 내부 냉각 유로를 정밀하게 형성합니다. B등급·C등급 용융실리카가 표준적으로 사용되며, 원심 주조·다이캐스팅용 이형제 및 정밀 소형 부품 제조에도 활용됩니다.",
        "Fused silica is a core raw material for the mold back-up layers and ceramic cores of investment (lost-wax) casting used to make aerospace and power-generation gas-turbine blades, medical implants and precision components. Its ultra-low CTE (0.5×10⁻⁶/°C) and excellent thermal-shock resistance keep the shell crack-free during mold sintering and molten-metal pouring at over 1500 °C, and the ceramic core is cleanly removed after solidification by autoclave alkaline leaching — enabling the precise internal cooling passages of nickel and titanium superalloy blades. Grade B and Grade C fused silica are the industry standards, and the material is also used as release agent for centrifugal casting and die-casting and in precision small-part manufacturing.",
        "溶融シリカは、航空機・発電用ガスタービンブレード、インプラント、精密部品などのインベストメント鋳造(ロストワックス鋳造)におけるモールドバックアップ層およびセラミックコアの中核原料として使用されます。極低熱膨張係数(0.5×10⁻⁶/℃)と優れた耐熱衝撃性により、1500℃以上の超高温焼成・溶湯注入時にも割れが発生せず、凝固後のオートクレーブアルカリ溶解によりセラミックコアがきれいに除去され、ニッケル・チタン超合金ブレードの複雑な内部冷却流路を精密に形成します。Bグレード・Cグレード溶融シリカが標準的に使用され、遠心鋳造・ダイカスト用の離型剤や精密小型部品製造にも活用されます。"
      ),
      items: [
        t("항공기·발전용 가스터빈 블레이드", "Aero & power gas-turbine blades", "航空機・発電用ガスタービンブレード"),
        t("니켈·티타늄 초합금 정밀 주조", "Nickel & titanium superalloy investment casting", "ニッケル・チタン超合金精密鋳造"),
        t("의료용 임플란트·정밀 기계 부품", "Medical implants & precision machinery parts", "医療用インプラント・精密機械部品"),
        t("세라믹 코어 (알칼리 용해형)", "Ceramic cores (alkali-leachable)", "セラミックコア(アルカリ可溶型)"),
        t("원심 주조 · 다이캐스팅 이형제", "Centrifugal / die-casting release agents", "遠心鋳造・ダイカスト用離型剤"),
      ],
    },
    {
      title: t(
        "광학 · 광섬유 · 정밀 광학 부품",
        "Optics, Optical Fiber & Precision Optical Components",
        "光学・光ファイバー・精密光学部品"
      ),
      desc: t(
        "A등급 초고순도 용융실리카(SiO₂ ≥ 99.9%, 100% 무정형)는 자외선(UV)부터 근적외선(NIR)까지 넓은 파장 대역에서 우수한 광 투과율을 유지하는 몇 안 되는 상용 소재입니다. 광섬유 프리폼(OFP)의 코어·클래드, 반도체 노광 장비용 UV/DUV/EUV 렌즈, 마스크 블랭크, 대형 우주망원경 미러 블랭크(허블·JWST 계열), 레이저 캐비티 창 등 궁극의 순도와 극저 열팽창이 요구되는 정밀 광학 부품에 사용됩니다. 열충격에도 강해 급격한 온도 변화가 발생하는 CVD 반응관·석영 도가니, 반도체 확산로용 튜브 및 웨이퍼 캐리어 소재로도 폭넓게 사용됩니다.",
        "Grade A ultra-high-purity fused silica (SiO₂ ≥ 99.9%, 100% amorphous) is one of the very few commercial materials with excellent optical transmittance from ultraviolet (UV) to near-infrared (NIR). It is used in precision optical parts requiring ultimate purity and ultra-low expansion — optical fiber preforms (OFP) for core and cladding, UV/DUV/EUV lithography lenses, mask blanks, large space-telescope mirror blanks (Hubble, JWST families), and laser cavity windows. Excellent thermal-shock resistance also makes it the standard material for CVD reaction tubes, quartz crucibles, semiconductor diffusion-furnace tubes and wafer carriers where rapid temperature changes occur.",
        "Aグレード超高純度溶融シリカ(SiO₂ ≥ 99.9%、100%非晶質)は、紫外線(UV)から近赤外線(NIR)まで広い波長帯域で優れた光透過率を維持する数少ない商用材料の一つです。光ファイバープリフォーム(OFP)のコア・クラッド、半導体露光装置用UV/DUV/EUVレンズ、マスクブランク、大型宇宙望遠鏡ミラーブランク(ハッブル・JWST系列)、レーザーキャビティ窓など、究極の純度と極低熱膨張が要求される精密光学部品に使用されます。耐熱衝撃性にも優れ、急激な温度変化が生じるCVD反応管・石英ルツボ、半導体拡散炉用チューブおよびウェハキャリア素材としても広く使用されます。"
      ),
      items: [
        t("광섬유 프리폼 (코어 · 클래드)", "Optical fiber preforms (core / cladding)", "光ファイバープリフォーム(コア・クラッド)"),
        t("반도체 노광 UV / DUV / EUV 렌즈 · 마스크 블랭크", "Semiconductor UV/DUV/EUV lens & mask blanks", "半導体UV/DUV/EUVレンズ・マスクブランク"),
        t("우주망원경 미러 블랭크 · 위성 광학계", "Space-telescope mirror blanks & satellite optics", "宇宙望遠鏡ミラーブランク・衛星光学系"),
        t("석영 도가니 · CVD 튜브 · 확산로 튜브", "Quartz crucibles · CVD tubes · diffusion furnace tubes", "石英ルツボ・CVDチューブ・拡散炉チューブ"),
        t("고에너지 레이저 창 · 큐벳 · 셀", "High-energy laser windows, cuvettes, cells", "高エネルギーレーザー窓・キュベット・セル"),
      ],
    },
    {
      title: t(
        "항공 · 방산 · 우주 소재",
        "Aerospace, Defense & Space Materials",
        "航空・防衛・宇宙材料"
      ),
      desc: t(
        "용융실리카는 극한의 열·기계 환경을 견뎌야 하는 항공·방산·우주 분야에서 결코 대체 불가능한 소재입니다. 우주선·미사일 재돌입체(RV)의 노즈콘, 극초음속 비행체 리딩엣지, 로켓 노즐 목부, 안테나 윈도우(레이돔)에 사용되는 실리카 세라믹(예: 슬립 캐스팅 실리카), 우주왕복선 세라믹 타일(LI-900/HRSI 계열)의 90%를 차지하는 비정질 실리카 섬유, 대륙간탄도미사일(ICBM)용 열보호 시스템(TPS)의 어블레이티브 재료 등이 대표 응용입니다. 극저 열팽창(0.5×10⁻⁶/℃), 극한의 열충격 저항, 1650℃ 이상의 사용 온도, 낮은 유전율은 재돌입 시 마찰열(1500~2000℃)에서도 형상 안정성과 전파 투과성을 동시에 유지시킵니다.",
        "Fused silica is irreplaceable in aerospace, defense and space applications that must survive extreme thermal and mechanical environments. Silica ceramics (e.g. slip-cast fused silica) are used for spacecraft and missile re-entry vehicle (RV) nose cones, hypersonic leading edges, rocket-nozzle throats and antenna windows (radomes). Amorphous silica fibers make up more than 90% of Space Shuttle ceramic tiles (LI-900 / HRSI family), and fused silica is a core ablative material in ICBM thermal protection systems (TPS). Ultra-low CTE (0.5×10⁻⁶/°C), extreme thermal-shock resistance, use temperatures over 1650 °C and low dielectric constant maintain shape stability and RF-window transparency simultaneously during re-entry friction heating (1500–2000 °C).",
        "溶融シリカは、極限の熱・機械環境に耐える必要のある航空・防衛・宇宙分野で代替が困難な素材です。宇宙船・ミサイル再突入体(RV)のノーズコーン、極超音速飛行体のリーディングエッジ、ロケットノズルスロート、アンテナ窓(レドーム)に使用されるシリカセラミックス(スリップキャストシリカなど)、スペースシャトルセラミックタイル(LI-900/HRSI系列)の90%以上を占める非晶質シリカ繊維、大陸間弾道ミサイル(ICBM)用熱防護システム(TPS)のアブレーティブ材料などが代表的です。極低熱膨張(0.5×10⁻⁶/℃)、極限の耐熱衝撃、1650℃を超える使用温度、低誘電率が、再突入時の摩擦熱(1500~2000℃)においても形状安定性と電波透過性を同時に維持します。"
      ),
      items: [
        t("재돌입체(RV) 노즈콘 · 열보호 시스템(TPS)", "Re-entry vehicle nose cones & TPS", "再突入体(RV)ノーズコーン・熱防護システム(TPS)"),
        t("극초음속 비행체 리딩엣지·로켓 노즐", "Hypersonic leading edges & rocket nozzles", "極超音速飛行体リーディングエッジ・ロケットノズル"),
        t("레이돔(RF 안테나 윈도우)·미사일 유도부", "Radomes (RF windows) & missile guidance sections", "レドーム(RFアンテナ窓)・ミサイル誘導部"),
        t("우주왕복선·재사용 발사체 세라믹 타일", "Space-shuttle & reusable-launcher ceramic tiles", "スペースシャトル・再使用ロケット用セラミックタイル"),
        t("위성 광학·구조체 저열팽창 부품", "Satellite optics & low-CTE structural parts", "衛星光学・構造体用低熱膨張部品"),
      ],
    },
    {
      title: t(
        "고온 내화 · 특수 유리 · 세라믹",
        "High-Temperature Refractories, Specialty Glass & Ceramics",
        "高温耐火・特殊ガラス・セラミックス"
      ),
      desc: t(
        "용융실리카는 1650℃ 이상 초고온에서도 결정화(devitrification)와 부피 변화가 거의 없기 때문에, 제철·제강 슬라이딩 게이트 노즐, 유리 용융로 도가니, 알루미늄·구리 정련 도가니, 로 라이닝 등 내화 응용에 폭넓게 사용됩니다. 고급 세라믹 분야에서는 저 열팽창 세라믹(코디어라이트-실리카 복합체, LAS 세라믹)과 실리카-알루미나 복합 세라믹의 주 원료로 사용되어 열충격에 강한 조리기구(예: 세라믹 인덕션 상판), 촉매 담체, 자동차 배기 담체, 산업용 필터 및 극한 환경용 부품 제조에 필수적입니다. 특수 유리 분야에서는 반도체용 석영 유리, 광학 유리, LCD/OLED 백플레인 유리, 저 유전 유리 섬유 등의 원료로 사용됩니다.",
        "Because fused silica shows almost no devitrification or volume change even above 1650 °C, it is widely used in refractory applications — sliding-gate nozzles for steelmaking, glass-melting crucibles, aluminum and copper refining crucibles and furnace linings. In advanced ceramics, it is the primary raw material for low-CTE ceramics (cordierite-silica composites, LAS ceramics) and silica-alumina composites, making it indispensable for thermal-shock-resistant cookware (e.g. ceramic induction cooktops), catalyst supports, automotive exhaust supports, industrial filters and extreme-environment components. In specialty glass, it is the base material for semiconductor-grade quartz glass, optical glass, LCD/OLED backplane glass and low-dielectric glass fibers.",
        "溶融シリカは1650℃を超える超高温でも結晶化(失透)と体積変化がほとんど起こらないため、製鉄・製鋼用スライディングゲートノズル、ガラス溶融炉ルツボ、アルミニウム・銅精錬ルツボ、炉ライニングなどの耐火用途に幅広く使用されます。先進セラミックス分野では、低熱膨張セラミックス(コージェライト-シリカ複合、LASセラミックス)およびシリカ-アルミナ複合セラミックスの主原料として、耐熱衝撃性に優れた調理器具(セラミックIHクッキングトップなど)、触媒担体、自動車排ガス浄化担体、産業用フィルター、極限環境用部品の製造に不可欠です。特殊ガラス分野では、半導体用石英ガラス、光学ガラス、LCD/OLEDバックプレーンガラス、低誘電率ガラス繊維などの原料として使用されます。"
      ),
      items: [
        t("제철·제강 슬라이딩 게이트 노즐 · 턴디쉬", "Steelmaking sliding-gate nozzles & tundish", "製鉄・製鋼スライディングゲートノズル・タンディッシュ"),
        t("유리 용융로 · 알루미늄·구리 정련 도가니", "Glass-melting furnaces & Al/Cu refining crucibles", "ガラス溶融炉・アルミ/銅精錬ルツボ"),
        t("석영 유리 · LCD/OLED 백플레인 유리", "Quartz glass · LCD/OLED backplane glass", "石英ガラス・LCD/OLEDバックプレーンガラス"),
        t("코디어라이트-실리카 · LAS 저열팽창 세라믹", "Cordierite-silica / LAS low-CTE ceramics", "コージェライト-シリカ・LAS 低熱膨張セラミックス"),
        t("촉매 담체 · 자동차 배기 담체 · 산업 필터", "Catalyst supports · auto-exhaust supports · industrial filters", "触媒担体・自動車排ガス浄化担体・産業フィルター"),
      ],
    },
    {
      title: t(
        "태양광 · 에너지 · 리튬 배터리",
        "Solar, Energy & Lithium Batteries",
        "太陽光・エネルギー・リチウム電池"
      ),
      desc: t(
        "태양광(PV) 산업에서 용융실리카는 단결정·다결정 실리콘 잉곳 성장을 위한 석영 도가니의 핵심 원료로 사용되며, 1500℃ 이상의 초고온에서 용융 실리콘과 반응하지 않고 형상을 유지해야 하는 극한 응용에 필수적입니다. 또한 태양전지 커버 글래스·백시트·EVA 필러, 집광형 태양광(CPV) 광학계에도 사용되며, 리튬이온 배터리 분야에서는 실리카-실리콘 복합 음극재의 SiO/SiOx 소재, 고체 전해질 첨가제, 저 CTE 배터리 케이스 소재로 활용됩니다. B등급 용융실리카는 태양전지용 도가니의 표준 원료이며, 초고순도 A등급은 페로브스카이트 태양전지·수소 연료전지 등 차세대 에너지 소재 연구에도 사용됩니다.",
        "In the photovoltaic (PV) industry, fused silica is the core raw material for the quartz crucibles used to grow monocrystalline and multicrystalline silicon ingots — an extreme application that requires the crucible to hold molten silicon above 1500 °C without reaction or deformation. It is also used in solar-cell cover glass, backsheets and EVA fillers, and in concentrator PV (CPV) optics. In lithium-ion batteries, it serves as the SiO/SiOx material for silica-silicon composite anodes, as a solid-electrolyte additive and as a low-CTE battery-case material. Grade B fused silica is the industry standard for PV crucibles, while ultra-high-purity Grade A is used in next-generation energy research such as perovskite solar cells and hydrogen fuel cells.",
        "太陽光(PV)産業において溶融シリカは、単結晶・多結晶シリコンインゴット成長用の石英ルツボの中核原料として使用され、1500℃を超える超高温で溶融シリコンと反応せず形状を維持する必要のある極限用途に不可欠です。また、太陽電池カバーガラス・バックシート・EVAフィラー、集光型太陽光(CPV)光学系にも使用され、リチウムイオン電池分野ではシリカ-シリコン複合負極材のSiO/SiOx材料、固体電解質添加剤、低CTE電池ケース材料として活用されます。Bグレード溶融シリカは太陽電池用ルツボの標準原料であり、超高純度Aグレードはペロブスカイト太陽電池・水素燃料電池など次世代エネルギー材料の研究にも使用されます。"
      ),
      items: [
        t("단결정·다결정 실리콘 성장용 석영 도가니", "Quartz crucibles for mono/multi-Si ingot growth", "単結晶・多結晶シリコン成長用石英ルツボ"),
        t("태양전지 커버 글래스 · 백시트 · EVA 필러", "Solar-cell cover glass, backsheets, EVA fillers", "太陽電池カバーガラス・バックシート・EVAフィラー"),
        t("리튬이온 배터리 SiO/SiOx 음극재", "Li-ion battery SiO/SiOx anode materials", "リチウムイオン電池SiO/SiOx負極材"),
        t("고체 전해질 · 저 CTE 배터리 케이스", "Solid electrolytes & low-CTE battery cases", "固体電解質・低CTE電池ケース"),
        t("페로브스카이트 · 수소 연료전지 소재 연구", "Perovskite & hydrogen fuel-cell research materials", "ペロブスカイト・水素燃料電池材料研究"),
      ],
    },
    {
      title: t(
        "산업용 도료 · 접착제 · 실란트 · 고성능 컴파운드",
        "Industrial Coatings, Adhesives, Sealants & High-Performance Compounds",
        "産業用塗料・接着剤・シーラント・高性能コンパウンド"
      ),
      desc: t(
        "각상(SN-RG)·모서리 라운드(SN-YRG)·활성(SN-HRG) 등 용융실리카 시리즈는 산업용 도료·접착제·실란트에서 저 CTE·고 내마모·고 절연·저 흡습을 부여하는 고성능 필러로 사용됩니다. 특히 실란 커플링 표면처리된 활성 그레이드(SN-HRG)는 유기 매트릭스와의 강한 계면 결합을 형성하여 에폭시·폴리우레탄·아크릴 수지의 인장강도·굴곡강도·내구성을 향상시킵니다. 고온용 세라믹 접착제, 정밀 인쇄용 UV 잉크, 전기 절연 컴파운드, 광학용 UV 경화 접착제, 자동차·산업 로봇용 고성능 실란트 등 신뢰성이 요구되는 응용에 폭넓게 사용됩니다.",
        "The fused-silica series — angular (SN-RG), round-corner (SN-YRG), surface-modified (SN-HRG) and more — is used as a high-performance filler in industrial coatings, adhesives and sealants to provide low CTE, high wear resistance, high insulation and low moisture pickup. In particular, silane-coupled surface-modified grades (SN-HRG) form strong interfacial bonds with organic matrices, improving the tensile, flexural strength and durability of epoxy, polyurethane and acrylic resins. Applications include high-temperature ceramic adhesives, precision UV inks, electrical insulation compounds, optical UV-curable adhesives and high-performance sealants for automotive and industrial-robot use.",
        "角形(SN-RG)・丸角(SN-YRG)・活性(SN-HRG)などの溶融シリカシリーズは、産業用塗料・接着剤・シーラントにおいて低CTE・高耐摩耗・高絶縁・低吸湿を付与する高性能フィラーとして使用されます。特に、シランカップリング表面処理された活性グレード(SN-HRG)は、有機マトリクスとの強い界面結合を形成し、エポキシ・ポリウレタン・アクリル樹脂の引張強度・曲げ強度・耐久性を向上させます。高温用セラミック接着剤、精密印刷用UVインキ、電気絶縁コンパウンド、光学用UV硬化接着剤、自動車・産業ロボット用高性能シーラントなど、信頼性が要求される用途に幅広く使用されます。"
      ),
      items: [
        t("에폭시·PU 산업용 도료·바닥재", "Epoxy / PU industrial coatings & flooring", "エポキシ・PU 産業用塗料・床材"),
        t("고온용 세라믹 접착제·구조 접착제", "High-temperature ceramic & structural adhesives", "高温用セラミック接着剤・構造用接着剤"),
        t("전기 절연 컴파운드·에폭시 포팅", "Electrical insulation compounds & epoxy potting", "電気絶縁コンパウンド・エポキシポッティング"),
        t("정밀 UV 잉크·광학 UV 경화 접착제", "Precision UV inks & optical UV-cure adhesives", "精密UVインキ・光学UV硬化接着剤"),
        t("자동차·산업 로봇용 고성능 실란트", "High-performance sealants for automotive & robotics", "自動車・産業ロボット用高性能シーラント"),
      ],
    },
    {
      title: t(
        "인조 대리석 · 엔지니어드 스톤 · 건축 자재",
        "Engineered Stone, Solid Surface & Construction Materials",
        "人造大理石・エンジニアードストーン・建築資材"
      ),
      desc: t(
        "각상·결정형 실리카와 함께 용융실리카(SN-RG, SN-JG)는 인조 대리석·엔지니어드 스톤(쿼츠 스톤)·솔리드 서페이스 제품의 핵심 충진재로 사용됩니다. 우수한 백색도·내마모성·내약품성·저 흡수율을 부여하여 주방 상판, 욕실 벽재, 상업용 카운터, 고급 바닥재 등에 사용되며, 특히 용융 그레이드는 낮은 열팽창과 우수한 화학적 안정성으로 열충격과 오염에 강한 프리미엄 제품 제조에 유리합니다. 시멘트·모르타르 첨가재, 고성능 콘크리트(HPC/UHPC) 포졸란 첨가제, 실리카 흄 대체재로도 사용되어 건축물 내구성과 화학 저항성을 향상시킵니다.",
        "Together with angular and crystalline silica, fused silica (SN-RG, SN-JG) is a core filler for engineered stone (quartz stone), solid surface and artificial marble products. It provides high whiteness, wear resistance, chemical resistance and low water absorption for kitchen countertops, bathroom walls, commercial counters and premium flooring. Fused grades in particular offer low thermal expansion and excellent chemical stability, making them ideal for premium products resistant to thermal shock and staining. It is also used as a cement/mortar additive, as a pozzolanic additive for high-performance concrete (HPC / UHPC) and as a silica-fume alternative — improving building durability and chemical resistance.",
        "角形・結晶質シリカとともに溶融シリカ(SN-RG、SN-JG)は、人造大理石・エンジニアードストーン(クォーツストーン)・ソリッドサーフェス製品の中核充填材として使用されます。優れた白色度・耐摩耗性・耐薬品性・低吸水率を付与し、キッチンカウンター、バスルーム壁材、商業用カウンター、高級床材などに使用されます。特に溶融グレードは低熱膨張と優れた化学的安定性により、耐熱衝撃・耐汚染性のプレミアム製品製造に有利です。セメント・モルタル添加材、高性能コンクリート(HPC/UHPC)ポゾラン添加剤、シリカフューム代替材としても使用され、建築物の耐久性と化学抵抗性を向上させます。"
      ),
      items: [
        t("엔지니어드 스톤 (쿼츠 카운터탑)", "Engineered stone (quartz countertops)", "エンジニアードストーン(クォーツカウンタートップ)"),
        t("인조 대리석 · 솔리드 서페이스", "Artificial marble & solid surface", "人造大理石・ソリッドサーフェス"),
        t("프리미엄 바닥재 · 벽재", "Premium flooring & wall panels", "プレミアム床材・壁材"),
        t("고성능 콘크리트(HPC/UHPC) 포졸란 첨가제", "HPC/UHPC pozzolanic additive", "高性能コンクリート(HPC/UHPC)ポゾラン添加剤"),
        t("시멘트 · 모르타르 강화 · 특수 그라우트", "Cement/mortar reinforcement & specialty grouts", "セメント・モルタル強化・特殊グラウト"),
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
            FUSED SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("용융실리카 응용 분야", "Fused Silica Applications", "溶融シリカの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(
              "용융실리카(Fused Silica)는 천연 석영을 1,800℃ 이상의 초고온에서 용융·급냉하여 얻는 비정질 이산화규소(SiO₂) 소재로, 극저 열팽창(0.5~0.6 ×10⁻⁶/℃)·탁월한 열충격 저항·초고온 안정성·우수한 화학적 내구성·저 유전율·고 전기 절연을 동시에 갖춘 첨단 산업의 핵심 원료입니다. A · B · C 등급과 전 SL 시리즈(SN-QG · SN-QG-L · SN-YRG · SN-RG · SN-FL · SN-HRG · SN-FS · SN-HF04) 라인업이 반도체·광학·항공·방산·태양광·에너지·정밀 주조·특수 유리·산업용 컴파운드 등 국가 기간산업 전반에 걸쳐 사용되고 있습니다.",
              "Fused silica is an amorphous SiO₂ material produced by melting natural quartz above 1,800 °C and rapidly quenching it. It uniquely combines ultra-low CTE (0.5–0.6 ×10⁻⁶/°C), exceptional thermal-shock resistance, ultra-high temperature stability, superior chemical durability, low dielectric constant and high electrical insulation — a foundational material for advanced industries. Grades A / B / C together with the full SN-series lineup (SN-QG, SN-QG-L, SN-YRG, SN-RG, SN-FL, SN-HRG, SN-FS, SN-HF04) are used across semiconductor, optics, aerospace, defense, solar, energy, precision casting, specialty glass and industrial-compound sectors.",
              "溶融シリカ(Fused Silica)は、天然石英を1,800℃以上の超高温で溶融・急冷して得られる非晶質二酸化ケイ素(SiO₂)素材で、極低熱膨張(0.5~0.6 ×10⁻⁶/℃)・卓越した耐熱衝撃性・超高温安定性・優れた化学耐久性・低誘電率・高電気絶縁性を兼ね備えた先端産業の核心原料です。A・B・Cグレードと全SLシリーズ(SN-QG・SN-QG-L・SN-YRG・SN-RG・SN-FL・SN-HRG・SN-FS・SN-HF04)ラインアップが、半導体・光学・航空・防衛・太陽光・エネルギー・精密鋳造・特殊ガラス・産業用コンパウンドなど国家基幹産業全般で使用されています。"
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
            to="/products/fused-silica/"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {t("용융실리카 제품 보기", "View Fused Silica Products", "溶融シリカ製品を見る")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default FusedSilicaApplications;
