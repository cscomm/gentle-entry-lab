import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Lang = "ko" | "en" | "ja";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LangCtx | undefined>(undefined);

const SUPPORTED: readonly Lang[] = ["ko", "en", "ja"];
const isLang = (v: string | undefined): v is Lang =>
  !!v && (SUPPORTED as readonly string[]).includes(v);

const dict: Record<string, { ko: string; en: string; ja?: string }> = {
  // Nav
  "nav.home": { ko: "홈", en: "Home", ja: "ホーム" },
  "nav.products": { ko: "제품", en: "SiLiCA Product", ja: "製品" },
  "nav.about": { ko: "회사소개", en: "About", ja: "会社紹介" },
  "nav.applications": { ko: "응용분야", en: "Applications", ja: "応用分野" },
  "nav.contact": { ko: "문의하기", en: "Contact", ja: "お問い合わせ" },
  "nav.board": { ko: "게시판", en: "Board", ja: "掲示板" },
  "nav.tagline": { ko: "실리카 전문 기업", en: "Silica Specialist", ja: "シリカ専門企業" },

  // Board
  "board.title": { ko: "게시판", en: "Board", ja: "掲示板" },
  "board.subtitle": { ko: "공지사항·업계 소식·기술 정보를 자유롭게 공유하세요.", en: "Feel free to share notices, industry news, and technical information.", ja: "お知らせ・業界ニュース・技術情報を自由に共有してください。" },
  "board.new": { ko: "글쓰기", en: "New Post", ja: "投稿する" },
  "board.empty": { ko: "아직 게시글이 없습니다. 첫 글의 주인공이 되어보세요.", en: "No posts yet. Be the first to write.", ja: "まだ投稿がありません。最初の投稿をしてみませんか。" },
  "board.private": { ko: "비공개", en: "Private", ja: "非公開" },
  "board.public": { ko: "공개", en: "Public", ja: "公開" },
  "board.views": { ko: "조회", en: "Views", ja: "閲覧数" },
  "board.author": { ko: "작성자", en: "Author", ja: "作成者" },
  "board.date": { ko: "작성일", en: "Date", ja: "作成日" },
  "board.back": { ko: "← 목록으로", en: "← Back to list", ja: "← 一覧へ" },
  "board.delete": { ko: "삭제", en: "Delete", ja: "削除" },
  "board.deleteConfirm": { ko: "비밀번호를 입력해 주세요.", en: "Enter password to delete.", ja: "パスワードを入力してください。" },
  "board.unlock": { ko: "잠금 해제", en: "Unlock", ja: "ロック解除" },
  "board.lockedDesc": { ko: "이 글은 비공개입니다. 비밀번호를 입력하면 내용을 볼 수 있습니다.", en: "This post is private. Enter the password to view its content.", ja: "この記事は非公開です。パスワードを入力すると内容を閲覧できます。" },
  "board.wrongPw": { ko: "비밀번호가 일치하지 않습니다.", en: "Incorrect password.", ja: "パスワードが一致しません。" },
  "board.deleted": { ko: "게시글이 삭제되었습니다.", en: "Post deleted.", ja: "記事が削除されました。" },
  "board.created": { ko: "게시글이 등록되었습니다.", en: "Post created.", ja: "記事が登録されました。" },

  // Compose form
  "form.title": { ko: "제목", en: "Title", ja: "タイトル" },
  "form.content": { ko: "내용", en: "Content", ja: "内容" },
  "form.author": { ko: "작성자 이름", en: "Author Name", ja: "作成者名" },
  "form.password": { ko: "비밀번호", en: "Password", ja: "パスワード" },
  "form.passwordHint": { ko: "수정·삭제 및 비공개 글 열람 시 사용됩니다.", en: "Used to delete/manage this post and unlock private content.", ja: "修正・削除および非公開記事の閲覧時に使用されます。" },
  "form.visibility": { ko: "공개 설정", en: "Visibility", ja: "公開設定" },
  "form.publish": { ko: "등록", en: "Publish", ja: "登録" },
  "form.cancel": { ko: "취소", en: "Cancel", ja: "キャンセル" },

  // Hero
  "hero.cta": { ko: "제품 살펴보기", en: "Explore Products", ja: "製品を見る" },
  "hero1.title": { ko: "Silica: Nature's Gift to the Future.", en: "Silica: Nature's Gift to the Future.", ja: "Silica: Nature's Gift to the Future." },
  "hero1.sub": { ko: "Technology that Leads Industry", en: "Technology that Leads Industry", ja: "Technology that Leads Industry" },
  "hero1.desc": {
    ko: "반도체·광학·태양광·내화재·의료 산업에 최적화된 용융실리카, 실리카 겔, 침전실리카, 흄드실리카, 나노실리카까지 — 다양한 실리카 소재를 안정적으로 공급합니다.",
    en: "From fused silica, silica gel, precipitated silica, fumed silica, to nano silica — we supply a wide range of high-purity silica materials optimized for semiconductor, optical, solar, refractory, and medical industries.", ja: "半導体・光学・太陽光・耐火材・医療産業に最適化された溶融シリカ、シリカゲル、沈降シリカ、ヒュームドシリカ、ナノシリカまで — 多様なシリカ素材を安定的に供給します。" },
  "hero2.title": { ko: "High-Purity Silica Powder", en: "High-Purity Silica Powder", ja: "High-Purity Silica Powder" },
  "hero2.sub": { ko: "A New Standard for Precision Industries", en: "A New Standard for Precision Industries", ja: "A New Standard for Precision Industries" },
  "hero2.desc": {
    ko: "전자·코팅·첨단소재 산업에 적용되는 고분산 고순도 실리카 분말",
    en: "High-dispersion, high-purity silica powder for electronics, coatings, and advanced materials.", ja: "電子・コーティング・先端素材産業に適用される高分散高純度シリカ粉末" },

  // About section (Index)
  "about.tag": { ko: "ABOUT US", en: "ABOUT US", ja: "ABOUT US" },
  "about.title": { ko: "실리카는 자연이 주는\n미래를 만들어 갑니다", en: "Silica Shapes the Future\nNature Has Given Us", ja: "シリカは自然がもたらす\n未来を創り出します" },
  "about.p1": {
    ko: "당사는 국내에는 현재 유일한 고품위 규석 광산을 직접 개발하여 운영 중이며, 탐사부터 채광 후 1차 공정을 자체적으로 수행하여 최고 품질의 고품위 석영을 생산하고 있습니다.",
    en: "We directly operate Korea's only high-grade silica mine, performing exploration, mining, and primary processing in-house to produce the highest-quality quartz.", ja: "当社は現在、韓国で唯一の高品位石英鉱山を直接開発して運営しており、探査から採鉱後の1次工程まで自社で行い、最高品質の高品位石英を生産しています。" },
  "about.p2": {
    ko: "원료 선별부터 완제품까지 운영되는 각 단계의 차별화된 품질 관리 시스템을 통해 고객의 높은 기대에 부합하는 제품을 생산하고 있습니다.",
    en: "From raw-material sorting to finished products, our differentiated QC system at every stage delivers results that meet our customers' highest expectations.", ja: "原料の選別から完成品に至るまで、各段階で差別化された品質管理システムを運用し、お客様の高い期待に応える製品を生産しています。" },
  "about.p3": {
    ko: "실리카의 현지 공장은 글로벌 업체들에게 원료을 공급하고 있는 오랜 경험과 축적된 기술력을 기반으로 ISO 9001, ISO 22000, FSSC 22000 등의 품질 관리 시스템과 작업 환경을 보유 하고 있습니다. 지속적으로 발전 하는 기술의 빠른 적용을 통하여 전자 소재 · 산업용 코팅 · 세라믹 · 내화재 · 주조 · 태양광 및 에너지 소재 및 각종 실리카 첨가물을 다양한 산업분야 전반에 최적의 실리카 솔루션을 제공합니다.",
    en: "Our ISO 9001-certified facility draws on long experience supplying raw materials to global companies. By rapidly applying evolving technology, we provide optimal silica solutions — including silica additives — for electronics, industrial coatings, ceramics, refractories, casting, solar, and energy materials across all industries.", ja: "シリカの現地工場は、グローバル企業に原料を供給してきた長年の経験と蓄積された技術力を基盤に、ISO 9001、ISO 22000、FSSC 22000などの品質管理システムと作業環境を保有しています。持続的に発展する技術の迅速な適用により、電子素材・産業用コーティング・セラミックス・耐火材・鋳造・太陽光およびエネルギー素材、各種シリカ添加物に関する最適なシリカソリューションを多様な産業分野全般に提供しています。" },
  "about.btn": { ko: "회사 소개 보기", en: "About the Company", ja: "会社紹介を見る" },

  // Products section
  "products.cat": { ko: "제품 카테고리", en: "Product Category", ja: "製品カテゴリ" },
  "products.all": { ko: "전체 제품", en: "All Products", ja: "全製品" },
  "products.detail": { ko: "자세히 보기", en: "View Details", ja: "詳細を見る" },

  // Contact
  "contact.tag": { ko: "Contact Us", en: "Contact Us", ja: "Contact Us" },
  "contact.title": { ko: "프로젝트의 시작,\nSilica가 함께 합니다.", en: "Let's start your project\nwith Silica.", ja: "プロジェクトの始まりは、\nSilicaが共にします。" },
  "contact.desc": {
    ko: "최적의 실리카 솔루션이 필요하신 모든 산업 분야의 파트너를 환영합니다.",
    en: "We welcome partners from every industry seeking the optimal silica solution.", ja: "最適なシリカソリューションを必要とするあらゆる産業分野のパートナーを歓迎します。" },
  "contact.office": { ko: "사무실", en: "Office", ja: "オフィス" },
  "contact.form": { ko: "문의 양식", en: "Inquiry Form", ja: "お問い合わせフォーム" },
  "form.name": { ko: "이름 *", en: "Name *", ja: "お名前 *" },
  "form.phone": { ko: "연락처 *", en: "Phone *", ja: "ご連絡先 *" },
  "form.email": { ko: "이메일", en: "Email", ja: "メールアドレス" },
  "form.company": { ko: "회사명", en: "Company", ja: "会社名" },
  "form.message": { ko: "문의 내용 *", en: "Message *", ja: "お問い合わせ内容 *" },
  "form.send": { ko: "문의 보내기", en: "Send Inquiry", ja: "送信する" },
  "form.sending": { ko: "전송 중...", en: "Sending...", ja: "送信中..." },

  // Footer
  "footer.tagline": { ko: "실리카전문기업", en: "Silica Specialist", ja: "シリカ専門企業" },
  "footer.terms": { ko: "이용약관", en: "Terms", ja: "利用規約" },
  "footer.privacy": { ko: "개인정보처리방침", en: "Privacy Policy", ja: "個人情報保護方針" },
  "footer.products": { ko: "제품", en: "Products", ja: "製品" },
  "footer.about": { ko: "회사소개", en: "About", ja: "会社紹介" },
  "footer.applications": { ko: "응용분야", en: "Applications", ja: "応用分野" },
  "footer.contact": { ko: "문의하기", en: "Contact", ja: "お問い合わせ" },
  "footer.hq": { ko: "본사 · 전라북도 진안군 동계로 328 · 주식회사 비에이알", en: "HQ · 328 Donggye-ro, Jinan-gun, Jeollabuk-do · BAR Co., Ltd.", ja: "本社 · 全羅北道鎮安郡東渓路328 · 株式会社BAR" },
  "footer.hq2": { ko: "사업자등록번호 565-88-02541 · 대표 박균수", en: "Business Reg. No. 565-88-02541 · CEO Park Gyun-soo", ja: "事業者登録番号 565-88-02541 · 代表 パク・ギュンス" },
  "footer.address": { ko: "경기도 화성시 남양읍 화성로1196", en: "1196 Hwaseong-ro, Namyang-eup, Hwaseong, Gyeonggi-do", ja: "京畿道華城市南陽邑華城路1196" },
  "footer.products.title": { ko: "제품", en: "Products", ja: "製品" },
  "footer.about.title": { ko: "회사소개", en: "About", ja: "会社紹介" },
  "footer.applications.title": { ko: "응용분야", en: "Applications", ja: "応用分野" },

  // Product detail page
  "pd.overview": { ko: "제품 개요", en: "Product Overview", ja: "製品概要" },
  "pd.features": { ko: "주요 특징", en: "Key Features", ja: "主な特徴" },
  "pd.applications": { ko: "응용분야", en: "Applications", ja: "応用分野" },
  "pd.applications.desc": { ko: "고객 산업별 맞춤형 솔루션 — 각 분야의 신뢰성 요구를 완벽히 충족합니다", en: "Tailored solutions for every industry — meeting the highest reliability standards.", ja: "お客様の産業別カスタマイズソリューション — 各分野の信頼性要求を完全に満たします" },
  "pd.related": { ko: "다른 제품 살펴보기", en: "Explore Other Products", ja: "他の製品を見る" },
  "pd.inquire": { ko: "제품 문의하기", en: "Inquire About This Product", ja: "製品について問い合わせる" },
  "pd.allProducts": { ko: "← 모든 제품 보기", en: "← View All Products", ja: "← 全製品を見る" },
  "pd.spec": { ko: "제품 스펙", en: "Specifications", ja: "製品スペック" },
  "pd.spec.item": { ko: "항목", en: "Item", ja: "項目" },
  "pd.spec.value": { ko: "규격", en: "Spec", ja: "規格" },
  "pd.spec.note": { ko: "비고", en: "Note", ja: "備考" },
  "pd.notFound": { ko: "제품을 찾을 수 없습니다", en: "Product not found", ja: "製品が見つかりません" },
  "pd.toHome": { ko: "홈으로 돌아가기", en: "Back to home", ja: "ホームに戻る" },

  // Application name translations (KO key -> EN label)
  "app.반도체": { ko: "반도체", en: "Semiconductor", ja: "半導体" },
  "app.광학": { ko: "광학", en: "Optics", ja: "光学" },
  "app.디스플레이": { ko: "디스플레이", en: "Display", ja: "ディスプレイ" },
  "app.항공/방산": { ko: "항공/방산", en: "Aerospace & Defense", ja: "航空/防衛" },
  "app.의료": { ko: "의료", en: "Medical", ja: "医療" },
  "app.에너지": { ko: "에너지", en: "Energy", ja: "エネルギー" },
  "app.태양광": { ko: "태양광", en: "Solar", ja: "太陽光" },
  "app.전자/반도체": { ko: "전자/반도체", en: "Electronics / Semiconductor", ja: "電子/半導体" },
  "app.정밀 주조": { ko: "정밀 주조", en: "Precision Casting", ja: "精密鋳造" },
  "app.특수 소재": { ko: "특수 소재", en: "Specialty Materials", ja: "特殊素材" },
  "app.건축 및 건자재": { ko: "건축 및 건자재", en: "Construction Materials", ja: "建築および建材" },
  "app.페인트 및 코팅": { ko: "페인트 및 코팅", en: "Paints & Coatings", ja: "塗料およびコーティング" },
  "app.플라스틱/고무": { ko: "플라스틱/고무", en: "Plastics & Rubber", ja: "プラスチック/ゴム" },
  "app.연마 및 내마모재": { ko: "연마 및 내마모재", en: "Abrasives & Wear-Resistant", ja: "研磨および耐摩耗材" },
  "app.기타 산업용": { ko: "기타 산업용", en: "Other Industrial", ja: "その他産業用" },
  "app.EGS / 인조대리석": { ko: "EGS / 인조대리석", en: "EGS / Engineered Stone", ja: "EGS / 人造大理石" },
  "app.고급 유리": { ko: "고급 유리", en: "Premium Glass", ja: "高級ガラス" },
  "app.전자재료": { ko: "전자재료", en: "Electronic Materials", ja: "電子材料" },
  "app.나노 가공": { ko: "나노 가공", en: "Nano Processing", ja: "ナノ加工" },
  "app.실리카겔": { ko: "실리카겔 (Silica Gel)", en: "Silica Gel", ja: "シリカゲル (Silica Gel)" },
  "app.침전/침강실리카": { ko: "침전/침강실리카 (Precipitated Silica)", en: "Precipitated Silica", ja: "沈降シリカ (Precipitated Silica)" },

  // SL series applications
  "app.반도체 EMC": { ko: "반도체 EMC (봉지재)", en: "Semiconductor EMC (Encapsulant)", ja: "半導体EMC(封止材)" },
  "app.CCL / PCB": { ko: "CCL / PCB 기판", en: "CCL / PCB Substrate", ja: "CCL / PCB基板" },
  "app.언더필 / 봉지재": { ko: "언더필 · 봉지재", en: "Underfill & Encapsulant", ja: "アンダーフィル・封止材" },
  "app.고열전도 소재": { ko: "고열전도 소재", en: "High Thermal Conductivity Materials", ja: "高熱伝導材料" },
  "app.도전성 페이스트": { ko: "도전성 페이스트", en: "Conductive Paste", ja: "導電性ペースト" },
  "app.산업용 코팅": { ko: "산업용 코팅", en: "Industrial Coatings", ja: "産業用コーティング" },
  "app.고내마모 복합재": { ko: "고내마모 복합재", en: "Wear-Resistant Composites", ja: "高耐摩耗複合材" },
  "app.EMC / 봉지재": { ko: "EMC · 봉지재", en: "EMC & Encapsulant", ja: "EMC・封止材" },
  "app.산업 도료": { ko: "산업 도료", en: "Industrial Paints", ja: "産業用塗料" },
  "app.접착제 · 실란트": { ko: "접착제 · 실란트", en: "Adhesives & Sealants", ja: "接着剤・シーラント" },
  "app.고무 보강": { ko: "고무 보강재", en: "Rubber Reinforcement", ja: "ゴム補強材" },
  "app.인조 대리석": { ko: "인조 대리석", en: "Engineered Stone", ja: "人造大理石" },
  "app.전기 절연재": { ko: "전기 절연재", en: "Electrical Insulation", ja: "電気絶縁材" },
  "app.HBM / DDR5": { ko: "HBM / DDR5 메모리", en: "HBM / DDR5 Memory", ja: "HBM / DDR5メモリ" },
  "app.AI 반도체 EMC": { ko: "AI 반도체 EMC", en: "AI Semiconductor EMC", ja: "AI半導体EMC" },
  "app.어드밴스드 패키징": { ko: "어드밴스드 패키징", en: "Advanced Packaging", ja: "先端パッケージング" },
  "app.에폭시 복합재": { ko: "에폭시 복합재", en: "Epoxy Composites", ja: "エポキシ複合材" },
  "app.실리콘 실란트": { ko: "실리콘 실란트", en: "Silicone Sealants", ja: "シリコーンシーラント" },
  "app.고성능 접착제": { ko: "고성능 접착제", en: "High-Performance Adhesives", ja: "高性能接着剤" },
  "app.코팅 · 잉크": { ko: "코팅 · 잉크", en: "Coatings & Inks", ja: "コーティング・インク" },
  "app.유리 원료": { ko: "유리 원료", en: "Glass Raw Material", ja: "ガラス原料" },
  "app.연마재": { ko: "연마재", en: "Abrasives", ja: "研磨材" },
  "app.워터 필터": { ko: "워터 필터", en: "Water Filtration", ja: "水処理フィルター" },
  "app.스포츠 표면재": { ko: "스포츠 표면재", en: "Sports Surfaces", ja: "スポーツ表面材" },
  "app.전자 부품 봉착": { ko: "전자 부품 봉착", en: "Electronic Component Sealing", ja: "電子部品封着" },
  "app.태양전지": { ko: "태양전지", en: "Solar Cells", ja: "太陽電池" },
  "app.세라믹 · 금속 봉착": { ko: "세라믹 · 금속 봉착", en: "Ceramic & Metal Sealing", ja: "セラミック・金属封着" },

  // About page
  "ab.hero.tag": { ko: "ABOUT US", en: "ABOUT US", ja: "ABOUT US" },
  "ab.hero.title": { ko: "국내 유일의 고품위\n규석 광산을\n직접 개발합니다", en: "We Operate Korea's Only\nHigh-Grade Silica Mine", ja: "韓国唯一の高品位\n石英鉱山を\n直接開発しています" },
  "ab.hero.sub": { ko: "원료부터 완제품까지, 차별화된 품질로 산업의 표준을 만듭니다.", en: "From raw material to finished product — we set the industry standard with differentiated quality.", ja: "原料から完成品まで、差別化された品質で産業の標準を創ります。" },
  "ab.back": { ko: "홈으로", en: "Back to Home", ja: "ホームへ" },
  "ab.overview.tag": { ko: "COMPANY OVERVIEW", en: "COMPANY OVERVIEW", ja: "COMPANY OVERVIEW" },
  "ab.overview.title": { ko: "원료에서 완제품까지", en: "From Raw Material to Finished Product", ja: "原料から完成品まで" },
  "ab.overview.p1": {
    ko: "당사는 국내에는 현재 유일한 고품위 규석 광산을 직접 개발하여 운영 중이며, 탐사부터 채광 후 1차 공정을 자체적으로 수행하여 최고 품질의 고품위 석영을 생산하고 있습니다.",
    en: "We directly develop and operate Korea's only high-grade silica mine, performing exploration, mining, and primary processing in-house to produce the highest-quality quartz.", ja: "当社は現在、韓国で唯一の高品位石英鉱山を直接開発して運営しており、探査から採鉱後の1次工程まで自社で行い、最高品質の高品位石英を生産しています。" },
  "ab.overview.p2": {
    ko: "원료 선별부터 완제품까지 운영되는 각 단계의 차별화된 품질 관리 시스템을 통해 고객의 높은 기대에 부합하는 제품을 생산하고 있습니다.",
    en: "Our differentiated QC system at every stage — from raw-material sorting to finished products — delivers results that meet our customers' highest expectations.", ja: "原料の選別から完成品に至るまで、各段階で差別化された品質管理システムを運用し、お客様の高い期待に応える製品を生産しています。" },
  "ab.overview.p3": {
    ko: "실리카의 현지 공장은 글로벌 업체들에게 원료을 공급하고 있는 오랜 경험과 축적된 기술력을 기반으로 ISO 9001, ISO 22000, FSSC 22000 등의 품질 관리 시스템과 작업 환경을 보유 하고 있습니다. 지속적으로 발전 하는 기술의 빠른 적용을 통하여 전자 소재 · 산업용 코팅 · 세라믹 · 내화재 · 주조 · 태양광 및 에너지 소재 및 각종 실리카 첨가물을 다양한 산업분야 전반에 최적의 실리카 솔루션을 제공합니다.",
    en: "Our ISO 9001-certified facility draws on long experience supplying raw materials to global companies. By rapidly applying evolving technology, we provide optimal silica solutions — including silica additives — for electronics, industrial coatings, ceramics, refractories, casting, solar, and energy materials across all industries.", ja: "シリカの現地工場は、グローバル企業に原料を供給してきた長年の経験と蓄積された技術力を基盤に、ISO 9001、ISO 22000、FSSC 22000などの品質管理システムと作業環境を保有しています。持続的に発展する技術の迅速な適用により、電子素材・産業用コーティング・セラミックス・耐火材・鋳造・太陽光およびエネルギー素材、各種シリカ添加物に関する最適なシリカソリューションを多様な産業分野全般に提供しています。" },
  "ab.mine.tag": { ko: "JANGSU BAEKAM MINE · BAR", en: "JANGSU BAEKAM MINE · BAR", ja: "JANGSU BAEKAM MINE · BAR" },
  "ab.mine.title": { ko: "장수백암광산", en: "Jangsu Baekam Mine", ja: "長水白岩鉱山" },
  "ab.mine.p1.ko": {
    ko: "<strong>장수백암광산(BAR)</strong>의 이름은 일제강점기 때의 소재지 지명에서 유래합니다. 전라북도 장수군과 진안군 경계에 위치한 <strong>백운면(白雲面) 신송리(新松里)</strong>에 소재 (현재 지명은 진안군 동향면 신송리)했던 바, 신송리라는 원래 지명도 <strong>백암(白巖) — '흰색 광석'</strong>이라는 별칭으로 불렸던 규석(Silica Stone, 硅石)과 장석이 생산됐던 이유에서 비롯돼 명명됐던 역사를 가지고 있습니다.",
    en: "The name <strong>Jangsu Baekam Mine (BAR)</strong> comes from its historical location during the Japanese colonial era. It was located in <strong>Sinsong-ri, Baekun-myeon</strong> at the border of Jangsu-gun and Jinan-gun in Jeollabuk-do (now Sinsong-ri, Donghyang-myeon, Jinan-gun). The local nickname <strong>'Baekam (白巖) — white stone'</strong> referred to the silica stone (Silica Stone, 硅石) and feldspar mined there.", ja: "<strong>長水白岩鉱山(BAR)</strong>の名前は、日本統治時代の所在地名に由来します。全羅北道長水郡と鎮安郡の境界に位置する<strong>白雲面新松里</strong>に所在（現在の地名は全羅北道鎮安郡東郷面新松里）しており、新松里という本来の地名も、<strong>白岩 — 「白い鉱石」</strong>という別称で呼ばれた石英（Silica Stone、硅石）と長石が生産されていたことにちなんで命名された歴史を持っています。" },
  "ab.mine.p2": {
    ko: "과거에 이미 노천 장석광산으로 알려진 광산이며, 현재는 굴진을 통한 규석을 채광하고 있습니다. <strong>현존하는 국내 유일의 고품위 규석광산</strong>으로, 가장 큰 특징은 <strong class=\"text-primary\">최저 99.5%를 유지하는 편차 없는 순도</strong>를 보장한다는 점입니다.",
    en: "Already known as an open-pit feldspar mine in the past, today silica is extracted via tunneling. As <strong>Korea's only existing high-grade silica mine</strong>, its defining feature is <strong class=\"text-primary\">consistent purity of at least 99.5% with zero deviation</strong>.", ja: "過去にすでに露天長石鉱山として知られていた鉱山であり、現在は掘進による石英の採鉱を行っています。<strong>現存する国内唯一の高品位石英鉱山</strong>であり、最大の特徴は<strong class=\"text-primary\">最低99.5%を維持するばらつきのない純度</strong>を保証する点にあります。" },
  "ab.mine.aerial": { ko: "AERIAL VIEW", en: "AERIAL VIEW", ja: "AERIAL VIEW" },
  "ab.mine.aerialSub": { ko: "광산 전경 — 장수 신송리", en: "Mine view — Jangsu Sinsong-ri", ja: "鉱山全景 — 長水新松里" },
  "ab.process.tag": { ko: "MANUFACTURING PROCESS", en: "MANUFACTURING PROCESS", ja: "MANUFACTURING PROCESS" },
  "ab.process.title": { ko: "광산에서 첨단 산업으로", en: "From Mine to Advanced Industry", ja: "鉱山から先端産業へ" },
  "ab.process.titleAccent": { ko: "정밀한 제조 공정", en: "Precision Manufacturing", ja: "精密な製造工程" },
  "ab.process.desc": {
    ko: "고순도 원광을 1차 가공·정제·용융·미분쇄까지 일관된 공정으로 처리합니다. 단계별 품질 관리(QC)를 통해 편차 없는 순도와 균일한 입도를 보장합니다.",
    en: "High-purity ore is processed through an integrated workflow — primary processing, refining, melting, and micro-grinding. Stage-by-stage QC ensures consistent purity and uniform particle size.", ja: "高純度原鉱を1次加工・精製・溶融・微粉砕まで一貫した工程で処理します。段階別の品質管理(QC)を通じて、ばらつきのない純度と均一な粒度を保証します。" },
  "ab.prod.tag": { ko: "PRODUCTION PROCESS", en: "PRODUCTION PROCESS", ja: "PRODUCTION PROCESS" },
  "ab.prod.title": { ko: "다양한 입도 제품", en: "Various Particle-Size Products", ja: "多様な粒度製品" },
  "ab.prod.titleAccent": { ko: "생산 공정", en: "Production Process", ja: "生産工程" },
  "ab.prod.desc": { ko: "다섯 단계의 정밀 공정을 통해 고순도, 균일한 품질의 제품을 만듭니다.", en: "A five-step precision process produces high-purity, uniformly sized products.", ja: "5段階の精密工程を通じて、高純度かつ均一な品質の製品を製造します。" },
  "ab.prod.s1.t": { ko: "인공 선별", en: "Manual Sorting", ja: "人工選別" },
  "ab.prod.s1.d": { ko: "원료를 육안 및 기준에 따라 선별하여 불순물을 제거합니다.", en: "Sort raw materials visually and by standard to remove impurities.", ja: "原料を目視および基準に従い選別し、不純物を除去します。" },
  "ab.prod.s2.t": { ko: "기계 분쇄", en: "Mechanical Crushing", ja: "機械粉砕" },
  "ab.prod.s2.d": { ko: "선별된 원료를 기계로 분쇄하여 적정 크기로 조절합니다.", en: "Crush sorted materials mechanically to the proper size.", ja: "選別された原料を機械で粉砕し、適正なサイズに調整します。" },
  "ab.prod.s3.t": { ko: "철 제거", en: "Iron Removal", ja: "鉄分除去" },
  "ab.prod.s3.d": { ko: "자력 선별을 통해 철 성분 등 금속 불순물을 제거합니다.", en: "Magnetic separation removes iron and other metal impurities.", ja: "磁力選別を通じて、鉄分などの金属不純物を除去します。" },
  "ab.prod.s4.t": { ko: "체질(분류)", en: "Sieving / Classification", ja: "ふるい分け（分類）" },
  "ab.prod.s4.d": { ko: "체질기를 통해 입도별로 분류하여 균일한 입도의 원료를 확보합니다.", en: "Sieve and classify by grain size to ensure uniform particle size.", ja: "ふるい機で粒度別に分類し、均一な粒度の原料を確保します。" },
  "ab.prod.s5.t": { ko: "볼 밀 가공", en: "Ball Mill Processing", ja: "ボールミル加工" },
  "ab.prod.s5.d": { ko: "볼 밀에서 미세 분쇄 및 표면 처리를 진행하여 입도를 최종 조절합니다.", en: "Ball-mill micro-grinding and surface treatment finalize particle size.", ja: "ボールミルで微粉砕および表面処理を行い、粒度を最終調整します。" },

  // SDR Quartz
  "ab.sdr.tag": { ko: "PARTNER COMPANY · JIANGSU, CHINA", en: "PARTNER COMPANY · JIANGSU, CHINA", ja: "PARTNER COMPANY · JIANGSU, CHINA" },
  "ab.sdr.titleAccent": { ko: "Quartz Material", en: "Quartz Material", ja: "Quartz Material" },
  "ab.sdr.p1": {
    ko: "<strong>SDR Quartz(중국 장수성)</strong>는 석영 소재 분야(용융 석영, 실리콘 미분말)에서 <strong>20년 이상의 경력</strong>을 가진 전문 경영진 및 생산 인력을 보유하고 있습니다. 용융 석영 계열 제품의 전 공정 생산 체계와 <strong>나노 분체 규소 소재 공정 기술 연구 센터</strong> 및 성급 실험실을 갖추고 있어 중국내 여러 대학 및 연구소와 장기적이고 심층적인 산학연 협력을 진행 중입니다.",
    en: "<strong>SDR Quartz (Jiangsu, China)</strong> is led by management and production staff with <strong>over 20 years of experience</strong> in quartz materials (fused quartz and silicon micro-powder). They operate a full-process production system for fused-quartz products and run a <strong>Nano-Powder Silicon Process Technology Research Center</strong> and provincial-level laboratory, conducting long-term, in-depth industry-academia collaboration with leading Chinese universities and institutes.", ja: "<strong>SDR Quartz(中国江蘇省)</strong>は、石英素材分野(溶融石英、シリコン微粉末)において<strong>20年以上の経歴</strong>を持つ専門経営陣および生産人材を保有しています。溶融石英系製品の全工程生産体制と<strong>ナノ粉体シリコン素材工程技術研究センター</strong>および省レベルの実験室を備えており、中国内の多数の大学や研究所と長期的で深層的な産学研協力を進めています。" },
  "ab.sdr.p2": {
    ko: "중국에서 규석 기술의 메카인 장수성에서도 앞선 기술력으로 <strong>석영 용해, 원석 선별, 분쇄, 미분말 가공</strong>에 이르는 4단계 전 공정을 자체 생산하여, 원료부터 철저하게 품질을 관리하며 <strong class=\"text-primary\">ISO 9001 및 ISO 14001 인증</strong>을 보유하고 있습니다.",
    en: "Even in Jiangsu — China's hub for silica technology — they lead with full in-house production across all four stages: <strong>quartz melting, ore sorting, crushing, and micro-powder processing</strong>. Strict quality control from raw material onward backs their <strong class=\"text-primary\">ISO 9001 and ISO 14001 certifications</strong>.", ja: "中国において石英技術のメッカである江蘇省でも最先端の技術力により、<strong>石英溶解、原石選別、粉砕、微粉末加工</strong>に至る4段階の全工程を自社生産し、原料から徹底して品質を管理し、<strong class=\"text-primary\">ISO 9001およびISO 14001認証</strong>を取得しています。" },
  "ab.sdr.hq": { ko: "HEADQUARTERS", en: "HEADQUARTERS", ja: "HEADQUARTERS" },
  "ab.sdr.hqSub": { ko: "SDR Quartz · 중국 장수성 본사", en: "SDR Quartz · Jiangsu HQ, China", ja: "SDR Quartz · 中国江蘇省本社" },
  "ab.sdr.mfg.tag": { ko: "FUSED SILICA · MANUFACTURING", en: "FUSED SILICA · MANUFACTURING", ja: "FUSED SILICA · MANUFACTURING" },
  "ab.sdr.mfg.title": { ko: "용융 실리카", en: "Fused Silica", ja: "溶融シリカ" },
  "ab.sdr.mfg.titleAccent": { ko: "제조 공정", en: "Manufacturing Process", ja: "製造工程" },
  "ab.sdr.mfg.desc": { ko: "고순도 용융 실리카가 만들어지는 4단계 공정 — 최첨단 기술과 철저한 품질 관리로 최고의 제품을 만듭니다.", en: "A four-step process produces high-purity fused silica — top-tier products built on advanced technology and strict QC.", ja: "高純度溶融シリカが作られる4段階工程 — 最先端技術と徹底した品質管理で最高の製品を製造します。" },
  "ab.sdr.mfg.s1.t": { ko: "용융 석영 원석", en: "Fused Quartz Ore", ja: "溶融石英原石" },
  "ab.sdr.mfg.s1.d": { ko: "천연 고순도 석영을 원료로 사용하여 고온 전기 용해로에서 1750℃ 이상의 온도로 용융하여 불순물을 제거합니다.", en: "Natural high-purity quartz is melted at 1750℃+ in a high-temperature electric furnace to remove impurities.", ja: "天然高純度石英を原料として使用し、高温電気溶解炉にて1750℃以上の温度で溶融して不純物を除去します。" },
  "ab.sdr.mfg.s2.t": { ko: "등급 분류", en: "Grade Classification", ja: "グレード分類" },
  "ab.sdr.mfg.s2.d": { ko: "첨단 정밀 검사 장비를 통해 내부 결함, 기포, 불순물 등을 정밀하게 검사하고, 품질 등급에 따라 분류합니다.", en: "Advanced inspection equipment checks internal defects, bubbles, and impurities, then classifies by quality grade.", ja: "先端精密検査装置を用いて、内部欠陥、気泡、不純物などを精密に検査し、品質グレードに従って分類します。" },
  "ab.sdr.mfg.s3.t": { ko: "입자 분쇄", en: "Particle Crushing", ja: "粒子粉砕" },
  "ab.sdr.mfg.s3.d": { ko: "분류된 용융 석영을 특수 장비로 입자 크기에 맞게 파쇄 및 분쇄하여 다양한 용도에 적합한 입자 형태로 가공합니다.", en: "Classified fused quartz is broken down and crushed with specialized equipment into particle forms suited to varied applications.", ja: "分類された溶融石英を特殊装置で粒子サイズに合わせて破砕・粉砕し、多様な用途に適した粒子形態に加工します。" },
  "ab.sdr.mfg.s4.t": { ko: "미분 가공", en: "Micro-Powder Processing", ja: "微粉加工" },
  "ab.sdr.mfg.s4.d": { ko: "파쇄된 입자를 초미세 분말로 가공하여 높은 순도와 균일한 입도를 가진 미분 석영을 생산합니다.", en: "Crushed particles become ultra-fine powder, yielding micro-powder quartz with high purity and uniform particle size.", ja: "破砕された粒子を超微細粉末に加工し、高い純度と均一な粒度を持つ微粉石英を生産します。" },
  "ab.qc.title": { ko: "엄격한 품질 관리", en: "Strict Quality Control", ja: "厳格な品質管理" },
  "ab.qc.q1.t": { ko: "고순도", en: "High Purity", ja: "高純度" },
  "ab.qc.q1.d": { ko: "불순물 최소화로 최고의 순도 보장", en: "Minimal impurities for maximum purity", ja: "不純物の最小化で最高の純度を保証" },
  "ab.qc.q2.t": { ko: "균일한 품질", en: "Uniform Quality", ja: "均一な品質" },
  "ab.qc.q2.d": { ko: "정밀한 공정 관리로 일정한 품질 유지", en: "Precise process control for consistent quality", ja: "精密な工程管理で一定の品質を維持" },
  "ab.qc.q3.t": { ko: "안정성", en: "Stability", ja: "安定性" },
  "ab.qc.q3.d": { ko: "우수한 물리·화학적 안정성 제공", en: "Excellent physical & chemical stability", ja: "優れた物理・化学的安定性を提供" },
  "ab.qc.q4.t": { ko: "신뢰성", en: "Reliability", ja: "信頼性" },
  "ab.qc.q4.d": { ko: "철저한 검사와 검증으로 높은 신뢰성 확보", en: "High reliability through rigorous inspection", ja: "徹底した検査と検証で高い信頼性を確保" },
  "ab.qc.q5.t": { ko: "맞춤 솔루션", en: "Custom Solutions", ja: "カスタムソリューション" },
  "ab.qc.q5.d": { ko: "고객 요구에 맞춘 다양한 제품 공급", en: "Diverse products tailored to client needs", ja: "お客様のニーズに合わせた多様な製品を供給" },

  // Photo captions
  "ab.cap.tunnel": { ko: "갱도 채광 현장", en: "Tunnel mining site", ja: "坑道採鉱現場" },
  "ab.cap.ore": { ko: "채광된 고품위 규석 원광", en: "Mined high-grade silica ore", ja: "採鉱された高品位石英原鉱" },
  "ab.cap.plant": { ko: "가공 플랜트 내부", en: "Inside the processing plant", ja: "加工プラント内部" },
  "ab.cap.building": { ko: "(주)BAR 사업장 외관", en: "BAR Co., Ltd. facility", ja: "株式会社BAR事業所の外観" },
  "ab.cap.warehouse": { ko: "원료 야적 창고", en: "Raw material warehouse", ja: "原料野積倉庫" },
  "ab.cap.ingot": { ko: "용융 석영 잉곳", en: "Fused quartz ingot", ja: "溶融石英インゴット" },
  "ab.cap.line": { ko: "미분말 가공 라인", en: "Micro-powder processing line", ja: "微粉末加工ライン" },
  "ab.cap.furnace": { ko: "고온 전기 용해로 작업", en: "High-temperature electric furnace", ja: "高温電気溶解炉作業" },
  "ab.cap.sdrhq": { ko: "SDR Quartz 본사 외관", en: "SDR Quartz headquarters", ja: "SDR Quartz 本社外観" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const seg = location.pathname.split("/")[1];
  const lang: Lang = isLang(seg) ? seg : "ko";

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    // Swap the lang segment in the current URL and navigate.
    const rest = location.pathname.replace(/^\/(ko|en|ja)(?=\/|$)/, "") || "";
    const next = `/${l}${rest}${location.search}${location.hash}`;
    navigate(next);
  };

  const t = (key: string) => {
    const e = dict[key];
    if (!e) return key;
    if (lang === "ja") return e.ja ?? e.en ?? e.ko;
    return e[lang] ?? e.ko;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
