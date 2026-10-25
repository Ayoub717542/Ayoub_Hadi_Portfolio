import { profile } from '../content';
import { useLang } from '../i18n';
import { Heading, Page } from './ui';

export function About() {
  const { t, tr } = useLang();

  return (
    <Page id="about">
      <Heading index="01" title={t('about')} />
      <p className="text-xl leading-relaxed">{tr(profile.bio)}</p>

      <h3 className="label mt-12">{t('languages')}</h3>
      <ul className="mt-3 flex flex-wrap gap-x-10 gap-y-3">
        {profile.languages.map((l) => (
          <li key={tr(l.name)} className="text-sm">
            <span className="font-medium">{tr(l.name)}</span>
            <span className="text-muted"> — {tr(l.level)}</span>
          </li>
        ))}
      </ul>
    </Page>
  );
}
