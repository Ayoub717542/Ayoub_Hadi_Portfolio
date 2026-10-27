import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Plugin } from 'vite';
import profile from '../src/content/profile.json';
import skills from '../src/content/skills.json';
import experience from '../src/content/experience.json';

function english(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(english);
  if (value && typeof value === 'object') {
    if ('en' in value) return (value as { en: string }).en;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, english(v)]));
  }
  return value;
}

export function aiContext(): Plugin {
  let outDir = 'dist';
  return {
    name: 'portfolio-ai-context',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const folder = 'src/content/projects';
      const projects = readdirSync(folder)
        .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
        .map((f) => JSON.parse(readFileSync(join(folder, f), 'utf8')));
      const context = english({ profile, skills, experience, projects });
      writeFileSync(join(outDir, 'ai-context.json'), JSON.stringify(context));
    },
  };
}
