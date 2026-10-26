// FAQ shown on the 사용가이드 (User Guide) page and in its prerendered HTML.
// Answer lines starting with "- " render as bullet points.
export type FaqLang = "ko" | "en" | "ja";
export type FaqTopic = "sample" | "order" | "customs" | "quality";

export type FaqItem = {
  id: string;
  topic: FaqTopic;
  q: Record<FaqLang, string>;
  a: Record<FaqLang, string[]>;
};

export const FAQ_INTRO: Record<FaqLang, string> = {
  ko: "고객이 자주 문의하시는 내용을 정리했습니다. 더 궁금한 점은 언제든 편하게 문의해 주세요.",
  en: "Here are the questions our customers ask most often. Feel free to contact us anytime if you have more questions.",
  ja: "お客様からよくいただくご質問をまとめました。その他ご不明な点がございましたら、お気軽にお問い合わせください。",
};

export const FAQ_TOPICS: Record<FaqTopic, Record<FaqLang, string>> = {
  sample: { ko: "샘플", en: "Samples", ja: "サンプル" },
  order: { ko: "주문 · 납기", en: "Orders & Delivery", ja: "ご注文・納期" },
  customs: { ko: "통관 · 수출입", en: "Customs & Export", ja: "通関・輸出入" },
  quality: { ko: "품질 · 기술지원", en: "Quality & Support", ja: "品質・技術サポート" },
};

export const faqItems: FaqItem[] = [
  {
    id: "sample-available",
    topic: "sample",
    q: {
      ko: "샘플 제공이 가능한가요?",
      en: "Can you provide samples?",
      ja: "サンプルの提供は可能ですか？",
    },
    a: {
      ko: [
        "실리카 제품은 고객사의 용도에 따라 입자 크기나 순도 스펙이 워낙 다양하게 나뉩니다. 그래서 국내생산과 일부 일반적인 제품 외에는 고객사별 맞춤형 샘플은 중국 현지 전문 공장을 통해 무료로 제작하여 공급해 드리고 있습니다. (특수 제작 공정이 들어가는 일부 제품 제외)",
        "그러나 해외 맞춤 공급 특성상 통관 과정에서 시간이 약간 걸릴 수 있는 점과 아울러 R&D 테스트용 샘플 발송에 발생하는 해외 물류비(FedEx 등)는 고객사에서 부담해 주셔야 하는 점 안내드립니다.",
        "혹시 이용 중이신 FedEx 계정 번호가 있으시다면 알려주세요! 현지 공장에서 고객사로 바로 직송해 드려 배송 기간을 한층 단축해 드리겠습니다.",
      ],
      en: [
        "Silica specifications such as particle size and purity vary widely depending on each customer's application. Apart from domestically produced and some standard products, we produce customized samples for each customer free of charge through specialized partner factories in China (excluding some products that require a special manufacturing process).",
        "Please note, however, that because these samples are supplied from overseas, customs clearance may take a little time, and the international shipping costs (FedEx, etc.) for R&D test samples are to be borne by the customer.",
        "If you have a FedEx account number, please let us know! The factory will ship directly to you, significantly shortening the delivery time.",
      ],
      ja: [
        "シリカ製品は、お客様の用途によって粒子径や純度のスペックが非常に多様に分かれます。そのため、国内生産品と一部の一般的な製品以外は、お客様ごとのカスタムサンプルを中国現地の専門工場を通じて無償で製作・ご提供しております（特殊な製造工程を要する一部製品を除く）。",
        "ただし、海外からのカスタム供給という特性上、通関に多少時間がかかる場合があること、またR&Dテスト用サンプルの発送にかかる国際物流費（FedExなど）はお客様にご負担いただくことをご了承ください。",
        "ご利用中のFedExアカウント番号がございましたらお知らせください！現地工場からお客様へ直送し、配送期間を大幅に短縮いたします。",
      ],
    },
  },
  {
    id: "sample-info",
    topic: "sample",
    q: {
      ko: "샘플이나 견적을 요청할 때 어떤 정보를 제공해야 하나요?",
      en: "What information should I provide when requesting a sample or quote?",
      ja: "サンプルや見積もりを依頼する際、どのような情報が必要ですか？",
    },
    a: {
      ko: [
        "단순히 \"나노 실리카 가능한가요?\" 또는 \"표면 개질 실리카 요청합니다\"와 같이 문의해 주실 경우, 적합한 스펙을 찾기 위해 여러 차례 추가 확인을 거쳐야 하므로 답변이 늦어질 수 있습니다.",
        "가장 좋은 방법은 필요하신 정확한 스펙(사양서)을 전달해 주시는 것입니다. 만약 정확한 지표를 모르실 경우 아래 내용을 함께 남겨주시면 적합한 제품을 선정하는 데 큰 도움이 됩니다.",
        "- 사용 용도 및 작업 환경",
        "- 제품을 통해 기대하는 효과",
        "- 기존에 테스트해 보신 타사 제품 정보 (보유 시)",
      ],
      en: [
        "If you simply ask \"Do you have nano silica?\" or \"I'd like surface-modified silica,\" we need several rounds of follow-up to find the right specification, which can delay our reply.",
        "The best approach is to send us the exact specification (spec sheet) you need. If you don't know the exact parameters, the following information helps us greatly in selecting a suitable product:",
        "- Intended application and working environment",
        "- The effect you expect from the product",
        "- Information on other suppliers' products you have tested (if any)",
      ],
      ja: [
        "「ナノシリカはありますか？」「表面改質シリカをお願いします」といった簡単なお問い合わせの場合、適切なスペックを探すために何度も追加確認が必要となり、ご回答が遅れることがあります。",
        "最も良い方法は、必要な正確なスペック（仕様書）をお送りいただくことです。正確な指標が不明な場合は、以下の内容をあわせてお知らせいただくと、適切な製品選定に大変役立ちます。",
        "- 使用用途および作業環境",
        "- 製品に期待する効果",
        "- これまでにテストされた他社製品の情報（お持ちの場合）",
      ],
    },
  },
  {
    id: "sample-leadtime",
    topic: "sample",
    q: {
      ko: "샘플을 받는 데 기간이 얼마나 소요되나요?",
      en: "How long does it take to receive a sample?",
      ja: "サンプルの受け取りまでどのくらいかかりますか？",
    },
    a: {
      ko: [
        "요청하신 샘플의 상황에 따라 소요 기간이 다릅니다.",
        "- 국내 재고 보유 시: 2~3일 내 수령 가능",
        "- 중국 현지 공장 발송 시: 약 7~8일 소요",
        "- 샘플 별도 제조 필요 시: 약 2주 소요",
        "분말 소재는 수량에 관계없이 통관 절차를 거쳐야 하므로, 통관 상황에 따라 며칠 더 지연될 수 있습니다. 프로젝트 일정 수립 시 이 점을 참고해 주시기 바랍니다.",
      ],
      en: [
        "Lead time depends on the status of the requested sample.",
        "- In stock in Korea: received within 2–3 days",
        "- Shipped from our partner factory in China: about 7–8 days",
        "- Sample requires separate production: about 2 weeks",
        "Powder materials must clear customs regardless of quantity, so delivery may be delayed by a few days depending on customs. Please keep this in mind when planning your project schedule.",
      ],
      ja: [
        "ご依頼のサンプルの状況によって所要期間が異なります。",
        "- 国内在庫がある場合：2〜3日以内にお届け可能",
        "- 中国現地工場から発送する場合：約7〜8日",
        "- サンプルの別途製造が必要な場合：約2週間",
        "粉体素材は数量にかかわらず通関手続きが必要なため、通関状況により数日遅れる場合があります。プロジェクトのスケジュール策定の際にご参考ください。",
      ],
    },
  },
  {
    id: "dual-use",
    topic: "customs",
    q: {
      ko: "이중용도 품목(전략물자)이란 무엇인가요?",
      en: "What are dual-use items (strategic goods)?",
      ja: "デュアルユース品目（戦略物資）とは何ですか？",
    },
    a: {
      ko: [
        "이중용도 품목이란 민수용뿐만 아니라 군수용으로도 전용될 수 있는 전략 자원 성격의 소재를 의미합니다. 이러한 품목은 일반 소재에 비해 통관 절차 및 수출입 승인 요건이 매우 까다롭습니다. 공식 전략물자로 지정되지 않은 소재라 하더라도, 이에 준하는 엄격한 통관 절차가 적용되는 소재들이 다수 존재합니다.",
      ],
      en: [
        "Dual-use items are strategic materials that can be diverted to military as well as civilian use. Compared with ordinary materials, their customs procedures and import/export approval requirements are very strict. Even materials not officially designated as strategic goods are often subject to equally strict customs procedures.",
      ],
      ja: [
        "デュアルユース品目とは、民生用だけでなく軍事用にも転用され得る戦略資源性の素材を指します。これらの品目は一般素材に比べ、通関手続きや輸出入承認の要件が非常に厳格です。正式に戦略物資に指定されていない素材であっても、これに準じる厳格な通関手続きが適用される素材が数多くあります。",
      ],
    },
  },
  {
    id: "end-user-certificate",
    topic: "customs",
    q: {
      ko: "최종용도확인서(End-User Certificate)는 왜 필요한가요?",
      en: "Why is an End-User Certificate required?",
      ja: "最終用途確認書（End-User Certificate）はなぜ必要ですか？",
    },
    a: {
      ko: [
        "이중용도 품목 및 이에 준하는 통관 절차가 적용되는 소재는 관련 법률 및 통관 규정에 따라 최종용도확인서 제출이 필수입니다. 이는 해당 소재가 어떤 기업에서, 어떤 목적으로 최종 사용되는지 명확히 확인하기 위한 법적 절차입니다.",
      ],
      en: [
        "For dual-use items and materials subject to equivalent customs procedures, submitting an End-User Certificate is mandatory under the relevant laws and customs regulations. It is a legal procedure to clearly confirm which company will ultimately use the material and for what purpose.",
      ],
      ja: [
        "デュアルユース品目およびこれに準じる通関手続きが適用される素材は、関連法令および通関規定により最終用途確認書の提出が必須です。これは、当該素材がどの企業で、どのような目的で最終的に使用されるかを明確に確認するための法的手続きです。",
      ],
    },
  },
  {
    id: "unlisted-products",
    topic: "quality",
    q: {
      ko: "웹사이트 목록에 없는 제품도 공급 가능한가요?",
      en: "Can you supply products not listed on the website?",
      ja: "ウェブサイトに掲載されていない製品も供給可能ですか？",
    },
    a: {
      ko: [
        "네, 가능합니다. 편하게 문의해 주세요.",
        "실리카 및 관련 연관 소재라면 즉시 공급 가능 여부와 관계없이, 해당 소재의 시장 동향 및 기술 정보에 대해서도 전문적인 상담과 안내를 도와드리고 있습니다.",
      ],
      en: [
        "Yes, we can. Please feel free to contact us.",
        "For silica and related materials, we also offer expert consultation on market trends and technical information, regardless of whether the material is immediately available.",
      ],
      ja: [
        "はい、可能です。お気軽にお問い合わせください。",
        "シリカおよび関連素材であれば、即時供給の可否にかかわらず、その素材の市場動向や技術情報についても専門的なご相談・ご案内を承っております。",
      ],
    },
  },
  {
    id: "moq",
    topic: "order",
    q: {
      ko: "최소 주문 수량(MOQ)이 정해져 있나요?",
      en: "Is there a minimum order quantity (MOQ)?",
      ja: "最小注文数量（MOQ）は決まっていますか？",
    },
    a: {
      ko: [
        "제품마다 기본 포장 단위(예: 10kg, 25kg, 1ton 등)가 지정되어 있습니다.",
        "해외에서 수입되는 제품 특성상 소량 물동량은 물류비 비중이 높아져 단가가 상승하는 원인이 됩니다. 합리적인 단가를 제시해 드리기 위해 고객사의 필요 물량 및 예상 사용량을 함께 논의하고 있습니다.",
        "또한, 정기적으로 사용하는 품목의 경우 당사 창고에 재고를 보관하며 주기적으로 안정 있게 납품해 드리는 맞춤 공급 서비스도 가능합니다.",
      ],
      en: [
        "Each product has a standard packing unit (e.g., 10 kg, 25 kg, 1 ton).",
        "Because our products are imported, small shipments carry a high share of logistics cost, which raises the unit price. To offer a reasonable price, we discuss your required volume and expected usage with you.",
        "For items you use regularly, we also offer a tailored supply service: we keep stock in our warehouse and deliver reliably on a regular schedule.",
      ],
      ja: [
        "製品ごとに基本梱包単位（例：10kg、25kg、1tなど）が定められています。",
        "海外から輸入する製品の特性上、少量の物量では物流費の比重が高くなり、単価上昇の要因となります。合理的な単価をご提示するため、貴社の必要数量および予想使用量をあわせてご相談しております。",
        "また、定期的にご使用の品目については、当社倉庫に在庫を保管し、定期的かつ安定的に納品するカスタム供給サービスも可能です。",
      ],
    },
  },
  {
    id: "quality-assurance",
    topic: "quality",
    q: {
      ko: "제품의 품질은 어떻게 보증되나요?",
      en: "How is product quality guaranteed?",
      ja: "製品の品質はどのように保証されますか？",
    },
    a: {
      ko: [
        "당사와 협력하는 해외 제조사는 대부분 품질경영시스템 인증을 보유하고 있거나 해당 산업 분야에서 검증된 우수한 기업들입니다.",
        "당사는 생산 공장 정보를 투명하게 공유해 드리며, 납품 시 기본적으로 TDS(기술자료표) 및 CoA/QC(품질검사성적서)를 함께 제공하여 품질을 철저히 보증합니다.",
      ],
      en: [
        "Most of our overseas manufacturing partners hold quality management system certifications or are proven, leading companies in their industries.",
        "We transparently share production factory information and, as standard, supply a TDS (Technical Data Sheet) and CoA/QC (Certificate of Analysis) with every delivery to guarantee quality.",
      ],
      ja: [
        "当社と協力する海外メーカーの多くは、品質マネジメントシステム認証を取得しているか、当該産業分野で実績のある優良企業です。",
        "当社は生産工場の情報を透明に共有し、納品時には基本的にTDS（技術資料）およびCoA/QC（品質検査成績書）をあわせてご提供し、品質を徹底して保証します。",
      ],
    },
  },
  {
    id: "delivery-time",
    topic: "order",
    q: {
      ko: "주문 후 납기는 얼마나 걸리나요?",
      en: "How long does delivery take after ordering?",
      ja: "ご注文後の納期はどのくらいですか？",
    },
    a: {
      ko: [
        "수량과 운송 방식에 따라 차이가 있습니다.",
        "- 국내/현지 재고 보유 품목: 물류 방식에 따라 약 5일 ~ 15일 소요",
        "- 별도 주문 생산 품목: 수량 및 공장 가동 상황에 따라 약 4주 ~ 6주 소요",
      ],
      en: [
        "It varies with quantity and shipping method.",
        "- Items in stock in Korea or at the factory: about 5–15 days depending on logistics",
        "- Made-to-order items: about 4–6 weeks depending on quantity and factory schedule",
      ],
      ja: [
        "数量および輸送方法によって異なります。",
        "- 国内／現地在庫品：物流方法により約5日〜15日",
        "- 別途受注生産品：数量および工場の稼働状況により約4週間〜6週間",
      ],
    },
  },
  {
    id: "process-fit",
    topic: "quality",
    q: {
      ko: "특정 자료에서 본 제품이 저희 공정에 적합한 소재인지 확인받을 수 있나요?",
      en: "Can you confirm whether a product we saw in some material suits our process?",
      ja: "資料で見た製品が当社の工程に適した素材かどうか確認してもらえますか？",
    },
    a: {
      ko: [
        "네, 가능합니다.",
        "당사가 보유한 다양한 적용 사례(Application) 및 실제 산업 현장의 구현 데이터를 바탕으로, 고객사의 공정에 가장 적합한 소재인지 기술 자문을 제공해 드리고 있습니다.",
      ],
      en: [
        "Yes, we can.",
        "Based on our wide range of application cases and real-world implementation data from industrial sites, we provide technical advice on whether a material is the best fit for your process.",
      ],
      ja: [
        "はい、可能です。",
        "当社が保有する多様な適用事例（Application）および実際の産業現場での実装データに基づき、貴社の工程に最も適した素材かどうか技術的なアドバイスをご提供しています。",
      ],
    },
  },
];
