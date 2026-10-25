// npm run translate
//
// Fills in missing French and Arabic texts in src/content/**/*.json.
// - Only texts written as { "en": "..." } are translated.
//   Plain strings ("Spring Boot") are left alone: they are the same in every language.
// - Existing "fr" / "ar" values are never overwritten, so your manual fixes are safe.
//   To re-translate a text, delete its "fr" or "ar" line and run the command again.
//
// Uses the free MyMemory API (https://mymemory.translated.net): no account, no key,
// about 5,000 characters per day. Add your email to raise it to 50,000/day:
//   npm run translate -- you@example.com

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIR = 'src/content';
const TARGETS = ['fr', 'ar'];
const email = process.argv[2];

// All JSON files in src/content and its sub-folders, except _template.json & co.
function jsonFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return jsonFiles(path);
    return entry.name.endsWith('.json') && !entry.name.startsWith('_') ? [path] : [];
  });
}

// MyMemory accepts up to 500 bytes per request, so long texts are sent sentence by sentence.
async function translate(text, to) {
  const parts = text.length > 450 ? text.match(/[^.!?]+[.!?]*\s*/g) : [text];
  const results = [];
  for (const part of parts) {
    const url = new URL('https://api.mymemory.translated.net/get');
    url.searchParams.set('q', part.trim());
    url.searchParams.set('langpair', `en|${to}`);
    if (email) url.searchParams.set('de', email);

    const data = await fetch(url).then((r) => r.json());
    if (data.responseStatus !== 200 || data.quotaFinished) {
      throw new Error(`MyMemory: ${data.responseDetails || 'request failed'}`);
    }
    results.push(data.responseData.translatedText);
  }
  return results.join(' ');
}

// Walks any JSON value and translates every { en } object that is missing fr or ar.
async function fill(value, stats) {
  if (Array.isArray(value)) {
    for (const item of value) await fill(item, stats);
  } else if (value && typeof value === 'object') {
    if (typeof value.en === 'string' && value.en.trim()) {
      for (const lang of TARGETS) {
        if (!value[lang]) {
          const result = await translate(value.en, lang);
          // MyMemory sometimes sends the English back unchanged: don't save that.
          if (result.trim().toLowerCase() === value.en.trim().toLowerCase()) {
            console.log(`  ! ${lang}: no translation found for "${value.en}" — add it by hand`);
            continue;
          }
          value[lang] = result;
          console.log(`  + ${lang}: ${result}`);
          stats.count++;
        }
      }
    }
    for (const key of Object.keys(value)) {
      if (!['en', ...TARGETS].includes(key)) await fill(value[key], stats);
    }
  }
}

let total = 0;
for (const file of jsonFiles(CONTENT_DIR)) {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const stats = { count: 0 };
  console.log(file);
  try {
    await fill(data, stats);
  } finally {
    // Save what was translated, even if the daily limit stopped us halfway.
    if (stats.count) writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  }
  total += stats.count;
}

console.log(total ? `\nDone: ${total} text(s) translated. Review them, then fix anything that sounds odd.` : '\nNothing to translate.');
