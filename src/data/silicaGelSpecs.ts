// Structured technical spec tables for all Silica Gel products.
// Rendered as HTML in <SpecTable /> — replaces low-legibility image scans.

export type TriString = { ko: string; en: string; ja: string };

export type SpecRow = {
  label: TriString;
  unit?: string;
  // If `values` is a string, the value cell spans all columns (merged).
  // If it's an array, its length must match `headers.length`.
  values: string | string[];
};

export type SpecSection = {
  title?: TriString;
  // Column headers for the value columns (excluding the leading "Item" column).
  // If omitted, defaults to single-column ["Specifications"].
  headers?: TriString[];
  // Optional top-level group headers that span groups of columns (e.g. "Strip", "Pellet").
  // Each entry has a label and how many columns it spans.
  groupHeaders?: { label: TriString; span: number }[];
  rows: SpecRow[];
  footnotes?: TriString[];
};

export type SilicaGelSpec = {
  code: string;
  sections: SpecSection[];
};

const T = (ko: string, en: string, ja: string): TriString => ({ ko, en, ja });
const SPEC_H = T("규격", "Specifications", "スペック");

// ============================================================
// SL-IND-01 — 맥주 여과용 실리카겔 (미세)
// ============================================================
const slInd01: SilicaGelSpec = {
  code: "SL-IND-01",
  sections: [{
    rows: [
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "90–100" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.85–1.0" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "320–400" },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L", values: "350–500" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "5" },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "%", values: "90" },
      { label: T("CaO", "CaO", "CaO"), unit: "ppm <", values: "600" },
      { label: T("MgO", "MgO", "MgO"), unit: "ppm <", values: "300" },
      { label: T("Fe₂O₃", "Fe₂O₃", "Fe₂O₃"), unit: "ppm <", values: "600" },
      { label: T("입도", "Size", "粒度"), values: T("≤35mesh 또는 ≤100mesh · 고객 사양 대응", "≤35 mesh or ≤100 mesh · as client demands", "≤35mesh または ≤100mesh · 客先仕様対応").ko === "" ? "" : "≤35 mesh / ≤100 mesh · as client demands" },
      { label: T("합격 입도 비율", "Qualified size ratio", "合格粒度比率"), unit: "% ≥", values: T("95 · 고객 사양 대응", "95 · as client demands", "95 · 客先仕様対応").ko === "" ? "" : "95 · as client demands" },
      { label: T("포장", "Packing", "包装"), values: "20 kg / compound bag · carton · drum" },
    ],
  }],
};

// ============================================================
// SL-IND-02 — 맥주 여과용 실리카겔 (거친)
// ============================================================
const slInd02: SilicaGelSpec = {
  code: "SL-IND-02",
  sections: [{
    rows: [
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "90–100" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.85–1" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "300–500" },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L", values: "400–500" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "5" },
      { label: T("흡착량 (RH=100%)", "Adsorption capacity (RH=100%)", "吸着量 (RH=100%)"), unit: "% ≥", values: "90" },
      { label: T("pH (100 g/L 수현탁)", "pH (100 g/L water suspension)", "pH (100 g/L 水懸濁)"), values: "6–8" },
      { label: T("합격 입도 비율", "Qualified size ratio", "合格粒度比率"), unit: "%", values: T("협의 사양", "According to agreement", "協議仕様").ko === "" ? "" : "According to agreement" },
      { label: T("입도", "Size", "粒度"), values: "40–100 / 60–100 / 40–80 / 60–120 mesh" },
      { label: T("포장", "Packing", "包装"), values: "20 kg / compound bag · carton · drum" },
    ],
  }],
};

// ============================================================
// SL-IND-03 — 유로키나제 흡착용 실리카겔
// ============================================================
const slInd03: SilicaGelSpec = {
  code: "SL-IND-03",
  sections: [{
    rows: [
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: "98" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "8" },
      { label: T("입도 (D50)", "Size (D50)", "粒度 (D50)"), unit: "µm", values: "7–15" },
      { label: T("pH", "pH", "pH"), values: "5–8" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "1.05–1.3" },
      { label: T("공경", "Pore diameter", "細孔径"), unit: "Å", values: "140–180" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "250–320" },
      { label: T("중금속 (Pb)", "Heavy metal (Pb)", "重金属 (Pb)"), unit: "% ≤", values: "0.003" },
      { label: T("납 (Pb)", "Lead (Pb)", "鉛 (Pb)"), unit: "% ≤", values: "0.001" },
      { label: T("비소 (As)", "Arsenic (As)", "ヒ素 (As)"), unit: "% ≤", values: "0.0003" },
      { label: T("철 (Fe)", "Iron (Fe)", "鉄 (Fe)"), unit: "% ≤", values: "0.0015" },
      { label: T("가용성 염", "Soluble salt", "可溶性塩"), unit: "% ≤", values: "0.004" },
      { label: T("포장", "Packing", "包装"), values: "10 kg/bag (out compound bag, inner PE bag)" },
    ],
    footnotes: [
      T("포장·입도 커스터마이징 가능",
        "Packing and size can be customized",
        "包装・粒度のカスタマイズ可能"),
      T("실리카겔 사용 시, 여과에 영향을 주지 않는 범위에서 규조토 사용량을 감소할 수 있음",
        "When silica gel is used, diatomite dosage can be reduced without affecting filtration",
        "シリカゲル使用時、濾過に影響を与えない範囲で珪藻土使用量を削減可能"),
      T("초기 여과 압력이 너무 빠르고 산출량에 영향을 미치는 경우, 빠른 여과 속도 등급 별도 생산 가능",
        "For customers concerned about high initial filter pressure, a fast-filtering grade can be produced",
        "初期濾過圧力が高すぎて生産量に影響する場合、高速濾過グレードの別途生産が可能"),
    ],
  }],
};

// ============================================================
// SL-IND-04 — 대공극 실리카겔 (구형/괴상)
// ============================================================
const slInd04: SilicaGelSpec = {
  code: "SL-IND-04",
  sections: [{
    headers: [T("구형", "Spherical", "球状"), T("괴상", "Lumpy", "塊状")],
    rows: [
      { label: T("흡착량", "Adsorption capacity", "吸着量"), unit: "% ≥", values: ["78", "78"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: ["400–500", "400–500"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.8–1.0", "0.8–1.0"] },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: ["80–100", "80–100"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["300–400", "300–400"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: ["98", "98"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: ["5.0", "5.0"] },
      { label: T("pH", "pH", "pH"), values: ["6–8", "6–8"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["82", "***"] },
      { label: T("외관", "Appearance", "外観"), values: [
          T("백색 펠릿", "White pellets", "白色ペレット").ko === "" ? "" : "White pellets",
          T("백색 괴상", "White lumps", "白色塊状").ko === "" ? "" : "White lumps",
        ] },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["2–5.6 / 4–8", "0.5–2 / 2–8"] },
      { label: T("포장", "Packing", "包装"), values: "20 kg/bag (out woven bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-IND-05 — 오일 탈색용 실리카겔 샌드
// ============================================================
const slInd05: SilicaGelSpec = {
  code: "SL-IND-05",
  sections: [{
    rows: [
      { label: T("흡착량 (RH=100%)", "Adsorption capacity (RH=100%)", "吸着量 (RH=100%)"), unit: "% ≥", values: "90" },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: "380" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.85–1" },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "85–110" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "300–500" },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: "98" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "8" },
      { label: T("pH", "pH", "pH"), values: "6–8" },
      { label: T("입도 합격률", "Qualified granules ratio", "粒度合格率"), unit: "% ≥", values: T("고객 요구 대응", "According to customer's demands", "客先要求対応").ko === "" ? "" : "According to customer's demands" },
      { label: T("외관", "Appearance", "外観"), values: T("백색", "White", "白色").ko === "" ? "" : "White" },
      { label: T("입도", "Size", "粒度"), unit: "mesh", values: "20–40 / 30–60 / 40–120" },
      { label: T("포장", "Packing", "包装"), values: "20 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-IND-06 — 대공극 마이크로구형 실리카겔 (등급별 6컬럼)
// ============================================================
const slInd06: SilicaGelSpec = {
  code: "SL-IND-06",
  sections: [{
    groupHeaders: [
      { label: T("우수 등급", "Superior class", "優級"), span: 2 },
      { label: T("1급", "First class", "1級"), span: 2 },
      { label: T("합격 등급", "Qualified class", "合格級"), span: 2 },
    ],
    headers: [
      T("20–40", "20–40", "20–40"), T("40–120", "40–120", "40–120"),
      T("20–40", "20–40", "20–40"), T("40–120", "40–120", "40–120"),
      T("20–40", "20–40", "20–40"), T("40–120", "40–120", "40–120"),
    ],
    rows: [
      { label: T("입도", "Size", "粒度"), unit: "mesh", values: ["20–40", "40–120", "20–40", "40–120", "20–40", "40–120"] },
      { label: T("입도 합격 비율", "Qualified size ratio", "合格粒度比率"), unit: "% ≥", values: ["94", "94", "90", "85", "85", "80"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: "300" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.8–1.3" },
      { label: T("공경", "Pore diameter", "細孔径"), unit: "Å", values: "80–110" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "5" },
      { label: T("흡착량", "Adsorption capacity", "吸着量"), unit: "% ≥", values: "90" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "300–550" },
      { label: T("외관", "Appearance", "外観"), values: T("반투명 펠릿", "Translucent pellets", "半透明ペレット").ko === "" ? "" : "Translucent pellets" },
      { label: T("포장", "Packing", "包装"), values: "20 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-IND-07 — 폐엔진오일 정제용 촉매 (복수 표)
// ============================================================
const slInd07: SilicaGelSpec = {
  code: "SL-IND-07",
  sections: [
    {
      title: T("① 촉매 기본 사양 (Strip Type)", "① Catalyst Specifications (Strip Type)", "① 触媒基本仕様 (Strip Type)"),
      headers: [T("A 형", "Grade A", "A グレード"), T("B 형", "Grade B", "B グレード")],
      rows: [
        { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["Φ2.5 × 2–10", "Φ3 × 2–10"] },
        { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["≥ 0.30", "≥ 0.28"] },
        { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["≥ 235", "≥ 250"] },
        { label: T("압쇄강도", "Crush strength", "圧潰強度"), unit: "N/cm", values: ["≥ 125", "≥ 130"] },
        { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "kg/L", values: ["≥ 0.68", "≥ 0.7"] },
        { label: T("마모손실", "Rattle loss", "摩耗損失"), unit: "wt %", values: ["≤ 1", "≤ 1"] },
      ],
    },
    {
      title: T("② 원료유 요구조건 (전처리)", "② Raw Oil Requirements (Pre-treatment)", "② 原料油要求条件 (前処理)"),
      rows: [
        { label: T("밀도", "Density", "密度"), unit: "g/mL", values: "0.88–0.90" },
        { label: T("공정 온도", "Technological process", "工程温度"), unit: "℃", values: "200–500" },
        { label: T("수분", "Moisture", "水分"), unit: "%", values: "Null" },
        { label: T("검·아스팔트질 함량", "Gum & asphaltic content", "ガム・アスファルト質含量"), unit: "%", values: T("최소화", "As little as possible", "極小化").ko === "" ? "" : "As little as possible" },
        { label: T("기계적 불순물", "Mechanical impurity", "機械的不純物"), unit: "%", values: "Null" },
      ],
    },
    {
      title: T("③ 촉매 운전 조건", "③ Use of the Catalyst", "③ 触媒運転条件"),
      rows: [
        { label: T("공간속도 (m/m)", "Space velocity (m/m)", "空間速度 (m/m)"), unit: "h⁻¹", values: "0.2–0.25" },
        { label: T("반응 온도", "Reaction temperature", "反応温度"), unit: "℃", values: "290–440" },
        { label: T("반응 압력", "Reaction pressure", "反応圧力"), unit: "MPa", values: T("상압", "Atmospheric pressure", "常圧").ko === "" ? "" : "Atmospheric pressure" },
      ],
    },
    {
      title: T("④ 촉매 건조 조건", "④ Catalyst Drying Conditions", "④ 触媒乾燥条件"),
      rows: [
        { label: T("압력", "Pressure", "圧力"), values: "0–0.1 MPa" },
        { label: T("매체", "Medium", "媒体"), values: T("공기", "Air", "空気").ko === "" ? "" : "Air" },
        { label: T("온도", "Temperature", "温度"), values: "300–360 ℃" },
        { label: T("승온 속도", "Heating rate", "昇温速度"), values: "15–30 ℃/hour" },
        { label: T("건조 시간", "Drying time", "乾燥時間"), values: "6–8 hours" },
      ],
      footnotes: [
        T("촉매는 산·알칼리·강산화제와 접촉하지 않아야 하며, 사용 전 30 mesh 체망으로 분진을 제거합니다.",
          "The catalyst must not contact acid, alkali or strong oxidizers. Screen with 30-mesh sieve before use to remove dust.",
          "触媒は酸・アルカリ・強酸化剤と接触させないこと。使用前に30メッシュ篩で粉塵を除去します。"),
        T("반응 온도가 440 ℃에 도달했음에도 규격을 충족하지 못하는 경우, 촉매 재생이 필요합니다.",
          "If the reaction temperature reaches 440 ℃ but the product does not meet spec, the catalyst needs to be regenerated.",
          "反応温度が440 ℃に達しても規格を満たさない場合、触媒の再生が必要です。"),
        T("포장: PE 백 내포 + 크래프트 우븐 백 외포. 강한 흡습성이 있으므로 운송·보관 시 방습에 주의하고, 산·알칼리 및 기타 화학물질과 함께 저장하지 않으며 야외 방치를 금합니다.",
          "Packing: PE inner bag inside a woven kraft outer bag. Strongly hygroscopic — protect from moisture in transport and storage. Do not store with acids, alkalis or other chemicals; do not leave in the open air.",
          "包装：PE 内袋＋クラフト織布外袋。強い吸湿性があるため、輸送・保管時は防湿に注意し、酸・アルカリ等の化学品と一緒に保管せず、屋外放置を禁止します。"),
      ],
    },
  ],
};

// ============================================================
// SL-DES-01 — A형 실리카겔 (구형/괴상)
// ============================================================
const slDes01: SilicaGelSpec = {
  code: "SL-DES-01",
  sections: [{
    headers: [T("펠릿", "Silica gel pellet", "ペレット"), T("괴상", "Silica gel lump", "塊状")],
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: ["8", "8"] },
      { label: T("흡착량 RH=50%", "Adsorption RH=50%", "吸着量 RH=50%"), unit: "% ≥", values: ["20", "20"] },
      { label: T("흡착량 RH=90%", "Adsorption RH=90%", "吸着量 RH=90%"), unit: "% ≥", values: ["30", "30"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: ["720", "670"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.35–0.45", "0.35–0.45"] },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: ["20–30", "20–30"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["650–800", "650–800"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: ["98", "98"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: ["5.0", "5.0"] },
      { label: T("pH", "pH", "pH"), values: ["4–8", "***"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["90", "***"] },
      { label: T("외관", "Appearance", "外観"), values: ["Translucent", "Translucent"] },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["0.5–1.5 / 0.5–1 / 2–4 / 3–5 / 4–8", "1–4 / 2–8"] },
      { label: T("포장", "Packing", "包装"), values: "25 kg/bag (out compound bag, inner PE bag)" },
    ],
    footnotes: [T("함수율·포장·규격 커스터마이징 가능", "Moisture, packing and size can be customized", "含水率・包装・サイズのカスタマイズ可能")],
  }],
};

// ============================================================
// SL-DES-02 — 대공극 B형 실리카겔
// ============================================================
const slDes02: SilicaGelSpec = {
  code: "SL-DES-02",
  sections: [{
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: "10.5" },
      { label: T("흡착량 RH=50%", "Adsorption RH=50%", "吸着量 RH=50%"), unit: "% ≥", values: "23" },
      { label: T("흡착량 RH=90%", "Adsorption RH=90%", "吸着量 RH=90%"), unit: "% ≥", values: "36" },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: "720" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.35–0.45" },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "20–30" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "650–800" },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: "98" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "2.0" },
      { label: T("CO₂ 흡착량", "CO₂ adsorption", "CO₂ 吸着量"), unit: "cm³/g ≥", values: "20" },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: "90" },
      { label: T("압축강도", "Compressive strength", "圧縮強度"), unit: "N ≥", values: "100" },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: "0.5–1.5 / 0.5–1 / 2–4 / 3–5 / 4–8" },
      { label: T("포장", "Packing", "包装"), values: "25 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-DES-03 — 청색·변색 실리카겔
// ============================================================
const slDes03: SilicaGelSpec = {
  code: "SL-DES-03",
  sections: [{
    headers: [T("청색 지시제", "Blue silica gel indicator", "青色指示剤"), T("변색 청색", "Color-changing blue", "変色青色")],
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: ["10", "—"] },
      { label: T("흡착량 RH=50%", "Adsorption RH=50%", "吸着量 RH=50%"), unit: "% ≥", values: ["13", "—"] },
      { label: T("흡착량 RH=90%", "Adsorption RH=90%", "吸着量 RH=90%"), unit: "% ≥", values: ["20", "20"] },
      { label: T("색변화 RH=20%", "Color change RH=20%", "変色 RH=20%"), values: ["Blue / light blue", "—"] },
      { label: T("색변화 RH=35%", "Color change RH=35%", "変色 RH=35%"), values: ["Purple / purplish red", "—"] },
      { label: T("색변화 RH=50%", "Color change RH=50%", "変色 RH=50%"), values: ["Pink", "Pink"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: ["720", "720"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.35–0.45", "0.35–0.45"] },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: ["20–30", "20–30"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["650–800", "650–800"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: ["98", "98"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: ["2.0", "2.0"] },
      { label: T("pH", "pH", "pH"), values: ["4–8", "5"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["96", "90"] },
      { label: T("외관", "Appearance", "外観"), values: ["Blue", "Blue"] },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["1–3 / 2–4 / 3–5 / 4–6", "1–3 / 2–4 / 3–5 / 4–6"] },
      { label: T("포장", "Packing", "包装"), values: "25 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-DES-04 — 오렌지 지시제 실리카겔
// ============================================================
const slDes04: SilicaGelSpec = {
  code: "SL-DES-04",
  sections: [{
    headers: [T("오렌지–그린", "Orange-green", "オレンジ-グリーン"), T("오렌지–무변", "Orange-null", "オレンジ-無変")],
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: ["8", "8"] },
      { label: T("흡착량 RH=35%", "Adsorption RH=35%", "吸着量 RH=35%"), unit: "% ≥", values: ["14", "14"] },
      { label: T("흡착량 RH=50%", "Adsorption RH=50%", "吸着量 RH=50%"), unit: "% ≥", values: ["22", "22"] },
      { label: T("흡착량 RH=90%", "Adsorption RH=90%", "吸着量 RH=90%"), unit: "% ≥", values: ["30", "20"] },
      { label: T("색변화 RH=20%", "Color change RH=20%", "変色 RH=20%"), values: ["Light brown yellow", "Orange"] },
      { label: T("색변화 RH=35%", "Color change RH=35%", "変色 RH=35%"), values: ["Light brown green", "Light yellow"] },
      { label: T("색변화 RH=50%", "Color change RH=50%", "変色 RH=50%"), values: ["Light blackish green", "Null"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: ["750", "750"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.35–0.45", "0.35–0.45"] },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: ["20–30", "20–30"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["650–800", "650–800"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: ["98", "98"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: ["2", "2"] },
      { label: T("pH", "pH", "pH"), values: ["4–8", "5"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["96", "90"] },
      { label: T("외관", "Appearance", "外観"), values: ["Orange", "Orange"] },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["1–3 / 2–4 / 3–5 / 4–6", "1–3 / 2–4 / 3–5 / 4–6"] },
      { label: T("포장", "Packing", "包装"), values: "25 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-DES-05 — 절연용 실리카겔 (형상·등급)
// ============================================================
const slDes05: SilicaGelSpec = {
  code: "SL-DES-05",
  sections: [{
    groupHeaders: [
      { label: T("구형", "Spherical", "球状"), span: 2 },
      { label: T("괴상", "Lumpy", "塊状"), span: 2 },
    ],
    headers: [
      T("우수", "Superior", "優級"), T("1급", "First", "1級"),
      T("우수", "Superior", "優級"), T("1급", "First", "1級"),
    ],
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: ["4", "3", "4", "3"] },
      { label: T("흡착량 RH=50%", "Adsorption RH=50%", "吸着量 RH=50%"), unit: "% ≥", values: ["11", "10", "11", "10"] },
      { label: T("흡착량 RH=90%", "Adsorption RH=90%", "吸着量 RH=90%"), unit: "% ≥", values: ["70", "50", "70", "50"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: "500–600" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.5–0.8" },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "50–80" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "450–600" },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: "98" },
      { label: T("전기저항", "Electric resistance", "電気抵抗"), unit: "Ω·cm ≥", values: ["5000", "3000", "5000", "3000"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "5.0" },
      { label: T("pH", "pH", "pH"), values: "6.7–7.5" },
      { label: T("입도 합격 비율", "Qualified size ratio", "合格粒度比率"), unit: "% ≥", values: "90" },
      { label: T("외관", "Appearance", "外観"), values: "Translucent" },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: "4–8 / 2–5.6" },
      { label: T("포장", "Packing", "包装"), values: "20 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-DES-06 — 반려동물 크리스탈 리터
// ============================================================
const slDes06: SilicaGelSpec = {
  code: "SL-DES-06",
  sections: [{
    rows: [
      { label: T("흡착량", "Adsorption capacity", "吸着量"), unit: "% ≥", values: "90" },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L ≥", values: "400–500" },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: "0.8–1" },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: "80–100" },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: "300–400" },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "% ≥", values: "98" },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: "8" },
      { label: T("pH", "pH", "pH"), values: "6–8" },
      { label: T("입도 합격 비율", "Qualified granules ratio", "合格粒度比率"), unit: "% ≥", values: "80" },
      { label: T("외관", "Appearance", "外観"), values: "White / blue / colored lumps" },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: "0.5–2 / 1–8 / 4–8" },
      { label: T("포장", "Packing", "包装"), values: "Bulk 20 kg/bag · colored bags 3.8L / 5L / 7.6L" },
    ],
  }],
};

// ============================================================
// SL-DES-07 — 내수성 실리카겔 (FNG-A / FNG-C)
// ============================================================
const slDes07: SilicaGelSpec = {
  code: "SL-DES-07",
  sections: [{
    groupHeaders: [
      { label: T("FNG-A", "FNG-A", "FNG-A"), span: 2 },
      { label: T("FNG-C", "FNG-C", "FNG-C"), span: 2 },
    ],
    headers: [
      T("1급", "First class", "1級"), T("합격", "Qualified", "合格"),
      T("1급", "First class", "1級"), T("합격", "Qualified", "合格"),
    ],
    rows: [
      { label: T("흡착량", "Adsorption capacity", "吸着量"), unit: "% ≥", values: ["36", "35", "72", "70"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.35–0.45", "0.35–0.45", "0.85–1.0", "0.85–1.0"] },
      { label: T("공경", "Pore diameter", "細孔径"), unit: "Å", values: ["20–30", "20–30", "85–110", "85–110"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g", values: ["≥ 600", "≥ 600", "320–400", "320–400"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L", values: ["600–700", "600–700", "400–500", "400–500"] },
      { label: T("가열감량", "Loss on heating", "加熱減量"), unit: "% ≤", values: ["3", "5", "3", "5"] },
      { label: T("압축강도", "Compressive strength", "圧縮強度"), unit: "N ≥", values: ["98", "68", "98", "68"] },
      { label: T("내수 무균열", "No cracking with water", "耐水無亀裂"), unit: "% ≥", values: ["95", "90", "95", "90"] },
      { label: T("입도 합격 비율", "Qualified size ratio", "合格粒度比率"), unit: "% ≥", values: ["90", "85", "90", "85"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["95", "90", "95", "90"] },
      { label: T("규격", "Size", "サイズ"), values: "3–5 mm / 4–8 mm" },
      { label: T("외관", "Appearance", "外観"), values: "White pellets" },
      { label: T("포장", "Packing", "包装"), values: "20 / 25 kg compound bags" },
    ],
  }],
};

// ============================================================
// SL-ALS-01 — 실리카알루미나겔 (A/B형)
// ============================================================
const slAls01: SilicaGelSpec = {
  code: "SL-ALS-01",
  sections: [{
    headers: [T("A 형", "Type A", "A 型"), T("B 형", "Type B", "B 型")],
    rows: [
      { label: T("흡착량 RH=20%", "Adsorption RH=20%", "吸着量 RH=20%"), unit: "% ≥", values: ["10", "9.0"] },
      { label: T("흡착량 RH=40%", "Adsorption RH=40%", "吸着量 RH=40%"), unit: "% ≥", values: ["20", "18.0"] },
      { label: T("흡착량 RH=80%", "Adsorption RH=80%", "吸着量 RH=80%"), unit: "% ≥", values: ["35", "42.0"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/L", values: ["720", "650"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "ml/g", values: ["0.35–0.45", "0.4–0.6"] },
      { label: T("공경", "Pore size", "細孔径"), unit: "Å", values: ["20–30", "20–30"] },
      { label: T("비표면적", "Specific surface area", "比表面積"), unit: "m²/g ≥", values: ["600", "600–800"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "%", values: ["65–80", "95–99.5"] },
      { label: T("Al₂O₃", "Al₂O₃", "Al₂O₃"), unit: "%", values: ["20–35", "0.5–5.0"] },
      { label: T("수분", "Moisture", "水分"), unit: "% ≤", values: ["3", "3"] },
      { label: T("압축강도", "Compressive strength", "圧縮強度"), unit: "N/pcs ≥", values: ["200", "150"] },
      { label: T("구형립 합격 비율", "Qualified spherical ratio", "球状粒合格比率"), unit: "% ≥", values: ["90", "80"] },
      { label: T("외관", "Appearance", "外観"), values: ["White beads", "Light yellow"] },
      { label: T("규격", "Size", "サイズ"), unit: "mm", values: ["1–4 / 3–5 / 4–8", "1–3 / 2–4"] },
      { label: T("포장", "Packing", "包装"), values: "25 kg/bag (out compound bag, inner PE bag)" },
    ],
  }],
};

// ============================================================
// SL-ALS-03 — 활성알루미나볼 (COA)
// ============================================================
const slAls03: SilicaGelSpec = {
  code: "SL-ALS-03",
  sections: [{
    headers: [T("규격", "SPEC", "規格"), T("측정값", "Test Result", "測定値")],
    rows: [
      { label: T("형태", "Type", "形態"), values: ["Beads", "Beads"] },
      { label: T("Al₂O₃", "Al₂O₃", "Al₂O₃"), unit: "%", values: ["≥ 92", "92.1"] },
      { label: T("SiO₂", "SiO₂", "SiO₂"), unit: "%", values: ["≤ 0.1", "0.072"] },
      { label: T("Fe₂O₃", "Fe₂O₃", "Fe₂O₃"), unit: "%", values: ["≤ 0.04", "0.032"] },
      { label: T("Na₂O", "Na₂O", "Na₂O"), unit: "%", values: ["≤ 0.5", "0.49"] },
      { label: T("LOI (강열감량)", "LOI", "LOI"), unit: "%", values: ["≤ 8.0", "6.8"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/cm³", values: ["≥ 0.65", "0.66"] },
      { label: T("BET 비표면적", "BET", "BET"), unit: "m²/g", values: ["≥ 280", "306"] },
      { label: T("공용적", "Pore volume", "細孔容積"), unit: "cm³/g", values: ["≥ 0.40", "0.42"] },
      { label: T("압쇄강도", "Crush strength", "圧潰強度"), unit: "N/G", values: ["≥ 130", "151"] },
      { label: T("수분 흡착률", "Water adsorption", "水分吸着率"), unit: "%", values: ["≥ 50", "52"] },
      { label: T("마모손실", "Loss on attrition", "摩耗損失"), unit: "%", values: ["≤ 0.5", "0.1"] },
      { label: T("입도 합격 비율", "Qualified size", "合格粒度比率"), unit: "%", values: ["≥ 90", "95"] },
    ],
  }],
};

// ============================================================
// SL-ALS-04 — 4A 분자체 (Strip / Pellet)
// ============================================================
const slAls04: SilicaGelSpec = {
  code: "SL-ALS-04",
  sections: [{
    groupHeaders: [
      { label: T("Strip 조형", "Strip", "Strip"), span: 2 },
      { label: T("Pellet 구형", "Pellet", "Pellet"), span: 2 },
    ],
    headers: [
      T("Ø 1.5–1.7", "Ø 1.5–1.7", "Ø 1.5–1.7"), T("Ø 3.0–3.3", "Ø 3.0–3.3", "Ø 3.0–3.3"),
      T("Ø 1.7–2.5", "Ø 1.7–2.5", "Ø 1.7–2.5"), T("Ø 3.0–5.0", "Ø 3.0–5.0", "Ø 3.0–5.0"),
    ],
    rows: [
      { label: T("외관", "Appearance", "外観"), values: ["Strip", "Strip", "Pellet", "Pellet"] },
      { label: T("직경", "Diameter", "直径"), unit: "mm", values: ["1.5–1.7", "3.0–3.3", "1.7–2.5", "3.0–5.0"] },
      { label: T("입도 합격 비율", "Qualified size ratio", "合格粒度比率"), unit: "%", values: ["≥ 98", "≥ 98", "≥ 98", "≥ 98"] },
      { label: T("퇴적밀도", "Bulk density", "かさ密度"), unit: "g/mL", values: ["≥ 0.66", "≥ 0.65", "≥ 0.70", "≥ 0.70"] },
      { label: T("마모손실", "Rattle loss", "摩耗損失"), unit: "%", values: ["≤ 0.20", "≤ 0.40", "≤ 0.20", "≤ 0.20"] },
      { label: T("압축강도", "Compressive strength", "圧縮強度"), unit: "N", values: ["≥ 30/cm", "≥ 45/cm", "≥ 30/p", "≥ 70/p"] },
      { label: T("정적수분 흡착률", "Static water adsorption", "静的水分吸着率"), unit: "%", values: ["≥ 21", "≥ 21", "≥ 21", "≥ 21"] },
      { label: T("메탄올 흡착률", "Methanol adsorption", "メタノール吸着率"), unit: "%", values: ["≥ 15", "≥ 15", "≥ 15", "≥ 15"] },
      { label: T("함수율", "Water content", "含水率"), unit: "% ≤", values: ["≤ 1.5", "≤ 1.5", "≤ 1.5", "≤ 1.5"] },
      { label: T("포장", "Packing", "包装"), values: "25 / 30 kg carton · 25 / 30 kg cardboard bucket · 50 / 150 kg iron bucket (all inner vacuum packing)" },
    ],
  }],
};

export const silicaGelSpecs: Record<string, SilicaGelSpec> = {
  "silica-gel-sl-ind-01": slInd01,
  "silica-gel-sl-ind-02": slInd02,
  "silica-gel-sl-ind-03": slInd03,
  "silica-gel-sl-ind-04": slInd04,
  "silica-gel-sl-ind-05": slInd05,
  "silica-gel-sl-ind-06": slInd06,
  "silica-gel-sl-ind-07": slInd07,
  "silica-gel-sl-des-01": slDes01,
  "silica-gel-sl-des-02": slDes02,
  "silica-gel-sl-des-03": slDes03,
  "silica-gel-sl-des-04": slDes04,
  "silica-gel-sl-des-05": slDes05,
  "silica-gel-sl-des-06": slDes06,
  "silica-gel-sl-des-07": slDes07,
  "silica-gel-sl-als-01": slAls01,
  "silica-gel-sl-als-03": slAls03,
  "silica-gel-sl-als-04": slAls04,
};
