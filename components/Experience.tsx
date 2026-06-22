'use client';

import { Briefcase } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const { experience } = getContent(lang);

  return (
    <section id="experiencia" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 section-line">
          {experience.sectionTitle}
        </h2>

        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-700" aria-hidden />

          <ul className="space-y-10">
            {experience.items.map((item, i) => (
              <li key={i} className="relative pl-12">
                {/* Ícone na linha */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-800 border-2 border-sky-500/60 flex items-center justify-center">
                  <Briefcase size={14} className="text-sky-400" />
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-sky-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                        {experience.present}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-sky-400 font-medium mb-1">{item.company}</p>
                  <p className="text-xs text-slate-400 mb-3">{item.period}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
