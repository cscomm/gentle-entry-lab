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
    ko: "크로마토그래피용 실리카겔 (SL-CHR)",
    en: "Chromatography Silica Gel (SL-CHR)",
    ja: "クロマトグラフィー用シリカゲル (SL-CHR)",
    descKo: "중약재 유효성분·석유·유기물 분리정제와 정성/정량 분석에 사용되는 컬럼·박막 크로마토그래피 전용 실리카겔",
    descEn: "Column & TLC silica gel for separation/purification of herbal actives, petroleum and organic compounds, and qualitative/quantitative analysis.",
    descJa: "生薬有効成分・石油・有機物の分離精製および定性/定量分析に用いるカラム・薄層クロマトグラフィー専用シリカゲル",
    rows: [
      {
        sku: "SL-CHR-01",
        ko: "컬럼크로마토그래피용 실리카겔 (A/B/C형)",
        en: "Column Chromatography Silica Gel (Type A/B/C)",
        ja: "カラムクロマトグラフィー用シリカゲル (A/B/C型)",
        specsKo: "공경 20–100 Å · 비표면적 320–600+ m²/g · 60–400 목 맞춤",
        specsEn: "Pore 20–100 Å · BET 320–600+ m²/g · 60–400 mesh (custom)",
        specsJa: "細孔20–100 Å・比表面積320–600+ m²/g・60–400メッシュ",
        apps: [
          { ko: "중약재 유효성분 분리정제", en: "Purification of herbal actives", ja: "生薬有効成分の分離精製" },
          { ko: "석유제품 정제 · 방향족 제거", en: "Petroleum refining & aromatics removal", ja: "石油製品精製・芳香族除去" },
          { ko: "유기 가스·액체 선택적 흡착분리 · 촉매담체", en: "Selective adsorption of organics & catalyst support", ja: "有機ガス・液体の選択吸着分離・触媒担体" },
        ],
      },
      {
        sku: "SL-CHR-02",
        ko: "박막크로마토그래피용 실리카겔 분말",
        en: "TLC Silica Gel Powder",
        ja: "薄層クロマトグラフィー用シリカゲル粉末",
        specsKo: "H / HF254 / G / GF254 · 공경 90–100 Å · 입도 일반 10–40㎛ / 고효율 3–10㎛",
        specsEn: "H / HF254 / G / GF254 · pore 90–100 Å · 10–40 µm / 3–10 µm high-efficiency",
        specsJa: "H / HF254 / G / GF254・細孔90–100 Å・粒度10–40㎛/高効率3–10㎛",
        apps: [
          { ko: "의약·농약·염료·고무 컬럼분석 시약", en: "Column analysis for pharma, agrochem, dye, rubber", ja: "医薬・農薬・染料・ゴムのカラム分析試薬" },
          { ko: "고감도 신속 분석 · 촉매담체 제조", en: "Rapid high-sensitivity analysis & catalyst supports", ja: "迅速高感度分析・触媒担体の製造" },
        ],
      },
      {
        sku: "SL-CHR-03",
        ko: "TLC 박막크로마토그래피 플레이트",
        en: "TLC Silica Gel Plate",
        ja: "TLC薄層クロマトグラフィープレート",
        specsKo: "판 두께 0.20 ± 0.03 mm · 75×25 / 100×100 / 200×200 mm · 순백·평탄·치밀",
        specsEn: "Thickness 0.20 ± 0.03 mm · 75×25 / 100×100 / 200×200 mm · pure white, flat, dense",
        specsJa: "板厚0.20 ± 0.03 mm・75×25 / 100×100 / 200×200 mm・純白・平坦・緻密",
        apps: [
          { ko: "의약품·농약·중약재·식품 정성/정량 분석", en: "Qualitative/quantitative analysis for pharma, agrochem, herbs, food", ja: "医薬品・農薬・生薬・食品の定性/定量分析" },
          { ko: "유기화학 반응 모니터링 · QC", en: "Organic reaction monitoring & QC", ja: "有機化学反応モニタリング・QC" },
        ],
      },
    ],
  },
  {
    ko: "산업·공정용 실리카겔 (SL-IND)",
    en: "Industrial & Process Silica Gel (SL-IND)",
    ja: "産業・工程用シリカゲル (SL-IND)",
    descKo: "촉매 합성, 식품(맥주) 여과, 오일 정제·탈색, 특수 흡착 등 산업 공정 전용 실리카겔",
    descEn: "Silica gel dedicated to industrial processes: catalyst synthesis, beer filtration, oil refining/bleaching, specialty adsorption.",
    descJa: "触媒合成、食品(ビール)濾過、オイル精製・脱色、特殊吸着など産業工程専用のシリカゲル",
    rows: [
      {
        sku: "SL-IND-01",
        ko: "촉매용 미분 실리카겔 (C형)",
        en: "Micro-powder Silica Gel for Catalyst",
        ja: "触媒用微粉シリカゲル (C型)",
        specsKo: "SiO₂ ≥ 98 % · 공경 90–100 Å · ≤35 목 / ≤100 목",
        specsEn: "SiO₂ ≥ 98 % · pore 90–100 Å · ≤35 / ≤100 mesh",
        specsJa: "SiO₂ ≥ 98 %・細孔90–100 Å・≤35/≤100メッシュ",
        apps: [
          { ko: "HZSM-5 분자체 합성 전용", en: "HZSM-5 molecular sieve synthesis", ja: "HZSM-5分子篩合成専用" },
          { ko: "정밀 화학 촉매 원료", en: "Precision chemical catalyst feedstock", ja: "精密化学触媒原料" },
        ],
      },
      {
        sku: "SL-IND-02",
        ko: "유로키나제 흡착용 실리카겔 (C형)",
        en: "Urokinase Adsorbent Silica Gel",
        ja: "ウロキナーゼ吸着用シリカゲル",
        specsKo: "흡착량(RH100) ≥ 90 % · 공경 90–100 Å · pH 6–8 · 40–120 목",
        specsEn: "≥90% adsorption (RH100) · pore 90–100 Å · pH 6–8 · 40–120 mesh",
        specsJa: "吸着量(RH100) ≥ 90 %・細孔90–100 Å・pH 6–8・40–120メッシュ",
        apps: [
          { ko: "유로키나제 분리·정제 컬럼크로마토", en: "Urokinase separation & purification chromatography", ja: "ウロキナーゼ分離・精製カラムクロマト" },
          { ko: "바이오·의약 활성물질 정제", en: "Bio & pharma active-substance purification", ja: "バイオ・医薬活性物質の精製" },
        ],
      },
      {
        sku: "SL-IND-03",
        ko: "맥주 여과용 실리카겔 (초광공형)",
        en: "Silica Gel for Beer Filtration (Super Wide Pore)",
        ja: "ビール濾過用シリカゲル (超広孔型)",
        specsKo: "공경 140–180 Å · d50 7–15 µm · SiO₂ ≥ 98 % · Pb ≤ 0.003 %",
        specsEn: "Pore 140–180 Å · D50 7–15 µm · SiO₂ ≥ 98 % · Pb ≤ 0.003 %",
        specsJa: "細孔140–180 Å・D50 7–15 µm・SiO₂ ≥ 98 %・Pb ≤ 0.003 %",
        apps: [
          { ko: "맥주 혼탁 단백 흡착 · 저장기간 180–240일 연장", en: "Haze protein adsorption · shelf life +180–240 days", ja: "ビール混濁タンパク吸着・保存期間180–240日延長" },
          { ko: "냉장 혼탁 방지 · 거품·맛 영향 無", en: "Prevents chill haze without affecting foam or taste", ja: "冷蔵混濁防止・泡/味に影響なし" },
        ],
      },
      {
        sku: "SL-IND-04",
        ko: "대공극 실리카겔 (C형, 구형/괴상)",
        en: "Wide Pore Silica Gel (Type C)",
        ja: "大孔径シリカゲル (C型)",
        specsKo: "공경 80–100 Å · BET 300–400 m²/g · 흡착량 ≥ 78 %",
        specsEn: "Pore 80–100 Å · BET 300–400 m²/g · adsorption ≥ 78 %",
        specsJa: "細孔80–100 Å・BET 300–400 m²/g・吸着量 ≥ 78 %",
        apps: [
          { ko: "공업가스 탈수 정제 · 방습 포장", en: "Industrial gas dehydration & moisture-proof packaging", ja: "工業ガス脱水精製・防湿包装" },
          { ko: "절연유 유기산·고분자 제거", en: "Removal of organic acids/polymers from insulating oil", ja: "絶縁油中の有機酸・高分子除去" },
          { ko: "발효공정 단백 흡착 · 촉매담체", en: "Protein adsorption in fermentation · catalyst support", ja: "発酵工程のタンパク吸着・触媒担体" },
        ],
      },
      {
        sku: "SL-IND-05",
        ko: "오일 탈색용 실리카겔 샌드 (C형)",
        en: "Silica Gel Sand for Oil Bleaching",
        ja: "オイル脱色用シリカゲルサンド (C型)",
        specsKo: "공경 85–110 Å · BET 300–500 m²/g · 20–120 목",
        specsEn: "Pore 85–110 Å · BET 300–500 m²/g · 20–120 mesh",
        specsJa: "細孔85–110 Å・BET 300–500 m²/g・20–120メッシュ",
        apps: [
          { ko: "폐엔진오일 재생 · 흑취 경유 탈취·탈색", en: "Waste engine oil regeneration & diesel deodor/decolor", ja: "廃エンジンオイル再生・ディーゼル脱臭脱色" },
          { ko: "바이오디젤·유압유·동식물유 정제", en: "Biodiesel, hydraulic & animal/vegetable oil refining", ja: "バイオディーゼル・油圧油・動植物油の精製" },
        ],
      },
      {
        sku: "SL-IND-06",
        ko: "대공극 마이크로구형 실리카겔 (C형)",
        en: "Macro-pored Micro-spherical Silica Gel",
        ja: "大孔径マイクロ球状シリカゲル (C型)",
        specsKo: "공경 80–110 Å · BET 300–550 m²/g · 공용적 0.8–1.3 ml/g",
        specsEn: "Pore 80–110 Å · BET 300–550 m²/g · pore volume 0.8–1.3 ml/g",
        specsJa: "細孔80–110 Å・BET 300–550 m²/g・細孔容積0.8–1.3 ml/g",
        apps: [
          { ko: "멜라민·아닐린·아세트산비닐·부타디엔고무·아크릴로니트릴 촉매", en: "Catalyst for melamine, aniline, vinyl acetate, BR, acrylonitrile", ja: "メラミン・アニリン・酢酸ビニル・BR・アクリロニトリル触媒" },
          { ko: "석유화학 방향족·의약품 정제", en: "Petrochem aromatics & pharma purification", ja: "石油化学芳香族・医薬品精製" },
          { ko: "수중 유해 이온 제거", en: "Removal of harmful ions in water", ja: "水中有害イオン除去" },
        ],
      },
      {
        sku: "SL-IND-07",
        ko: "폐엔진오일 정제용 촉매",
        en: "Catalyst for Waste Engine Oil Refining",
        ja: "廃エンジンオイル精製用触媒",
        specsKo: "Φ2.5–3 × 2–10 mm · BET ≥ 235–250 m²/g · 압쇄강도 ≥ 125–130 N/cm",
        specsEn: "Φ2.5–3 × 2–10 mm · BET ≥ 235–250 m²/g · crush ≥ 125–130 N/cm",
        specsJa: "Φ2.5–3 × 2–10 mm・BET ≥ 235–250 m²/g・圧潰強度 ≥ 125–130 N/cm",
        apps: [
          { ko: "폐윤활유 정제 (290–310 ℃, 상압)", en: "Waste lubricant refining (290–310 ℃, atmospheric)", ja: "廃潤滑油精製 (290–310 ℃, 常圧)" },
          { ko: "재생 기유·연료유 회수 공정", en: "Regenerated base/fuel oil recovery", ja: "再生ベースオイル・燃料油回収" },
        ],
      },
    ],
  },
  {
    ko: "건조제·흡습제 실리카겔 (SL-DES)",
    en: "Desiccant & Adsorbent Silica Gel (SL-DES)",
    ja: "乾燥剤・吸湿剤シリカゲル (SL-DES)",
    descKo: "계기·설비 방습, 습도지시, PSA 기체분리, 반려동물 위생용품 등 건조·흡습 전용 실리카겔",
    descEn: "Silica gel for equipment moisture-proofing, humidity indication, PSA gas separation and pet-care hygiene.",
    descJa: "計器・設備の防湿、湿度指示、PSAガス分離、ペット衛生用品など乾燥・吸湿専用のシリカゲル",
    rows: [
      {
        sku: "SL-DES-01",
        ko: "세공형 실리카겔 (A형)",
        en: "Fine-pored Silica Gel (Type A)",
        ja: "細孔型シリカゲル (A型)",
        specsKo: "공경 2.0–3.0 nm · BET 650–800 m²/g · SiO₂ ≥ 98 % · 0.5–8 mm",
        specsEn: "Pore 2.0–3.0 nm · BET 650–800 m²/g · SiO₂ ≥ 98 % · 0.5–8 mm",
        specsJa: "細孔2.0–3.0 nm・BET 650–800 m²/g・SiO₂ ≥ 98 %・0.5–8 mm",
        apps: [
          { ko: "정밀기기·의약·전자 건조·방습 표준품", en: "Standard desiccant for instruments, pharma, electronics", ja: "計器・医薬・電子の乾燥・防湿標準品" },
          { ko: "촉매담체 · 흡착제 · 분리제", en: "Catalyst support, adsorbent, separator", ja: "触媒担体・吸着剤・分離剤" },
        ],
      },
      {
        sku: "SL-DES-02",
        ko: "변압흡착(PSA)용 실리카겔 (A형)",
        en: "PSA Silica Gel (Type A)",
        ja: "圧力スイング吸着(PSA)用シリカゲル",
        specsKo: "CO₂ 흡착 ≥ 20 cm³/g · 압축강도 ≥ 100 N · 구형합격률 ≥ 90 %",
        specsEn: "CO₂ ≥ 20 cm³/g · crush ≥ 100 N · sphericity ≥ 90 %",
        specsJa: "CO₂吸着 ≥ 20 cm³/g・圧縮強度 ≥ 100 N・球形合格率 ≥ 90 %",
        apps: [
          { ko: "CO₂ 회수·분리·정제 (합성암모니아·식품가공)", en: "CO₂ recovery/purification (ammonia synth, F&B)", ja: "CO₂回収・分離・精製 (合成アンモニア・食品加工)" },
          { ko: "유기제품 탈수 정제 · PSA 기체분리", en: "Organic dehydration & PSA gas separation", ja: "有機製品脱水精製・PSAガス分離" },
        ],
      },
      {
        sku: "SL-DES-03",
        ko: "블루 실리카겔 (A형, 습도지시)",
        en: "Blue Silica Gel (RH Indicator)",
        ja: "ブルーシリカゲル (湿度指示)",
        specsKo: "청색 → 분홍색 변색 · BET 650–800 m²/g · 1–6 mm",
        specsEn: "Blue → pink · BET 650–800 m²/g · 1–6 mm",
        specsJa: "青→ピンク・BET 650–800 m²/g・1–6 mm",
        apps: [
          { ko: "정밀기기·의약·전자·항공·군수 밀폐 방청·방습", en: "Sealed rust/moisture protection for instruments, pharma, electronics, aviation, defense", ja: "計器・医薬・電子・航空・防衛の密閉防錆・防湿" },
          { ko: "습도 시각 지시 · 실링·포장", en: "Visual RH indication & sealed packaging", ja: "湿度視覚指示・シーリング/包装" },
        ],
      },
      {
        sku: "SL-DES-04",
        ko: "오렌지 실리카겔 (A형, 무코발트)",
        en: "Orange Silica Gel (Cobalt-Free)",
        ja: "オレンジシリカゲル (無コバルト)",
        specsKo: "무코발트 친환경 · 색상 변화형 · 1–6 mm",
        specsEn: "Cobalt-chloride-free eco variant · color-change · 1–6 mm",
        specsJa: "無コバルト環境配慮型・色変化・1–6 mm",
        apps: [
          { ko: "친환경·무독 요구 밀폐 방습", en: "Eco/non-toxic sealed moisture protection", ja: "環境配慮・無毒の密閉防湿" },
          { ko: "식품·의약·소비재 지시형 건조제", en: "Indicating desiccant for food, pharma, consumer goods", ja: "食品・医薬・消費財向け指示型乾燥剤" },
        ],
      },
      {
        sku: "SL-DES-05",
        ko: "B형 실리카겔 (중공형)",
        en: "B Type Silica Gel",
        ja: "B型シリカゲル",
        specsKo: "공경 5.0–8.0 nm · BET 450–600 m²/g · 비저항 ≥ 3000–5000 Ω·cm",
        specsEn: "Pore 5.0–8.0 nm · BET 450–600 m²/g · resistivity ≥ 3000–5000 Ω·cm",
        specsJa: "細孔5.0–8.0 nm・BET 450–600 m²/g・比抵抗 ≥ 3000–5000 Ω·cm",
        apps: [
          { ko: "공기 습도조절제 · 촉매담체", en: "Air humidity regulator & catalyst support", ja: "空気湿度調整剤・触媒担体" },
          { ko: "향료 담체 · 반려동물 깔개 원료", en: "Fragrance carrier & pet-litter feedstock", ja: "香料キャリア・ペットリッター原料" },
        ],
      },
      {
        sku: "SL-DES-06",
        ko: "실리카겔 고양이모래 (C형)",
        en: "Silica Gel Cat Litter",
        ja: "シリカゲル猫砂 (C型)",
        specsKo: "공경 80–100 Å · BET 300–400 m²/g · 흡착 ≥ 90 %",
        specsEn: "Pore 80–100 Å · BET 300–400 m²/g · adsorption ≥ 90 %",
        specsJa: "細孔80–100 Å・BET 300–400 m²/g・吸着 ≥ 90 %",
        apps: [
          { ko: "크리스탈 고양이모래 · 경량·저파쇄·항균", en: "Crystal cat litter — lightweight, low-crush, antibacterial", ja: "クリスタル猫砂・軽量・低破砕・抗菌" },
          { ko: "반려동물 위생용품 · 소비재 흡취", en: "Pet hygiene products & consumer odor control", ja: "ペット衛生用品・消費財の脱臭" },
        ],
      },
      {
        sku: "SL-DES-07",
        ko: "FNG 내수성 실리카겔",
        en: "FNG Water-Resistant Silica Gel",
        ja: "FNG耐水性シリカゲル",
        specsKo: "수중 무파열율 90–95 % · 압축강도 ≥ 68–98 N · 3–8 mm",
        specsEn: "90–95 % no-burst in water · crush ≥ 68–98 N · 3–8 mm",
        specsJa: "水中無破裂率90–95 %・圧縮強度 ≥ 68–98 N・3–8 mm",
        apps: [
          { ko: "압축공기 건조 · 아세틸렌·CO₂ 흡착", en: "Compressed-air drying · acetylene/CO₂ adsorption", ja: "圧縮空気乾燥・アセチレン/CO₂吸着" },
          { ko: "석유화학·전력·양조업 액체 흡착제", en: "Liquid adsorbent for petrochem, power, brewing", ja: "石油化学・電力・醸造業の液体吸着剤" },
          { ko: "일반 실리카겔 보호층 완충 건조제", en: "Buffer layer for standard silica gel desiccant", ja: "通常シリカゲル保護層の緩衝乾燥剤" },
        ],
      },
    ],
  },
  {
    ko: "실리카알루미나·활성알루미나·분자체 (SL-ALS)",
    en: "Silica-Alumina · Activated Alumina · Molecular Sieve (SL-ALS)",
    ja: "シリカアルミナ・活性アルミナ・分子篩 (SL-ALS)",
    descKo: "천연가스·냉매·기체 심층 건조와 이온교환·정제 공정에 사용되는 알루미나·분자체 라인업",
    descEn: "Alumina & molecular-sieve lineup for deep drying of natural gas/refrigerants and for ion-exchange & purification.",
    descJa: "天然ガス・冷媒・気体の深層乾燥やイオン交換・精製工程に用いるアルミナ・分子篩ラインアップ",
    rows: [
      {
        sku: "SL-ALS-01",
        ko: "실리카알루미나겔",
        en: "Silica-Alumina Gel",
        ja: "シリカアルミナゲル",
        specsKo: "mSiO₂·nAl₂O₃·xH₂O · SiO₂ 65–99.5 % · BET 600–800 m²/g · 1–8 mm",
        specsEn: "mSiO₂·nAl₂O₃·xH₂O · SiO₂ 65–99.5 % · BET 600–800 m²/g · 1–8 mm",
        specsJa: "mSiO₂·nAl₂O₃·xH₂O・SiO₂ 65–99.5 %・BET 600–800 m²/g・1–8 mm",
        apps: [
          { ko: "CNG·천연가스·기체·액화가스 건조", en: "CNG, natural gas, gaseous & liquefied gas drying", ja: "CNG・天然ガス・気体・液化ガス乾燥" },
          { ko: "고극성 흡착 분리·정제", en: "High-polarity adsorption separation & purification", ja: "高極性吸着分離・精製" },
        ],
      },
      {
        sku: "SL-ALS-03",
        ko: "활성알루미나볼",
        en: "Activated Alumina Ball",
        ja: "活性アルミナボール",
        specsKo: "Al₂O₃ ≥ 92 % · BET ≥ 280 m²/g · 3–20 mm · 175–315 ℃ 재생",
        specsEn: "Al₂O₃ ≥ 92 % · BET ≥ 280 m²/g · 3–20 mm · regen 175–315 ℃",
        specsJa: "Al₂O₃ ≥ 92 %・BET ≥ 280 m²/g・3–20 mm・再生175–315 ℃",
        apps: [
          { ko: "기체·수증기 선택 흡착 · 액체 탈수", en: "Selective adsorption of gases/vapors, liquid dehydration", ja: "気体・水蒸気の選択吸着・液体脱水" },
          { ko: "비가열 재생 건조제 · 촉매담체", en: "Non-heat-regenerative desiccant & catalyst support", ja: "非加熱再生型乾燥剤・触媒担体" },
        ],
      },
      {
        sku: "SL-ALS-04",
        ko: "분자체 4A",
        en: "4A Molecular Sieve",
        ja: "4A分子篩",
        specsKo: "공경 4 Å · 정적수분흡착 ≥ 21 % · 메탄올흡착 ≥ 15 % · 1.5–5.0 mm",
        specsEn: "Pore 4 Å · static water ≥ 21 % · methanol ≥ 15 % · 1.5–5.0 mm",
        specsJa: "細孔4 Å・静的水吸着 ≥ 21 %・メタノール ≥ 15 %・1.5–5.0 mm",
        apps: [
          { ko: "천연가스·냉매 심층건조 · 아르곤 정제", en: "Deep drying of natural gas/refrigerants · argon purification", ja: "天然ガス・冷媒の深層乾燥・アルゴン精製" },
          { ko: "의약품·전자부품 정적건조", en: "Static drying of pharmaceuticals & electronic parts", ja: "医薬品・電子部品の静的乾燥" },
          { ko: "도료·연료·코팅제 탈수제", en: "Dehydrator for paints, fuels, coatings", ja: "塗料・燃料・コーティング剤の脱水剤" },
        ],
      },
    ],
  },
  {
    ko: "미분·기능성 실리카 (필러·소광·안티블로킹)",
    en: "Micronized & Functional Silica (Filler · Matting · Anti-blocking)",
    ja: "微粉・機能性シリカ (フィラー・艶消し・アンチブロッキング)",
    descKo: "고분자·코팅·필름용 고활성 다공성 실리카 — 보강·증점·소광·안티블로킹 기능 소재",
    descEn: "High-activity porous silica for polymers, coatings and films — reinforcement, thickening, matting and anti-blocking.",
    descJa: "高分子・塗料・フィルム向け高活性多孔質シリカ — 補強・増粘・艶消し・アンチブロッキング機能素材",
    rows: [
      {
        sku: "Microsilica",
        ko: "미분 실리카",
        en: "Micronized Silica Powder",
        ja: "微粉シリカ",
        specsKo: "입도 3–10 µm · 고활성 · 다공성",
        specsEn: "Particle size 3–10 µm · high activity · porous",
        specsJa: "粒径3–10 µm・高活性・多孔質",
        apps: [
          { ko: "코팅·잉크·접착제·실란트 정밀 필러", en: "Precision filler for coatings, inks, adhesives, sealants", ja: "塗料・インキ・接着剤・シーラント精密フィラー" },
          { ko: "플라스틱·고무 보강 · 기능성 무기 소재 원료", en: "Plastic/rubber reinforcement & functional inorganic feedstock", ja: "プラスチック・ゴム補強・機能性無機素材原料" },
        ],
      },
      {
        sku: "Anti-Blocking",
        ko: "플라스틱 안티블로킹제",
        en: "Anti-blocking Agent",
        ja: "プラスチック用アンチブロッキング剤",
        specsKo: "입도 2–10 µm · SiO₂ 99 % · 흡유량 150–300 ml/100g",
        specsEn: "2–10 µm · 99 % SiO₂ · oil absorption 150–300 ml/100g",
        specsJa: "粒径2–10 µm・SiO₂ 99 %・吸油量150–300 ml/100g",
        apps: [
          { ko: "PE·PP·PET 필름 점착 방지 · 광학 투명 유지", en: "Anti-blocking in PE/PP/PET films while keeping transparency", ja: "PE・PP・PETフィルムのブロッキング防止・透明性維持" },
          { ko: "포장·농업·식품·의료용 필름", en: "Packaging, agricultural, food & medical films", ja: "包装・農業・食品・医療用フィルム" },
        ],
      },
      {
        sku: "Matting",
        ko: "소광제",
        en: "Matting Agent",
        ja: "艶消し剤",
        specsKo: "D50 3.5–10 µm · 흡유량 100–330 ml/100g · 왁스/무처리",
        specsEn: "D50 3.5–10 µm · oil absorption 100–330 ml/100g · wax / untreated",
        specsJa: "D50 3.5–10 µm・吸油量100–330 ml/100g・ワックス/未処理",
        apps: [
          { ko: "UV 도료·목재·가죽·코일 코팅", en: "UV, wood, leather & coil coatings", ja: "UV塗料・木材・皮革・コイルコーティング" },
          { ko: "자동차 보수도료·인쇄 잉크", en: "Automotive refinish & printing inks", ja: "自動車補修塗料・印刷インキ" },
        ],
      },
      {
        sku: "Large Pore",
        ko: "대공극 실리카겔",
        en: "Large Pore Silica Gel",
        ja: "大孔径シリカゲル",
        specsKo: "공경 16–25 nm · BET 200–350 m²/g · 공용적 1.2–2.2 ml/g",
        specsEn: "Pore 16–25 nm · BET 200–350 m²/g · pore volume 1.2–2.2 ml/g",
        specsJa: "細孔16–25 nm・BET 200–350 m²/g・細孔容積1.2–2.2 ml/g",
        apps: [
          { ko: "촉매 담체 (석유화학·정유)", en: "Catalyst support (petrochemical & refining)", ja: "触媒担体(石油化学・精製)" },
          { ko: "단백질·효소 고정화 · 의약품 정제", en: "Protein/enzyme immobilization & pharma purification", ja: "タンパク質・酵素固定化・医薬品精製" },
        ],
      },
      {
        sku: "Coarse Pore",
        ko: "조공극 실리카겔",
        en: "Coarse Pore Silica Gel",
        ja: "粗孔シリカゲル",
        specsKo: "공경 8–12.5 nm · BET 300–400 m²/g · 공용적 0.8–1.0 ml/g",
        specsEn: "Pore 8–12.5 nm · BET 300–400 m²/g · pore volume 0.8–1.0 ml/g",
        specsJa: "細孔8–12.5 nm・BET 300–400 m²/g・細孔容積0.8–1.0 ml/g",
        apps: [
          { ko: "가스·용매 흡착 · 액체 정제·건조", en: "Gas/solvent adsorption & liquid purification/drying", ja: "ガス・溶剤吸着・液体精製/乾燥" },
          { ko: "범용 촉매 담체", en: "General-purpose catalyst support", ja: "汎用触媒担体" },
        ],
      },
      {
        sku: "FNG",
        ko: "내수 실리카겔 (FNG)",
        en: "FNG Water-Resistant Silica Gel",
        ja: "耐水シリカゲル (FNG)",
        specsKo: "내수성·내후성·화학적 안정성",
        specsEn: "Water-, weather- & chemical-resistant",
        specsJa: "耐水性・耐候性・化学的安定性",
        apps: [
          { ko: "고습 환경 공기 건조", en: "Air drying in high-humidity environments", ja: "高湿度環境の空気乾燥" },
          { ko: "변압기 오일·냉매·가스 정제", en: "Transformer oil, refrigerant & gas purification", ja: "変圧器油・冷媒・ガス精製" },
          { ko: "해상 운송 포장 건조제", en: "Marine-transport packaging desiccant", ja: "海上輸送包装用乾燥剤" },
        ],
      },
    ],
  },
];

const SilicaGelApplications = () => {
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
            SILICA GEL · APPLICATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t("실리카겔 응용 분야", "Silica Gel Applications", "シリカゲルの用途")}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
            {t(
              "크로마토그래피 · 산업 공정 · 건조·흡습 · 알루미나 분자체 · 미분 기능성 실리카까지 — 현행 SL 시리즈 전 라인업의 핵심 특성과 주요 응용 분야를 카테고리별로 정리했습니다.",
              "From chromatography and industrial process to desiccants, alumina/molecular sieves and functional micronized silica — this page maps the current SL-series lineup to its key specs and applications.",
              "クロマトグラフィー・産業工程・乾燥吸湿・アルミナ分子篩・微粉機能性シリカまで — 現行SLシリーズ全ラインナップの主要特性と用途をカテゴリー別に整理しました。"
            )}
          </p>
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

export default SilicaGelApplications;
