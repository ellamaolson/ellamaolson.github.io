'use client';

import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { Heading } from './components/ui/Heading';
import { Button } from './components/ui/Button';
import { Grid } from './components/ui/Grid';
import { LoadableImage } from './components/LoadableImage';

import elanaHeadshotImage from '../../public/elana-headshot.png';

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
          <div className="pt-[16vh] md:pt-[26vh] lg:pt-[28vh] space-y-6 max-w-[80ch]">
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
              Different needs, the same steady approach — clear structure, open communication, and work you can rely on.
              </p>
            </div>

            <Grid variant="split" className="items-start">
              <article className="group space-y-4 border-l border-brand-olive/35 pl-6 transition-colors duration-200 hover:border-brand-olive/60">
                <h3 className="font-editorial text-h3 text-text-primary">Small Businesses & Independent Professionals</h3>
                <p className="text-body text-text-primary/85 max-w-reading">
                You want a website that feels welcoming and easy to understand — one that clearly explains what you do and makes it simple for the right people to reach out.
                I’m a great fit if you’re looking for small business website design that’s thoughtful, readable, and built to grow with you.
                </p>
                <div className="pt-1">
                  <a
                    href="/services"
                    className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                  >
                    Explore website services{' '}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>

              <article className="group space-y-4 border-l border-brand-moss/35 pl-6 transition-colors duration-200 hover:border-brand-moss/60">
                <h3 className="font-editorial text-h3 text-text-primary">Product Teams & Companies</h3>
                <p className="text-body text-text-primary/85 max-w-reading">
                You need an experienced contract frontend engineer who can step in, ship clean UI, and leave things better than they found them.
                I support teams working in React or Angular, with a focus on clarity, maintainability, and communication that keeps projects calm and predictable
                </p>
                <div className="pt-1">
                  <a
                    href="/contracting"
                    className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                  >
                    Explore contract engineering{' '}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
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
                Thoughtful websites, built by a  engineer who truly gets people.
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
                  From small businesses to large teams, I listen closely, adjust quickly, and communicate clearly.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Image space (quiet visual balance) */}
            <div className="hidden md:block space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
                <LoadableImage
                  alt="Autumn oak photograph"
                  src="/autumn%20oak.jpg"
                  className="w-full h-full"
                />
              </div>
              <p className="text-body-small text-text-secondary max-w-reading">
                Find harmony in your website and your work.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Section 4: My Services (primary conversion + SEO anchor) */}
      <Section background="transparent" padding="lg" className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/moon.jpg')" }}
          aria-hidden="true"
        />
        {/* Overlay for legibility */}
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
            {/* Fun bordered overlay */}
            <div className="w-full max-w-reading">
              <div className="rounded-[2rem] border border-accent/45 bg-white/10 p-1 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[1.75rem] border border-border-onDark bg-surface/90 text-text-primary">
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <div className="space-y-3">
                      <Heading level={2}>My services</Heading>
                      <p className="text-body text-text-secondary">
                        A few focused ways I can support you—designed to feel clear, steady, and easy to say yes to.
                      </p>
                    </div>

                    <ul className="mt-8 divide-y divide-border-subtle" aria-label="Services overview">
                      <li className="py-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                          <div className="shrink-0 pt-1">
                            <span className="inline-flex items-center gap-3 text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span className="h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                              01
                            </span>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-editorial text-h3 text-text-primary">
                              Website Design &amp; Redesign (Small Businesses)
                            </h3>
                            <p className="text-body text-text-secondary">
                              Small business website design and website redesign that reads clearly, feels welcoming,
                              and stays easy to manage as you grow.
                            </p>
                            <a
                              href="/services"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Website design services{' '}
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
                            <span className="inline-flex items-center gap-3 text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span className="h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                              02
                            </span>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-editorial text-h3 text-text-primary">Ongoing Website Care &amp; Retainers</h3>
                            <p className="text-body text-text-secondary">
                              Calm, reliable website support for updates, improvements, and maintenance—so your site
                              stays current without becoming another thing to worry about.
                            </p>
                            <a
                              href="/services"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Website care &amp; retainers{' '}
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
                            <span className="inline-flex items-center gap-3 text-small tracking-[0.18em] uppercase text-text-secondary">
                              <span className="h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                              03
                            </span>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-editorial text-h3 text-text-primary">
                              Frontend Engineering Support (React / Angular)
                            </h3>
                            <p className="text-body text-text-secondary">
                              Frontend engineering support for product teams—React or Angular work that’s maintainable,
                              well-communicated, and easy to hand off.
                            </p>
                            <a
                              href="/contracting"
                              className="group inline-flex items-baseline gap-2 text-body font-medium text-brand-olive hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                            >
                              Frontend engineering support{' '}
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
              <Heading level={2} className="mx-auto">
                How it works
              </Heading>
              <p className="text-body-small text-text-secondary/85">
                Let’s grow your vision into something real — together.
              </p>
            </div>

            <nav aria-label="How we work" className="py-4 sm:py-6">
              <ol className="flex flex-col gap-8 sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-center sm:gap-4 mx-auto">
                <li className="sm:flex-1 sm:max-w-[9.25rem] md:max-w-[10.5rem] lg:max-w-[12rem]">
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
                      <h3 className="font-editorial text-h3 text-text-primary">Free 30-minute call</h3>
                      <p className="text-body text-text-secondary">Low-pressure, just to see if it’s a fit.</p>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[9.25rem] md:max-w-[10.5rem] lg:max-w-[12rem]">
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
                      <h3 className="font-editorial text-h3 text-text-primary">Align on details</h3>
                      <p className="text-body text-text-secondary">Scope, timeline, and what “good” means.</p>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[9.25rem] md:max-w-[10.5rem] lg:max-w-[12rem]">
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
                      <h3 className="font-editorial text-h3 text-text-primary">Build together</h3>
                      <p className="text-body text-text-secondary">Clear check-ins, steady progress.</p>
                    </div>
                  </div>
                </li>

                <li
                  className="hidden sm:flex items-center justify-center text-4xl md:text-5xl leading-none text-text-secondary/35"
                  aria-hidden="true"
                >
                  →
                </li>

                <li className="sm:flex-1 sm:max-w-[9.25rem] md:max-w-[10.5rem] lg:max-w-[12rem]">
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
                      <h3 className="font-editorial text-h3 text-text-primary">Launch & wrap up</h3>
                      <p className="text-body text-text-secondary">We ship—then support, or close cleanly.</p>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="flex justify-center">
              <Button
                as="link"
                href="/contact"
                variant="primary"
                className="border-2 border-white/80 hover:border-white bg-accent/80 hover:bg-accent/70"
              >
                Schedule our call
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: About (light surface + dark card for contrast) */}
      <Section background="surfaceRaised" padding="lg" className="relative overflow-hidden">
        {/* Subtle warmth without going dark */}
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(194,162,58,0.14),transparent_55%)]"
          aria-hidden="true"
        />
        <Container maxWidth="wide" className="relative">
          <Grid variant="split" className="items-center md:gap-20">
            {/* Image: large portrait badge */}
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] mx-auto overflow-visible">
                {/* Decorative rings */}
                <div
                  className="pointer-events-none absolute -inset-3 rounded-full border border-[rgb(36_45_26/0.35)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -inset-10 rounded-full blur-[12px] opacity-90 bg-[radial-gradient(circle,rgba(241_239_233/0)_50%,rgba(36_45_26/0.62)_58%,rgba(36_45_26/0.20)_72%,rgba(241_239_233/0)_92%)]"
                  aria-hidden="true"
                />

                <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border-strong bg-surface-raised">
                  <LoadableImage
                    alt="Elana Olson, founder of Rooted Studio"
                    src={elanaHeadshotImage}
                    className="w-full h-full rounded-full"
                    priority={true}
                  />
                </div>
              </div>

            </div>

            {/* Copy: dark brand card for contrast + trust */}
            <div className="rounded-2xl bg-[rgb(36_45_26/0.86)] text-text-onDark border border-border-onDark p-6 sm:p-8">
              <div className="space-y-3 max-w-reading">
                <Heading level={2} className="text-text-onDark">
                  About Me
                </Heading>
              </div>

              <div className="mt-6 space-y-4 max-w-reading">
                <p className="text-body text-text-onDark/90">
                  Hi, I’m Elana Olson, founder of <strong>Rooted Studio</strong>—I design and build elegant
                  websites that feel clear, warm, and easy to trust.
                </p>
                <p className="text-body text-text-onDark/90">
                  <strong>Grounded</strong> matters to me because your website is often a first
                  conversation; when it’s steady and welcoming, people can relax, understand, and reach
                  out with confidence.
                </p>
                <p className="text-body text-text-onDark/90">
                  I’m a professionally trained software engineer with 7+ years of experience building and
                  maintaining production products used by millions—bringing that same care to structure,
                  accessibility, and long-term maintainability.
                </p>
              </div>

              <div className="mt-6 border-l border-border-onDark pl-4 space-y-2 max-w-reading">
                <p className="text-body text-text-onDark/90">
                  <strong>What you can expect:</strong> clear communication, reliable engineering, and a
                  warm, human-centered process.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="/about"
                  className="inline-flex items-baseline gap-2 text-body font-medium text-text-onDark/90 hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                >
                  Get to know me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      
    </>
  );
}
