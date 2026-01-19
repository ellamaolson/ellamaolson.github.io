import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialLinks';

export default function ContactPage() {
  return (
    <>
      <Section background="brand" padding="lg">
        <Container>
          <div className="space-y-6 max-w-reading">
            <Heading level={1} className="text-text-onDark">
              Contact
            </Heading>
            <p className="text-body-large text-text-onDark/90">
              If you share a little context, I can respond with clearer next steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="link" href="mailto:elanaolson@gmail.com" variant="secondary">
                Email me
              </Button>
              <Button as="link" href="/services" variant="outlineLight">
                Website services
              </Button>
              <Button as="link" href="/contracting" variant="outlineLight">
                Contract engineering
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 max-w-reading">
              <Heading level={2}>What to include</Heading>
              <ul className="space-y-3 text-body text-text-primary/85 list-disc list-inside">
                <li>What you’re building (or what’s not working)</li>
                <li>Timeline and urgency</li>
                <li>Links to anything relevant (site, repo, mockups)</li>
                <li>Preferred contact method</li>
              </ul>
              <p className="text-body text-text-secondary">
                Email:{' '}
                <a className="text-brand-olive underline" href="mailto:elanaolson@gmail.com">
                  elanaolson@gmail.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <Heading level={2}>Elsewhere</Heading>
              <p className="text-body text-text-primary/85">
                If social is easier, you can reach me here too.
              </p>
              <SocialLinks />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

