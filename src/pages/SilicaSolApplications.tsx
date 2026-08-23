import { Link } from "@/lib/router";
import { Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useLang } from "@/contexts/LanguageContext";
import { pick } from "@/lib/lang";

type Row = {
  sku: string;
  ko: string;
  en: string;
  ja: string;
  specsKo: string;
  specsEn: string;
  specsJa: string;
  apps: { ko: string; en: string; ja: string }[];
};

type Group = {
  ko: string;
  en: string;
  ja: string;
  descKo: string;
  descEn: string;
  descJa: string;
  rows: Row[];
};

const groups: Group[] = [
  {
    ko: "알칼리 안정형 콜로이달 실리카 (JN 시리즈)",
    en: "Alkaline-Stabilized Colloidal Silica (JN Series)",
    ja: "アルカリ安定型コロイダルシリカ (JN シリーズ)",
    descKo:
      "NaOH 계열로 안정화된 표준형 실리카졸. pH 9~10 범위에서 우수한 결합력과 넓은 사용 범위를 갖는 콜로이달 실리카의 기본 그레이드로, 정밀 주조·내화·제지·도료·연마 등 전 산업에 가장 폭넓게 사용됩니다.",
    descEn:
      "NaOH-stabilized standard silica sol. With pH 9–10, it offers strong binding and the widest application range — the go-to grade for investment casting, refractories, paper, coatings and polishing across industries.",
    descJa:
      "NaOH系で安定化された標準型シリカゾル。pH 9~10で優れた結合力と広い使用範囲を持ち、精密鋳造・耐火・製紙・塗料・研磨など全産業で最も広く使用される基本グレードです。",
    rows: [
      {
        sku: "SN-SHS-JN15",
        ko: "저농도 알칼리형 실리카졸",
        en: "Low-Concentration Alkaline Sol",
        ja: "低濃度アルカリ型シリカゾル",
        specsKo: "SiO₂ 15% · 입경 8–15 nm · pH 9.5 · Na₂O ≤0.4%",
        specsEn: "SiO₂ 15% · 8–15 nm · pH 9.5 · Na₂O ≤0.4%",
        specsJa: "SiO₂ 15% · 8–15 nm · pH 9.5 · Na₂O ≤0.4%",
        apps: [
          { ko: "제지 표면 강도·잉크젯 코팅", en: "Paper surface strengthening & inkjet coating", ja: "製紙表面強度・インクジェットコーティング" },
          { ko: "섬유 방활(anti-slip) 처리", en: "Textile anti-slip treatment", ja: "繊維の防滑(アンチスリップ)処理" },
          { ko: "저점도 침투형 표면 개질제", en: "Low-viscosity penetrating surface modifier", ja: "低粘度浸透型表面改質剤" },
        ],
      },
      {
        sku: "SN-SHS-JN20",
        ko: "표준형 알칼리 실리카졸",
        en: "Standard Alkaline Silica Sol",
        ja: "標準型アルカリシリカゾル",
        specsKo: "SiO₂ 20% · 입경 8–15 nm · pH 9.5 · SSA 200–300 m²/g",
        specsEn: "SiO₂ 20% · 8–15 nm · pH 9.5 · SSA 200–300 m²/g",
        specsJa: "SiO₂ 20% · 8–15 nm · pH 9.5 · SSA 200–300 m²/g",
        apps: [
          { ko: "정밀 주조 셸 몰드 바인더 (프라이머 코트)", en: "Investment-casting shell binder (primary coat)", ja: "精密鋳造シェルバインダー(プライマー)" },
          { ko: "내화 캐스터블·모노리식 결합제", en: "Refractory castable & monolithic binder", ja: "耐火キャスタブル・モノリシック結合材" },
          { ko: "무기 접착제·바인더", en: "Inorganic adhesive & binder", ja: "無機接着剤・バインダー" },
        ],
      },
      {
        sku: "SN-SHS-JN30",
        ko: "고농도 표준 실리카졸",
        en: "High-Concentration Standard Sol",
        ja: "高濃度標準シリカゾル",
        specsKo: "SiO₂ 30% · 입경 10–20 nm · pH 9.5 · SSA 150–250 m²/g",
        specsEn: "SiO₂ 30% · 10–20 nm · pH 9.5 · SSA 150–250 m²/g",
        specsJa: "SiO₂ 30% · 10–20 nm · pH 9.5 · SSA 150–250 m²/g",
        apps: [
          { ko: "정밀 주조 백업 코트 · 셸 강도 극대화", en: "Investment-casting back-up coat · max shell strength", ja: "精密鋳造バックアップコート・シェル強度最大化" },
          { ko: "세라믹 결합제 · 슬립 캐스팅", en: "Ceramic binder & slip casting", ja: "セラミック結合材・スリップキャスティング" },
          { ko: "촉매 담체 함침", en: "Catalyst-support impregnation", ja: "触媒担体含浸" },
          { ko: "콘크리트·시멘트 표면 경화제", en: "Concrete/cement surface hardener", ja: "コンクリート・セメント表面硬化剤" },
        ],
      },
      {
        sku: "SN-SHS-JN40",
        ko: "초고농도 실리카졸",
        en: "Ultra-High-Concentration Sol",
        ja: "超高濃度シリカゾル",
        specsKo: "SiO₂ 40% · 입경 15–25 nm · pH 9.5 · SSA 120–200 m²/g",
        specsEn: "SiO₂ 40% · 15–25 nm · pH 9.5 · SSA 120–200 m²/g",
        specsJa: "SiO₂ 40% · 15–25 nm · pH 9.5 · SSA 120–200 m²/g",
        apps: [
          { ko: "고강도 세라믹 소결 바인더", en: "High-strength ceramic sintering binder", ja: "高強度セラミック焼結バインダー" },
          { ko: "고형분 극대화 도료·잉크 원료", en: "High-solids coating & ink raw material", ja: "高固形分塗料・インク原料" },
          { ko: "고온 단열재·불연 코팅", en: "High-temperature insulation & fireproof coating", ja: "高温断熱材・不燃コーティング" },
        ],
      },
    ],
  },
  {
    ko: "산성 안정형 콜로이달 실리카 (SW 시리즈)",
    en: "Acidic-Stabilized Colloidal Silica (SW Series)",
    ja: "酸性安定型コロイダルシリカ (SW シリーズ)",
    descKo:
      "pH 2~4의 산성 조건에서 안정화된 저 Na⁺ 실리카졸. 알칼리성 원료와 반응하지 않아야 하는 유기 코팅, 실리콘 이형지, 정밀 폴리싱, 도금 첨가제 등 산성 공정 전용 그레이드입니다.",
    descEn:
      "Low-Na⁺ silica sol stabilized at pH 2–4. Dedicated to acidic-process applications where alkali reactivity must be avoided — organic coatings, silicone release papers, precision polishing and plating additives.",
    descJa:
      "pH 2~4の酸性条件で安定化した低Na⁺シリカゾル。アルカリ性原料と反応してはならない有機コーティング、シリコン離型紙、精密研磨、めっき添加剤など、酸性プロセス専用のグレードです。",
    rows: [
      {
        sku: "SN-SHS-SW20",
        ko: "산성 실리카졸 (표준)",
        en: "Acidic Silica Sol (Standard)",
        ja: "酸性シリカゾル (標準)",
        specsKo: "SiO₂ 20% · 입경 8–15 nm · pH 2–4 · Na₂O ≤0.05%",
        specsEn: "SiO₂ 20% · 8–15 nm · pH 2–4 · Na₂O ≤0.05%",
        specsJa: "SiO₂ 20% · 8–15 nm · pH 2–4 · Na₂O ≤0.05%",
        apps: [
          { ko: "실리콘 이형지·박리지 첨가제", en: "Silicone release paper additive", ja: "シリコン離型紙添加剤" },
          { ko: "산성 도금욕 · 표면 처리제", en: "Acidic plating bath & surface treatment", ja: "酸性めっき浴・表面処理剤" },
          { ko: "산성 촉매 담체 함침", en: "Acidic catalyst-support impregnation", ja: "酸性触媒担体含浸" },
        ],
      },
      {
        sku: "SN-SHS-SW30",
        ko: "산성 고농도 실리카졸",
        en: "Acidic High-Concentration Sol",
        ja: "酸性高濃度シリカゾル",
        specsKo: "SiO₂ 30% · 입경 10–20 nm · pH 2–4 · 저 Na⁺",
        specsEn: "SiO₂ 30% · 10–20 nm · pH 2–4 · low Na⁺",
        specsJa: "SiO₂ 30% · 10–20 nm · pH 2–4 · 低Na⁺",
        apps: [
          { ko: "저 이온 정밀 폴리싱 슬러리", en: "Low-ion precision polishing slurry", ja: "低イオン精密研磨スラリー" },
          { ko: "산성 배합 아크릴·라텍스 바인더 첨가", en: "Acidic acrylic/latex binder additive", ja: "酸性アクリル・ラテックスバインダー添加" },
          { ko: "무기·유기 하이브리드 코팅", en: "Inorganic-organic hybrid coating", ja: "無機-有機ハイブリッドコーティング" },
        ],
      },
    ],
  },
  {
    ko: "암모니아 안정형 콜로이달 실리카 (JA 시리즈)",
    en: "Ammonia-Stabilized Colloidal Silica (JA Series)",
    ja: "アンモニア安定型コロイダルシリカ (JA シリーズ)",
    descKo:
      "NH₃ 계열로 안정화되어 알칼리 금속(Na⁺/K⁺) 함량이 극히 낮은(≤0.03%) 신형(New Type) 실리카졸. 정밀 주조 셸 몰드, 이차전지 세라믹 코팅 세퍼레이터, 반도체 CMP 슬러리 원료 등 저 잔류물이 요구되는 첨단 응용에 최적화되어 있습니다.",
    descEn:
      "New-Type silica sol stabilized with NH₃, delivering ultra-low alkali (Na⁺/K⁺ ≤0.03%). Optimized for advanced applications that demand low ionic residue — investment-casting shells, ceramic-coated Li-ion battery separators and semiconductor CMP slurry raw material.",
    descJa:
      "NH₃系で安定化され、アルカリ金属(Na⁺/K⁺)含量が極めて低い(≤0.03%)新型(New Type)シリカゾル。精密鋳造シェル、二次電池セラミックコーティングセパレーター、半導体CMPスラリー原料など、低残留物が求められる先端用途に最適化されています。",
    rows: [
      {
        sku: "SN-JA25",
        ko: "NH₃ 안정형 표준 콜로이달 실리카",
        en: "NH₃-Stabilized Standard Colloidal Silica",
        ja: "NH₃安定型標準コロイダルシリカ",
        specsKo: "SiO₂ 25~26% · 10~12 nm · pH 9.0~9.6 · Na₂O ≤0.03%",
        specsEn: "SiO₂ 25–26% · 10–12 nm · pH 9.0–9.6 · Na₂O ≤0.03%",
        specsJa: "SiO₂ 25~26% · 10~12 nm · pH 9.0~9.6 · Na₂O ≤0.03%",
        apps: [
          { ko: "정밀 주조 셸 몰드 바인더", en: "Investment-casting shell binder", ja: "精密鋳造シェルバインダー" },
          { ko: "리튬 이차전지 세라믹 세퍼레이터 코팅", en: "Ceramic-coated Li-ion battery separator", ja: "リチウム二次電池セラミックセパレーターコーティング" },
          { ko: "세라믹 코팅·촉매 담체", en: "Ceramic coating & catalyst support", ja: "セラミックコーティング・触媒担体" },
        ],
      },
      {
        sku: "SN-JA30",
        ko: "NH₃ 안정형 고농도 콜로이달 실리카",
        en: "NH₃-Stabilized High-Concentration Sol",
        ja: "NH₃安定型高濃度コロイダルシリカ",
        specsKo: "SiO₂ 30~31% · 10~11.5 nm · SSA 198–258 m²/g · Na₂O ≤0.03%",
        specsEn: "SiO₂ 30–31% · 10–11.5 nm · SSA 198–258 m²/g · Na₂O ≤0.03%",
        specsJa: "SiO₂ 30~31% · 10~11.5 nm · SSA 198~258 m²/g · Na₂O ≤0.03%",
        apps: [
          { ko: "고강도 정밀 주조 셸 (박리 저항성)", en: "High-strength casting shell (delamination-resistant)", ja: "高強度精密鋳造シェル(剥離耐性)" },
          { ko: "이차전지 세라믹 세퍼레이터 · 고체 전해질", en: "Battery ceramic separator & solid electrolyte", ja: "二次電池セラミックセパレーター・固体電解質" },
          { ko: "반도체 CMP 슬러리 원료", en: "Semiconductor CMP slurry feedstock", ja: "半導体CMPスラリー原料" },
        ],
      },
    ],
  },
  {
    ko: "저이온 콜로이달 실리카 (ZX 시리즈)",
    en: "Low-Ion Colloidal Silica (ZX Series)",
    ja: "低イオン型コロイダルシリカ (ZX シリーズ)",
    descKo:
      "Cl⁻·SO₄²⁻ 등 잔류 음이온을 극한까지 낮춘 저이온 실리카졸. 이온 오염에 민감한 반도체 CMP, LCD/OLED 유리 폴리싱, 하드디스크 미러 연마 슬러리 등 정밀 표면 가공용 그레이드입니다.",
    descEn:
      "Ultra-low-ion silica sol with residual Cl⁻/SO₄²⁻ pushed to the limit. Designed for ion-sensitive precision surface finishing — semiconductor CMP, LCD/OLED glass polishing and hard-disk mirror-polishing slurries.",
    descJa:
      "Cl⁻・SO₄²⁻など残留アニオンを極限まで低減した低イオンシリカゾル。イオン汚染に敏感な半導体CMP、LCD/OLEDガラス研磨、ハードディスクミラー研磨スラリーなど精密表面加工用のグレードです。",
    rows: [
      {
        sku: "SN-SHS-ZX20",
        ko: "저이온 정밀 폴리싱용 실리카졸",
        en: "Low-Ion Precision Polishing Sol",
        ja: "低イオン精密研磨用シリカゾル",
        specsKo: "SiO₂ 20% · 입경 20–30 nm · pH 9~10 · Cl⁻ ≤50 ppm",
        specsEn: "SiO₂ 20% · 20–30 nm · pH 9–10 · Cl⁻ ≤50 ppm",
        specsJa: "SiO₂ 20% · 20–30 nm · pH 9~10 · Cl⁻ ≤50 ppm",
        apps: [
          { ko: "반도체 실리콘 웨이퍼 CMP", en: "Silicon-wafer CMP for semiconductors", ja: "半導体シリコンウェハーCMP" },
          { ko: "LCD/OLED 유리·석영 폴리싱", en: "LCD/OLED glass & quartz polishing", ja: "LCD/OLEDガラス・石英研磨" },
          { ko: "하드디스크 기판 미러 폴리싱", en: "HDD substrate mirror polishing", ja: "HDD基板ミラー研磨" },
        ],
      },
      {
        sku: "SN-SHS-ZX30",
        ko: "고농도 저이온 폴리싱 슬러리 원료",
        en: "High-Concentration Low-Ion Polishing Feedstock",
        ja: "高濃度低イオン研磨スラリー原料",
        specsKo: "SiO₂ 30% · 입경 30–50 nm · Cl⁻ ≤20 ppm",
        specsEn: "SiO₂ 30% · 30–50 nm · Cl⁻ ≤20 ppm",
        specsJa: "SiO₂ 30% · 30–50 nm · Cl⁻ ≤20 ppm",
        apps: [
          { ko: "화합물 반도체 (SiC/GaN) 웨이퍼 CMP", en: "Compound-semiconductor (SiC/GaN) wafer CMP", ja: "化合物半導体(SiC/GaN)ウェハーCMP" },
          { ko: "고정밀 광학 부품 폴리싱", en: "High-precision optics polishing", ja: "高精密光学部品研磨" },
          { ko: "사파이어 기판 마감 폴리싱", en: "Sapphire substrate final polishing", ja: "サファイア基板仕上げ研磨" },
        ],
      },
    ],
  },
  {
    ko: "특수 안정형 콜로이달 실리카 (JGC 시리즈)",
    en: "Specialty-Stabilized Colloidal Silica (JGC Series)",
    ja: "特殊安定型コロイダルシリカ (JGC シリーズ)",
    descKo:
      "초저 이온·초고순도로 처리된 특수 그레이드. 반도체 첨단 노드 CMP, 이차전지 고체 전해질, 하이엔드 세라믹 코팅 등 미량 불순물이 최종 제품 성능을 결정하는 응용에 사용됩니다.",
    descEn:
      "Ultra-low-ion, ultra-high-purity specialty grades for applications where trace impurities determine end-product performance — advanced-node semiconductor CMP, solid electrolytes for batteries and high-end ceramic coatings.",
    descJa:
      "超低イオン・超高純度で処理された特殊グレード。半導体先端ノードCMP、二次電池固体電解質、ハイエンドセラミックコーティングなど、微量不純物が最終製品性能を決定する用途に使用されます。",
    rows: [
      {
        sku: "SN-SHS-JGC25",
        ko: "특수 초저 이온 실리카졸",
        en: "Specialty Ultra-Low-Ion Sol",
        ja: "特殊超低イオンシリカゾル",
        specsKo: "SiO₂ 25% · 입경 8–15 nm · 금속 이온 ppb 수준",
        specsEn: "SiO₂ 25% · 8–15 nm · metal ions at ppb level",
        specsJa: "SiO₂ 25% · 8–15 nm · 金属イオンppbレベル",
        apps: [
          { ko: "첨단 노드 반도체 CMP 슬러리", en: "Advanced-node semiconductor CMP slurry", ja: "先端ノード半導体CMPスラリー" },
          { ko: "고체 전해질·전고체 전지 바인더", en: "Solid electrolyte / all-solid-state battery binder", ja: "固体電解質・全固体電池バインダー" },
          { ko: "고순도 세라믹·석영 소결 바인더", en: "High-purity ceramic/quartz sintering binder", ja: "高純度セラミック・石英焼結バインダー" },
        ],
      },
      {
        sku: "SN-SHS-JGC40",
        ko: "초고농도 특수 실리카졸",
        en: "Ultra-High-Concentration Specialty Sol",
        ja: "超高濃度特殊シリカゾル",
        specsKo: "SiO₂ 40% · 입경 20–30 nm · 초저 알칼리",
        specsEn: "SiO₂ 40% · 20–30 nm · ultra-low alkali",
        specsJa: "SiO₂ 40% · 20–30 nm · 超低アルカリ",
        apps: [
          { ko: "고형분 극대화 하이엔드 코팅", en: "Ultra-high-solids high-end coating", ja: "超高固形分ハイエンドコーティング" },
          { ko: "고온 내화 세라믹 결합제", en: "High-temperature refractory ceramic binder", ja: "高温耐火セラミック結合材" },
          { ko: "특수 필름·멤브레인 표면 개질", en: "Specialty film & membrane surface modification", ja: "特殊フィルム・メンブレン表面改質" },
        ],
      },
    ],
  },
];

const industries: { icon: string; ko: string; en: string; ja: string; descKo: string; descEn: string; descJa: string }[] = [
  {
    icon: "🏭",
    ko: "정밀 주조 (인베스트먼트 캐스팅)",
    en: "Investment Casting",
    ja: "精密鋳造(インベストメント)",
    descKo: "항공기 터빈 블레이드, 가스터빈, 의료용 임플란트, 골프 헤드 등 고정밀 부품 주조용 셸 몰드 바인더. 저농도 프라이머 코트(20%)와 고농도 백업 코트(30~40%)를 조합해 셸 강도·박리 저항성·표면 조도를 극대화.",
    descEn: "Shell-mold binder for aerospace turbine blades, industrial gas turbines, medical implants and golf-club heads. Low-concentration primary coat (20%) combined with high-concentration back-up (30–40%) maximizes shell strength, delamination resistance and surface finish.",
    descJa: "航空機タービンブレード、ガスタービン、医療用インプラント、ゴルフヘッドなど高精密部品鋳造用のシェル型バインダー。低濃度プライマーコート(20%)と高濃度バックアップ(30~40%)を組み合わせ、シェル強度・剥離耐性・表面粗さを最大化。",
  },
  {
    icon: "🔋",
    ko: "리튬 이차전지 · 전고체 전지",
    en: "Li-Ion & All-Solid-State Battery",
    ja: "リチウム二次電池・全固体電池",
    descKo: "세라믹 코팅 세퍼레이터 바인더로 사용되어 열수축 억제·내열성·이온 전도 채널 안정성을 확보. 저 Na⁺ NH₃ 안정형(JA)이 필수이며, 전고체 전지용 고체 전해질 성형 바인더로도 확산 중.",
    descEn: "Used as ceramic-coated separator binder to suppress thermal shrinkage, boost heat resistance and stabilize ion-conduction channels. Low-Na NH₃-stabilized (JA) is essential; also expanding into solid-electrolyte binders for all-solid-state cells.",
    descJa: "セラミックコーティングセパレーターのバインダーとして熱収縮抑制・耐熱性・イオン伝導チャネルの安定性を確保。低Na NH₃安定型(JA)が必須で、全固体電池用固体電解質成形バインダーとしても拡大中。",
  },
  {
    icon: "💡",
    ko: "반도체 CMP · 정밀 폴리싱",
    en: "Semiconductor CMP & Precision Polishing",
    ja: "半導体CMP・精密研磨",
    descKo: "실리콘·SiC·GaN 웨이퍼, 사파이어, LCD/OLED 유리, HDD 기판을 나노 수준의 표면 조도로 마감. 균일 입도·저 이온·저 금속 불순물이 결정적이며, ZX/JGC 계열이 주력.",
    descEn: "Finishes silicon, SiC/GaN wafers, sapphire, LCD/OLED glass and HDD substrates to nano-level surface roughness. Uniform particle size, ultra-low ions and ppb-level metal impurities are critical — ZX/JGC series is the workhorse.",
    descJa: "シリコン・SiC・GaNウェハー、サファイア、LCD/OLEDガラス、HDD基板をナノレベルの表面粗さで仕上げ。均一粒度・低イオン・低金属不純物が決定的で、ZX/JGCシリーズが主力。",
  },
  {
    icon: "🧱",
    ko: "내화·세라믹·불연 코팅",
    en: "Refractory, Ceramic & Fireproof Coating",
    ja: "耐火・セラミック・不燃コーティング",
    descKo: "1,600°C 이상의 고온 안정성과 우수한 결합력을 활용, 캐스터블 내화물·모노리식 라이닝·세라믹 섬유 결합제·불연 도료·방화문 코팅에 사용. 고농도(30~40%) JN 시리즈가 표준.",
    descEn: "Leveraging >1,600°C stability and strong bonding, used in refractory castables, monolithic linings, ceramic-fiber binders, fireproof paints and fire-door coatings. High-concentration (30–40%) JN series is standard.",
    descJa: "1,600°C以上の高温安定性と優れた結合力を活かし、キャスタブル耐火物・モノリシックライニング・セラミックファイバー結合材・不燃塗料・防火扉コーティングに使用。高濃度(30~40%)JNシリーズが標準。",
  },
  {
    icon: "📄",
    ko: "제지·인쇄·잉크젯",
    en: "Paper, Print & Inkjet",
    ja: "製紙・印刷・インクジェット",
    descKo: "종이 표면 강도·마찰계수 향상, 잉크 흡수·발색성 극대화, 인쇄 지폐·라벨·특수지 코팅에 사용. 저농도 저점도(15~20%) 그레이드가 침투성 코팅에 적합.",
    descEn: "Boosts paper surface strength and friction coefficient, maximizes ink absorption and color development — used in banknote, label and specialty-paper coatings. Low-concentration low-viscosity (15–20%) grades suit penetrating coatings.",
    descJa: "紙表面強度・摩擦係数の向上、インク吸収・発色性の最大化、紙幣・ラベル・特殊紙コーティングに使用。低濃度低粘度(15~20%)グレードが浸透性コーティングに適合。",
  },
  {
    icon: "🧪",
    ko: "촉매 담체·화학 공정",
    en: "Catalyst Supports & Chemical Process",
    ja: "触媒担体・化学プロセス",
    descKo: "고비표면적(150~300 m²/g)과 균일한 세공 구조 덕분에 촉매 활성 금속을 균일 분산 담지 가능. 정유·석유화학·수소·자동차 배기가스 정화 촉매 등 광범위 사용.",
    descEn: "High specific surface area (150–300 m²/g) and uniform pore structure enable uniform dispersion of active catalyst metals — used in refining, petrochemicals, hydrogen and automotive exhaust-cleaning catalysts.",
    descJa: "高比表面積(150~300 m²/g)と均一な細孔構造により、触媒活性金属を均一分散担持可能。精製・石油化学・水素・自動車排ガス浄化触媒などに広く使用。",
  },
  {
    icon: "🎨",
    ko: "도료·잉크·수성 코팅",
    en: "Paints, Inks & Waterborne Coatings",
    ja: "塗料・インク・水性コーティング",
    descKo: "무기 하이브리드 도료의 경도·내마모성·내후성·불연성 강화, 요변성(thixotropy) 부여, 광택 조정 기능. 산성 SW 시리즈는 아크릴·라텍스 배합에 사용.",
    descEn: "Enhances hardness, wear/weather resistance and non-flammability of inorganic-hybrid coatings; adds thixotropy and gloss control. Acidic SW series pairs with acrylic/latex formulations.",
    descJa: "無機ハイブリッド塗料の硬度・耐摩耗性・耐候性・不燃性を強化し、チクソトロピー付与・光沢調整機能を提供。酸性SWシリーズはアクリル・ラテックス配合に使用。",
  },
  {
    icon: "🧵",
    ko: "섬유·카펫 방활 (Anti-slip)",
    en: "Textile & Carpet Anti-Slip",
    ja: "繊維・カーペット防滑処理",
    descKo: "카펫·러그·양말·요가 매트 뒷면에 도포해 마찰계수 급상승, 미끄럼 방지. 접착 특성이 강해 세탁 후에도 방활 효과가 유지됨.",
    descEn: "Applied to the back of carpets, rugs, socks and yoga mats to sharply raise the friction coefficient and prevent slipping. Strong adhesion keeps the anti-slip effect through repeated washing.",
    descJa: "カーペット・ラグ・靴下・ヨガマットの裏面に塗布し摩擦係数を急上昇させ、滑り止め効果を発現。接着性が強く、洗濯後も防滑効果が維持される。",
  },
  {
    icon: "🏗️",
    ko: "콘크리트·석재 표면 경화",
    en: "Concrete & Stone Surface Hardening",
    ja: "コンクリート・石材表面硬化",
    descKo: "콘크리트 바닥·석재 표면에 침투해 Ca(OH)₂와 반응·CSH 결합을 형성, 표면 경도·내마모성·먼지 방지 효과를 부여. 산업용 바닥재, 주차장, 창고 마감에 사용.",
    descEn: "Penetrates concrete floors and stone surfaces, reacting with Ca(OH)₂ to form CSH bonds — delivers surface hardness, wear resistance and dust-proofing. Used in industrial flooring, parking decks and warehouse finishing.",
    descJa: "コンクリート床・石材表面に浸透しCa(OH)₂と反応してCSH結合を形成、表面硬度・耐摩耗性・防塵効果を付与。産業用床材、駐車場、倉庫仕上げに使用。",
  },
  {
    icon: "🧴",
    ko: "실리콘·이형지·표면 처리제",
    en: "Silicone, Release Paper & Surface Agents",
    ja: "シリコン・離型紙・表面処理剤",
    descKo: "실리콘 이형지 코팅층의 박리 특성 조정, 실리콘 시트·필름 표면 개질, 방오·발수 하이브리드 코팅 원료로 사용. 저 Na⁺ 산성(SW) 또는 NH₃(JA) 계열 필수.",
    descEn: "Adjusts release characteristics of silicone release-paper coatings, modifies silicone sheet/film surfaces and feeds anti-fouling/water-repellent hybrid coatings. Low-Na acidic (SW) or NH₃ (JA) grades are essential.",
    descJa: "シリコン離型紙コーティング層の剥離特性調整、シリコンシート・フィルム表面改質、防汚・撥水ハイブリッドコーティング原料として使用。低Na 酸性(SW)またはNH₃(JA)系が必須。",
  },
];

const SilicaSolApplications = () => {
  const { lang } = useLang();
  const t = (ko: string, en: string, ja: string) => pick(lang, ko, en, ja);
  const name = (r: Row) => t(r.ko, r.en, r.ja);
  const specs = (r: Row) => t(r.specsKo, r.specsEn, r.specsJa);

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
            COLLOIDAL SILICA · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("콜로이달 실리카 시리즈 응용 분야", "Colloidal Silica Applications", "コロイダルシリカの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {t(
              "정밀 주조 · 이차전지 세퍼레이터 · 반도체 CMP · 내화 세라믹 · 제지 · 촉매 · 방활 처리까지 — SN-SHS 콜로이달 실리카(실리카졸) 5개 계열 14종 그레이드의 핵심 특성과 산업별 응용 분야를 정리했습니다.",
              "From investment casting and Li-ion battery separators to semiconductor CMP, refractory ceramics, paper, catalysts and anti-slip treatments — this page maps the SN-SHS colloidal silica (silica sol) 14-grade lineup across 5 stabilization systems to key specs and industrial applications.",
              "精密鋳造・二次電池セパレーター・半導体CMP・耐火セラミック・製紙・触媒・防滑処理まで — SN-SHSコロイダルシリカ(シリカゾル)5系列14グレードの主要特性と産業別用途を整理しました。"
            )}
          </p>
        </div>
      </section>

      {/* Industry-wide overview */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            {t("산업별 핵심 응용 분야", "Key Industrial Applications", "産業別の主要用途")}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
            {t(
              "실리카졸(콜로이달 실리카)은 물속에 균일 분산된 나노 SiO₂ 입자가 건조 후 Si–O 결합을 통해 소재 표면에 견고히 부착되는 특성을 이용, 첨단 산업부터 전통 산업까지 광범위하게 사용됩니다.",
              "Silica sol (colloidal silica) is a uniform dispersion of nano SiO₂ particles in water that, after drying, bonds firmly to substrate surfaces via Si–O linkages — enabling use across both advanced and traditional industries.",
              "シリカゾル(コロイダルシリカ)は水中に均一分散したナノSiO₂粒子が乾燥後にSi–O結合を介して素材表面に強固に付着する特性を活かし、先端産業から伝統産業まで幅広く使用されます。"
            )}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((it) => (
            <div key={it.en} className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-base font-bold">{t(it.ko, it.en, it.ja)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(it.descKo, it.descEn, it.descJa)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 space-y-16">
        {groups.map((g) => (
          <div key={g.en}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold md:text-3xl">{t(g.ko, g.en, g.ja)}</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
                {t(g.descKo, g.descEn, g.descJa)}
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="w-[26%] px-6 py-4 font-semibold">{t("제품", "Product", "製品")}</th>
                    <th className="w-[30%] px-6 py-4 font-semibold">{t("주요 특성", "Key Specs", "主要特性")}</th>
                    <th className="px-6 py-4 font-semibold">{t("주요 응용 분야", "Applications", "主要用途分野")}</th>
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r, i) => (
                    <tr
                      key={r.sku}
                      className={`border-t border-border align-top transition hover:bg-secondary/30 ${
                        i % 2 === 1 ? "bg-secondary/15" : ""
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                          {r.sku}
                        </div>
                        <div className="mt-2 font-semibold text-foreground">{name(r)}</div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground">{specs(r)}</td>
                      <td className="px-6 py-5">
                        <ul className="space-y-1.5">
                          {r.apps.map((a, idx) => (
                            <li key={idx} className="flex gap-2 text-foreground/90">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{t(a.ko, a.en, a.ja)}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="grid gap-4 md:hidden">
              {g.rows.map((r) => (
                <div key={r.sku} className="rounded-2xl border border-border bg-card p-5">
                  <div className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                    {r.sku}
                  </div>
                  <div className="mt-2 font-semibold">{name(r)}</div>
                  <div className="mt-3 rounded-lg bg-secondary/40 p-3 text-xs text-muted-foreground">
                    {specs(r)}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {r.apps.map((a, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{t(a.ko, a.en, a.ja)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
};

export default SilicaSolApplications;
