import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { LoadableImage } from '../components/LoadableImage';

import websiteCreationImage from '../../../public/green-house.jpg';
import redesignRefreshImage from '../../../public/someone-painting.jpg';
import ongoingCareImage from '../../../public/old-car.jpg';

export default function ServicesPage() {
  return (
    <>
      <Section background="transparent" padding="none" className="relative overflow-hidden min-h-[38vh] sm:min-h-[40vh] flex items-end">
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/poppy.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/65 via-text-primary/35 to-text-primary/70"
          aria-hidden="true"
        />
        <Container className="relative py-10 sm:py-14">
          <div className="space-y-6">
            <Heading level={1} className="text-text-onDark">
              Website Services
            </Heading>
            <div className="space-y-1 max-w-reading">
              <p className="text-body-large text-text-onDark/90">
                Websites, without the overwhelm.
              </p>
              <p className="text-body text-text-onDark/80 italic">
                Custom website design, redesigns, and ongoing support for small businesses.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="sm">
        <Container>
          <div className="space-y-10">
            <div className="max-w-reading mx-auto space-y-4 text-center">
              <Heading level={2}>Offerings</Heading>
              <p className="text-body text-text-primary/85">
                Depending on your needs, I offer three different services. Select the one that best fits your situation or send me an email if you&apos;re not sure which one to choose.
              </p>
            </div>

            <div className="space-y-8">
              <article
                id="website-creation"
                className="relative mx-auto w-full md:w-[80%] rounded-2xl border border-border-subtle bg-surface-raised p-6 sm:p-8 shadow-sm"
              >
                <header className="text-center">
                  <p className="text-body-small tracking-[0.18em] uppercase text-text-secondary">
                    Brand New
                  </p>
                  <Heading level={3}>Website Creation</Heading>
                  <p className="mx-auto mt-2 max-w-[72ch] text-body text-text-secondary">
                    A fully custom site built from the ground up for businesses who need a professional online presence.
                  </p>
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
                    <p className="font-medium text-text-primary">Includes</p>
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
                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Starting Package
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic">
                           No SEO copy or custom images
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $1,200 / €1,100
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 2-4 weeks
                        </p>
                      </div>

                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Full Package
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic">
                          With custom SEO copy &amp; images
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $1,600 / €1,450
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 3-5 weeks
                        </p>
                      </div>
                    </div>

                    <div className="sm:pl-4">
                      <Button as="link" href="/contact" variant="primary" className="w-full sm:w-auto">
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
                  <p className="text-body-small tracking-[0.18em] uppercase text-text-secondary">
                    The Tune-Up
                  </p>
                  <Heading level={3}>Webpage Redesign</Heading>
                  <p className="mx-auto mt-2 max-w-[72ch] text-body text-text-secondary">
                    A deep dive into a single page redesign, with layout and design changes and clear recommendations for tuning up the rest of your site.
                  </p>
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
                    <p className="font-medium text-text-primary">Includes</p>
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
                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Single Page Redesign
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic">
                          No SEO copy or custom images
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $400 / €350
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 1-2 weeks
                        </p>
                      </div>

                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Single Page Redesign With SEO
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic">
                          With custom SEO copy &amp; images
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $500 / €450 EUR
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> 2 weeks
                        </p>
                      </div>
                    </div>

                    <div className="sm:pl-4">
                      <Button as="link" href="/contact" variant="primary" className="w-full sm:w-auto">
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
                  <p className="text-body-small tracking-[0.18em] uppercase text-text-secondary">
                    Keep it Running
                  </p>
                  <Heading level={3}>Website Care (monthly)</Heading>
                  <p className="mx-auto mt-2 max-w-[72ch] text-body text-text-secondary">
                    Ongoing monthly support to keep your website up to date, functional, and stress-free.
                  </p>
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
                    <p className="font-medium text-text-primary">Includes</p>
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
                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Care Plan
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic ">
                          Up to 5hrs / month
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $250 / €225 EUR
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> Monthly
                        </p>
                      </div>

                      <div className="space-y-1 text-body-small text-text-secondary">
                        <Heading level={4} as="h4" className="mb-1 text-text-primary">
                          Support Plan
                        </Heading>
                        <p className="font-medium text-text-primary/80 text-body-small italic ">
                          Up to 10hrs / month
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Investment:</span> $450 / €400 EUR
                        </p>
                        <p>
                          <span className="font-medium text-text-primary/80">Timeline:</span> Monthly
                        </p>
                      </div>
                    </div>

                    <div className="sm:pl-4">
                      <Button as="link" href="/contact" variant="primary" className="w-full sm:w-auto">
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
              <Heading level={2}>How the process works</Heading>
              <ol className="space-y-3 text-body text-text-primary/85 list-decimal list-inside">
                <li>
                  <strong>Connect</strong> — you tell me what you’re hoping for, what’s working, and what isn’t.
                </li>
                <li>
                  <strong>Clarify goals</strong> — we choose a clear scope and define what “done” looks like.
                </li>
                <li>
                  <strong>Design</strong> — I create the structure and design, and we solidify the design you like. 
                </li>
                <li>
                  <strong>Build & Review</strong> — I build it into a working site, and you review with fresh eyes; we refine what needs refining.
                </li>
                <li>
                  <strong>Launch &amp; handoff</strong> — we go live, and you get a calm handoff so you feel confident moving forward.
                </li>
              </ol>
              <div className="pt-2">
                <Button as="link" href="/contact" variant="secondary">
                  Book a Call
                </Button>
              </div>
            </div>

            <div className="max-w-reading space-y-4">
              <Heading level={2}>A gentle next step</Heading>
              <p className="text-body text-text-primary/85">
                If you’re not sure which option fits, you don’t need to figure it out alone. Send a note with what you do and what
                you’re hoping your website can help with—and I’ll suggest a simple, grounded next step. You can email me at{' '}
                <a
                  className="underline underline-offset-4 decoration-border-subtle/80 hover:text-accent transition-colors duration-200"
                  href="mailto:elanaolson@gmail.com"
                >
                  elanaolson@gmail.com
                </a>
                .
              </p>
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

