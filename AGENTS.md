# Project rules

- Product data lives in `src/data/products.ts`; a product is cross-listed in another category by adding a `subModels` entry with its slug there, so one detail page serves every category. Why: avoids duplicate pages and keeps admin show/hide toggles consistent.
- A standalone product that is also listed in an advanced-series category's `subModels` must be added to `standaloneSlugs` in `products.ts`. Why: otherwise the generator creates a second, generic copy with the same slug.
- Product-specific detail sections that are large go in `src/components/product/` and are mounted conditionally from `src/pages/ProductDetail.tsx`. Why: that page is already very long.
- New product categories must be added to `ProductCategoryBar`, `SiteHeader` product menu, the homepage category/card lists, the admin `ProductsTab` order, and `scripts/prerender.ts`. Why: each list is maintained separately and search engines read only the prerendered HTML.
