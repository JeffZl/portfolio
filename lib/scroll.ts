let go: ((top: number) => void) | null = null;

/** Smoothly scroll the page (falls back to the browser's own smooth scroll). */
export function smoothTo(top: number) {
  if (go) go(top);
  else window.scrollTo({ top, behavior: "smooth" });
}

export function registerSmooth(fn: (top: number) => void) {
  go = fn;
  return () => {
    go = null;
  };
}
