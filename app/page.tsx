'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import type { Language } from '@/lib/types';

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang((l) => l === 'pt' ? 'en' : 'pt')} />
      <main className="min-h-screen pt-16 text-slate-100">
        <Hero lang={lang} />
        <About lang={lang} />
      </main>
    </>
  );
}
