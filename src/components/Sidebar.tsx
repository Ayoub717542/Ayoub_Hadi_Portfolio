// Left column on desktop (stays fixed), top "hero" on phones.

import { useEffect, useState } from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content';
import { useLang, type UiKey } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { ExternalLink } from './ui';

const sections: UiKey[] = ['about', 'skills', 'experience', 'projects', 'contact'];

// Which section is in the middle of the screen right now.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function Sidebar() {
  const { t, tr } = useLang();
  const active = useActiveSection(sections);

  return (
    // No inner scrollbar: the column stays fixed only on screens tall enough to show all of it
    // ("tall" is defined in index.css); on shorter screens it scrolls with the page.
    <header className="pt-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:py-12 tall:sticky tall:top-0 tall:h-screen">
      <div>
        <img
          src={profile.photo}
          alt={profile.name}
          width={96}
          height={110}
          className="photo aspect-[7/8] w-24 rounded-lg object-cover"
        />

        <h1 className="mt-8 font-display text-5xl font-extrabold tracking-tight">{profile.name}</h1>
        <p className="mt-3 text-lg font-medium">{tr(profile.role)}</p>
        <p className="mt-1 font-mono text-sm text-muted">{profile.stack}</p>

        {profile.openToWork && (
          <div className="mt-6 text-sm">
            <p className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              {t('openToWork')}
            </p>
            <p className="mt-1 ps-4 text-muted">{tr(profile.lookingFor)}</p>
          </div>
        )}

        <nav className="mt-10 hidden lg:block" aria-label="Sections">
          <ul className="space-y-1">
            {sections.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center gap-4 py-1 text-sm font-medium">
                    <span
                      className={`h-px transition-all ${
                        isActive ? 'w-16 bg-accent' : 'w-8 bg-muted group-hover:w-16 group-hover:bg-ink'
                      }`}
                    />
                    <span className={isActive ? 'text-ink' : 'text-muted group-hover:text-ink'}>{t(id)}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5">
        <div className="flex flex-wrap gap-3">
          <ExternalLink
            href={profile.cv}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white"
          >
            <FileText className="size-4" />
            {t('cv')}
          </ExternalLink>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
          >
            {t('contactMe')}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <LanguageSwitcher />
          <ThemeToggle />

          <ul className="flex gap-5 text-muted">
            <li>
              <ExternalLink href={profile.github} className="hover:text-ink">
                <Github className="size-5" aria-label="GitHub" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.linkedin} className="hover:text-ink">
                <Linkedin className="size-5" aria-label="LinkedIn" />
              </ExternalLink>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-ink">
                <Mail className="size-5" aria-label="Email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
