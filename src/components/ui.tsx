// Small building blocks shared by the sections.

import type { ReactNode } from 'react';

export function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-12 py-16 lg:py-24">
      <h2 className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="font-display text-2xl font-bold">{title}</span>
        <span className="h-px flex-1 bg-line" />
      </h2>
      {children}
    </section>
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
