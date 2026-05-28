'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import type { Language } from '@/lib/types';

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang((l) => l === 'pt' ? 'en' : 'pt')} />
      <main className="min-h-screen pt-16 text-slate-100">
        {/* seções serão adicionadas aqui */}
      </main>
    </>
  );
}
