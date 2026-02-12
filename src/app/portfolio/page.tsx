'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import portfolioData from './portfolio.json';
import { Button } from '../components/ui/Button';

const LIVE_SITE_URL = 'https://elanaolson.wixsite.com/hayoga/en?rc=test-site';
const LIVE_SITE_URL_MOBILE =
  'https://elanaolson.wixsite.com/hayoga/en?rc=test-site&showMobileView=true';

export default function PortfolioPage() {
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

  return (
    <>
      {/* Hero + MacBook preview — dark background is exactly 50vh, MacBook overlaps into light section */}
      <Section background="surface" padding="none" className="overflow-visible">
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          {/* Dark background — 60vh */}
          <div
            className="absolute inset-x-0 top-0 h-[40vh] lg:h-[60vh] bg-brand"
            aria-hidden="true"
          />

          {/* Content container */}
          <div className="relative z-10">
            {/* Title positioned closer to MacBook */}
            <div className="h-[20vh] flex items-end justify-center pb-4">
              <Header
                level={1}
                className="text-text-onDark text-center text-display-sm lg:text-display"
              >
                {portfolioData.title}
              </Header>
            </div>

            {/* MacBook Pro mockup — straddles the 50vh line */}
            <Container maxWidth="notebook" className="pt-8 lg:pt-12">
              <div>
                {/* MacBook Pro mockup with embedded screenshot */}
                <Image
                  src="/portfolio/hayoga-macbook.png"
                  alt="Hayoga website preview on MacBook Pro"
                  width={1600}
                  height={950}
                  className="w-full h-auto"
                />

                {/* Project description */}
                <div className="mt-8 text-center">
                  <Paragraph className="text-text-primary/85 leading-relaxed">
                    Custom website and brand design for Hayoga Yoga School in the Netherlands,
                    offering in person and online classes. The finished site includes bilingual
                    copy, custom images, and a natural feeling design that guides visitors toward
                    booking a class.
                  </Paragraph>
                </div>

                {/* Project details: Company, Industry, Services */}
                <div
                  className="mt-6 mx-5 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-24
                text-small text-center"
                >
                  <div>
                    <Header level={5} className="text-accent">
                      Company
                    </Header>
                    <p>Hayoga Yoga Studio</p>
                  </div>
                  <span className="hidden lg:block">•</span>
                  <div>
                    <Header level={5} className="text-accent">
                      Industry
                    </Header>
                    <p>Health & Wellness</p>
                  </div>
                  <span className="hidden lg:block">•</span>
                  <div>
                    <Header level={5} className="text-accent">
                      Services Provided
                    </Header>
                    <p>Web Design & Development</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* Portfolio images — 1 wide on top, 2 side-by-side below */}
      <Section background="surface" padding="sm">
        <Container maxWidth="notebook">
          <div className="space-y-10 md:space-y-14">
            {/* Wide image on top */}
            <div className="bg-surface-raised rounded-xl p-4 lg:p-8 shadow flex items-center justify-center">
              <Image
                src="/portfolio/hayoga-about.png"
                alt="Hayoga website about"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              <div className="bg-surface-raised rounded-xl p-4 shadow flex items-center justify-center">
                <Image
                  src="/portfolio/hayoga-offerings.png"
                  alt="Hayoga website offerings section"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-surface-raised rounded-xl p-4 shadow flex items-center justify-center">
                <Image
                  src="/portfolio/hayoga-programs.png"
                  alt="Hayoga website specials"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Button as="link" href={LIVE_SITE_URL} variant="outline">
                Visit Hayoga →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Client testimonial */}
      <Section background="surfaceMuted" padding="sm">
        <Container maxWidth="notebook">
          <div className="max-w-reading mx-auto text-center">
            <span className="text-display text-accent/30 leading-none block">&ldquo;</span>
            <blockquote className="text-h3 font-heading text-text-primary leading-relaxed -mt-6">
              Elana was wonderful to work with. She took the time to understand my vision and
              translated it into a beautiful, professional website that truly represents what my
              yoga practice is about.
            </blockquote>
            <div className="mt-6">
              <p className="text-body font-medium text-text-primary">Hayoga Yoga School</p>
              <p className="text-small text-text-secondary">Client</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand design — font, color palette, theme */}
      <Section background="surface" padding="sm">
        <Container maxWidth="notebook">
          <div className="space-y-8 text-center">
            <div>
              <Header level={2} className="text-accent">
                BRAND DESIGN
              </Header>
              <p className="text-text-secondary pb-8">
                Warm / Feminine / Natural / Professional / Holistic
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 lg:gap-8">
              {[
                { hex: 'FAF7F5' },
                { hex: 'F3EDE7' },
                { hex: 'D3A99F' },
                { hex: 'B07A6A' },
                { hex: '8FAEA3' },
                { hex: '6B7A4E' },
              ].map((color) => (
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
              Linotype Didot sets an elegant, expressive tone for headings, paired with Junge for
              warm, highly readable body text. Imagery inspired by flowing movement, meditation, and
              nature reflects the teacher&apos;s gentle mind body approach in her practice.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 text-center md:text-left max-w-reading mx-auto">
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Brand strategy &amp; positioning</li>
                <li>Visual identity &amp; color palette</li>
                <li>Custom Imagery</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Responsive web design</li>
                <li>Bilingual content (EN/NL)</li>
                <li>SEO optimization</li>
              </ul>
            </div>

            {/* Interactive previews — click to open modal */}
            <Header level={3} className="text-text-secondary pt-12">
              Click to Preview
            </Header>
            <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-center lg:items-center">
              {/* iMac preview button */}
              <button
                type="button"
                onClick={() => openModal('desktop')}
                className="group flex flex-col items-center gap-3 focus:outline-none transition-transform duration-200 hover:scale-105"
                aria-label="Open desktop preview"
              >
                <div className="relative w-full max-w-[420px]">
                  {/* Screenshot inside iMac screen */}
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
                      src={portfolioData.desktopPreviewImage}
                      alt="Desktop view"
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* iMac frame */}
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

              {/* iPhone preview button */}
              <button
                type="button"
                onClick={() => openModal('mobile')}
                className="group flex flex-col items-center gap-3 focus:outline-none transition-transform duration-200 hover:scale-105"
                aria-label="Open mobile preview"
              >
                <div className="relative w-full max-w-[120px]">
                  {/* Screenshot inside iPhone screen */}
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
                      src={portfolioData.mobilePreviewImage}
                      alt="Mobile view"
                      width={240}
                      height={520}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* iPhone frame */}
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
          </div>
        </Container>
      </Section>

      {/* Popup: iframe in desktop ratio (16:9) or mobile ratio (9:19) */}
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
            {/* Floating close button */}
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
