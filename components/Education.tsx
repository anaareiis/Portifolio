'use client';

import { GraduationCap, Trophy, Users } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface EducationProps {
  lang: Language;
}

export default function Education({ lang }: EducationProps) {
  const { education, achievements } = getContent(lang);

  return (
    <section id="educacao" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Educação ── */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 section-line">
            {education.sectionTitle}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {education.items.map((item, i) => (
              <div
                key={i}
                className="relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-sky-500/30 transition-colors flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <GraduationCap size={18} className="text-sky-400 mt-0.5 shrink-0" />
                  {item.current && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 shrink-0">
                      {education.present}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">{item.degree}</h3>
                <p className="text-xs text-sky-400 font-medium">{item.institution}</p>
                <p className="text-xs text-slate-500">{item.period}</p>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Conquistas & Extracurricular ── */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 section-line">
            {achievements.sectionTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prêmios */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">
                <Trophy size={15} className="text-sky-400" />
                {achievements.awardsTitle}
              </h3>
              <ul className="space-y-3">
                {achievements.awards.map((a, i) => (
                  <li
                    key={i}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-white">{a.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{a.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liderança */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">
                <Users size={15} className="text-sky-400" />
                {achievements.leadershipTitle}
              </h3>
              <ul className="space-y-2">
                {achievements.leadership.map((l, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{l.role}</p>
                      <p className="text-xs text-sky-400 mt-0.5">{l.org}</p>
                    </div>
                    {l.period && (
                      <span className="text-xs text-slate-500 shrink-0 mt-0.5">{l.period}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
