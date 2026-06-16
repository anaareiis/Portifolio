'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import type { Language } from '@/lib/types';
import { getContent } from '@/lib/content';

interface ContactProps {
  lang: Language;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ lang }: ContactProps) {
  const { contact } = getContent(lang);
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contact.links.email}?subject=${subject}&body=${body}`;

    setStatus('success');
  };

  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-line">
          {contact.sectionTitle}
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">{contact.subtitle}</p>

        <div className="grid md:grid-cols-[1fr_280px] gap-10">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-1.5">
                {contact.form.name}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={contact.form.namePlaceholder}
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5">
                {contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={contact.form.emailPlaceholder}
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-300 mb-1.5">
                {contact.form.message}
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={contact.form.messagePlaceholder}
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold text-sm transition-colors"
            >
              <Send size={15} />
              {status === 'sending' ? contact.form.sending : contact.form.submit}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400">{contact.form.success}</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">{contact.form.error}</p>
            )}
          </form>

          {/* Cards de contato direto */}
          <div className="space-y-3">
            <a
              href={`mailto:${contact.links.email}`}
              className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 hover:border-sky-500/40 transition-colors"
            >
              <Mail size={16} className="text-sky-400 shrink-0" />
              <span className="text-sm text-slate-300 break-all">{contact.links.email}</span>
            </a>

            <a
              href={`https://${contact.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 hover:border-sky-500/40 transition-colors"
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" className="text-sky-400 shrink-0" aria-hidden>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="text-sm text-slate-300">{contact.links.github}</span>
            </a>

            <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3">
              <MapPin size={16} className="text-sky-400 shrink-0" />
              <span className="text-sm text-slate-300">{contact.links.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
