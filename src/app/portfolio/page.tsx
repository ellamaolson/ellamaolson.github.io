import Image from 'next/image';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { ScallopFrame } from '../components/ui/ScallopFrame';
import Link from 'next/link';
import data from './portfolio.json';
import type { PortfolioData } from './types';

const portfolioData = data as PortfolioData;

export default function PortfolioPage() {
  return (
    <Section background="surface" padding="lg">
      <Container maxWidth="wide">
        <div className="text-center space-y-4 pb-14">
          <Header level={1}>Portfolio</Header>
          <Paragraph className="text-text-secondary">
            Meet the entrepreneurs who&rsquo;ve partnered with me to build their business brand and
            showcase their vision.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[repeat(2,40%)] justify-center gap-12 lg:gap-16">
          {portfolioData.projects.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="rounded-2xl border border-border-subtle bg-surface-raised p-8 shadow-sm"
            >
              <div className="space-y-10">
                <div className="relative">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group relative block overflow-hidden rounded-xl"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.company} thumbnail`}
                      width={1200}
                      height={700}
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-text-primary/20 pb-16 transition-colors duration-300 group-hover:bg-text-primary/35">
                      <p className="text-display lg:text-[3.5rem] lg:leading-none font-heading text-white text-center px-4">
                        {project.company}
                      </p>
                    </div>
                  </Link>
                  {project.brand.mainColor && (
                    <ScallopFrame
                      topN={10}
                      sideN={10}
                      innerOffset={0.38}
                      innerCornerRadius={0.57}
                      scallopDepth={0.6}
                      color={`#${project.brand.mainColor.hex}`}
                    />
                  )}
                </div>

                <div className="px-3 flex flex-col gap-3">
                  <div
                    className="flex items-center justify-center gap-2"
                    style={
                      project.brand.mainColor
                        ? { color: `#${project.brand.mainColor.hex}` }
                        : undefined
                    }
                  >
                    <svg width="24" height="8" viewBox="0 0 36 8" fill="none" className="shrink-0">
                      <path
                        d="M0 4 C3 2,6 2,9 4 S15 6,18 4 S24 2,27 4 S33 6,36 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <p className="text-sm text-center">{project.brand.tagline}</p>
                    <svg width="24" height="8" viewBox="0 0 36 8" fill="none" className="shrink-0">
                      <path
                        d="M0 4 C3 2,6 2,9 4 S15 6,18 4 S24 2,27 4 S33 6,36 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="font-semibold italic text-accent tracking-wide transition-transform duration-300 hover:scale-105 text-center"
                  >
                    View {project.services} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
