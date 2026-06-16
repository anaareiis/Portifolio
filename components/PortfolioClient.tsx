'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import type { Language, GitHubRepo } from '@/lib/types';

interface PortfolioClientProps {
  repos: GitHubRepo[];
}

export default function PortfolioClient({ repos }: PortfolioClientProps) {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang((l) => l === 'pt' ? 'en' : 'pt')} />
      <main className="min-h-screen pt-16 text-slate-100">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Projects lang={lang} repos={repos} />
        <Contact lang={lang} />
      </main>
    </>
  );
}
