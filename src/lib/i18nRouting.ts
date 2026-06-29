import type { Lang } from "@/contexts/LanguageContext";

export const SUPPORTED_LANGS = ["ko", "en", "ja"] as const;
export const DEFAULT_LANG: Lang = "ko";

export const isLang = (v: string | undefined | null): v is Lang =>
  !!v && (SUPPORTED_LANGS as readonly string[]).includes(v);

/** Extract the language segment from a pathname, or null if none. */
export const langFromPath = (pathname: string): Lang | null => {
  const seg = pathname.split("/")[1];
  return isLang(seg) ? seg : null;
};

/** Remove the lang segment from a pathname, returning the remainder (always starts with "/"). */
export const stripLang = (pathname: string): string => {
  const replaced = pathname.replace(/^\/(ko|en|ja)(?=\/|$)/, "");
  return replaced === "" ? "/" : replaced;
};

/** Prefix a path with `/${lang}`. Idempotent — already-prefixed paths pass through. */
export const withLang = (lang: Lang, to: string): string => {
  if (!to.startsWith("/")) return to;
  // Hash-only link like "/#section" → "/ko#section"
  if (to.startsWith("/#")) return `/${lang}${to.slice(1)}`;
  // Already prefixed
  if (/^\/(ko|en|ja)(\/|#|\?|$)/.test(to)) return to;
  return `/${lang}${to}`;
};

/** Best-guess initial language for visitors hitting the bare "/" route. */
export const detectInitialLang = (): Lang => {
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem("lang");
      if (isLang(stored)) return stored;
    } catch {
      /* ignore */
    }
    const nav = (navigator.language || "ko").slice(0, 2).toLowerCase();
    if (nav === "ja") return "ja";
    if (nav === "en") return "en";
  }
  return DEFAULT_LANG;
};
