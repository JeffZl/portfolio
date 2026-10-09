import type { CSSProperties } from "react";
import { BACKGROUND, FOOTER, LINKS, MORE, PROJECTS, SKILLS, STACK } from "@/lib/data";
import { Accent, AppMock, Btn, SectionBar, SectionTitle } from "./ui";

const tag = "!tracking-[.06em] border border-line px-[9px] py-1 font-mono text-[11px] font-semibold uppercase text-mut";

export function Hero() {
  const share = "border-r border-line px-4 py-3 text-mut last:border-r-0 narrow:px-2.5";
  return (
    <div>
      <SectionBar n="01" title="Portfolio" right="Internship candidate · Open to work" />
      <section className="border-b border-line px-10 pb-14 pt-20 text-center narrow:px-5 narrow:pb-10 narrow:pt-14">
        {/* Replace this placeholder with your photo, e.g. <Image src="/photo.jpg" ... /> */}
        <div style={{ "--d": 0 } as CSSProperties} className="rise mx-auto mb-[22px] grid size-52 place-items-center overflow-hidden rounded-xl bg-[linear-gradient(160deg,#3b6cf5,#1d3a8a)] ring-1 ring-line">
          <svg viewBox="0 0 100 100" className="size-full" role="img" aria-label="Photo placeholder">
            <circle cx="50" cy="38" r="16" fill="rgba(255,255,255,.85)" />
            <path d="M16 100C16 72 34 62 50 62s34 10 34 38z" fill="rgba(255,255,255,.85)" />
          </svg>
        </div>
        <div style={{ "--d": 1 } as CSSProperties} className="rise wide-md inline-flex items-center gap-3 text-2xl font-bold">
          <i className="lbl bg-[#2563eb] px-2 py-[5px] not-italic text-white">01</i>
          <div>Jeff<span className="text-blue">ly</span></div>
        </div>
        <h1 style={{ "--d": 2 } as CSSProperties} className="rise wide mx-auto mb-7 mt-[34px] max-w-[860px] text-[clamp(38px,6vw,72px)] font-bold leading-[1.05] tracking-[-.03em]">
          I build web, mobile and <Accent>AI</Accent> projects that ship.
        </h1>
        <p style={{ "--d": 3 } as CSSProperties} className="rise mx-auto mb-[38px] max-w-[560px] text-[19px] text-mut">
          Computer science student at Universitas Tarumanagara. Full-stack apps with Next.js and Flutter, computer vision research, and Linux systems (RHCSA). Looking for an IT internship.
        </p>
        <div style={{ "--d": 4 } as CSSProperties} className="rise flex flex-wrap justify-center gap-3">
          <Btn href={LINKS.cvId} download="Jeffly_CV.pdf" filled className="narrow:flex-auto">↓ Download CV</Btn>
          <Btn href={LINKS.github} external className="narrow:flex-auto">GitHub</Btn>
          <Btn href={LINKS.linkedin} external className="narrow:flex-auto">LinkedIn</Btn>
        </div>
        <div style={{ "--d": 5 } as CSSProperties} className="rise lbl mt-[34px] grid gap-[22px] text-dim">
          <span>Other ways to reach me ↓</span>
          <span>Jakarta, Indonesia · Open to IT internships</span>
          <div className="lbl mx-auto inline-flex max-w-full flex-wrap border border-line">
            <span className={share}>Share</span>
            <a href={LINKS.email} className={share}>Email</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={share}>GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={share}>LinkedIn</a>
          </div>
        </div>
      </section>
      <div className="lbl flex justify-between gap-3 border-b border-line px-10 py-[18px] text-mut narrow:px-5">
        <span>Selected work — preview</span><span>Screenshots</span>
      </div>
      <AppMock art="linear-gradient(135deg,#2a4f9e,#e8cf9a 55%,#8a3d2a)" className="h-[430px] border-b border-line narrow:h-[260px]" />
    </div>
  );
}

export function Skills() {
  return (
    <section id="highlights">
      <SectionBar n="02" title="Highlights" right="What I bring" />
      <SectionTitle>What I <Accent>bring</Accent>.</SectionTitle>
      <div className="grid grid-cols-3 border-t border-line narrow:grid-cols-1">
        {SKILLS.map((s, i) => (
          <div key={s.title} style={{ "--i": i % 3 } as CSSProperties} className="reveal group border-b border-r border-line px-8 pb-9 pt-10 transition-colors duration-300 hover:bg-fg/[.03] [&:nth-child(3n)]:border-r-0 narrow:border-r-0 narrow:px-5 narrow:py-7">
            <span className="lbl mb-[22px] block text-right text-dim">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="wide-md mb-3.5 text-[25px] font-bold tracking-[-.02em] transition-colors duration-300 group-hover:text-blue">{s.title}</h3>
            <p className="text-mut">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="screens">
      <SectionBar n="03" title="Projects" right="Selected work" />
      <div className="grid grid-cols-2 narrow:grid-cols-1">
        {PROJECTS.map((p, i) => (
          <figure key={p.caption} style={{ "--i": i === 2 ? 1 : 0 } as CSSProperties} className={`reveal m-0 border-b border-line ${i === 0 ? "col-span-2 narrow:col-span-1" : ""} ${i === 1 ? "border-r narrow:border-r-0" : ""}`}>
            <div className="lbl flex justify-between gap-3 border-b border-line px-10 py-[18px] text-mut narrow:px-5">
              <span>{p.caption}</span><span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <AppMock art={p.art} rows={i === 0 ? 3 : 2} className={`${i === 0 ? "h-[440px]" : "h-[300px]"} narrow:h-[260px]`} />
            <div className="px-10 pb-[30px] pt-[22px] text-[15px] text-mut narrow:px-5 narrow:pb-6 narrow:pt-[18px]">
              <p className="mb-3.5">{p.body}</p>
              <div className="flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className={tag}>{t}</span>)}</div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Background() {
  const row = "flex justify-between gap-3 border-t border-line py-[18px]";
  return (
    <section id="get">
      <SectionBar n="04" title="Background" right="Education · Certificates" />
      <div className="grid grid-cols-3 border-b border-line narrow:grid-cols-1">
        {BACKGROUND.map((c, i) => (
          <div key={c.label} style={{ "--i": i } as CSSProperties} className="reveal flex flex-col border-r border-line px-8 pb-8 pt-7 last:border-r-0 narrow:border-r-0 narrow:px-5 narrow:py-6">
            <div className="lbl mb-[30px] flex justify-between text-dim"><span>{c.label}</span></div>
            <h3 className="wide mb-4 flex items-center gap-3.5 text-[30px] font-bold">
              <span className="grid size-10 place-items-center border border-line">
  <c.icon className="size-5" strokeWidth={1.75} />
</span>{c.title}
            </h3>
            {c.lines.map((l, i) => (
              <p key={l} className={`mb-[22px] mt-0.5 ${c.strong && i === 0 ? "font-semibold text-fg" : "text-mut"}`}>{l}</p>
            ))}
            <Btn href={c.cta.href} external={c.cta.external} className="mt-auto w-full">{c.cta.text}</Btn>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-2 narrow:grid-cols-1">
        <div className="border-r border-line px-10 py-12 narrow:border-r-0 narrow:px-5 narrow:py-9">
          <span className="lbl text-dim">Resume</span>
          <h2 className="wide pb-4 pt-3.5 text-[40px] font-bold leading-[1.05] tracking-[-.03em]">Get my <Accent>CV</Accent>.</h2>
          <a href={LINKS.cvEn} download={LINKS.cvEn} className={row}><span>CV (English)<br /></span><span>→</span></a>
          <a href={LINKS.cvId} download={LINKS.cvId} className={row}><span>CV (Indonesian)<br /></span><span>→</span></a>
        </div>
        <div className="px-10 py-12 narrow:px-5 narrow:py-9">
          <span className="lbl text-dim">Toolbox</span>
          <h2 className="wide pb-4 pt-3.5 text-[40px] font-bold leading-[1.05] tracking-[-.03em]">My <Accent>stack</Accent>.</h2>
          <div className="mb-[22px] border border-line bg-bg2">
            <div className="lbl flex justify-between border-b border-line px-4 py-3 text-dim"><span>＞_ Terminal</span><span>Stack</span></div>
            <pre className="m-0 overflow-x-auto px-4 py-[18px] font-mono text-[13px] leading-[1.9] narrow:whitespace-pre-wrap narrow:break-all narrow:text-xs">{STACK}</pre>
          </div>
          <Btn href={LINKS.github} external>View GitHub</Btn>
        </div>
      </div>
    </section>
  );
}

export function MoreWork() {
  return (
    <section id="family">
      <SectionBar n="05" title="More work" right="Research · Client work" />
      <SectionTitle>More from <Accent>my desk</Accent>.</SectionTitle>
      <div className="grid grid-cols-3 border-t border-line narrow:grid-cols-1">
        {MORE.map((m, i) => (
          <a
            key={m.title}
            href={m.href}
            style={{ "--cc": m.color, "--i": i } as CSSProperties}
            className="reveal group relative block border-b border-r border-line bg-bg before:absolute before:inset-x-0 before:-top-px before:z-[2] before:h-[3px] before:origin-left before:scale-x-0 before:bg-(--cc) before:transition-transform before:duration-[550ms] before:ease-[cubic-bezier(.2,.8,.2,1)] last:border-r-0 hover:before:scale-x-100 narrow:border-r-0"
          >
            <div className="lbl flex items-center justify-between px-6 py-4 text-dim narrow:px-5">
              <i className="px-2 py-[5px] not-italic text-white" style={{ background: m.color }}>{m.n}</i><span>{m.tag}</span>
            </div>
            <div className="h-[190px]" style={{ background: m.art }} />
            <div className="relative px-6 pb-7 narrow:px-5">
              <div className="relative -mt-7 grid size-14 place-items-center rounded-[10px] text-[26px] transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:-rotate-6" style={{ background: m.color }}><m.icon className="size-7 text-white" /></div>
              <h3 className="wide-md mb-2 mt-4 text-[27px] font-bold">{m.title}</h3>
              <p className="mb-5 text-mut">{m.body}</p>
              <span className="lbl inline-flex gap-1 text-mut">{m.cta} <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="end" className="border-t border-line text-center">
      <SectionBar n="06" title="Contact" right="Say hello" />
      <div className="px-10 pb-[100px] pt-[90px] narrow:px-5 narrow:pb-[72px] narrow:pt-16">
        <span className="lbl text-dim">Open to internships · Available</span>
        <h2 className="wide pb-5 pt-[22px] text-[clamp(34px,5.5vw,68px)] font-bold leading-[1.05] tracking-[-.03em]">Let&apos;s build <Accent>together</Accent>.</h2>
        <p className="mx-auto mb-[34px] max-w-[520px] text-lg text-mut">Looking for an IT intern who learns fast and ships? I would love to talk.</p>
        <Btn href={LINKS.email} filled>✉ {LINKS.emailText}</Btn>
      </div>
    </section>
  );
}

export function Footer() {
  const cell = "border-r border-line p-8 last:border-r-0 narrow:border-b narrow:border-r-0";
  return (
    <footer className="grid grid-cols-[1.6fr_repeat(4,1fr)] border-t border-line narrow:grid-cols-1">
      <div className={cell}>
        <b className="text-[28px]">J</b>
        <p className="my-3.5 text-mut">Computer science student and developer based in Jakarta.</p>
        <span className="lbl">{LINKS.emailText}</span>
      </div>
      {FOOTER.map((col) => (
        <div key={col.title} className={cell}>
          <span className="lbl mb-5 block text-dim">{col.title}</span>
          {col.links.map(([label, href]) => (
            <a key={label} href={href} className="mb-3 block" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</a>
          ))}
        </div>
      ))}
    </footer>
  );
}
