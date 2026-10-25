import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../content';
import { useLang } from '../i18n';
import { ExternalLink, Section, Tags } from './ui';

export function Projects() {
  const { t, tr } = useLang();

  return (
    <Section id="projects" index="03" title={t('projects')}>
      <ol className="divide-y divide-line border-y border-line">
        {projects.map((project, i) => (
          <li key={project.slug} className="grid gap-2 py-10 sm:grid-cols-[3rem_1fr]">
            <span className="pt-1.5 font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold">{tr(project.title)}</h3>
                <span className="font-mono text-sm text-muted">{project.year}</span>
              </div>
              {project.featured && <p className="mt-1 text-xs font-medium text-accent">★ {t('featured')}</p>}

              {project.image && (
                <img
                  src={project.image}
                  alt={tr(project.title)}
                  loading="lazy"
                  className="mt-5 w-full rounded-lg border border-line"
                />
              )}

              <p className="mt-4 leading-relaxed">{tr(project.summary)}</p>

              {!!project.highlights?.length && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {project.highlights.map((h) => (
                    <li key={tr(h)} className="flex gap-3">
                      <span className="text-accent">—</span>
                      {tr(h)}
                    </li>
                  ))}
                </ul>
              )}

              <Tags items={project.tech} className="mt-5" />

              <div className="mt-5 flex gap-6 text-sm font-medium">
                {project.github && (
                  <ExternalLink href={project.github} className="inline-flex items-center gap-1.5 hover:text-accent">
                    <Github className="size-4" />
                    {t('code')}
                  </ExternalLink>
                )}
                {project.demo && (
                  <ExternalLink href={project.demo} className="inline-flex items-center gap-1 hover:text-accent">
                    {t('demo')}
                    <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                  </ExternalLink>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
