// Language system: interface labels in 3 languages + the current language.
// Content texts (bio, projects...) are translated in src/content/*.json.

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { tr, type Lang, type Text } from './content';
import site from './content/site.json';

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'عربي' },
];

// Interface labels. To add a label, add it to all three languages.
const ui = {
  en: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages',
    openToWork: 'Open to work',
    cv: 'View CV',
    contactMe: 'Contact me',
    present: 'Present',
    featured: 'Featured',
    code: 'Code',
    demo: 'Live demo',
    contactTitle: "Let's work together",
    contactText: "I'm looking for a full-time job, an internship or freelance work. Send me a message — I usually reply within a day.",
    builtBy: 'Designed & built by',
    switchLanguage: 'Change language',
  },
  fr: {
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
    skills: 'Compétences',
    education: 'Formation',
    languages: 'Langues',
    openToWork: 'Disponible',
    cv: 'Voir le CV',
    contactMe: 'Me contacter',
    present: "Aujourd'hui",
    featured: 'À la une',
    code: 'Code',
    demo: 'Démo en ligne',
    contactTitle: 'Travaillons ensemble',
    contactText: "Je recherche un CDI, un stage ou une mission freelance. Envoyez-moi un message — je réponds généralement sous 24 h.",
    builtBy: 'Conçu et développé par',
    switchLanguage: 'Changer de langue',
  },
  ar: {
    about: 'نبذة عني',
    experience: 'الخبرة',
    projects: 'المشاريع',
    contact: 'تواصل',
    skills: 'المهارات',
    education: 'التكوين',
    languages: 'اللغات',
    openToWork: 'متاح للعمل',
    cv: 'السيرة الذاتية',
    contactMe: 'تواصل معي',
    present: 'حتى الآن',
    featured: 'مميّز',
    code: 'الكود',
    demo: 'عرض مباشر',
    contactTitle: 'لنعمل معًا',
    contactText: 'أبحث عن وظيفة دائمة أو تدريب أو عمل حر. راسلني — عادةً أردّ خلال يوم واحد.',
    builtBy: 'تصميم وتطوير',
    switchLanguage: 'تغيير اللغة',
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof typeof ui.en;

const isLang = (value: string | null): value is Lang => value === 'en' || value === 'fr' || value === 'ar';

// 1. a link like /fr/ or ?lang=fr  2. the visitor's last choice  3. the browser language  4. English
function initialLang(): Lang {
  const fromPath = location.pathname.split('/')[1];
  if (isLang(fromPath)) return fromPath;
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (isLang(saved)) return saved;
  } catch {}
  const browser = navigator.language.slice(0, 2);
  return isLang(browser) ? browser : 'en';
}

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: UiKey) => string; // interface label
  tr: (text: Text) => string; // content text from the JSON files
}

const LangContext = createContext<LangContextValue | null>(null);

// Language, direction, tab title, description and address (/fr/, /en/, /ar/) follow the chosen language.
function applyToPage(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = site.pages[lang].title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', site.pages[lang].description);
  const path = location.pathname.split('/')[1];
  if (path === '' || isLang(path)) history.replaceState(null, '', `/${lang}/${location.hash}`);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    applyToPage(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  // Cross-fade the whole page between languages (hides the LTR <-> RTL flip).
  // Browsers without View Transitions, or users who prefer less motion, get an instant switch.
  function setLang(next: Lang) {
    const update = () => {
      applyToPage(next);
      flushSync(() => setLangState(next));
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(update);
    else update();
  }

  const value: LangContextValue = {
    lang,
    setLang,
    t: (key) => ui[lang][key],
    tr: (text) => tr(text, lang),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error('useLang must be used inside <LangProvider>');
  return value;
}
