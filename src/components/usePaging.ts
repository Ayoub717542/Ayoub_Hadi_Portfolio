// Desktop only: one scroll (mouse wheel, touchpad swipe, ↓ ↑ / Page Down / Page Up / Space)
// moves exactly one page: About → Experience → each project → Contact.
// A page taller than the screen (small laptops) is scrolled normally to its end first,
// so nothing is ever hidden.

import { useEffect } from 'react';

const MOVE_MS = 700; // ignore further scrolling while the page glides to the next one
const QUIET_MS = 200; // touchpads keep sending scroll events after a swipe: wait for them to stop
const KEYS: Record<string, 1 | -1> = { ArrowDown: 1, PageDown: 1, ' ': 1, ArrowUp: -1, PageUp: -1 };

export function usePaging() {
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)');
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let movedAt = 0;
    let lastEvent = 0;

    // Which page should one scroll in this direction go to? null = scroll normally.
    function targetFor(dir: 1 | -1): HTMLElement | null {
      const pages = [...document.querySelectorAll<HTMLElement>('.page')];
      const screen = window.innerHeight;
      const i = pages.findIndex((p) => {
        const r = p.getBoundingClientRect();
        return r.top <= screen / 2 && r.bottom > screen / 2;
      });
      if (i === -1) return null;

      const r = pages[i].getBoundingClientRect();
      if (dir === 1) {
        if (r.top > 2) return pages[i]; // page not aligned yet: align it first
        if (r.bottom > screen + 2) return null; // tall page: read to its end first
      } else if (r.top < -2) {
        return r.height <= screen + 2 ? pages[i] : null; // back to the top of this page first
      }
      return pages[i + dir] ?? null; // null = top of the first / end of the last page
    }

    function step(dir: 1 | -1, event: Event) {
      if (!desktop.matches) return;
      const target = targetFor(dir);
      if (!target) return;

      event.preventDefault();
      const now = Date.now();
      const quiet = now - lastEvent > QUIET_MS;
      lastEvent = now;
      if (now - movedAt < MOVE_MS || (!quiet && now - movedAt < MOVE_MS * 2)) return;

      movedAt = now;
      target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    }

    function onWheel(e: WheelEvent) {
      if (e.ctrlKey || Math.abs(e.deltaY) < 4) return; // ctrl+wheel = zoom
      step(e.deltaY > 0 ? 1 : -1, e);
    }

    function onKey(e: KeyboardEvent) {
      const dir = KEYS[e.key];
      const target = e.target as HTMLElement;
      const typing = target.closest?.('input, textarea, select, [contenteditable]');
      if (!dir || typing || e.altKey || e.ctrlKey || e.metaKey) return;
      step(e.shiftKey && e.key === ' ' ? -1 : dir, e);
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
}
