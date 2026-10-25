import { profile, skills } from '../content';
import { useLang } from '../i18n';
import { Section, Tags } from './ui';

export function About() {
  const { t, tr } = useLang();

  return (
    <Section id="about" index="01" title={t('about')}>
      <p className="text-lg leading-relaxed">{tr(profile.bio)}</p>

      <h3 className="label mt-14">{t('skills')}</h3>
      <dl className="mt-4 divide-y divide-line">
        {skills.map((group) => (
          <div key={tr(group.group)} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium">{tr(group.group)}</dt>
            <dd>
              <Tags items={group.items} />
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="label mt-14">{t('languages')}</h3>
      <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
        {profile.languages.map((l) => (
          <li key={tr(l.name)} className="text-sm">
            <span className="font-medium">{tr(l.name)}</span>
            <span className="text-muted"> — {tr(l.level)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
