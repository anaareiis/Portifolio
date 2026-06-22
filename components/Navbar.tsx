'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navbar } = getContent(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sky-400 font-bold text-lg tracking-tight hover:text-sky-300 transition-colors"
        >
          Ana Reis
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-6">
          {navbar.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs lg:text-sm text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Lang toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-600 text-slate-300 hover:border-sky-400 hover:text-sky-400 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-slate-300 hover:text-sky-400 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navbar.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
