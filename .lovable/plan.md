
## 목표
업로드된 PDF(중텅 석영 샘플 카탈로그)를 기반으로 7개 새로운 실리카 분말 카테고리(총 13개 하위 모델)를 사이트에 등록. 한국어·영어·일본어 3개 언어 지원, 카테고리 바 재구성, SEO 프리렌더까지.

## 신규 7개 카테고리 (슬러그 · 모델)

| # | 슬러그 | 카테고리 (KO/EN/JA) | 하위 모델 |
|---|---|---|---|
| 1 | `spherical-silica-powder` | 구형 실리카 분말 / Spherical Silica Powder / 球状シリカ粉末 | SL-QG · SL-QG-L |
| 2 | `round-corner-silica-powder` | 원각 실리카 분말 / Round Corner Silica Powder / 円角シリカ粉末 | SL-YJG · SL-YRG |
| 3 | `angular-silica-powder` | 각형 실리카 분말 / Angular Silica Powder / 角形シリカ粉末 | SL-RG · SL-JG |
| 4 | `low-radiation-silica-powder` | 저방사 실리카 분말 / Low-α Silica Powder / 低放射シリカ粉末 | SL-CL · SL-FL |
| 5 | `surface-modified-silica-powder` | 활성(표면개질) 실리카 분말 / Surface-Modified Silica Powder / 表面改質シリカ粉末 | SL-HJG · SL-HRG |
| 6 | `silica-sand-granule` | 실리카 사 · 입자 / Silica Sand & Granule / シリカサンド・粒 | SL-CS · SL-FS |
| 7 | `lead-free-glass-powder` | 무연유리분말 / Lead-Free Glass Powder / 無鉛ガラス粉末 | SL-ZT |

원본 이름의 `SINO-` prefix를 모두 `SL-`로 변경.

## 카테고리 바 순서 (요청대로)
- **1행**: 전체 제품 · 구형 · 원각 · 각형 · 저방사 · 활성 · 실리카 사·입자 (1~6)
- **2행**: A등급 · B등급 · C등급 · 침전 · 흄드 · 규사 · 규사분말 · 천연규석 · **무연유리분말**(끝)
- **3행/끝**: 실리카겔 (아래로 이동)

## 이미지 처리
PDF 내 각 시리즈 대표 SEM/제품 사진(img_pN_1.jpg)을 추출 → AI 이미지 편집으로:
- 좌상단 파란 삼각형 "产品特点/Product Features" 리본 제거
- 로고·워터마크 제거, 배경 정리, 선명도 향상
- `src/assets/`에 저장 (7장, 각 카테고리 1장)

## 상세 페이지 구성
각 상세 페이지에 아래 섹션 렌더:
1. 히어로 (제품명·태그라인·대표사진)
2. **하위 모델 표** (모델코드 · 원료/공법 · 대표 특성) — 규사 페이지와 동일 컨셉
3. 기본 특성 및 화학 조성 스펙 카드
4. 주요 특징 (Product Features) 아이콘 카드
5. 주요 응용 분야 (기존 applications 렌더)

## 파일 수정 목록
- `src/data/products.ts` — 7개 신규 엔트리 추가 (KO/EN/JA), subModels 필드 확장
- `src/pages/ProductDetail.tsx` — 하위 모델 테이블 렌더 로직 추가
- `src/components/ProductCategoryBar.tsx` — 순서 재편, 2행 wrap 처리
- `src/components/SiteHeader.tsx` — 제품 드롭다운에 7개 신규 항목
- `src/pages/Index.tsx` — 제품 그리드에 신규 카테고리 추가
- `scripts/prerender.ts` — 7개 신규 라우트 + 3개 언어 SEO 메타
- `public/sitemap.xml` — 자동 재생성

## 확인 요청
1. **응용분야 페이지**: 신규 7개 카테고리에도 `/applications/{slug}/` 별도 페이지를 만들까요? 아니면 상세페이지 내 응용 분야 섹션만으로 충분한가요? (규사·분말은 상세페이지 응용 섹션을 지운 상태)
2. **이미지 톤**: PDF 이미지가 SEM 흑백 사진이 대부분입니다. 그대로 유지 vs 컬러 톤 보정 중 어느 쪽이 좋을까요?

승인 주시면 순서대로 진행하겠습니다.
