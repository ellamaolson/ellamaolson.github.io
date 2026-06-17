import Image from 'next/image';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import data from './portfolio.json';
import type { PortfolioData } from './types';

const portfolioData = data as PortfolioData;

export default function PortfolioPage() {
  const uniqueProjects = portfolioData.projects.filter(
    (project, index, projects) =>
      projects.findIndex((candidate) => candidate.slug === project.slug) === index
  );

  return (
    <Section background="surface" padding="lg">
      <Container maxWidth="notebook">
        <div className="text-center space-y-4 pb-14">
          <Header level={1}>Portfolio</Header>
          <Paragraph className="text-text-secondary">
            Explore recent projects. Each card links to the full case study.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {uniqueProjects.map((project, index) => (
            <div
              key={project.slug}
              className={`rounded-2xl border border-border-subtle bg-surface-raised p-4 shadow-sm min-h-[560px] ${
                index % 2 === 1 ? 'md:translate-y-10' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl border border-border-subtle">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.company} thumbnail`}
                    width={1200}
                    height={700}
                    className="h-[28rem] w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-text-primary/20 pb-10">
                    <p className="text-display-sm lg:text-display font-heading text-white text-center px-4">
                      {project.company}
                    </p>
                  </div>
                </div>
                {/* <Header level={2} className="text-text-primary">
                  {project.company}
                </Header> */}
                {/* <p className="text-small text-text-secondary -mt-6">{project.industry}</p> */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-accent tracking-wide bg-accent/15 px-2 py-0.5 rounded-sm">
                    {project.services}
                  </p>
                  <Button as="link" href={`/portfolio/${project.slug}`} variant="tertiary" size="sm">
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
