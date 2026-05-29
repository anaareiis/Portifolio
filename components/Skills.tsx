'use client';

import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

/* Ícones SVG inline para as 4 habilidades principais */
const PRIMARY_ICONS: Record<string, React.ReactNode> = {
  'JavaScript': (
    <svg viewBox="0 0 32 32" width={36} height={36} aria-hidden>
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path fill="#000" d="M9.5 25.3c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.3 1.8l-1.8 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.5l.6.3c2 .9 3.1 1.7 3.1 3.7 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.4l1.7-1.1zm9.3.2c.4.7.7 1.3 1.5 1.3.8 0 1.2-.3 1.2-1.5v-7.8h2.2v7.8c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3-1-3.6-2.2l2.3-1.2z" />
    </svg>
  ),
  'React JS / React Native': (
    <svg viewBox="0 0 32 32" width={36} height={36} aria-hidden>
      <rect width="32" height="32" rx="4" fill="#1E1E2E" />
      <ellipse cx="16" cy="16" rx="2.5" ry="2.5" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" width={36} height={36} aria-hidden>
      <rect width="32" height="32" rx="4" fill="#1E1E2E" />
      <path fill="#539E43" d="M16 5 4 11.7v12.6L16 31l12-6.7V11.7L16 5zm0 2.3 9.5 5.4v10.8L16 28.7l-9.5-5.2V12.7L16 7.3z" />
      <path fill="#539E43" d="M16 10.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5S14.1 12.5 16 12.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 32 32" width={36} height={36} aria-hidden>
      <rect width="32" height="32" rx="4" fill="#1E1E2E" />
      <path fill="#3776AB" d="M15.9 5C11 5 11.3 7 11.3 7v2.1h4.7v.7H9.3S6 9.4 6 14.3c0 5 2.8 4.8 2.8 4.8h1.6v-2.3s-.1-2.8 2.7-2.8h4.7s2.6.1 2.6-2.5V7.6C20.4 7.6 20.9 5 15.9 5zm-2.6 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
      <path fill="#FFD43B" d="M16.1 27c4.9 0 4.6-2 4.6-2v-2.1h-4.7v-.7h6.7S26 22.6 26 17.7c0-5-2.8-4.8-2.8-4.8h-1.6v2.3s.1 2.8-2.7 2.8h-4.7s-2.6-.1-2.6 2.5v4.1c0 0-.5 2.4 4.5 2.4zm2.6-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
    </svg>
  ),
};

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const { skills } = getContent(lang);

  return (
    <section id="habilidades" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 section-line">
          {skills.sectionTitle}
        </h2>

        {/* Principais */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
            {skills.primaryTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.primary.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
              >
                {PRIMARY_ICONS[name] ?? (
                  <div className="w-9 h-9 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">
                    {name[0]}
                  </div>
                )}
                <span className="text-sm text-slate-200 font-medium text-center leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Outras */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
            {skills.otherTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.other.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-sm text-slate-300 bg-slate-800/60 border border-slate-700/50 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
