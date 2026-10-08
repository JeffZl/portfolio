import type { ReactNode } from "react";

export const Accent = ({ children }: { children: ReactNode }) => (
  <em className="not-italic text-blue">{children}</em>
);

export function Btn({
  href, children, filled, external, className = "",
}: { href: string; children: ReactNode; filled?: boolean; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`lbl inline-flex items-center justify-center gap-2.5 border px-[22px] py-[17px] ${
        filled ? "border-inv bg-inv text-invt" : "border-fg"
      } ${className}`}
    >
      {children}
    </a>
  );
}

/** Sticky header that tells people which section they are in. */
export function SectionBar({ n, title, right }: { n: string; title: string; right: string }) {
  return (
    <div className="lbl sticky top-[calc(52px+env(safe-area-inset-top,0px))] z-[6] flex justify-between gap-3 border-b border-line bg-bg px-10 py-5 text-dim narrow:px-5 narrow:py-4 narrow:pr-8">
      <span className="whitespace-nowrap">{n} / <b className="text-mut">{title}</b></span>
      <span className="text-right">{right}</span>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="wide px-10 pb-[76px] pt-20 text-[clamp(34px,5vw,60px)] font-bold leading-[1.05] tracking-[-.03em] narrow:px-5 narrow:pb-10 narrow:pt-12">
      {children}
    </h2>
  );
}

/** Placeholder for an app screenshot. Replace with a real <Image /> later. */
export function AppMock({ art, className = "", rows = 3 }: { art: string; className?: string; rows?: number }) {
  return (
    <div className={`grid grid-cols-[44px_1fr_200px] bg-[#1b1c21] narrow:grid-cols-[30px_1fr_90px] ${className}`}>
      <div className="bg-[#24252b]" />
      <div className="grid place-items-center p-[26px]">
        <div className="size-full rounded" style={{ background: art }} />
      </div>
      <div className="grid content-start gap-2 bg-[#24252b] p-3">
        <i className="h-[110px] rounded-[3px] bg-[#2f3037]" />
        {Array.from({ length: rows }).map((_, i) => (
          <i key={i} className="h-[26px] rounded-[3px] bg-[#2f3037]" />
        ))}
      </div>
    </div>
  );
}
