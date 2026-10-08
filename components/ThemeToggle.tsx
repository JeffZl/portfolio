"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(saved ?? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="flex w-[52px] cursor-pointer items-center justify-center border-l border-line text-base"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
