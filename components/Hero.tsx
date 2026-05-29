'use client';

import { Mail, ArrowDown } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const { hero } = getContent(lang);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Gradiente de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.12),transparent)]"
      />

      <div className="max-w-3xl w-full text-center animate-fade-in">
        {/* Saudação */}
        <p className="text-sky-400 font-mono text-sm sm:text-base mb-3 animate-fade-in-up motion-safe">
          {hero.greeting}
        </p>

        {/* Nome */}
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up delay-100 motion-safe">
          {hero.name}
        </h1>

        {/* Título */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gradient mb-6 animate-fade-in-up delay-200 motion-safe">
          {hero.title}
        </h2>

        {/* Subtítulo */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300 motion-safe">
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-400 motion-safe">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors"
          >
            {hero.cta.projects}
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold text-sm transition-colors"
          >
            {hero.cta.cv}
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white font-semibold text-sm transition-colors"
          >
            {hero.cta.contact}
          </a>
        </div>

        {/* Links sociais */}
        <div className="flex justify-center gap-5 animate-fade-in-up delay-500 motion-safe">
          <a
            href="https://github.com/anaareiis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="mailto:samurth00@gmail.com"
            aria-label="E-mail"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-fade-in delay-500">
        <span className="text-xs font-mono">{hero.scroll}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
