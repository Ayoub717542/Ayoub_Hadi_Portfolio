import { MapPin, Phone } from 'lucide-react';
import { profile } from '../content';
import { useLang } from '../i18n';
import { Heading, Page } from './ui';

export function Contact() {
  const { t, tr } = useLang();

  return (
    <Page id="contact">
      <Heading index="04" title={t('contact')} />
      <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{t('contactTitle')}</p>
      <p className="mt-5 max-w-lg leading-relaxed text-muted">{t('contactText')}</p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-block break-all font-display text-xl font-bold underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-2xl"
      >
        <bdi>{profile.email}</bdi>
      </a>

      <ul className="mt-8 space-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <Phone className="size-4" />
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-ink" dir="ltr">
            {profile.phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="size-4" />
          {tr(profile.location)}
        </li>
      </ul>

      <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
        {t('builtBy')} {profile.name} · {new Date().getFullYear()}
      </footer>
    </Page>
  );
}
