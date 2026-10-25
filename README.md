# Hadi Ayoub — Portfolio

Personal portfolio of **Hadi Ayoub**, Junior Full-Stack Developer (Java · Spring Boot · React · AI).

**Live:** https://ayoub-hadi-portfolio.pages.dev — 🇫🇷 [/fr](https://ayoub-hadi-portfolio.pages.dev/fr/) · 🇬🇧 [/en](https://ayoub-hadi-portfolio.pages.dev/en/) · 🇲🇦 [/ar](https://ayoub-hadi-portfolio.pages.dev/ar/)

- Static site: React + TypeScript + Vite + Tailwind CSS. No backend, no database.
- All content lives in **JSON files** — no code to touch to add a project or a skill.
- **3 languages** (French, English, Arabic with right-to-left layout).
- Hosted for free on **Cloudflare Pages**: every `git push` publishes the site automatically.

---

## Quick start

```bash
npm install        # once
npm run dev        # open http://localhost:3000 — updates live while you edit
```

| Command | What it does |
|---|---|
| `npm run dev` | Local preview while editing |
| `npm run build` | Builds the site into `dist/` (Cloudflare runs this for you) |
| `npm run lint` | Checks the TypeScript code for errors |
| `npm run translate` | Fills in missing French / Arabic texts in the JSON files |
| `npm run images` | Converts and shrinks pictures to `.webp` |

---

## Where things are

```
src/content/            ← ALL the content (edit these)
├── profile.json        name, role, bio, email, phone, links, languages
├── skills.json         skill groups and skills
├── experience.json     work experience and education
├── site.json           site address + title/description of each language (SEO, LinkedIn preview)
└── projects/
    ├── _template.json  copy this to add a project
    ├── quickfixers.json
    ├── quickfixers.webp   ← picture with the same name = project picture
    └── …

public/                 files served as they are
├── cv/Hadi_Ayoub_CV.pdf   the CV opened by the "View CV" button
├── images/profile.webp    profile photo
└── og/og-fr.jpg, og-en.jpg  LinkedIn / WhatsApp preview images

src/i18n.tsx            button and menu labels in 3 languages
src/index.css           colors and fonts (top of the file)
src/components/         the page sections (About, Skills, Experience, Projects, Contact…)
scripts/                helper tools (translate, images, SEO, icon and preview templates)
```

---

## How to…

### Add a project
1. Copy `src/content/projects/_template.json` and rename it, e.g. `my-app.json`.
2. Fill it in. Only `title`, `summary`, `year` and `tech` are required.
   - `"order": 1` shows it first (projects without `order` come after, newest first).
   - `"featured": true` adds the ★ Featured label.
   - `"github"` and `"demo"` are links (leave `""` if none).
3. *(Optional)* Add a picture with **the same name**: `my-app.png` (any size), then run `npm run images`.
4. Write texts in English as `{ "en": "..." }`, then run `npm run translate` (see below).
5. `git push` → online in about a minute.

### Translate texts
- Any text written as `{ "en": "..." }` is translated by `npm run translate` (free MyMemory service, ~5,000 characters/day).
- Plain strings (`"Spring Boot"`) are never translated — use them for tech names.
- Existing translations are never overwritten, so your corrections are safe. To redo one, delete its `"fr"` or `"ar"` line and run the command again.
- ⚠️ **Always read the result** — machine translation can be very literal (e.g. "Docker" → *عامل الرصيف*, "dock worker").
- If a translation is missing, the site shows the English text.

### Add or remove a skill
Edit `src/content/skills.json`: just type the name, e.g. `"Kafka"`.
The logo is found automatically on [simpleicons.org](https://simpleicons.org) from the name. If no logo matches, the pill shows text only.
Name/logo exceptions are listed at the top of `src/components/Skills.tsx`.

### Update the CV
Replace `public/cv/Hadi_Ayoub_CV.pdf` with the new PDF (**keep the same file name**), then `git push`.

### Change the photo
Put the new photo in `public/images/` as `profile.png` or `.jpg`, run `npm run images` (it becomes `profile.webp`).

### Change the colors
Top of `src/index.css`: the 5 colors for light mode and the same 5 for dark mode.
`--color-accent` is the main color (currently dark blue).
The favicon (`scripts/favicon.html`) and preview images (`scripts/og-image.html`) are pictures: they must be re-rendered after a color change.

### Change button / menu labels
`src/i18n.tsx` — each label exists in `en`, `fr` and `ar` (TypeScript reports an error if one is missing).

### Change the SEO title / LinkedIn preview text
`src/content/site.json` → `pages.fr`, `pages.en`, `pages.ar`.
After a change, paste your link into [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) so LinkedIn refreshes its copy.

---

## Publishing

The site is connected to **Cloudflare Pages** (project `ayoub-hadi-portfolio`):

- Build command: `npm run build` · Output directory: `dist`
- Every `git push` to `main` rebuilds and publishes the site in about a minute.
- If the address ever changes (e.g. a custom domain), update `"url"` in `src/content/site.json` — previews, canonical links and the sitemap all use it.

> **Note:** LinkedIn refuses link previews from `*.workers.dev` addresses. Use the `pages.dev` address (or a custom domain), not a Cloudflare **Worker** address.

---

## Features

- One-page layout: fixed left column (photo, name, menu, CV, language switch), sections on the right.
- Desktop: **one scroll = one page** (About → Skills → Experience → each project → Contact). Phones scroll normally.
- Animated "circuit grid" background with a mouse spotlight; still for visitors who prefer reduced motion.
- Light / dark mode follows the visitor's system.
- Smooth language switch (cross-fade), right-to-left layout for Arabic, language in the URL (`/fr/`, `/en/`, `/ar/`).
- SEO and link previews per language, structured data for Google, `robots.txt` and `sitemap.xml` generated at build time.
