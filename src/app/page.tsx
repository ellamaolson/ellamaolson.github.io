'use client';

import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { Heading } from './components/ui/Heading';
import { Button } from './components/ui/Button';
import { Grid } from './components/ui/Grid';
import { SocialLinks } from './components/ui/SocialLinks';
import babyAlpacaImage from '../../public/holding-baby-alpaca.jpeg';
import sequoiaImage from '../../public/sequoia.jpeg';
import lisbonImage from '../../public/lisbon.jpeg';
import elanaEliImage from '../../public/elana-eli.jpeg';
import { LoadableImage } from './components/LoadableImage';

export default function Home() {
  return (
    <>
      {/* Hero: full-viewport background image with large overlay type */}
      <Section background="transparent" padding="none" className="relative min-h-screen overflow-hidden">
        {/* Put your leaf image at `public/hero-leaves.jpg` (fallback uses an existing image). */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // First: primary hero image. Second: guaranteed fallback from /public.
            backgroundImage: "url('/oak%20growing%20right.jpg'), url('/sequoia.jpeg')",
          }}
          aria-hidden="true"
        />
        {/* Gentle dark overlay for legibility (moody, not high-contrast) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-raisin-black/80 via-raisin-black/45 to-raisin-black/20"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative min-h-screen">
          <div className="absolute left-0 top-[32vh] space-y-6 max-w-[80ch]">
            <p className="text-body-small tracking-[0.18em] uppercase text-salt/80">
              Professional consultancy
            </p>
            <h1 className="font-editorial text-salt text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Grounded websites for growing businesses
            </h1>
            <p className="text-body-large text-salt/90 max-w-reading">
              I build welcoming websites for small businesses—and I also contract as a frontend
              engineer for teams who want clarity, maintainability, and thoughtful execution.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button as="link" href="/services" variant="secondary">
                Website services
              </Button>
              <Button as="link" href="/contracting" variant="outlineLight">
                Contract engineering
              </Button>
              <Button as="link" href="/contact" variant="ghost" className="text-salt hover:bg-salt/10">
                Contact →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Credibility / approach: left-aligned reading, balanced with imagery */}
      <Section background="warm-sand" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="asymmetric" reverseOnDesktop>
            <div className="space-y-5">
              <Heading level={2} className="text-balance">
                Warm clarity, not cleverness.
              </Heading>
              <div className="space-y-4 max-w-reading">
                <p className="text-body-large text-noir/90 leading-relaxed">
                  My work tends to be steady and practical: calm typography, clear structure, and
                  interfaces that feel easy to trust.
                </p>
                <p className="text-body text-noir/80 leading-relaxed">
                  I’m thoughtful about how things read, where attention goes, and what a visitor
                  needs to feel comfortable saying “yes.”
                </p>
              </div>

              <div className="pt-2">
                <div className="border-l border-antique/60 pl-4 space-y-2 max-w-reading">
                  <p className="text-body text-noir/85">
                    <strong>For small businesses:</strong> welcoming pages, simple maintenance, and
                    practical SEO.
                  </p>
                  <p className="text-body text-noir/85">
                    <strong>For teams:</strong> React + TypeScript work that’s maintainable and kind
                    to the next engineer.
                  </p>
                </div>
              </div>
            </div>

            {/* Collage-style imagery (reference-inspired density + warmth) */}
            <div className="grid grid-cols-6 gap-3 sm:gap-4">
              <div className="col-span-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-antique/50 bg-antique/35">
                  <LoadableImage
                    alt="Me holding a baby alpaca in Peru"
                    src={babyAlpacaImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-antique/50 bg-antique/35">
                  <LoadableImage
                    alt="My brother Eli and I at Yosemite National Park"
                    src={elanaEliImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-antique/50 bg-antique/35">
                  <LoadableImage
                    alt="Me in the old town of Lisbon, Portugal"
                    src={lisbonImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-2 hidden sm:block">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-antique/50 bg-antique/35">
                  <LoadableImage
                    alt="Me standing under a Sequoia tree"
                    src={sequoiaImage}
                    className="w-full h-full"
                    objectPosition="top center"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Showcase: how I can help, no card-grid; editorial lists */}
      <Section background="salt" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="split" className="items-start">
            <div className="space-y-4 max-w-reading">
              <Heading level={2}>How I can help</Heading>
              <p className="text-body text-noir/80">
                Two paths, same approach: calm structure, readable layouts, and honest communication.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l border-olive-leaf/30 pl-5">
                <p className="text-body-small tracking-wide text-noir/60">Small business</p>
                <h3 className="text-heading-3 text-noir mt-1">Website services</h3>
                <ul className="mt-3 space-y-2 text-body text-noir/85">
                  <li>Marketing pages that read clearly and feel welcoming</li>
                  <li>Light SEO structure: headings, semantics, internal linking</li>
                  <li>Performance basics + long-term maintainability</li>
                </ul>
                <div className="mt-4">
                  <Button as="link" href="/services" variant="ghost">
                    Explore services →
                  </Button>
                </div>
              </div>

              <div className="border-l border-olive-leaf/30 pl-5">
                <p className="text-body-small tracking-wide text-noir/60">Teams</p>
                <h3 className="text-heading-3 text-noir mt-1">Contract engineering</h3>
                <ul className="mt-3 space-y-2 text-body text-noir/85">
                  <li>React + TypeScript UI shipping and refactors</li>
                  <li>Pragmatic design systems + reusable primitives</li>
                  <li>Documentation, handoff, and long-term clarity</li>
                </ul>
                <div className="mt-4">
                  <Button as="link" href="/contracting" variant="ghost">
                    Explore contracting →
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Current Focus Section */}
      <Section background="warm-sand" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-8 max-w-reading">
            <Heading level={2} className="text-noir">
              What am I focusing on right now?
            </Heading>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Building a supportive community for women
                </h3>
                <p className="text-body text-noir/90 leading-relaxed">
                  I co-lead a local women&apos;s group in San Diego with my good friend Ali. For the
                  past two years we have led workshops on topics ranging from financial literacy to
                  feminism to modern women&apos;s health science. We facilitate a space to learn,
                  support, and grow together as a community - reflecting on diverse perspectives and
                  leading with curiosity first.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Doing lots of art projects
                </h3>
                <p className="text-body text-noir/90 leading-relaxed">
                  Love to watercolor and tend to travel with a small kit to capture scenes and embrace
                  the present moment a bit more colorfully. At home I&apos;m working on a temperature
                  blanket (the size of my bed) mapping daily high temperatures to yarn colors.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Learning about health, relational dynamics, morality, and the occasional fantasy series
                </h3>
                <p className="text-body text-noir/90 leading-relaxed mb-4">
                  Here&apos;s some recs:
                </p>
                <ul className="space-y-3 list-disc list-inside text-body text-noir/90 ml-4">
                  <li>
                    <em>Huberman Labs</em> - a health and science podcast led by Andrew Huberman to bring
                    scientific findings and tools to the general public
                  </li>
                  <li>
                    <em>Us: Getting Past You and Me to Build a More Loving Relationship</em> - Terrance Real
                    approaches relational dynamics with an &quot;us&quot; way of thinking, instead of
                    handling life&apos;s challenges from a &quot;you&quot; and &quot;me&quot; perspective
                  </li>
                  <li>
                    <em>Lying</em> - In such a little book, Sam Harris discusses the morality of lying and
                    breaks down various applications and ethical dilemmas surrounding it
                  </li>
                  <li>
                    <em>Throne of Glass series</em> - Sarah J. Maas creates this vivid and dynamic world
                    with magic, strong heroines, and complex series-long plot arcs that reveal kingdom
                    conspiracies and demand a balance of fighting for survival and sacrificing for the
                    greater good.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Links Section */}
      <Section background="antique" padding="md">
        <Container maxWidth="wide">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <p className="text-body text-noir/75 max-w-reading">
              If you’d like to collaborate, start with a short note—what you’re building, what’s
              stuck, and what “good” looks like.
            </p>
            <SocialLinks />
          </div>
        </Container>
      </Section>
    </>
  );
}
