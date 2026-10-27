// Day / night switch. The new theme grows as a circle from the switch over the whole page.
// Browsers without View Transitions, or visitors who prefer less motion, get an instant switch.

import { useState, type MouseEvent } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLang } from '../i18n';

type Theme = 'light' | 'dark';
const CIRCLE_MS = 600;

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

export function ThemeToggle() {
  const { t } = useLang();
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'));
  const dark = theme === 'dark';

  function toggle(e: MouseEvent) {
    const next: Theme = dark ? 'light' : 'dark';
    const update = () => {
      applyTheme(next);
      setTheme(next);
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) return update();

    // Circle from the center of the switch to the farthest corner of the screen.
    const box = e.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const html = document.documentElement;
    html.classList.add('theme-switch');
    const transition = document.startViewTransition(update);
    transition.ready.then(() =>
      html.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: CIRCLE_MS, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' },
      ),
    );
    transition.finished.finally(() => html.classList.remove('theme-switch'));
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={t('switchTheme')}
      onClick={toggle}
      dir="ltr" // knob slides left → right in every language
      className="relative flex h-8 w-16 items-center justify-between rounded-full border border-current/20 px-2 text-muted"
    >
      <Sun className="size-3.5" />
      <Moon className="size-3.5" />
      {/* The knob: slides to the chosen side, its icon spins in */}
      <span
        className={`absolute top-1 left-1 flex size-6 items-center justify-center rounded-full bg-ink text-bg transition-transform duration-500 ease-out motion-reduce:transition-none ${
          dark ? 'translate-x-8' : ''
        }`}
      >
        <span key={theme} className="theme-icon">
          {dark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
        </span>
      </span>
    </button>
  );
}
