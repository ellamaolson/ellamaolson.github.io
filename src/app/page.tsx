'use client';

import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { Header } from './components/ui/Header';
import { Paragraph } from './components/ui/Paragraph';
import { Button } from './components/ui/Button';
import { Grid } from './components/ui/Grid';
import { LoadableImage } from './components/LoadableImage';

import elanaHeadshotImage from '../../public/elana-headshot.png';

export default function Home() {
  return (
    <>
      {/* Hero Section: full-viewport background image with large overlay type */}
      <Section
        background="transparent"
        padding="none"
        className="relative min-h-screen overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/oak%20growing%20right.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/85 via-brand/55 to-brand/25"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative min-h-screen">
          <div className="pt-[16vh] md:pt-[26vh] lg:pt-[28vh] space-y-6 max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw]">
            <Paragraph variant="p3" className="tracking-[0.18em] uppercase text-text-onDark">
              Professional consultancy
            </Paragraph>
            <Header
              level={1}
              className="text-text-onDark text-balance text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
            >
              Smart, Scalable Web Development
            </Header>
            <Paragraph variant="p1" className="text-text-onDark max-w-reading">
              I help small businesses create welcoming websites, and support product teams with
              clear, maintainable frontend engineering.
            </Paragraph>

            <div className="flex flex-col items-start gap-6 sm:gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                as="link"
                href="/contact"
                variant="primary"
                className="w-64 sm:w-auto text-sm sm:text-base whitespace-nowrap"
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section: About Teaser */}
      <Section background="surfaceMuted" padding="lg" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_50%,rgba(194,162,58,0.12),transparent_60%)]"
          aria-hidden="true"
        />
        <Container maxWidth="wide" className="relative">
          <div className="flex flex-col md:flex-row items-center gap-16 sm:gap-12 md:gap-24 lg:gap-32">
            {/* Photo with warm decorative elements */}
            <div className="relative shrink-0">
              {/* Halo glow */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-full blur-2xl opacity-80 bg-[radial-gradient(circle,rgba(194,162,58,0.35)_0%,rgba(194,162,58,0.15)_40%,transparent_70%)]"
                aria-hidden="true"
              />
              {/* Decorative ring */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-full border border-accent/30"
                aria-hidden="true"
              />
              <div className="relative w-72 sm:w-72 md:w-80 lg:w-96 aspect-square overflow-hidden rounded-full border-2 border-accent/30 shadow-xl shadow-accent/10">
                <LoadableImage
                  alt="Elana Olson"
                  src={elanaHeadshotImage}
                  className="w-full h-full rounded-full"
                  priority={true}
                />
              </div>
            </div>

            {/* About content in warm card */}
            <div className="flex-1 rounded-3xl bg-gradient-to-br from-brand/95 to-brand-moss/90 text-text-onDark p-7 sm:p-9 shadow-xl">
              <Header level={2} className="text-text-onDark">
                Hi, I&apos;m Elana
              </Header>

              <div className="mt-5 space-y-4">
                <Paragraph className="text-text-onDark/95 text-lead leading-relaxed">
                  Your website is often the first conversation you have with your clients. I help
                  make sure it&apos;s a good one.
                </Paragraph>

                <Paragraph className="text-text-onDark/80 leading-relaxed">
                  I pair professional engineering with a genuine love of collaboration to turn a
                  shared vision into a website that feels thoughtful, works beautifully, and grows
                  alongside your business.
                </Paragraph>
              </div>

              <div className="mt-6">
                <a
                  href="/about"
                  className="group inline-flex items-baseline gap-2 text-body font-medium text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                >
                  Get to know me{' '}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Who I Work With */}
      <Section background="surfaceRaised" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-10">
            <div className="max-w-reading space-y-3">
              <Header level={2}>Who I work with</Header>
              <Paragraph className="text-text-secondary">
                Different needs, the same steady approach — see which offering is right for you.
              </Paragraph>
            </div>

            <Grid variant="split" className="items-start">
              <article className="group space-y-4 border-l border-brand-olive/35 pl-6 transition-colors duration-200 hover:border-brand-olive/60">
                <Header level={3}>Small Businesses & Independent Professionals</Header>
                <Paragraph className="text-text-primary/85 max-w-reading">
                  You want a website that feels welcoming, explains what you do clearly, and makes
                  it easy for the right people to reach out.
                </Paragraph>
                <div className="pt-1">
                  <Button as="link" href="/services" variant="outline">
                    Explore Website Services →
                  </Button>
                </div>
              </article>

              <article className="group space-y-4 border-l border-brand-moss/35 pl-6 transition-colors duration-200 hover:border-brand-moss/60">
                <Header level={3}>Product Teams & Companies</Header>
                <Paragraph className="text-text-primary/85 max-w-reading">
                  You want an experienced frontend engineer who can step in, ship clean UI, build
                  fast in React or Angular, and leave the codebase stronger than before.
                </Paragraph>
                <div className="pt-1">
                  <Button
                    as="link"
                    href="/contracting"
                    variant="outline"
                    className="w-64 sm:w-auto"
                  >
                    Explore Contract Engineering →
                  </Button>
                </div>
              </article>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Section 3: What Makes Elana Olson Different */}
      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="asymmetric" className="items-stretch">
            <div className="space-y-10">
              <div className="space-y-3 max-w-reading">
                <Header level={2}>What makes working with me different</Header>
                <Paragraph className="text-text-secondary">
                  Thoughtful websites, built by an engineer who loves working with people.
                </Paragraph>
              </div>

              <dl className="space-y-8 max-w-reading">
                <div className="border-l border-border-strong pl-6">
                  <dt className="font-heading text-h3 text-text-primary">
                    Engineering You Can Trust
                  </dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                    Professionally trained, with 7+ years of experience building and maintaining
                    production-level software for millions of users.
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-heading text-h3 text-text-primary">Human-Centered Design</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                    A process that values clear communication, mutual respect, and a positive
                    working relationship as much as the final outcome.{' '}
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-heading text-h3 text-text-primary">
                    Clarity Over Complexity
                  </dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                    Technical decisions are translated into straightforward, practical language that
                    supports real business goals.{' '}
                  </dd>
                </div>

                <div className="border-l border-border-strong pl-6">
                  <dt className="font-heading text-h3 text-text-primary">A Steady Partner</dt>
                  <dd className="mt-2 text-body text-text-primary/85">
                    Support for both small businesses and large teams, with an approach grounded in
                    attentive listening, adaptability, and clear communication.{' '}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="hidden md:block h-full">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
                <LoadableImage
                  alt="Autumn oak photograph"
                  src="/autumn%20oak.jpg"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Section 4: My Services (primary conversion + SEO anchor) */}
      <Section background="transparent" padding="lg" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/moon.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/70 via-text-primary/55 to-text-primary/65"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_60%_30%,rgba(194,162,58,0.18),transparent_55%)]"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative">
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="w-full max-w-reading">
              <div className="rounded-[2rem] border border-accent/45 bg-white/10 p-1 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[1.75rem] border border-border-onDark bg-surface-raised text-text-primary">
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <div className="space-y-3">
                      <Header level={2}>My services</Header>
                    </div>

                    <ul
                      className="mt-8 divide-y divide-border-subtle"
                      aria-label="Services overview"
                    >
                      <li className="py-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                          <div className="shrink-0 pt-1">
                            <span className="inline-flex items-center gap-3 text-2xl sm:text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span
                                className="h-3 w-3 sm:h-2 sm:w-2 rounded-full bg-accent/80"
                                aria-hidden="true"
                              />
                              01
                            </span>
                          </div>
                          <div className="space-y-3">
                            <Header level={3}>
                              Website Design &amp; Redesign (Small Businesses)
                            </Header>

                            <ul className="mt-2 space-y-2 list-disc list-inside text-text-secondary">
                              <li>Brand new website creation</li>
                              <li>Webpage redesign</li>
                              <li>SEO optimization</li>
                            </ul>

                            <a
                              href="/services"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Website Services{' '}
                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="py-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                          <div className="shrink-0 pt-1">
                            <span className="inline-flex items-center gap-3 text-2xl sm:text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span
                                className="h-3 w-3 sm:h-2 sm:w-2 rounded-full bg-accent/80"
                                aria-hidden="true"
                              />
                              02
                            </span>
                          </div>
                          <div className="space-y-3">
                            <Header level={3}>Ongoing Website Care &amp; Retainers</Header>
                            <ul className="mt-2 space-y-2 list-disc list-inside text-text-secondary">
                              <li>On-demand bug fixes</li>
                              <li>Monthly maintance</li>
                            </ul>
                            <a
                              href="/services#ongoing-care"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Website Support{' '}
                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="py-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                          <div className="shrink-0 pt-1">
                            <span className="inline-flex items-center gap-3 text-2xl sm:text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span
                                className="h-3 w-3 sm:h-2 sm:w-2 rounded-full bg-accent/80"
                                aria-hidden="true"
                              />
                              03
                            </span>
                          </div>
                          <div className="space-y-3">
                            <Header level={3}>Frontend Engineering (React / Angular)</Header>

                            <ul className="mt-2 space-y-2 list-disc list-inside text-text-secondary">
                              <li>Hourly or project-based contracts</li>
                              <li>Reliable engineering</li>
                            </ul>
                            <a
                              href="/contracting"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Contract Engineering{' '}
                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5: How it works (step menu + CTA) */}
      <Section background="surface" padding="md">
        <Container maxWidth="wide">
          <div className="max-w-wide space-y-8 mx-auto text-center">
            <div className="space-y-2">
              <Header level={2} className="mx-auto">
                How it works
              </Header>
              <Paragraph variant="p3" className="text-text-secondary/85">
                Let’s grow your vision into something real — together.
              </Paragraph>
            </div>

            <nav aria-label="How we work" className="py-4 sm:py-6">
              <ol className="flex flex-col gap-8 sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-center sm:gap-4 mx-auto">
                <li className="sm:flex-1 sm:max-w-[18.5rem] md:max-w-[21rem] lg:max-w-[24rem]">
                  <div className="relative h-full min-h-[14.5rem] sm:min-h-[18rem] rounded-[1.85rem] border-2 border-border-strong/25 bg-[rgb(161_90_43/0.30)] p-6 sm:p-6 shadow-[0_18px_44px_rgba(27,28,20,0.10)]">
                    <div className="relative z-10 space-y-3 text-left">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-strong/45 bg-white/70 text-brand-olive">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.52a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.56-1.06a2 2 0 0 1 2.11-.45c.82.24 1.66.42 2.52.54A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <Header level={3}>Free 30-minute call</Header>
                      <Paragraph className="text-text-secondary">
                        Low-pressure, just to see if it’s a fit.
                      </Paragraph>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[18.5rem] md:max-w-[21rem] lg:max-w-[24rem]">
                  <div className="relative h-full min-h-[14.5rem] sm:min-h-[18rem] rounded-[1.75rem] border-2 border-border-strong/25 bg-[rgb(213_125_71/0.32)] p-6 sm:p-6 sm:-translate-y-1 shadow-[0_18px_44px_rgba(27,28,20,0.10)]">
                    <div className="relative z-10 space-y-3 text-left">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-strong/45 bg-white/70 text-brand-olive">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {/* Yin-yang (balance / alignment) */}
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a5 5 0 0 1 0 10a5 5 0 0 0 0 10" />
                          <circle cx="12" cy="7" r="1" />
                          <circle cx="12" cy="17" r="1" />
                        </svg>
                      </div>
                      <Header level={3}>Align on details</Header>
                      <Paragraph className="text-text-secondary">
                        Scope, timeline, and what “good” means.
                      </Paragraph>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[18.5rem] md:max-w-[21rem] lg:max-w-[24rem]">
                  <div className="relative h-full min-h-[14.5rem] sm:min-h-[18rem] rounded-[1.9rem] border-2 border-border-strong/25 bg-[rgb(194_162_58/0.38)] p-6 sm:p-6 shadow-[0_18px_44px_rgba(27,28,20,0.10)]">
                    <div className="relative z-10 space-y-3 text-left">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-strong/45 bg-white/70 text-brand-olive">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 17l6-6 4 4 8-8" />
                          <path d="M14 7h7v7" />
                        </svg>
                      </div>
                      <Header level={3}>Build together</Header>
                      <Paragraph className="text-text-secondary">
                        Clear check-ins, steady progress.
                      </Paragraph>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[18.5rem] md:max-w-[21rem] lg:max-w-[24rem]">
                  <div className="relative h-full min-h-[14.5rem] sm:min-h-[18rem] rounded-[1.8rem] border-2 border-border-strong/25 bg-[rgb(46_74_13/0.28)] p-6 sm:p-6 sm:translate-y-1 shadow-[0_18px_44px_rgba(27,28,20,0.10)]">
                    <div className="relative z-10 space-y-3 text-left">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-strong/45 bg-white/70 text-brand-olive">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {/* Rocket (launch) */}
                          <path d="M12 2c3.2 2.1 5 5.7 5 9.7 0 6-5 10.3-5 10.3S7 17.7 7 11.7c0-4 1.8-7.6 5-9.7z" />
                          <circle cx="12" cy="11" r="1.6" />
                          <path d="M7.5 14.5 5 16.5" />
                          <path d="M16.5 14.5 19 16.5" />
                          <path d="M12 22v-2.4" />
                        </svg>
                      </div>
                      <Header level={3}>Launch & wrap up</Header>
                      <Paragraph className="text-text-secondary">
                        We ship—then support, or close cleanly.
                      </Paragraph>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex justify-center">
              <Button as="link" href="/contact" variant="primary">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
