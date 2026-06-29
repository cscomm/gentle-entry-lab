import type { Lang } from "@/contexts/LanguageContext";

/**
 * Pick the right text for the current language with sensible fallbacks.
 * - ja → ja ?? en ?? ko
 * - en → en ?? ko
 * - ko → ko
 */
export const pick = (
  lang: Lang,
  ko: string,
  en?: string,
  ja?: string
): string => {
  if (lang === "ja") return ja ?? en ?? ko;
  if (lang === "en") return en ?? ko;
  return ko;
};
