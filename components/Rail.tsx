"use client";

import { useEffect, useRef } from "react";
import { SECTIONS } from "@/lib/data";
import { smoothTo } from "@/lib/scroll";

type Sec = {
  a: HTMLElement; l: HTMLElement; e: HTMLElement; ch: HTMLElement[];
  pc: number; g: number; y2: number; len: number; ws: number[]; tv: number; ap: boolean;
};

const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));

/**
 * Scroll ruler on the right edge.
 * At rest it is zoomed around your position; hovering (or touching) the ruler
 * expands it to 0-100% and spreads the section names along it.
 */
export default function Rail() {
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const R = rail.current!;
    const q = <T extends HTMLElement>(s: string) => R.querySelector(s) as T;
    const qa = (s: string) => [...R.querySelectorAll<HTMLElement>(s)];
    const K = q("[data-k]"), M = q("[data-m]"), B = q("[data-b]"), SC = q("[data-c]");
    const T = M.firstElementChild as HTMLElement;
    const TK = qa("[data-t]"), NM = qa("[data-n]"), LB = qa("[data-l]"), SL = qa("[data-s]");
    const S: Sec[] = LB.map((a, i) => ({
      a, l: SL[i], e: document.getElementById(SECTIONS[i].id)!, ch: [...a.children] as HTMLElement[],
      pc: 0, g: 0, y2: 0, len: 1, ws: [], tv: 0, ap: false,
    }));
    const ac = new AbortController();
    const opt = { signal: ac.signal };
    let ex = false, pv = false, tm = 0;

    function lay() {
      const H = R.clientHeight, kh = K.clientHeight, E = H - 12;
      const D = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      const y = scrollY, p = Math.min(100, (y / D) * 100), nw = innerWidth < 901, hv = ex, n = S.length, z = kh / 15;
      if (hv !== pv) {
        pv = hv; R.classList.add("sw"); clearTimeout(tm);
        tm = window.setTimeout(() => R.classList.remove("sw"), 560);
      }
      const Y = (v: number) => (hv ? (v / 100) * kh : (p / 100) * kh + (v - p) * z);

      TK.forEach((t, j) => { t.style.top = Y(j / 2) + "px"; t.style.display = !hv && j % 2 ? "none" : ""; });

      let c = 0;
      S.forEach((s, i) => {
        s.pc = i ? Math.min(96, (s.e.offsetTop / D) * 100) : 0;
        if (s.e.offsetTop <= y + 112) c = i;
      });

      const bt: Sec[] = [];
      S.forEach((s, i) => {
        const up = !hv && !nw && i > c && s.pc > p;
        s.ws = s.ch.map((x) => x.offsetWidth);
        s.len = s.ws.reduce((a, b) => a + b, 0) * 1.45 || 1;
        s.y2 = 10 + Y(s.pc);
        s.g = up ? clamp((E - s.y2) / s.len) : 0;
        if (i > c && s.g < 1) bt.push(s);
      });

      // Letters leave the bottom stack one by one and turn upright beside the ruler.
      const fly = (s: Sec, top: number) => {
        const W = R.clientWidth, ax = W - 70 - s.a.offsetWidth, xc = W - 40, sc = 1.45, m = s.ch.length;
        const tv = Math.min(s.y2, E - s.len);
        let acc = 0; s.tv = tv; s.ap = true;
        for (let j = m - 1; j >= 0; j--) {
          const x = s.ch[j], w = s.ws[j], hx = ax + x.offsetLeft + w / 2, yc = tv + acc + (w * sc) / 2;
          const k = m - 1 - j, pj = clamp((s.g * (m + 4) - k) / 4);
          const u = pj < 0.5 ? 4 * pj ** 3 : 1 - (-2 * pj + 2) ** 3 / 2, v = 1 - u;
          const px = v * v * hx + 2 * v * u * xc + u * u * xc, py = v * v * top + 2 * v * u * top + u * u * yc;
          x.style.transform = `translate(${px - hx}px,${py - top}px) rotate(${-90 * u}deg) scale(${1 + (sc - 1) * u})`;
          acc += w * sc;
        }
      };

      S.forEach((s, i) => {
        let top: number;
        if (hv) top = 10 + ((i ? (s.pc + (i < n - 1 ? S[i + 1].pc : 100)) / 2 : 0) / 100) * kh;
        else if (s.g >= 1) top = H - 16;
        else if (i < c) top = 16 + i * 20;
        else if (i === c) top = nw ? 10 + (p / 100) * kh - 16 : 16 + c * 20 + 22;
        else top = H - 16 - (bt.length - 1 - bt.indexOf(s)) * 20;
        const on = i === c, show = !nw && (hv || innerWidth >= 1560), st = s.a.style;
        st.display = nw ? "none" : "block"; st.top = top + "px"; st.opacity = show ? "1" : "0";
        st.pointerEvents = show && !hv ? "auto" : "none";
        st.fontSize = on && !hv ? "30px" : "15px"; st.color = on || hv ? "var(--fg)" : "var(--dim)";
        s.l.style.display = !hv && !nw && i > 0 && s.y2 >= 10 && s.y2 <= kh + 10 ? "block" : "none";
        s.l.style.top = s.y2 + "px";
        if (s.g > 0) { st.transition = "none"; fly(s, top); }
        else if (s.ap) { st.transition = ""; s.ch.forEach((x) => (x.style.transform = "")); s.ap = false; }
      });

      NM.forEach((x, j) => {
        const v = j * 5, yy = 10 + Y(v);
        x.style.top = Y(v) + "px";
        const hide = S.some((s) => s.g > 0.5 && yy >= s.tv - 4 && yy <= s.tv + s.len + 4);
        x.style.visibility = hide ? "hidden" : "visible";
        x.style.display = nw && !hv ? "none" : "";
      });

      M.style.top = (p / 100) * kh + "px";
      T.textContent = ("00" + Math.round(p)).slice(-3) + " %";
      const a = S[c].pc, b = c < n - 1 ? S[c + 1].pc : 100;
      B.style.top = 10 + (a / 100) * kh + "px";
      B.style.height = Math.max(8, ((b - a) / 100) * kh) + "px";
      B.style.opacity = SC.style.opacity = hv ? "1" : "0";
    }

    const jump = (e: PointerEvent) => {
      const r = K.getBoundingClientRect();
      const top = clamp((e.clientY - r.top) / r.height) * (document.documentElement.scrollHeight - innerHeight);
      scrollTo({ top, behavior: "instant" } as ScrollToOptions);
    };
    const end = (e: PointerEvent) => { if (e.pointerType !== "mouse") { ex = false; lay(); } };

    K.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover)").matches) { ex = true; lay(); } }, opt);
    K.addEventListener("mouseleave", () => { ex = false; lay(); }, opt);
    K.addEventListener("mousemove", (e) => { SC.style.top = e.clientY - R.getBoundingClientRect().top + "px"; }, opt);
    K.addEventListener("click", (e) => {
      const r = K.getBoundingClientRect();
      smoothTo(clamp((e.clientY - r.top) / r.height) * (document.documentElement.scrollHeight - innerHeight));
    }, opt);
    K.addEventListener("pointerdown", (e) => {
      e.preventDefault(); K.setPointerCapture(e.pointerId);
      if (e.pointerType !== "mouse") ex = true;
      jump(e); lay();
    }, opt);
    K.addEventListener("pointermove", (e) => { if (K.hasPointerCapture(e.pointerId)) jump(e); }, opt);
    K.addEventListener("pointerup", end, opt);
    K.addEventListener("pointercancel", end, opt);
    addEventListener("scroll", lay, { passive: true, signal: ac.signal });
    addEventListener("resize", lay, opt);
    addEventListener("load", lay, opt);
    lay();

    return () => { ac.abort(); clearTimeout(tm); };
  }, []);

  return (
    <div
      ref={rail}
      className="pointer-events-none fixed bottom-[env(safe-area-inset-bottom,0px)] right-[env(safe-area-inset-right,0px)] top-[calc(52px+env(safe-area-inset-top,0px))] z-[8] w-[300px] narrow:w-[min(260px,72vw)]"
    >
      <div data-b className="absolute right-0 w-[58px] border-b border-fg bg-fg/12 opacity-0 transition-[opacity,top,height] duration-[350ms] narrow:w-6" />
      <i data-c className="absolute right-0 h-px w-[58px] bg-fg opacity-0 narrow:w-6" />
      <div
        data-k
        className="pointer-events-auto absolute bottom-4 right-0 top-2.5 w-[58px] cursor-ns-resize touch-none [clip-path:inset(-10px_0_-16px_0)] narrow:w-6 narrow:[clip-path:inset(-10px_-90px_-16px_-90px)]"
      >
        {Array.from({ length: 201 }, (_, j) => (
          <i key={j} data-t className={`absolute right-0 h-px bg-dim ${j % 10 === 0 ? "w-5 narrow:w-3" : j % 2 === 0 ? "w-2.5 opacity-70 narrow:w-[7px]" : "w-[5px] opacity-50 narrow:w-1"}`} />
        ))}
        {Array.from({ length: 21 }, (_, j) => (
          <b key={j} data-n className="absolute right-[26px] -translate-y-1/2 font-mono text-[10px] font-normal text-dim narrow:right-4 narrow:text-[9px]">{j * 5}</b>
        ))}
        <div data-m className="absolute right-0 h-px w-[58px] bg-blue narrow:w-6">
          <span className="absolute right-0 top-[5px] whitespace-nowrap font-mono text-[10px] font-semibold tracking-[.08em] text-blue narrow:bg-bg narrow:px-1">000 %</span>
        </div>
      </div>
      {SECTIONS.map((s) => <i key={s.id} data-s className="absolute right-[58px] hidden h-px w-[250px] bg-dim opacity-45" />)}
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          data-l
          href={`#${s.id}`}
          className="wide pointer-events-none absolute right-[70px] -translate-y-1/2 whitespace-nowrap text-[15px] font-bold uppercase leading-[1.6] tracking-[.02em] opacity-0 transition-[top,font-size,color,opacity] duration-[450ms] ease-[cubic-bezier(.3,.8,.3,1)] narrow:right-[34px]"
        >
          {[...s.label].map((ch, i) => (
            <span key={i} className="inline-block will-change-transform">{ch === " " ? "\u00a0" : ch}</span>
          ))}
        </a>
      ))}
    </div>
  );
}
