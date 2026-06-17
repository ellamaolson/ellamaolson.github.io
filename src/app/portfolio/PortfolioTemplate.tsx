'use client';

import { useState, useCallback, useEffect } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<'desktop' | 'mobile'>('desktop');

  const openModal = useCallback((variant: 'desktop' | 'mobile') => {
    setModalVariant(variant);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeModal]);

  const LIVE_SITE_URL = project.preview.liveUrl;
  const LIVE_SITE_URL_MOBILE = project.preview.liveUrlMobile ?? project.preview.liveUrl;

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
                  width={1600}
                  height={950}
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
            <div className="mt-10 flex justify-center">
              <Button as="link" href={LIVE_SITE_URL} variant="outline">
                Visit {project.title} →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {project.testimonial && (
        <Section background="surfaceMuted" padding="sm">
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
          <div className="space-y-8 text-center pb-12">
            <div>
              <Header level={2} className="text-accent">
                {project.brand.heading}
              </Header>
              <p className="text-text-secondary pb-8">{project.brand.tagline}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 lg:gap-8 relative z-10  pb-8">
              {project.brand.colors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center gap-1.5 lg:gap-4">
                  <div
                    className="w-12 h-24 lg:w-24 lg:h-40 rounded-xl shadow-lg border border-border-subtle"
                    style={{ backgroundColor: `#${color.hex}` }}
                  />
                  <span className="text-[10px] lg:text-body text-text-secondary">{color.hex}</span>
                </div>
              ))}
            </div>

            <Paragraph className="text-text-primary/85 leading-relaxed mx-auto">
              {project.brand.details}
            </Paragraph>

            <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-body text-text-secondary pb-8">
              {project.brand.tags.map((tag, index) => (
                <span key={tag} className="inline-flex items-center gap-x-2">
                  <span>{tag}</span>
                  {index < project.brand.tags.length - 1 && <span aria-hidden="true">·</span>}
                </span>
              ))}
            </p>

            {(project.brand.businessCardFront || project.brand.businessCardBack) && (
              <div className="flex justify-center gap-4 lg:gap-8">
                {project.brand.businessCardFront && (
                  <Image
                    src={project.brand.businessCardFront}
                    alt={`${project.title} brand design business card front`}
                    width={600}
                    height={400}
                    className="w-[50%] h-auto rounded-lg shadow-lg object-contain"
                  />
                )}
                {project.brand.businessCardBack && (
                  <Image
                    src={project.brand.businessCardBack}
                    alt={`${project.title} brand design business card back`}
                    width={600}
                    height={400}
                    className="w-[50%] h-auto rounded-lg shadow-lg object-contain"
                  />
                )}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Interactive previews */}
      <Section background="surfaceMuted" padding="sm">
        <Container maxWidth="notebook">
          <div className="space-y-8 text-center pb-12">
            <Header level={2} className="text-text-secondary pb-4">
              Click to Preview
            </Header>
            <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-center lg:items-center">
              <button
                type="button"
                onClick={() => openModal('desktop')}
                className="group flex flex-col items-center gap-3 focus:outline-none transition-transform duration-200 hover:scale-105"
                aria-label="Open desktop preview"
              >
                <div className="relative w-full max-w-[420px]">
                  <div
                    className="absolute overflow-hidden z-0"
                    style={{
                      top: '3.8%',
                      left: '3.2%',
                      width: '93.6%',
                      height: '58.5%',
                    }}
                  >
                    <Image
                      src={project.preview.desktopImage}
                      alt="Desktop view"
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src="/portfolio/imac-outline.png"
                    alt="iMac mockup"
                    width={600}
                    height={500}
                    className="w-full h-auto relative z-10 pointer-events-none"
                  />
                </div>
                <span className="text-small font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                  Desktop
                </span>
              </button>

              <button
                type="button"
                onClick={() => openModal('mobile')}
                className="group flex flex-col items-center gap-3 focus:outline-none transition-transform duration-200 hover:scale-105"
                aria-label="Open mobile preview"
              >
                <div className="relative w-full max-w-[120px]">
                  <div
                    className="absolute overflow-hidden z-0 rounded-[12%]"
                    style={{
                      top: '2%',
                      left: '5.5%',
                      width: '89%',
                      height: '96%',
                    }}
                  >
                    <Image
                      src={project.preview.mobileImage}
                      alt="Mobile view"
                      width={240}
                      height={520}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src="/portfolio/mobile-outline.png"
                    alt="iPhone mockup"
                    width={240}
                    height={500}
                    className="w-full h-auto relative z-10 pointer-events-none"
                  />
                </div>
                <span className="text-small font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                  Mobile
                </span>
              </button>
            </div>

            <div className="pt-8 flex justify-center">
              <Button as="link" href={LIVE_SITE_URL} variant="outline">
                Visit {project.title} →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Preview modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/80 backdrop-blur-sm overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Live site preview"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            className={`relative bg-surface shadow-2xl overflow-hidden ${
              modalVariant === 'desktop'
                ? 'w-[90vw] max-w-[90vw] h-[90vh] max-h-[90vh] min-w-[1024px] rounded-2xl'
                : 'w-[390px] h-[844px] max-h-[calc(100vh-2rem)] rounded-[2.5rem]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-surface/90 text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close preview"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              key={modalVariant}
              src={modalVariant === 'desktop' ? LIVE_SITE_URL : LIVE_SITE_URL_MOBILE}
              title={modalVariant === 'desktop' ? 'Live site preview' : 'Mobile live site preview'}
              loading="lazy"
              className="h-full w-full border-0 block"
            />
          </div>
        </div>
      )}
    </>
  );
}

