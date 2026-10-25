import { useEffect, useState } from 'react';
import { languages, useLang } from '../i18n';

const SLIDE_MS = 200;

// A pill with a highlight that slides to the chosen language.
// The highlight moves first, then the page fades into the new language.
export function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  const [selected, setSelected] = useState(lang);
  const index = languages.findIndex((l) => l.code === selected);

  useEffect(() => setSelected(lang), [lang]);

  function choose(code: typeof lang) {
    if (code === selected) return;
    setSelected(code);
    setTimeout(() => setLang(code), SLIDE_MS);
  }

  return (
    <div
      role="radiogroup"
      aria-label={t('switchLanguage')}
      dir="ltr" // keep EN · FR · عربي in the same order, even in Arabic
      className="lang-switch relative grid grid-cols-3 w-48 p-1 rounded-full border border-current/20 text-sm leading-5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-current/10 transition-transform ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(${index * 100}%)`, transitionDuration: `${SLIDE_MS}ms` }}
      />
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          role="radio"
          aria-checked={selected === l.code}
          onClick={() => choose(l.code)}
          className={`relative z-10 py-1.5 rounded-full transition-opacity ${
            selected === l.code ? 'font-semibold' : 'opacity-60 hover:opacity-100'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
