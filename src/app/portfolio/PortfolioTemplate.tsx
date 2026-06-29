import Image from 'next/image';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import type { PortfolioProject } from './types';

type PortfolioTemplateProps = {
  project: PortfolioProject;
};

export function PortfolioTemplate({ project }: PortfolioTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Section background="surface" padding="none" className="overflow-visible">
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <div
            className="absolute inset-x-0 top-0 h-[40vh] lg:h-[60vh] bg-brand"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="h-[20vh] flex items-end justify-center pb-4">
              <Header
                level={1}
                className="text-text-onDark text-center text-display-sm lg:text-display"
              >
                {project.title}
              </Header>
            </div>

            <Container maxWidth="notebook" className="pt-8 lg:pt-12">
              <div>
                <Image
                  src={project.hero.macbookImage}
                  alt={`${project.title} website preview`}
                  width={1500}
                  height={916}
                  className="w-full h-auto"
                />

                <div className="mt-8 text-center">
                  <Paragraph className="text-text-primary/85 leading-relaxed">
                    {project.hero.description}
                  </Paragraph>
                </div>

                <div
                  className="mt-6 mx-5 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-24
                text-small text-center"
                >
                  <div>
                    <Header level={5} className="text-accent">
                      Company
                    </Header>
                    <p>{project.company}</p>
                  </div>
                  <span className="hidden lg:block">•</span>
                  <div>
                    <Header level={5} className="text-accent">
                      Industry
                    </Header>
                    <p>{project.industry}</p>
                  </div>
                  <span className="hidden lg:block">•</span>
                  <div>
                    <Header level={5} className="text-accent">
                      Services Provided
                    </Header>
                    <p>{project.services}</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section background="surface" padding="sm">
        <Container maxWidth="notebook">
          <div className="space-y-10 md:space-y-14 pb-12">
            <div className="bg-surface-raised rounded-xl p-4 lg:p-8 shadow flex items-center justify-center">
              <Image
                src={project.gallery.mainImage}
                alt={`${project.title} main gallery image`}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {project.gallery.secondaryImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                {project.gallery.secondaryImages.map((src, index) => (
                  <div
                    key={src}
                    className="bg-surface-raised rounded-xl p-4 shadow flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} gallery image ${index + 1}`}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {project.testimonial && (
        <Section background="antique" padding="sm">
          <Container maxWidth="notebook">
            <div className="max-w-reading mx-auto text-center">
              <span className="text-display text-accent/30 leading-none block">&ldquo;</span>
              <blockquote className="text-h3 font-heading text-text-primary leading-relaxed -mt-6">
                {project.testimonial.quote}
              </blockquote>
              <div className="mt-6">
                <p className="text-body font-medium text-text-primary">
                  {project.testimonial.attribution}
                </p>
                <p className="text-small text-text-secondary">{project.testimonial.role}</p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Brand design */}
      <Section background="surface" padding="sm">
        <Container maxWidth="notebook">
          <div className="space-y-8 text-center pb-8">
            <div>
              <Header level={2} className="text-accent">
                {project.brand.heading}
              </Header>
              <p className="italic text-lg text-text-primary/80 tracking-wide pb-8">
                {project.brand.tagline}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 lg:gap-8 relative z-10  pb-8">
              {project.brand.colors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center gap-1.5 lg:gap-4">
                  <div
                    className="w-12 h-24 lg:w-24 lg:h-40 rounded-xl shadow-lg border border-border-subtle"
                    style={{ backgroundColor: `#${color.hex}` }}
                  />
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] lg:text-small font-medium text-text-primary">
                      {color.name}
                    </span>
                    <span className="text-[9px] lg:text-[11px] text-text-secondary">
                      #{color.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-body text-text-accent pb-8">
              {project.brand.tags.map((tag, index) => (
                <span key={tag} className="inline-flex items-center gap-x-2">
                  <span>{tag}</span>
                  {index < project.brand.tags.length - 1 && <span aria-hidden="true">·</span>}
                </span>
              ))}
            </p>

            {project.gallery.tertiaryImages && project.gallery.tertiaryImages.length > 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  {project.gallery.tertiaryImages.map((src, index) => (
                    <div
                      key={src}
                      className="bg-surface-raised rounded-xl p-4 shadow flex items-center justify-center"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} brand image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  ))}
                </div>
                {project.brand.imageDescription && (
                  <p className="text-medium text-text-secondary text-center italic">
                    {project.brand.imageDescription}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Button as="link" href={project.url} variant="secondary">
              Visit {project.title} →
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
