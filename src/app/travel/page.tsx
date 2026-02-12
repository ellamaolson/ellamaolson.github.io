'use client';
import { useState, useEffect } from 'react';

import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { LoadableImage } from '../components/LoadableImage';
import travelData from './travel.json';

export default function Travel() {
  const [mapLoading, setMapLoading] = useState(true);

  // Preload destination images when component mounts
  useEffect(() => {
    travelData?.destinations?.forEach((destination) => {
      if (destination.image) {
        const img = new Image();
        img.src = destination.image;
      }
    });
  }, []);

  // Fallback timeout to hide map loading state after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setMapLoading(false);
  };

  return (
    <>
      <Section background="surfaceMuted" padding="none" className="py-8 sm:py-section">
        <Container maxWidth="wide">
          <div className="space-y-4 max-w-reading mx-auto text-center">
            <Header level={1}>Travel</Header>
            <Paragraph className="text-text-secondary">
              I’ve been fortunate to explore some incredible places around the world. Here’s a map
              of where I’ve been, plus a few standout favorites.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="none" className="py-8 sm:py-section">
        <Container maxWidth="wide">
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised h-64 sm:h-80 md:h-96 w-[80%] mx-auto">
            {mapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-brand/55 z-10">
                <div
                  className="h-10 w-10 rounded-full border-2 border-text-onDark/30 border-t-text-onDark animate-spin"
                  aria-label="Loading map"
                />
              </div>
            )}
            <iframe
              title="Travel map"
              src="https://www.google.com/maps/d/embed?mid=1O4lQBSS7ygiYY_ScyoSq9uivBS4iPaA&ehbc=2E312F"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleIframeLoad}
            />
          </div>
        </Container>
      </Section>

      <Section background="surfaceRaised" padding="none" className="py-8 sm:py-section">
        <Container maxWidth="wide">
          <div className="space-y-10 max-w-4xl mx-auto">
            {travelData?.destinations?.map((destination, index) => (
              <article
                key={`${destination.city}-${destination.country}-${index}`}
                className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)]"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised aspect-[4/5] md:aspect-auto md:h-72 md:mx-0 mx-auto max-w-[16rem]">
                  <LoadableImage
                    alt={destination?.altText || `${destination?.city ?? ''} photo`}
                    src={destination?.image || ''}
                    className="w-full h-full"
                    priority={index < 2}
                  />
                </div>

                <div className="space-y-4 text-center md:text-left">
                  <header className="space-y-2">
                    <Header level={2}>
                      {destination?.city}, {destination?.country}{' '}
                      <span aria-hidden="true">{destination?.emoji || ''}</span>
                    </Header>
                    <Paragraph variant="p3" className="text-text-secondary">
                      {destination?.location}
                    </Paragraph>
                  </header>

                  <Paragraph className="text-text-primary/85 max-w-reading md:max-w-none mx-auto md:mx-0">
                    {destination?.description}
                  </Paragraph>

                  {destination?.highlights?.length ? (
                    <div className="space-y-2 max-w-reading mx-auto md:mx-0 md:text-left">
                      <Paragraph
                        variant="p3"
                        className="font-medium tracking-[0.14em] uppercase text-text-secondary"
                      >
                        Highlights
                      </Paragraph>
                      <ul className="list-disc pl-5 space-y-1 text-body text-text-primary/85 text-left">
                        {destination.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
