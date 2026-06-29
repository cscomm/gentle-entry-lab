## 목표
현재 토글 방식 다국어를 언어별 독립 URL(`/ko`, `/en`, `/ja`) 구조로 전환하고 hreflang/sitemap을 자동화합니다. (요청에서 `/kr`, `/jp`로 적어주셨지만 SEO 표준은 ISO 639-1 코드인 `ko`, `ja` 입니다. 검색엔진 인식 측면에서 `/ko`, `/en`, `/ja` 사용을 권장합니다. 원하시면 `/kr`, `/jp`로도 가능합니다 — 진행 전 확인 부탁드립니다.)

## 변경 범위

### 1. 라우팅 (`src/App.tsx`)
- 모든 라우트를 `/:lang(ko|en|ja)/...` prefix 아래로 이동.
- 루트 `/` 접근 시 브라우저 `navigator.language` 또는 저장된 선호 언어 기준 `/ko` (기본) 등으로 301 redirect (클라이언트 `<Navigate replace>`).
- 잘못된 lang 코드 → `/ko`로 fallback.
- 기존 경로 (`/about`, `/products/...` 등) 접근 시 `/ko/about` 등으로 자동 redirect (구글이 기존 인덱싱한 URL 보존).

### 2. 언어 컨텍스트 (`src/contexts/LanguageContext.tsx`)
- `useParams().lang`을 source of truth로 사용. localStorage는 fallback으로만.
- `setLang(l)` → `navigate(현재경로의 lang 부분만 교체)`로 변경.

### 3. 내부 링크 일괄 보정
- `<Link to="/about">` 등 모든 정적 링크를 `useLang()` 기반 헬퍼 `localePath('/about')`로 교체.
- 영향 파일: `SiteHeader.tsx`, `SiteFooter.tsx`, `ProductCategoryBar.tsx`, `Index.tsx`, `ProductDetail.tsx`, 카테고리/응용분야 페이지 8개, `Board*`, `About`, `Terms`, `Privacy`.

### 4. SEO — hreflang & canonical (`src/components/CanonicalUrl.tsx`)
- 현재 경로에서 lang 부분을 제거한 base path 추출.
- 매 페이지에 다음 태그 자동 삽입:
```
<link rel="canonical" href="https://silica.co.kr/{lang}{path}/">
<link rel="alternate" hreflang="ko" href=".../ko{path}/">
<link rel="alternate" hreflang="en" href=".../en{path}/">
<link rel="alternate" hreflang="ja" href=".../ja{path}/">
<link rel="alternate" hreflang="x-default" href=".../ko{path}/">
<html lang="{lang}"> 동적 갱신
```

### 5. 사이트맵 자동화 (`scripts/generate-sitemap.ts` 신규 + `package.json` predev/prebuild)
- 라우트 목록을 단일 소스(`src/lib/routes.ts`)로 추출.
- 빌드 시 각 라우트 × 3개 언어 = URL 생성, 각 URL에 hreflang `xhtml:link` 형제 태그 포함.
- 기존 `public/sitemap.xml`은 generator가 덮어쓰도록 변경.

### 6. 리다이렉트 (`public/_redirects`)
- 기존 `/products/fused-silica-block` 등 legacy 301 규칙은 `/ko/products/...`로 갱신.
- Lovable 호스팅은 `_redirects`를 처리하지 않으므로 동일 매핑을 `App.tsx`의 React Router `<Navigate>`로도 추가 (이중 안전망).

### 7. 향후 추가 페이지 규칙 (메모리에 저장)
새 페이지 추가 시 항상:
- `src/lib/routes.ts` 배열에 path 등록
- 컴포넌트는 `localePath` 헬퍼로 내부 링크 작성
- 번역 키를 `LanguageContext` dict에 ko/en/ja 3개 모두 추가
- sitemap은 자동 반영 (수동 작업 불필요)
이 규칙을 `mem://core` 및 `mem://features/i18n-routing`에 저장.

## 확인 사항 (진행 전)
1. URL 코드: `/ko /en /ja` (권장, SEO 표준) vs `/kr /en /jp` (요청 그대로) — 어느 쪽으로 진행할까요?
2. 기본 언어 결정: 첫 방문자가 `/` 접근 시 (a) 항상 `/ko`로 / (b) 브라우저 언어 감지 후 매칭되는 lang으로 / (c) 한국어 우선 + 그 외는 영어 — 중 선택.

확인되면 위 7단계를 한 번에 적용합니다.
