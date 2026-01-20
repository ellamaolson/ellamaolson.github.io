import Link from 'next/link';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function ContractingPage() {
  return (
    <>
      <Section background="transparent" padding="none" className="relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/oak%20bark.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/65 via-text-primary/35 to-text-primary/70"
          aria-hidden="true"
        />
        <Container maxWidth="wide" className="relative min-h-screen">
          <div className="pt-[14vh] md:pt-[18vh] space-y-12">
            <div className="mx-auto w-full md:w-[80%] space-y-6">
              <Heading level={1} className="text-text-onDark">
                Contract Frontend Engineering
              </Heading>
              <p className="text-body-large text-text-onDark/90 max-w-reading">
                Reliable senior-level execution for product teams—calm communication, strong code quality, and work you can ship.
              </p>
              <p className="text-body text-text-onDark/80 max-w-none">
                I have 7+ years as a frontend software engineer, including shipping production features used by millions of users and
                working on large-scale, long-lived codebases.
              </p>
            </div>

            {/* Offerings card (overlaid within the hero viewport) */}
            <article className="mx-auto w-full md:w-[80%] rounded-2xl border border-border-onDark bg-surface-raised/95 p-6 sm:p-8 shadow-lg backdrop-blur-sm">
              <header className="text-center">
                <Heading level={2} className="mb-2">
                  What I offer
                </Heading>
                <p className="mx-auto max-w-reading text-body text-text-secondary">
                  A service-oriented way of working: clear scope, steady execution, and code that’s easy to maintain.
                </p>
              </header>

              <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="max-w-reading space-y-3">
                  <p className="font-medium text-text-primary">Offerings</p>
                  <ul className="space-y-3 text-body text-text-primary/85 list-disc list-inside">
                    <li>Frontend feature development</li>
                    <li>UI architecture, refactors, and design systems</li>
                    <li>Analytics &amp; monitoring</li>
                    <li>Performance, maintainability, and code quality</li>
                    <li>Working quickly with AI-assisted coding</li>
                    <li>Collaboration with backend and product teams</li>
                  </ul>
                </div>

                <div className="max-w-reading space-y-3">
                  <p className="font-medium text-text-primary">Technical stack</p>
                  <ul className="grid grid-cols-1 gap-2 text-body text-text-primary/85 sm:grid-cols-2">
                    <li>JavaScript (JS)</li>
                    <li>TypeScript (TS)</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Next.js</li>
                    <li>REST APIs</li>
                    <li>Analytics & Monitoring</li>
                    <li>GraphQL APIs</li>
                  </ul>
                </div>
              </div>

              <footer className="mt-8 border-t border-border-subtle pt-6">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <p className="text-body text-text-secondary">
                    <span className="font-medium text-text-primary/80">Rate:</span> $100 / hour
                  </p>
                  <div className="sm:pl-4">
                    <Button as="link" href="/contact" variant="secondary" className="w-full sm:w-auto">
                      Inquire
                    </Button>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container>
          <div className="max-w-reading space-y-4">
            <Heading level={2}>Experience snapshot</Heading>
            <p className="text-body text-text-primary/85">
              For details:
            </p>
            <ul className="space-y-2 text-body text-text-primary/85">
              <li>
                <Link className="text-brand-olive hover:text-accent underline underline-offset-4" href="/work">
                  Work experience →
                </Link>
              </li>
              <li>
                <a
                  className="text-brand-olive hover:text-accent underline underline-offset-4"
                  href="https://www.linkedin.com/in/elanaolson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-reading space-y-4">
              <Heading level={2}>Credibility, engagement &amp; next steps</Heading>
              <p className="text-body text-text-primary/85">
                If you’re looking for dependable frontend support—done thoughtfully and communicated clearly—here’s what you can
                expect.
              </p>

              <div className="space-y-3">
                <p className="text-body font-medium text-text-primary">Selected proof points</p>
                <ul className="space-y-2 text-body text-text-primary/85 list-disc list-inside">
                  <li>Production features used by millions of users</li>
                  <li>
                    Open-source package:{' '}
                    <a
                      className="text-brand-olive hover:text-accent underline underline-offset-4"
                      href="https://www.npmjs.com/package/ngma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ngma →
                    </a>
                  </li>
                  <li>
                    Technical articles on Angular, React, and Next.js:{' '}
                    <Link className="text-brand-olive hover:text-accent underline underline-offset-4" href="/publications">
                      publications →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-reading space-y-6">
              <div className="space-y-3">
                <p className="text-body font-medium text-text-primary">How engagement works</p>
                <ul className="space-y-2 text-body text-text-primary/85 list-disc list-inside">
                  <li>Available for short-term or ongoing contracts</li>
                  <li>Remote-friendly</li>
                  <li>Clear communication and predictable availability</li>
                  <li>Open to starting with a short trial engagement</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-body font-medium text-text-primary">Next step</p>
                <p className="text-body text-text-primary/85">
                  If you want to talk scope and availability, send a note and I’ll reply with next steps.
                </p>
                <div className="pt-1">
                  <Button as="link" href="/contact" variant="secondary">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

