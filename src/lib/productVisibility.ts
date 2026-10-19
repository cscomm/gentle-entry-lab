import { useSyncExternalStore } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { ProductDetail } from "@/data/products";

// Category page slug for products that have no parentSlug.
const CAT_TO_PAGE: Record<string, string> = {
  quartz: "high-purity-quartz",
  "silica-gel": "silica-gel",
  precipitated: "precipitated-silica",
  fumed: "fumed-silica",
  sand: "silica-sand",
  "sand-powder": "silica-powder",
  "advanced-series": "applied-silica-materials",
};

export const groupKeyOf = (p: ProductDetail) =>
  p.isCategoryIndex ? p.slug : p.parentSlug ?? CAT_TO_PAGE[p.category ?? "quartz"] ?? "high-purity-quartz";

let hidden = new Set<string>();
let loaded = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const loadVisibility = async () => {
  const { data } = await supabase.from("product_visibility").select("slug, visible");
  hidden = new Set((data ?? []).filter((r) => !r.visible).map((r) => r.slug));
  loaded = true;
  emit();
};

export const setHiddenLocal = (slug: string, isHidden: boolean) => {
  const next = new Set(hidden);
  if (isHidden) next.add(slug);
  else next.delete(slug);
  hidden = next;
  emit();
};

const subscribe = (l: () => void) => {
  listeners.add(l);
  if (!loaded) {
    loaded = true;
    loadVisibility().catch(() => {});
  }
  return () => listeners.delete(l);
};

export const useHiddenSlugs = () => useSyncExternalStore(subscribe, () => hidden, () => hidden);

export const isHiddenIn = (set: Set<string>, slug: string) => set.has(slug);

export const isProductHidden = (set: Set<string>, p: ProductDetail) =>
  set.has(p.slug) || set.has(groupKeyOf(p));

export const useVisibleProducts = (list: ProductDetail[]) => {
  const set = useHiddenSlugs();
  return set.size ? list.filter((p) => !isProductHidden(set, p)) : list;
};
