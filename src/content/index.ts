// Reads the JSON files in this folder and gives them to the components.
// To change the site's content, edit the JSON files — not this file.

import profileJson from './profile.json';
import skillsJson from './skills.json';
import experienceJson from './experience.json';

export type Lang = 'en' | 'fr' | 'ar';

// A text is either a plain string (same in every language)
// or an object with one entry per language. English is required.
export type Text = string | { en: string; fr?: string; ar?: string };

export interface Project {
  slug: string; // file name without .json, e.g. "healthcare-app"
  title: Text;
  year: number;
  order?: number; // 1 = shown first. Projects without "order" come after.
  featured?: boolean;
  summary: Text;
  highlights?: Text[];
  tech: string[];
  github?: string;
  demo?: string;
  image?: string; // found automatically: projects/<slug>.png|jpg|jpeg|webp
}

export interface Job {
  role: Text;
  company: string;
  start: string; // "2024" or "2024-07"
  end: string | null; // null = still there
  summary: Text;
  tech: string[];
}

export interface Study {
  degree: Text;
  school: string;
  start: string;
  end: string | null;
}

export interface Profile {
  name: string;
  role: Text;
  stack: string;
  location: Text;
  openToWork: boolean;
  lookingFor: Text;
  bio: Text;
  photo: string;
  cv: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  languages: { name: Text; level: Text }[];
}

export const profile: Profile = profileJson;
export const skills: { group: Text; items: string[] }[] = skillsJson;
export const work: Job[] = experienceJson.work;
export const education: Study[] = experienceJson.education;

// Every .json file in ./projects is loaded automatically.
// Files starting with "_" (like _template.json) are ignored.
const projectFiles = import.meta.glob<Omit<Project, 'slug'>>(
  ['./projects/*.json', '!./projects/_*.json'],
  { eager: true, import: 'default' },
);

// A picture with the same name as the project file is its image,
// e.g. projects/healthcare-app.png goes with projects/healthcare-app.json.
const imageFiles = import.meta.glob<string>('./projects/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});
const fileName = (path: string) => path.split('/').pop()!.replace(/\.\w+$/, '');
const images = Object.fromEntries(Object.entries(imageFiles).map(([path, url]) => [fileName(path), url]));

export const projects: Project[] = Object.entries(projectFiles)
  .map(([path, data]) => ({ ...data, slug: fileName(path), image: images[fileName(path)] }))
  .filter((p) => {
    const ok = p.title && p.summary && p.year;
    if (!ok) console.warn(`Project "${p.slug}" is missing title, summary or year — skipped.`);
    return ok;
  })
  // By "order" first, then featured, then newest.
  .sort(
    (a, b) =>
      (a.order ?? Infinity) - (b.order ?? Infinity) ||
      Number(!!b.featured) - Number(!!a.featured) ||
      b.year - a.year,
  );

// Pick the right language from a Text, falling back to English.
export function tr(text: Text, lang: Lang): string {
  if (typeof text === 'string') return text;
  return text[lang] || text.en;
}

// "2024-07" -> "Jul 2024" / "juil. 2024" / "يوليوز 2024"; "2024" -> "2024".
function formatDate(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  if (!month) return String(year);
  const locale = lang === 'ar' ? 'ar-MA' : lang;
  return new Date(year, month - 1).toLocaleDateString(locale, { month: 'short', year: 'numeric' });
}

export function formatPeriod(start: string, end: string | null, lang: Lang, presentLabel: string): string {
  return `${formatDate(start, lang)} – ${end ? formatDate(end, lang) : presentLabel}`;
}
