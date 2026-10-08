"use client";

import { useEffect } from "react";
import { registerSmooth } from "@/lib/scroll";

/** Inertial wheel scrolling and smooth in-page links (desktop only). */
export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
    const de = document.documentElement;
    const ac = new AbortController();
    let cur = scrollY, tgt = cur, raf = 0;
    de.classList.add("ss");

    const max = () => Math.max(0, de.scrollHeight - innerHeight);
    const tick = () => {
      const d = tgt - cur;
      if (Math.abs(d) < 0.4) { cur = tgt; scrollTo(0, cur); raf = 0; return; }
      cur += d * 0.1;
      scrollTo(0, cur);
      raf = requestAnimationFrame(tick);
    };
    const go = (t: number) => {
      tgt = Math.max(0, Math.min(max(), t));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const unregister = registerSmooth(go);

    addEventListener("wheel", (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      const d = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
      go((raf ? tgt : scrollY) + d);
    }, { passive: false, signal: ac.signal });

    addEventListener("scroll", () => { if (!raf) cur = tgt = scrollY; }, { passive: true, signal: ac.signal });

    document.addEventListener("click", (e) => {
      const a = (e.target as Element).closest?.('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      go(href === "#top" ? 0 : el.getBoundingClientRect().top + scrollY - 60);
    }, { signal: ac.signal });

    return () => {
      ac.abort();
      cancelAnimationFrame(raf);
      de.classList.remove("ss");
      unregister();
    };
  }, []);
  return null;
}
