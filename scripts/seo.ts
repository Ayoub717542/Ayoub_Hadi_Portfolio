// Vite plugin: SEO + link previews (LinkedIn, WhatsApp, Google) for each language.
//
// LinkedIn and WhatsApp don't run JavaScript, so the tags must be in the HTML itself.
// At build time this plugin:
//   1. writes the tags of the default language into index.html (the "/" page),
//   2. creates /fr/, /en/ and /ar/ copies of the page, each with its own tags,
//   3. writes robots.txt and sitemap.xml.
// Texts, images and the site address are in src/content/site.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Plugin } from 'vite';
import site from '../src/content/site.json';
import profile from '../src/content/profile.json';

type Lang = keyof typeof site.pages;
const langs = Object.keys(site.pages) as Lang[];
const pageUrl = (lang: Lang) => `${site.url}/${lang}/`;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function tags(lang: Lang, url: string): string {
  const page = site.pages[lang];
  const image = site.url + page.image;
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role[lang],
    url: site.url + '/',
    image: site.url + profile.photo,
    sameAs: [profile.github, profile.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Béni Mellal', addressCountry: 'MA' },
  };

  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${site.url}/" />`,
    // Link previews (Open Graph: LinkedIn, Facebook, WhatsApp; Twitter card: X)
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(profile.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(page.title)}" />`,
    `<meta property="og:locale" content="${page.locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    // Tells Google this site is about a person (name, role, profiles)
    `<script type="application/ld+json">${JSON.stringify(person)}</script>`,
  ].join('\n    ');
}

// Puts the tags of `lang` between the <!-- seo --> markers and sets <html lang dir>.
function render(html: string, lang: Lang, url: string): string {
  return html
    .replace(/<!-- seo -->[\s\S]*?<!-- \/seo -->/, `<!-- seo -->\n    ${tags(lang, url)}\n    <!-- /seo -->`)
    .replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`);
}

export function seo(): Plugin {
  let outDir = 'dist';
  return {
    name: 'portfolio-seo',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    transformIndexHtml(html) {
      return render(html, site.defaultLang as Lang, site.url + '/');
    },
    closeBundle() {
      const html = readFileSync(join(outDir, 'index.html'), 'utf8');
      for (const lang of langs) {
        mkdirSync(join(outDir, lang), { recursive: true });
        writeFileSync(join(outDir, lang, 'index.html'), render(html, lang, pageUrl(lang)));
      }
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
      const urls = [site.url + '/', ...langs.map(pageUrl)];
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
          `\n</urlset>\n`,
      );
    },
  };
}
