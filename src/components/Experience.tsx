import { education, formatPeriod, work } from '../content';
import { useLang } from '../i18n';
import { Section, Tags } from './ui';

export function Experience() {
  const { lang, t, tr } = useLang();
  const period = (start: string, end: string | null) => formatPeriod(start, end, lang, t('present'));

  return (
    <Section id="experience" index="02" title={t('experience')}>
      <ol className="space-y-12">
        {work.map((job) => (
          <li key={job.company + job.start} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-1 font-mono text-xs text-muted">{period(job.start, job.end)}</p>
            <div>
              <h3 className="font-semibold">
                {tr(job.role)} <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{tr(job.summary)}</p>
              <Tags items={job.tech} className="mt-4" />
            </div>
          </li>
        ))}
      </ol>

      <h3 className="label mt-16">{t('education')}</h3>
      <ol className="mt-6 space-y-6">
        {education.map((study) => (
          <li key={study.school + study.start} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="pt-0.5 font-mono text-xs text-muted">{period(study.start, study.end)}</p>
            <div>
              <p className="font-medium">{tr(study.degree)}</p>
              <p className="text-sm text-muted">{study.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
