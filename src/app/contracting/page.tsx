import Link from 'next/link';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function ContractingPage() {
  return (
    <>
      <Section background="olive-leaf" padding="lg">
        <Container>
          <div className="space-y-6">
            <Heading level={1} className="text-salt">
              Frontend contract engineering for teams that value clarity.
            </Heading>
            <p className="text-body-large text-salt/95 max-w-reading">
              React + TypeScript work that prioritizes maintainability, performance, and the humans
              who will own it after I’m gone.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="link" href="/contact" variant="secondary">
                Check availability
              </Button>
              <Button as="link" href="/work" variant="outlineLight">
                View experience
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="warm-sand" padding="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Heading level={2}>Where I help</Heading>
              <ul className="space-y-3 text-body text-noir/90">
                <li>
                  <strong>Shipping UI</strong>: clean component APIs, predictable styling, and good
                  defaults.
                </li>
                <li>
                  <strong>Refactors</strong>: untangling legacy UI code without breaking what works.
                </li>
                <li>
                  <strong>Design systems</strong>: pragmatic primitives and patterns teams actually
                  adopt.
                </li>
                <li>
                  <strong>Performance</strong>: reducing bloat, improving loading, and fixing
                  rendering pain.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Heading level={2}>Working style</Heading>
              <ul className="space-y-3 text-body text-noir/90">
                <li>
                  <strong>Collaborative</strong>: I like pairing with designers/engineers and
                  documenting decisions.
                </li>
                <li>
                  <strong>Analytical</strong>: I write down assumptions, tradeoffs, and test plans.
                </li>
                <li>
                  <strong>Kind to future you</strong>: readable code, calm structure, and fewer
                  surprises.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-reading space-y-4">
            <Heading level={3}>Relevant links</Heading>
            <p className="text-body text-noir/90">
              If you want deeper context, you can browse my{' '}
              <Link className="text-olive-leaf hover:text-noir underline" href="/publications">
                publications
              </Link>{' '}
              or skim my{' '}
              <Link className="text-olive-leaf hover:text-noir underline" href="/work">
                work history
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section background="salt" padding="lg">
        <Container>
          <div className="space-y-6 max-w-reading">
            <Heading level={2}>Let’s talk scope</Heading>
            <p className="text-body text-noir/90">
              Send a short note with your timeline, team context, and the shape of the problem.
              I’ll reply with next steps and what I’d recommend.
            </p>
            <Button as="link" href="/contact">
              Contact me
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

