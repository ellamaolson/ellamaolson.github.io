import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import { LoadableImage } from '../components/LoadableImage';

import websiteCreationImage from '../../../public/green-house.jpg';
import redesignRefreshImage from '../../../public/someone-painting.jpg';
import oldCar from '../../../public/old-school-car.jpg';

export default function ServicesPage() {
  return (
    <>
      <Section
        background="transparent"
        padding="none"
        className="relative overflow-hidden min-h-[38vh] sm:min-h-[40vh]"
      >
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/backgrounds/sunset-forest.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/65 via-text-primary/35 to-text-primary/70"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#DDD8CF]/15" aria-hidden="true" />
        <Container maxWidth="wide" className="relative py-10 sm:py-14">
          <div className="pt-[14vh] md:pt-[18vh] space-y-12">
            <div className="mx-auto w-full md:w-[80%] space-y-6">
              <Header level={1} className="text-text-onDark">
                Website Services
              </Header>
              <div className="space-y-3">
                <Paragraph variant="p1" className="text-text-onDark">
                  Custom website design, redesigns, and ongoing support for small businesses and
                  entrepreneurs.{' '}
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="sm">
        <Container>
          <div className="space-y-10">
            <div className="max-w-reading mx-auto space-y-4 text-center">
              <Header level={2}>Services</Header>
              <Paragraph className="text-text-primary/85">
                Whether you&apos;re starting fresh or strengthening what you have, each service is
                designed to give your business a website that earns trust and brings in clients.
              </Paragraph>
            </div>

            <div className="space-y-8">
              <article
                id="foundation"
                className="relative mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <Paragraph
                    variant="p3"
                    className="tracking-[0.18em] uppercase text-text-secondary"
                  >
                    Foundation
                  </Paragraph>
                  <Header level={3}>Custom Website</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    Custom site built from the ground up for businesses who need a professional
                    online presence.
                  </Paragraph>
                </header>

                <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
                  <div className="space-y-4">
                    <LoadableImage
                      src={websiteCreationImage}
                      alt="A green house"
                      className="h-64 sm:h-[19rem] md:h-[21.5rem] w-full rounded-xl [&_img]:scale-[1.06]"
                      priority
                    />
                  </div>

                  <div className="text-body text-text-primary/85 md:pl-6">
                    <Header level={5} className="font-medium">
                      What&apos;s included
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Creative brand alignment (colors, typography, tone)</li>
                      <li>Audience and positioning strategy for your ideal clients</li>
                      <li>Custom 4-page Wix website</li>
                      <li>Domain configuration</li>
                      <li>Mobile-friendly design</li>
                      <li>Copywriting guidance</li>
                      <li>Recorded walkthrough and handoff guidance</li>
                      <li>1 round of revisions</li>
                      <li>2 weeks of post-launch support</li>
                    </ul>
                  </div>
                </div>

                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Essential
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Custom site, no SEO add-on
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span>{' '}
                          $1,600 / €1,450
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 3-4
                          weeks
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Complete
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          With SEO optimization &amp; custom imagery
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span>{' '}
                          $1,950 / €1,800
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 4-5
                          weeks
                        </Paragraph>
                      </div>
                    </div>

                    <div className="sm:pl-4 flex flex-col items-center gap-2">
                      <Button
                        as="link"
                        href="/contact"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        Start a Conversation
                      </Button>
                      <Paragraph variant="p3" className="text-text-secondary italic">
                        Payment plans available
                      </Paragraph>
                    </div>
                  </div>
                </footer>
              </article>

              <article
                id="realign"
                className="mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <Paragraph
                    variant="p3"
                    className="tracking-[0.18em] uppercase text-text-secondary"
                  >
                    Realign
                  </Paragraph>
                  <Header level={3}>Page Redesign</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    A deep dive into a single page redesign to modernize the feel of your site.
                  </Paragraph>
                </header>

                <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
                  <div className="space-y-4">
                    <LoadableImage
                      src={redesignRefreshImage}
                      alt="Paint and brush strokes"
                      className="h-64 sm:h-[19rem] md:h-[21.5rem] w-full rounded-xl"
                    />
                  </div>

                  <div className="text-body text-text-primary/85 md:pl-6">
                    <Header level={5} className="font-medium">
                      What&apos;s included
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Audit of current page structure, messaging, and user flow</li>
                      <li>Refreshed creative direction (palette, typography, tone)</li>
                      <li>Redesigned page layout built for clarity and conversion</li>
                      <li>SEO-focused copy recommendations</li>
                      <li>Recorded walkthrough</li>
                      <li>1 round of revisions</li>
                    </ul>
                  </div>
                </div>

                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Essential
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Redesign with structure and copy guidance
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $650
                          / €600
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 1-2
                          weeks
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Complete
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          With SEO optimization &amp; custom imagery
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $850
                          / €750
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 2-3
                          weeks
                        </Paragraph>
                      </div>
                    </div>

                    <div className="sm:pl-4">
                      <Button
                        as="link"
                        href="/contact"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        Start a Conversation
                      </Button>
                    </div>
                  </div>
                </footer>
              </article>

              <article
                id="ongoing-care"
                className="mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <Paragraph
                    variant="p3"
                    className="tracking-[0.18em] uppercase text-text-secondary"
                  >
                    Steady Support
                  </Paragraph>
                  <Header level={3}>Ongoing Website Care</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    Ongoing monthly support to keep your website up to date, functional, and
                    stress-free.
                  </Paragraph>
                </header>

                <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
                  <div className="space-y-4">
                    <LoadableImage
                      src={oldCar}
                      alt="An old car"
                      className="h-64 sm:h-[19rem] md:h-[21.5rem] w-full rounded-xl"
                    />
                  </div>

                  <div className="text-body text-text-primary/85 md:pl-6">
                    <Header level={5} className="font-medium">
                      What&apos;s included
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Content updates (new offerings, hours, team bios)</li>
                      <li>Bug fixes and performance checks</li>
                      <li>Design refinements as your business evolves</li>
                      <li>Priority email support</li>
                      <li>Dedicated monthly hours</li>
                    </ul>
                  </div>
                </div>

                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Maintain
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Up to 5 hours / month
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $350
                          / €325
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Commitment:</span>{' '}
                          Monthly, cancel anytime
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Grow
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Up to 10 hours / month
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $650
                          / €600
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Commitment:</span>{' '}
                          Monthly, cancel anytime
                        </Paragraph>
                      </div>
                    </div>

                    <div className="sm:pl-4">
                      <Button
                        as="link"
                        href="/contact"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        Start a Conversation
                      </Button>
                    </div>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process + CTA (contrasting section) */}
      <Section background="surface" padding="lg">
        <Container>
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-start">
            <div className="max-w-reading space-y-4">
              <Header level={2}>How we work together</Header>
              <ol className="space-y-3 text-body text-text-primary/85 list-decimal list-inside">
                <li>
                  <strong>Connect</strong> — a free 30-minute call to understand your business, your
                  goals, and what your website needs to do for you.
                </li>
                <li>
                  <strong>Clarify</strong> — we define a clear scope, timeline, and what
                  &ldquo;done&rdquo; looks like, so there are no surprises.
                </li>
                <li>
                  <strong>Design</strong> — I create the structure and visual direction, and we
                  refine it together until it feels right.
                </li>
                <li>
                  <strong>Build</strong> — I build your site with professional-grade code, then walk
                  you through it for review and refinement.
                </li>
                <li>
                  <strong>Launch</strong> — we go live, and you get a calm handoff with everything
                  you need to move forward confidently.
                </li>
              </ol>
              <div className="pt-2">
                <Button as="link" href="/contact" variant="secondary">
                  Book a Free Call
                </Button>
              </div>
            </div>

            <div className="max-w-reading space-y-4">
              <Header level={2}>Not sure where to start?</Header>
              <Paragraph className="text-text-primary/85">
                You don&apos;t need to have it all figured out. Tell me a little about your business
                and what you&apos;re hoping your website can do — I&apos;ll suggest a clear,
                grounded next step. No pressure, no commitment.
              </Paragraph>
              <Paragraph className="text-text-primary/85">
                Email me at{' '}
                <a
                  className="underline underline-offset-4 decoration-border-subtle/80 hover:text-accent transition-colors duration-200"
                  href="mailto:elana@elanaolson.com"
                >
                  elana@elanaolson.com
                </a>
              </Paragraph>
              <div className="pt-1">
                <Button as="link" href="mailto:elana@elanaolson.com" variant="outline">
                  Send a note
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
