import PortfolioClient from '@/components/PortfolioClient';
import { getGitHubRepos } from '@/lib/github';

export default async function Home() {
  const repos = await getGitHubRepos();

  return <PortfolioClient repos={repos} />;
}
