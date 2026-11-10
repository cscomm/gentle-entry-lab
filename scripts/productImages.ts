import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, extname } from "node:path";

type ImageProduct = { slug: string; image: string; detailImage?: string };

export function productImageUrls(p: ImageProduct): string[] {
  return [p.image, p.detailImage].filter((src): src is string => Boolean(src)).map((src, i) => {
    if (!src.startsWith("/assets/")) return src;
    return `/product-images/${p.slug}${i ? "-detail" : ""}${extname(src)}`;
  });
}

export function copyProductImages(products: ImageProduct[], dist: string) {
  mkdirSync(resolve(dist, "product-images"), { recursive: true });
  for (const p of products) {
    const sources = [p.image, p.detailImage].filter((src): src is string => Boolean(src));
    productImageUrls(p).forEach((url, i) => {
      if (!url.startsWith("/product-images/")) return;
      const source = resolve("src/assets", sources[i].slice("/assets/".length));
      if (!existsSync(source)) throw new Error(`Missing product image: ${source}`);
      copyFileSync(source, resolve(dist, url.slice(1)));
    });
  }
}