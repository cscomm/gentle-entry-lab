import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls to the element matching `location.hash` whenever the route
 * or hash changes. Retries briefly so it works even when the target section
 * mounts after navigation (e.g. cross-page links like `/#contact`).
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (tries++ < 20) window.setTimeout(tick, 50);
    };
    tick();
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
