import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import { LoadableImage } from '../components/LoadableImage';

import websiteCreationImage from '../../../public/green-house.jpg';
import redesignRefreshImage from '../../../public/someone-painting.jpg';
import ongoingCareImage from '../../../public/old-car.jpg';

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
          style={{ backgroundImage: "url('/sunset-forest.jpg')" }}
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
              <div className="space-y-1 max-w-reading">
                <Paragraph variant="p1" className="text-text-onDark">
                  Websites, without the overwhelm.
                </Paragraph>
                <Paragraph className="text-text-onDark italic">
                  Custom website design, redesigns, and ongoing support for small businesses.
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
              <Header level={2}>Offerings</Header>
              <Paragraph className="text-text-primary/85">
                Depending on your needs, I offer three different services. Select the one that best
                fits your situation or send me an email if you&apos;re not sure which one to choose.
              </Paragraph>
            </div>

            <div className="space-y-8">
              <article
                id="website-creation"
                className="relative mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <Paragraph
                    variant="p3"
                    className="tracking-[0.18em] uppercase text-text-secondary"
                  >
                    Brand New
                  </Paragraph>
                  <Header level={3}>Website Creation</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    A fully custom site built from the ground up for businesses who need a
                    professional online presence.
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
                      Includes
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Creative direction (color palette, visual feel, font)</li>
                      <li>Research and website strategy for target audience</li>
                      <li>Custom 4-page Wix website</li>
                      <li>Custom domain connection</li>
                      <li>Mobile-responsive layout</li>
                      <li>Clear descriptions and guidance for your copy</li>
                      <li>Video walkthrough so you can confidently manage your site</li>
                      <li>1 week support period post launch</li>
                      <li>1 round of revisions</li>
                    </ul>
                  </div>
                </div>

                {/* Pricing + timeline + CTA (full-width row) */}
                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Starting Package
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          No SEO copy or custom images
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span>{' '}
                          $1,200 / €1,100
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 2-4
                          weeks
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Full Package
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          With custom SEO copy &amp; images
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span>{' '}
                          $1,600 / €1,450
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 3-5
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
                        Inquire
                      </Button>
                    </div>
                  </div>
                </footer>
              </article>

              <article
                id="redesign-refresh"
                className="mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <Paragraph
                    variant="p3"
                    className="tracking-[0.18em] uppercase text-text-secondary"
                  >
                    The Tune-Up
                  </Paragraph>
                  <Header level={3}>Webpage Redesign</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    A deep dive into a single page redesign, with layout and design changes and
                    clear recommendations for tuning up the rest of your site.
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
                      Includes
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Creative direction (color palette, visual feel, font)</li>
                      <li>Research and webpage strategy for target audience</li>
                      <li>Changes made to the structure and design of the page</li>
                      <li>SEO-focused copywrite recommendations</li>
                      <li>Recorded walkthrough explaining recommended changes</li>
                      <li>Written next steps and guidance</li>
                      <li>1 round of revisions</li>
                    </ul>
                  </div>
                </div>

                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Single Page Redesign
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          No SEO copy or custom images
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $400
                          / €350
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 1-2
                          weeks
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Single Page Redesign With SEO
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          With custom SEO copy &amp; images
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $500
                          / €450 EUR
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 2
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
                        Inquire
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
                    Keep it Running
                  </Paragraph>
                  <Header level={3}>Website Care (monthly)</Header>
                  <Paragraph className="mx-auto mt-2 max-w-[72ch] text-text-secondary">
                    Ongoing monthly support to keep your website up to date, functional, and
                    stress-free.
                  </Paragraph>
                </header>

                <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch">
                  <div className="space-y-4">
                    <LoadableImage
                      src={ongoingCareImage}
                      alt="An old car"
                      className="h-64 sm:h-[19rem] md:h-[21.5rem] w-full rounded-xl"
                    />
                  </div>

                  <div className="text-body text-text-primary/85 md:pl-6">
                    <Header level={5} className="font-medium">
                      Includes
                    </Header>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>Small content updates and changes</li>
                      <li>Bug fixes</li>
                      <li>Light design tweaks</li>
                      <li>Email support during the month</li>
                      <li>Fixed number of hours each month</li>
                    </ul>
                  </div>
                </div>

                {/* Pricing + timeline + CTA (full-width row) */}
                <footer className="mt-8 border-t border-border-subtle pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Care Plan
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Up to 5hrs / month
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $250
                          / €225 EUR
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span>{' '}
                          Monthly
                        </Paragraph>
                      </div>

                      <div className="space-y-1 text-small text-text-secondary">
                        <Header level={4} as="h4" className="mb-1">
                          Support Plan
                        </Header>
                        <Paragraph variant="p3" className="font-medium text-text-primary/80 italic">
                          Up to 10hrs / month
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Investment:</span> $450
                          / €400 EUR
                        </Paragraph>
                        <Paragraph>
                          <span className="font-medium text-text-primary/80">Timeline:</span>{' '}
                          Monthly
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
                        Inquire
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
              <Header level={2}>How the process works</Header>
              <ol className="space-y-3 text-body text-text-primary/85 list-decimal list-inside">
                <li>
                  <strong>Connect</strong> — you tell me what you’re hoping for, what’s working, and
                  what isn’t.
                </li>
                <li>
                  <strong>Clarify goals</strong> — we choose a clear scope and define what “done”
                  looks like.
                </li>
                <li>
                  <strong>Design</strong> — I create the structure and design, and we solidify the
                  design you like.
                </li>
                <li>
                  <strong>Build & Review</strong> — I build it into a working site, and you review
                  with fresh eyes; we refine what needs refining.
                </li>
                <li>
                  <strong>Launch &amp; handoff</strong> — we go live, and you get a calm handoff so
                  you feel confident moving forward.
                </li>
              </ol>
              <div className="pt-2">
                <Button as="link" href="/contact" variant="secondary">
                  Book a Call
                </Button>
              </div>
            </div>

            <div className="max-w-reading space-y-4">
              <Header level={2}>A gentle next step</Header>
              <Paragraph className="text-text-primary/85">
                If you’re not sure which option fits, you don’t need to figure it out alone. Send a
                note with what you do and what you’re hoping your website can help with—and I’ll
                suggest a simple, grounded next step. You can email me at{' '}
                <a
                  className="underline underline-offset-4 decoration-border-subtle/80 hover:text-accent transition-colors duration-200"
                  href="mailto:elanaolson@gmail.com"
                >
                  elanaolson@gmail.com
                </a>
                .
              </Paragraph>
              <div className="pt-1">
                <Button as="link" href="mailto:elanaolson@gmail.com" variant="outline">
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
