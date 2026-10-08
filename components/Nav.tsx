import { LINKS, NAV } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const cell = "flex items-center border-r border-line px-[18px]";

export default function Nav() {
  return (
    <nav className="sticky top-[env(safe-area-inset-top,0px)] z-[9] flex h-[52px] border-b border-line bg-bg2">
      <a href="#top" className={`${cell} w-[70px] justify-center px-0 text-[22px] font-extrabold`}>J</a>
      {NAV.map(([label, href]) => (
        <a key={href} href={href} className={`${cell} lbl text-mut hover:text-fg narrow:hidden`}>{label}</a>
      ))}
      <span className="flex-1" />
      <a href="#family" className={`${cell} lbl border-l text-mut hover:text-fg narrow:hidden`}>More work</a>
      <ThemeToggle />
      <a href={LINKS.cv} className="lbl flex items-center bg-inv px-[18px] text-invt">Request CV</a>
    </nav>
  );
}
