import type { GitHubRepo } from './types';

const GITHUB_USERNAME = 'anaareiis';

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();

    return repos.filter((repo) => !repo.fork).slice(0, 6);
  } catch {
    return [];
  }
}
