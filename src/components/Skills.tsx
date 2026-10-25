import { useState } from 'react';
import { skills } from '../content';
import { useLang } from '../i18n';
import { Heading, Page } from './ui';

// Logos come from Simple Icons (simpleicons.org), in each brand's own color.
// The logo is found from the skill name: "Spring Boot" -> "springboot".
// Names that don't match go here (null = no logo, the pill shows text only).
const LOGO_NAMES: Record<string, string | null> = {
  java: 'openjdk',
  jwt: 'jsonwebtokens',
  springdatajpa: 'spring',
  springai: 'spring',
  springactuator: 'spring',
  maven: 'apachemaven',
  javascriptes6: 'javascript',
  html: 'html5',
  dockercompose: 'docker',
  gitgithub: 'git',
  swaggeropenapi: 'swagger',
  gemini: 'googlegemini',
  mcp: 'modelcontextprotocol',
  unittestingjunitmockito: 'junit5',
  mapstruct: null,
  restapis: null,
  websocket: null,
  rag: null,
  chatmemory: null,
  prompting: null,
  sql: null,
  cicd: null,
  micrometer: null,
  vscode: null,
  agilescrum: null,
  cleancode: null,
};

// Logos whose brand color is black or very dark: shown light grey in dark mode so they stay visible.
// If a new logo is hard to see in dark mode, add its name here.
const DARK_LOGOS = ['openjdk', 'jsonwebtokens', 'intellijidea', 'modelcontextprotocol', 'github', 'thymeleaf'];

function logoUrl(skill: string): string | null {
  const key = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  const name = key in LOGO_NAMES ? LOGO_NAMES[key] : key;
  if (!name) return null;
  return `https://cdn.simpleicons.org/${name}${DARK_LOGOS.includes(name) ? '/_/ece8e1' : ''}`;
}

function Skill({ name }: { name: string }) {
  const [logo, setLogo] = useState(logoUrl(name));

  return (
    <li className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-[13px] transition-transform hover:-translate-y-0.5 hover:border-ink/40 motion-reduce:transition-none">
      {logo && (
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setLogo(null)} // no logo with that name: show text only
          className="size-3.5 shrink-0"
        />
      )}
      {name}
    </li>
  );
}

export function Skills() {
  const { t, tr } = useLang();

  return (
    <Page id="skills">
      <Heading index="02" title={t('skills')} />
      <dl className="divide-y divide-line">
        {skills.map((group) => (
          <div key={tr(group.group)} className="grid gap-2 py-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="pt-1 text-sm font-medium">{tr(group.group)}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Skill key={item} name={item} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Page>
  );
}
