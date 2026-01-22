import Link from 'next/link';
import Image from 'next/image';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import { GitHubIcon } from '../components/icons/GitHubIcon';

export default function ContractingPage() {
  return (
    <>
      <Section background="transparent" padding="none" className="relative overflow-hidden min-h-[140vh] sm:min-h-[96vh]">
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/green-moutnain.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-text-primary/65 via-text-primary/35 to-text-primary/70"
          aria-hidden="true"
        />
        <Container maxWidth="wide" className="relative min-h-[140vh] sm:min-h-[96vh]">
          <div className="pt-[14vh] md:pt-[18vh] space-y-12">
            <div className="mx-auto w-full md:w-[80%] space-y-6">
              <Header level={1} className="text-text-onDark">
                Contract Frontend Engineering
              </Header>
              <Paragraph variant="p1" className="text-text-onDark max-w-reading">
                Reliable senior-level execution for product teams—calm communication, strong code quality, and work you can ship.
              </Paragraph>
              <Paragraph className="text-text-onDark max-w-none italic">
                I have 7+ years as a frontend software engineer, including shipping production features used by millions of users and
                working on numerous large-scale codebases.
              </Paragraph>
            </div>

            {/* Offerings card (overlaid within the hero viewport) */}
            <article className="mx-auto w-full md:w-[80%] rounded-2xl border border-border-onDark bg-surface-raised/95 p-6 sm:p-8 shadow-lg backdrop-blur-sm">
              <header className="text-center">
                <Header level={2} className="mb-2">
                  What I offer
                </Header>
                <Paragraph className="mx-auto max-w-reading text-text-secondary">
                  A service-oriented way of working: clear scope, steady execution, and code that’s easy to maintain.
                </Paragraph>
              </header>

              <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="max-w-full sm:max-w-reading space-y-3 lg:pl-6">
                  <Header level={5} className="font-bold text-base mb-1">Offerings</Header>
                  <ul className="space-y-3 text-body text-text-primary/85 list-disc list-inside">
                    <li>Frontend feature development</li>
                    <li>UI architecture, refactors, and design systems</li>
                    <li>Performance, maintainability, and code quality</li>
                    <li>AI-assisted coding for fast iteration</li>
                    <li>Collaboration with backend and product teams</li>
                  </ul>
                </div>

                <div className="max-w-reading space-y-3">
                  <Header level={5} className="font-bold text-base mb-1">Technical stack</Header>
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
                  <Paragraph className="text-text-secondary">
                   I do hourly and project-based contracts, contact me for a quote.
                  </Paragraph>
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
        <Container maxWidth="wide">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="w-full space-y-4 lg:w-[22rem]">
              <div className="flex flex-col items-center text-center">
                <span
                  className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-surface-raised"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-brand-olive"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 10L12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c3 2 9 2 12 0v-5" />
                  </svg>
                </span>
                <Header level={2} className="text-center">
                  Education
                </Header>
              </div>

              <div className="text-body text-text-primary/85 text-left">
                <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                  <Image
                    src="/sjsu.svg"
                    alt="San Jose State University"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-0.5">
                    <Header level={4} className="font-[700] italic">BS in Software Engineering</Header>
                    <Paragraph className="text-text-primary/85">San Jose State University</Paragraph>
                    <Paragraph variant="p3" className="text-text-secondary">Graduated Cum Laude, May 2020</Paragraph>
                  </div>
                </div>
              </div>

              <ul className="pt-2 space-y-3 text-body text-text-primary/85 list-disc list-inside">
                <li>SJSU Research Foundation — STEM Mentor to high school students</li>
                <li>
                Senior Thesis Project — Degree Planning Assistant
                  <a
                    className="ml-2 inline-flex align-middle items-center justify-center text-brand-olive hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
                    href="https://github.com/DPA-SJSU/Degree-Planning-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Degree Planning Assistant on GitHub"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full space-y-4 lg:w-[22rem]">
              <div className="flex flex-col items-center text-center">
                <span
                  className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-surface-raised"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-brand-olive"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                    <path d="M4 7h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
                    <path d="M6 17v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
                    <path d="M10 12h4" />
                  </svg>
                </span>
                <Header level={2} className="text-center">
                  Experience
                </Header>
              </div>
              <Paragraph className="text-text-primary/85">
                Senior frontend engineering across numerous small and large-scale codebases—shipping production features used by millions.
              </Paragraph>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Image
                    src="/atlassian-icon.png"
                    alt="Atlassian"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-0.5">
                    <Header level={4} className="font-medium">Atlassian - Software Engineer</Header>
                    <Paragraph variant="p3" className="text-text-secondary">Jul 2020 – Dec 2024</Paragraph>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Image
                    src="/google-icon.png"
                    alt="Google"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-0.5">
                    <Header level={4} className="font-medium">Google (Angular) - Developer Relations</Header>
                    <Paragraph variant="p3" className="text-text-secondary">May 2018 - Sept 2019</Paragraph>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Image
                    src="/tappity.png"
                    alt="Tappity"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-0.5">
                    <Header level={4} className="font-medium">Tappity - Frontend Intern</Header>
                    <Paragraph variant="p3" className="text-text-secondary">Jan 2017 – Nov 2017</Paragraph>
                  </div>
                </li>
              </ul>

              <ul className="mt-4 space-y-2 text-body text-text-primary/85">
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

            <div className="w-full space-y-4 lg:w-[22rem]">
              <div className="flex flex-col items-center text-center">
                <span
                  className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-surface-raised"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-brand-olive"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 19a2 2 0 0 0 2 2h14" />
                    <path d="M6 3h14v18" />
                    <path d="M6 3a2 2 0 0 0-2 2v14" />
                    <path d="M8 7h8" />
                    <path d="M8 11h8" />
                    <path d="M8 15h6" />
                  </svg>
                </span>
                <Header level={2} className="text-center">
                  Publications
                </Header>
              </div>
              <Paragraph className="text-text-primary/85">
                Technical articles and conference talks on Angular, React, and Next.js—written for working engineers.
              </Paragraph>
              <ul className="mt-2 space-y-2 text-body text-text-primary/85 list-disc list-inside">
                <li>
                  <a
                    className="text-brand-olive hover:text-accent transition-colors duration-200"
                    href="https://medium.com/@elanaolson/a-beginners-guide-to-building-a-react-nextjs-app-7463120389f0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A beginner’s guide to building a React + Next.js app
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-olive hover:text-accent transition-colors duration-200"
                    href="https://medium.com/@elanaolson/create-an-angular-app-in-no-time-2ca89c734dd2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Create an Angular app in no time
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand-olive hover:text-accent transition-colors duration-200"
                    href="https://blog.angular.dev/migrating-to-angular-fc9618d6fb04"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2 New Tools to help with AngularJS to Angular Migrations
                  </a>
                  <ul className="mt-2 pl-6 list-disc list-outside space-y-1">
                    <li>
                      <a
                        className="text-brand-olive hover:text-accent transition-colors duration-200"
                        href="https://www.npmjs.com/package/ngma"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ngma (open-source package)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mt-4 space-y-2 text-body text-text-primary/85">
                <li>
                  <Link className="text-brand-olive hover:text-accent underline underline-offset-4" href="/publications">
                    Publications →
                  </Link>
                </li>
                </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="lg">
        <Container>
          <div className="mx-auto max-w-reading space-y-4">
              <Header level={2}>How engagement works</Header>
              <Paragraph className="text-text-primary/85">
                If you’re looking for dependable frontend support—done thoughtfully and communicated clearly—here’s what you can
                expect.
              </Paragraph>

              <div className="space-y-3">
                <ul className="space-y-2 text-body text-text-primary/85 list-disc list-inside">
                  <li>Available for hourly or project-based contracts</li>
                  <li>Remote-friendly, or in person in San Diego or the Netherlands</li>
                  <li>Clear communication and predictable availability</li>
                  <li>Open to starting with a short trial engagement</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Paragraph className="font-medium text-text-primary italic">Next step</Paragraph>
                <Paragraph className="text-text-primary/85 italic">
                  If you want to talk scope and availability, send a note or book a call and I’ll reply with next steps.
                </Paragraph>
                <div className="pt-1">
                  <Button as="link" href="/contact" variant="secondary">
                    Get in touch
                  </Button>
                </div>
              </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

