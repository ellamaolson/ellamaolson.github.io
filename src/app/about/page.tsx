import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <Section background="surfaceMuted" padding="lg">
        <Container>
          <div className="space-y-6 max-w-reading">
            <Heading level={1}>About</Heading>
            <p className="text-body-large text-text-primary/90">
              I care about work that feels steady and human: clear writing, thoughtful structure,
              and calm UI that helps people understand what they’re looking at.
            </p>
            <p className="text-body text-text-primary/85">
              I’m happiest when I’m simplifying complex ideas—whether that’s turning a messy UI into
              a clean component system, or helping a small business describe their offer in a way
              that feels honest and easy to trust.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button as="link" href="/services">
                Website services
              </Button>
              <Button as="link" href="/contracting" variant="outline">
                Contract engineering
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Heading level={2}>Values</Heading>
              <ul className="space-y-3 text-body text-text-primary/85">
                <li>
                  <strong>Warm clarity</strong>: friendly tone, precise structure.
                </li>
                <li>
                  <strong>Good defaults</strong>: fewer choices, better outcomes.
                </li>
                <li>
                  <strong>Consistency</strong>: patterns you can trust and reuse.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Heading level={2}>Outside work</Heading>
              <ul className="space-y-3 text-body text-text-primary/85">
                <li>Traveling and collecting small “this place feels alive” moments.</li>
                <li>Watercolor + tactile art projects that slow me down.</li>
                <li>Community-building (especially spaces that support women).</li>
              </ul>
              <div className="pt-2">
                <Button as="link" href="/travel" variant="ghost">
                  See travel notes →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

