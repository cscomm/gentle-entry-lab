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
    const repeating = new WeakSet<Element>();
    const tracked = new Set<HTMLElement>();

    const finish = (el: HTMLElement, delay: number) => {
      window.setTimeout(() => {
        el.classList.remove("reveal", "is-revealed");
        el.style.removeProperty("--reveal-delay");
      }, 1100 + delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting && repeating.has(target)) {
            target.classList.remove("is-revealed");
          }
        });
        const shown = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        // Stagger siblings that appear together (e.g. a row of cards).
        const perParent = new Map<Element | null, number>();
        shown.forEach((el) => {
          const i = perParent.get(el.parentElement) ?? 0;
          perParent.set(el.parentElement, i + 1);
          const delay = Math.min(i * 80, 480);
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-revealed");
          if (!repeating.has(el)) {
            io.unobserve(el);
            finish(el, delay);
          }
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
        if (el.closest("[data-no-reveal]") || el.parentElement?.closest(SKIP_ANCESTOR)) return;
        if (el.closest("[data-parallax],[data-scroll-slide]") || el.className.toString().includes("animate-")) return;
        if (el.tagName === "IMG" && getComputedStyle(el).position === "absolute") return;
        const r = el.getBoundingClientRect();
        // Already on screen (or not rendered): leave as is, no flash.
        if (r.width === 0 && r.height === 0) return;
        const repeat = /^\/(ko|en|ja)\/?$/.test(pathRef.current);
        if (!repeat && r.top < vh * 0.92) return;
        if (repeat) repeating.add(el);
        if (repeat && r.top < vh * 0.92 && r.bottom > 0) el.classList.add("is-revealed");
        el.classList.add("reveal");
        tracked.add(el);
        io.observe(el);
      });
    };

    // Parallax + scroll-linked slides
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const host = (el.closest("section") as HTMLElement) ?? el;
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.translate = `0 ${offset.toFixed(1)}px`;
      });
      // data-scroll-slide="left|right": slides in from the side toward the
      // centre, following the scroll position, so it replays on every pass.
      document.querySelectorAll<HTMLElement>("[data-scroll-slide]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -400 || r.top > vh + 400) return;
        const t = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.7)));
        const e = 1 - Math.pow(1 - t, 3);
        const start = vw * 0.32;
        const inward = vw >= 768 ? vw * 0.08 : vw * 0.03;
        const x = -start + (start + inward) * e;
        const dir = el.dataset.scrollSlide === "right" ? -1 : 1;
        if (!el.style.transition) el.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
        el.style.transform = `translate3d(${(x * dir).toFixed(1)}px,0,0)`;
        el.style.opacity = Math.min(1, t * 1.8).toFixed(3);
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
      tracked.forEach((el) => {
        el.classList.remove("reveal", "is-revealed");
        el.style.removeProperty("--reveal-delay");
      });
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scheduled) window.clearTimeout(scheduled);
    };
  }, []);

  return null;
};

export default ScrollReveal;
