'use client';
import { useState, useEffect } from 'react';

import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
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
      <Section background="surfaceMuted" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-4 max-w-reading">
            <Heading level={1}>Travel</Heading>
            <p className="text-body text-text-secondary">
              I’ve been fortunate to explore some incredible places around the world. Here’s a map of where
              I’ve been, plus a few standout (sometimes lesser-known) recommendations.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised h-64 sm:h-80 md:h-96">
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

      <Section background="surfaceRaised" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-10">
            {travelData?.destinations?.map((destination, index) => (
              <article
                key={`${destination.city}-${destination.country}-${index}`}
                className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)]"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised aspect-[4/5] md:aspect-auto md:h-72">
                  <LoadableImage
                    alt={destination?.altText || `${destination?.city ?? ''} photo`}
                    src={destination?.image || ''}
                    className="w-full h-full"
                    priority={index < 2}
                  />
                </div>

                <div className="space-y-4">
                  <header className="space-y-2">
                    <h2 className="font-editorial text-h2 text-text-primary">
                      {destination?.city}, {destination?.country}{' '}
                      <span aria-hidden="true">{destination?.emoji || ''}</span>
                    </h2>
                    <p className="text-body-small text-text-secondary">{destination?.location}</p>
                  </header>

                  <p className="text-body text-text-primary/85 max-w-reading">{destination?.description}</p>

                  {destination?.highlights?.length ? (
                    <div className="space-y-2 max-w-reading">
                      <p className="text-body-small font-medium tracking-[0.14em] uppercase text-text-secondary">
                        Highlights
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-body text-text-primary/85">
                        {destination.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {destination?.recommendations?.length ? (
                    <div className="space-y-2 max-w-reading">
                      <p className="text-body-small font-medium tracking-[0.14em] uppercase text-text-secondary">
                        Recommendations
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-body text-text-primary/85">
                        {destination.recommendations.map((rec, recIndex) => (
                          <li key={recIndex}>{rec}</li>
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
