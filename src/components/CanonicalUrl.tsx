import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SUPPORTED_LANGS, langFromPath, stripLang, DEFAULT_LANG } from "@/lib/i18nRouting";

const SITE_ORIGIN = "https://silica.co.kr";

/**
 * Maintains <link rel="canonical">, hreflang alternates, og:url, twitter:url,
 * and <html lang> based on the current route's language segment.
 *
 * Canonical points at the trailing-slash, lang-prefixed URL of the current page.
 * Alternates are emitted for every supported language plus an x-default that
 * targets the Korean (DEFAULT_LANG) version.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = langFromPath(pathname) ?? DEFAULT_LANG;
    const basePath = stripLang(pathname); // always starts with "/"
    const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

    const canonicalPath = normalize(`/${lang}${basePath === "/" ? "" : basePath}`);
    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;

    // <html lang>
    if (typeof document !== "undefined") document.documentElement.lang = lang;

    const upsertLink = (
      rel: string,
      href: string,
      attrs: Record<string, string> = {},
    ) => {
      const selectorParts = [`link[rel="${rel}"]`, `[data-i18n="1"]`];
      Object.entries(attrs).forEach(([k, v]) =>
        selectorParts.push(`[${k}="${v}"]`),
      );
      // We dedupe canonical by rel; hreflang alternates by hreflang attr.
      let selector: string;
      if (attrs.hreflang) {
        selector = `link[rel="${rel}"][hreflang="${attrs.hreflang}"][data-i18n="1"]`;
      } else {
        selector = `link[rel="${rel}"][data-i18n="1"]`;
      }
      let el = document.head.querySelector<HTMLLinkElement>(selector);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        el.setAttribute("data-i18n", "1");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      el.setAttribute("href", href);
    };

    const upsertMeta = (
      attr: "property" | "name",
      key: string,
      content: string,
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Remove a stale plain canonical (without our data-i18n marker) so we don't ship two.
    document.head
      .querySelectorAll('link[rel="canonical"]:not([data-i18n])')
      .forEach((n) => n.parentElement?.removeChild(n));

    upsertLink("canonical", canonicalUrl);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:url", canonicalUrl);

    // hreflang alternates for every supported language
    SUPPORTED_LANGS.forEach((l) => {
      const altPath = normalize(`/${l}${basePath === "/" ? "" : basePath}`);
      upsertLink("alternate", `${SITE_ORIGIN}${altPath}`, { hreflang: l });
    });
    // x-default → Korean
    const defaultPath = normalize(
      `/${DEFAULT_LANG}${basePath === "/" ? "" : basePath}`,
    );
    upsertLink("alternate", `${SITE_ORIGIN}${defaultPath}`, {
      hreflang: "x-default",
    });
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
