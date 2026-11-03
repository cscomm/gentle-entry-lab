import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll animation.
 * - Content blocks inside <section> fade/slide in as they scroll into view.
 * - Elements with data-parallax="0.1" drift at a different speed while scrolling.
 * The hidden state is only added by JS (never in the static HTML), so crawlers
 * and visitors without JS always see the full text. Respects reduced motion.
 */
const AUTO_SELECTOR = [
  "[data-reveal]",
  "section h1",
  "section h2",
  "section h3",
  "section article",
  "section a.group",
  "section .rounded-2xl",
  "section .rounded-xl",
  "section img",
  "section table",
  "section p",
  "section li",
].join(",");

const SKIP_ANCESTOR =
  "[data-no-reveal],header,nav,footer,[role=dialog],[role=menu],[data-radix-popper-content-wrapper],[aria-hidden=true],.reveal";

const ScrollReveal = () => {
  const { pathname } = useLocation();
  const pathRef = useRef(pathname);
  pathRef.current = pathname;

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();

    const finish = (el: HTMLElement, delay: number) => {
      window.setTimeout(() => {
        el.classList.remove("reveal", "is-revealed");
        el.style.removeProperty("--reveal-delay");
      }, 1700 + delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const shown = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        // Stagger siblings that appear together (e.g. a row of cards).
        const perParent = new Map<Element | null, number>();
        shown.forEach((el) => {
          const i = perParent.get(el.parentElement) ?? 0;
          perParent.set(el.parentElement, i + 1);
          const delay = Math.min(i * 80, 480);
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-revealed");
          io.unobserve(el);
          finish(el, delay);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const scan = () => {
      if (/\/admin(\/|$)/.test(pathRef.current)) return;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(AUTO_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.parentElement?.closest(SKIP_ANCESTOR)) return;
        if (el.closest("[data-parallax]") || el.className.toString().includes("animate-")) return;
        const r = el.getBoundingClientRect();
        // Already on screen (or not rendered): leave as is, no flash.
        if (r.width === 0 && r.height === 0) return;
        if (r.top < vh * 0.92) return;
        el.classList.add("reveal");
        io.observe(el);
      });
    };

    // Parallax
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const host = (el.closest("section") as HTMLElement) ?? el;
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.translate = `0 ${offset.toFixed(1)}px`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    };

    let scheduled = 0;
    const schedule = () => {
      if (scheduled) return;
      scheduled = window.setTimeout(() => {
        scheduled = 0;
        scan();
        parallax();
      }, 120);
    };

    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    schedule();

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scheduled) window.clearTimeout(scheduled);
    };
  }, []);

  return null;
};

export default ScrollReveal;
