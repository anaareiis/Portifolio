'use client';

import { Code2, BrainCircuit, Database, ShieldCheck } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

/* Ícone + cor de destaque por categoria, na ordem definida em lib/content.ts */
const CATEGORY_STYLES = [
  { icon: Code2,        accent: 'text-sky-400',     ring: 'hover:border-sky-500/50' },
  { icon: BrainCircuit, accent: 'text-fuchsia-400',  ring: 'hover:border-fuchsia-500/50' },
  { icon: Database,     accent: 'text-emerald-400',  ring: 'hover:border-emerald-500/50' },
  { icon: ShieldCheck,  accent: 'text-amber-400',    ring: 'hover:border-amber-500/50' },
];

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const { skills } = getContent(lang);

  return (
    <section id="habilidades" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-3 section-line">
          {skills.sectionTitle}
        </h2>
        <p className="text-slate-400 mb-12">{skills.intro}</p>

        {/* Categorias */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {skills.categories.map((category, i) => {
            const style = CATEGORY_STYLES[i % CATEGORY_STYLES.length];
            const Icon = style.icon;
            return (
              <div
                key={category.title}
                className={`bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 transition-colors ${style.ring}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className={style.accent} />
                  <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-sm text-slate-300 bg-slate-900/60 border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Outras ferramentas */}
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
