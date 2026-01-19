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
            backgroundImage: "url('/oak%20growing%20right.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Gentle dark overlay for legibility (moody, not high-contrast) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/85 via-brand/55 to-brand/25"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative min-h-screen">
          {/* Use padding for consistent alignment with the header container */}
          <div className="pt-[32vh] space-y-6 max-w-[80ch]">
            <p className="text-body-small tracking-[0.18em] uppercase text-text-onDark/80">
              Professional consultancy
            </p>
            <h1 className="font-editorial text-text-onDark text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Grounded websites for growing businesses
            </h1>
            <p className="text-body-large text-text-onDark/90 max-w-reading">
            I help small businesses shape welcoming websites, and support product teams with clear, maintainable frontend engineering.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button as="link" href="/services" variant="secondary">
                Website services
              </Button>
              <Button as="link" href="/contracting" variant="outlineLight">
                Contract engineering
              </Button>
              <Button
                as="link"
                href="/contact"
                variant="outlineLight"
                className="bg-transparent"
              >
                Contact →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Who You Help */}
      <Section background="surfaceMuted" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-10">
            <div className="max-w-reading space-y-3">
              <Heading level={2}>Who I help</Heading>
              <p className="text-body text-text-secondary">
                Different kinds of clients, same approach: calm structure, clear communication, and work
                you can trust.
              </p>
            </div>

            <Grid variant="split" className="items-start">
              <article className="space-y-4 border-l border-brand-olive/35 pl-6">
                <h3 className="font-editorial text-h3 text-text-primary">
                  Small businesses & independent professionals
                </h3>
                <p className="text-body text-text-primary/85 max-w-reading">
                  If your website feels outdated, unclear, or hard to manage, I’ll help you shape a warm,
                  welcoming site that explains what you do and makes it easy for people to reach out.
                </p>
                <div className="pt-1">
                  <Button as="link" href="/services" variant="outline">
                    Explore website services
                  </Button>
                </div>
              </article>

              <article className="space-y-4 border-l border-brand-moss/35 pl-6 md:pt-6">
                <h3 className="font-editorial text-h3 text-text-primary">Product teams & companies</h3>
                <p className="text-body text-text-primary/85 max-w-reading">
                  If you need extra frontend support, I can help you ship or refine React + TypeScript UI
                  with a focus on clarity, maintainability, and smooth handoff to your team.
                </p>
                <div className="pt-1">
                  <Button as="link" href="/contracting" variant="outline">
                    Explore contract engineering
                  </Button>
                </div>
              </article>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Section 3: What Makes Rooted Studio Different */}
      <Section background="surfaceRaised" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="asymmetric" className="items-start">
            <div className="space-y-10">
              <div className="space-y-3 max-w-reading">
                <Heading level={2}>What makes Rooted Studio different</Heading>
                <p className="text-body text-text-secondary">
                Thoughtful websites,built by a  engineer who genuinely enjoys working with people.
                </p>
              </div>

              <dl className="space-y-8 max-w-reading">
                <div className="border-l border-border-strong pl-6">
                  <dt className="font-editorial text-h3 text-text-primary">Engineering You Can Trust</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                  Professionally trained, with 7+ years of experience building and maintaining production-level software for millions of users.
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-editorial text-h3 text-text-primary">Human-Centered Design</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                  I care just as much about how it feels to work together as I do about the final result.
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-editorial text-h3 text-text-primary">Clarity Over Complexity</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                  I translate technical decisions into language that’s easy to understand and useful.
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-editorial text-h3 text-text-primary">A Steady Partner</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                  From small businesses to large teams, I bring a calm, thoughtful, and collaborative approach.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Image space (quiet visual balance) */}
            <div className="space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
                <LoadableImage
                  alt="Autumn oak photograph"
                  src="/autumn%20oak.jpg"
                  className="w-full h-full"
                />
              </div>
              <p className="text-body-small text-text-secondary max-w-reading">
                A quiet visual moment to balance the copy.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Credibility / approach: left-aligned reading, balanced with imagery */}
      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="asymmetric" reverseOnDesktop>
            <div className="space-y-5">
              <Heading level={2} className="text-balance">
                Warm clarity, not cleverness.
              </Heading>
              <div className="space-y-4 max-w-reading">
                <p className="text-body-large text-text-primary/90 leading-relaxed">
                  My work tends to be steady and practical: calm typography, clear structure, and
                  interfaces that feel easy to trust.
                </p>
                <p className="text-body text-text-secondary leading-relaxed">
                  I’m thoughtful about how things read, where attention goes, and what a visitor
                  needs to feel comfortable saying “yes.”
                </p>
              </div>

              <div className="pt-2">
                <div className="border-l border-border-strong pl-4 space-y-2 max-w-reading">
                  <p className="text-body text-text-primary/85">
                    <strong>For small businesses:</strong> welcoming pages, simple maintenance, and
                    practical SEO.
                  </p>
                  <p className="text-body text-text-primary/85">
                    <strong>For teams:</strong> React + TypeScript work that’s maintainable and kind
                    to the next engineer.
                  </p>
                </div>
              </div>
            </div>

            {/* Collage-style imagery (reference-inspired density + warmth) */}
            <div className="grid grid-cols-6 gap-3 sm:gap-4">
              <div className="col-span-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="Me holding a baby alpaca in Peru"
                    src={babyAlpacaImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="My brother Eli and I at Yosemite National Park"
                    src={elanaEliImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="Me in the old town of Lisbon, Portugal"
                    src={lisbonImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-2 hidden sm:block">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
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
      <Section background="surfaceMuted" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="split" className="items-start">
            <div className="space-y-4 max-w-reading">
              <Heading level={2}>How I can help</Heading>
              <p className="text-body text-text-secondary">
                Two paths, same approach: calm structure, readable layouts, and honest communication.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l border-brand-olive/35 pl-5">
                <p className="text-body-small tracking-wide text-text-secondary">Small business</p>
                <h3 className="text-heading-3 text-text-primary mt-1">Website services</h3>
                <ul className="mt-3 space-y-2 text-body text-text-primary/85">
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

              <div className="border-l border-brand-olive/35 pl-5">
                <p className="text-body-small tracking-wide text-text-secondary">Teams</p>
                <h3 className="text-heading-3 text-text-primary mt-1">Contract engineering</h3>
                <ul className="mt-3 space-y-2 text-body text-text-primary/85">
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
      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-8 max-w-reading">
            <Heading level={2} className="text-text-primary">
              What am I focusing on right now?
            </Heading>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-text-primary">
                  Building a supportive community for women
                </h3>
                <p className="text-body text-text-primary/85 leading-relaxed">
                  I co-lead a local women&apos;s group in San Diego with my good friend Ali. For the
                  past two years we have led workshops on topics ranging from financial literacy to
                  feminism to modern women&apos;s health science. We facilitate a space to learn,
                  support, and grow together as a community - reflecting on diverse perspectives and
                  leading with curiosity first.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-text-primary">
                  Doing lots of art projects
                </h3>
                <p className="text-body text-text-primary/85 leading-relaxed">
                  Love to watercolor and tend to travel with a small kit to capture scenes and embrace
                  the present moment a bit more colorfully. At home I&apos;m working on a temperature
                  blanket (the size of my bed) mapping daily high temperatures to yarn colors.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-text-primary">
                  Learning about health, relational dynamics, morality, and the occasional fantasy series
                </h3>
                <p className="text-body text-text-primary/85 leading-relaxed mb-4">
                  Here&apos;s some recs:
                </p>
                <ul className="space-y-3 list-disc list-inside text-body text-text-primary/85 ml-4">
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
      <Section background="surfaceMuted" padding="md">
        <Container maxWidth="wide">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <p className="text-body text-text-secondary max-w-reading">
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
