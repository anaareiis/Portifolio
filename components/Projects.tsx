'use client';

import { Star, GitFork, ExternalLink } from 'lucide-react';
import type { Language, GitHubRepo } from '@/lib/types';
import { getContent } from '@/lib/content';

interface ProjectsProps {
  lang: Language;
  repos: GitHubRepo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python:     '#3572A5',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  Java:       '#b07219',
  Ruby:       '#701516',
  C:          '#555555',
  'C++':      '#f34b7d',
};

export default function Projects({ lang, repos }: ProjectsProps) {
  const { projects } = getContent(lang);

  return (
    <section id="projetos" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 section-line">
          {projects.sectionTitle}
        </h2>
        <p className="text-slate-400 mb-12">{projects.subtitle}</p>

        {repos.length === 0 ? (
          <div className="text-center py-16 border border-slate-800 rounded-xl">
            <p className="text-slate-400 mb-4">{projects.emptyState}</p>
            <a
              href="https://github.com/anaareiis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              {projects.emptyCta}
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-sky-500/40 hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors break-all">
                    {repo.name}
                  </h3>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-sky-400 transition-colors shrink-0 mt-0.5" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed flex-1 mb-4">
                  {repo.description || projects.noDescription}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? '#64748b' }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {repos.length > 0 && (
          <div className="text-center mt-10">
            <a
              href="https://github.com/anaareiis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              {projects.loadMore}
              <ExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
