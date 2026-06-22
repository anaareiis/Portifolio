'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, GraduationCap, Calendar, Languages, FileDown } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface AboutProps {
  lang: Language;
}

const INFO_ICONS = [MapPin, GraduationCap, Calendar];

export default function About({ lang }: AboutProps) {
  const { about, hero } = getContent(lang);
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-white mb-12 section-line">
          {about.sectionTitle}
        </h2>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Coluna esquerda — foto */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-52 h-52 rounded-full overflow-hidden ring-4 ring-sky-500/30 shrink-0 bg-slate-800">
              {photoError ? (
                /* Placeholder com iniciais — visível enquanto não há foto */
                <div className="absolute inset-0 flex items-center justify-center text-sky-400 text-4xl font-bold select-none">
                  ALRN
                </div>
              ) : (
                <Image
                  src="/photo.png"
                  alt="Ana Luísa Reis Nascente"
                  fill
                  sizes="208px"
                  className="object-cover"
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>

            {/* Cards de info */}
            <ul className="w-full space-y-3">
              {about.infoCards.map((card, i) => {
                const Icon = INFO_ICONS[i];
                return (
                  <li
                    key={card.label}
                    className="flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-3"
                  >
                    <Icon size={16} className="text-sky-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 leading-none mb-0.5">{card.label}</p>
                      <p className="text-sm text-slate-200 font-medium">{card.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href={`/api/cv-ats?lang=${lang}`}
              download={lang === 'pt' ? 'Ana-Luisa-Reis-Nascente-Curriculo-PT.pdf' : 'Ana-Luisa-Reis-Nascente-CV-EN.pdf'}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold text-sm transition-colors"
            >
              <FileDown size={16} />
              {hero.cta.cv}
            </a>
          </div>

          {/* Coluna direita — bio + idiomas */}
          <div className="space-y-8">
            <div className="space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                <Languages size={16} className="text-sky-400" />
                {lang === 'pt' ? 'Idiomas' : 'Languages'}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {about.languages.map((l) => (
                  <li
                    key={l.name}
                    className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700/50"
                  >
                    <p className="text-sm font-semibold text-white">{l.name}</p>
                    <p className="text-xs text-sky-400 mt-0.5">{l.level}</p>
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
