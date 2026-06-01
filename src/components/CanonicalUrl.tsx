import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://silica.co.kr";

/**
 * Sets/updates <link rel="canonical"> and og:url/twitter:url to the
 * trailing-slash version of the current route. Mount once in App.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize to trailing slash (root stays "/")
    const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const url = `${SITE_ORIGIN}${normalized}`;

    const upsertLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const upsertMeta = (attr: "property" | "name", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertLink("canonical", url);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:url", url);
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
