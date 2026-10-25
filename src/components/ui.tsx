// Small building blocks shared by the sections.

import type { ReactNode } from 'react';

// One page of the portfolio. On desktop it fills the screen and one scroll
// moves to the next page (see usePaging.ts). On phones pages are a normal list.
export function Page({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <div id={id} className="page py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-6">
      <div className="reveal">{children}</div>
    </div>
  );
}

// "01 About ————" line at the top of a page. `aside` shows on the far end (e.g. "02 / 07").
export function Heading({ index, title, aside }: { index: string; title: string; aside?: ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-4 lg:mb-6">
      <span className="font-mono text-sm text-accent">{index}</span>
      <span className="font-display text-2xl font-bold">{title}</span>
      <span className="h-px flex-1 bg-line" />
      {aside}
    </h2>
  );
}

export function Tags({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
