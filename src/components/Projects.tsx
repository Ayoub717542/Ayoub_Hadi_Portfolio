import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '../content';
import { useLang } from '../i18n';
import { ExternalLink, Heading, Page, Tags } from './ui';

// The project picture in a 16:10 frame (clicks through to the demo, or the code).
// Without a picture, shows the project name on a dotted background instead.
// On desktop its height is capped so the whole project fits on one screen.
function ProjectImage({ project }: { project: Project }) {
  const { tr } = useLang();
  const title = tr(project.title);
  const link = project.demo || project.github;
  const frame = 'group mt-5 block aspect-[16/10] w-full overflow-hidden rounded-lg border border-line lg:max-h-[30vh]';

  const content = project.image ? (
    <img
      src={project.image}
      alt={title}
      loading="lazy"
      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
    />
  ) : (
    <div className="dotted grid size-full place-items-center p-6 text-center">
      <span className="font-display text-3xl font-bold text-muted transition-colors group-hover:text-ink">
        {title.split(/\s[–-]\s/)[0]}
      </span>
    </div>
  );

  return link ? (
    <ExternalLink href={link} className={frame}>
      {content}
    </ExternalLink>
  ) : (
    <div className={frame}>{content}</div>
  );
}

// Each project is its own page, headed "03 Projects ——— 02 / 07".
export function Projects() {
  const { t, tr } = useLang();
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="projects">
      {projects.map((project, i) => (
        <Page key={project.slug}>
          <Heading
            index="04"
            title={t('projects')}
            aside={
              // dir="ltr" keeps "02 / 07" in this order in Arabic too
              <span dir="ltr" className="font-mono text-sm text-muted">
                <span className="text-accent">{pad(i + 1)}</span> / {pad(projects.length)}
              </span>
            }
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-bold">{tr(project.title)}</h3>
            <span className="font-mono text-sm text-muted">{project.year}</span>
          </div>
          {project.featured && <p className="mt-1 text-xs font-medium text-accent">★ {t('featured')}</p>}

          <ProjectImage project={project} />

          <p className="mt-4 leading-relaxed">{tr(project.summary)}</p>

          {!!project.highlights?.length && (
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {project.highlights.map((h) => (
                <li key={tr(h)} className="flex gap-3">
                  <span className="text-accent">—</span>
                  {tr(h)}
                </li>
              ))}
            </ul>
          )}

          <Tags items={project.tech} className="mt-4" />

          <div className="mt-4 flex gap-6 text-sm font-medium">
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
        </Page>
      ))}
    </section>
  );
}
