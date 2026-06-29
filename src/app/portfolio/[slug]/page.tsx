import { notFound } from 'next/navigation';
import data from '../portfolio.json';
import type { PortfolioData } from '../types';
import { PortfolioTemplate } from '../PortfolioTemplate';

const portfolioData = data as PortfolioData;

type PortfolioPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export default function PortfolioSlugPage({ params }: PortfolioPageProps) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <PortfolioTemplate project={project} />;
}

