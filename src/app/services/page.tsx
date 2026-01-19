import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function ServicesPage() {
  return (
    <>
      <Section background="transparent" padding="none" className="relative overflow-hidden min-h-[50vh] flex items-end">
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
              Websites for small businesses that feel human and work hard.
            </Heading>
            <p className="text-body-large text-text-onDark/90 max-w-reading">
              Warm, grounded design with clear messaging, fast performance, and practical SEO—so people can
              find you and trust you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="link" href="/contact" variant="secondary">
                Ask about a project
              </Button>
              <Button as="link" href="/about" variant="outlineLight">
                Learn how I work
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Heading level={2}>What I build</Heading>
              <ul className="space-y-3 text-body text-text-primary/85">
                <li>
                  <strong>Marketing sites</strong> with clear structure, calm typography, and thoughtful
                  conversions.
                </li>
                <li>
                  <strong>Simple refreshes</strong> for sites that feel dated, confusing, or hard to
                  maintain.
                </li>
                <li>
                  <strong>Landing pages</strong> for a specific offer, launch, or seasonal push.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Heading level={2}>What you can expect</Heading>
              <ul className="space-y-3 text-body text-text-primary/85">
                <li>
                  <strong>Collaborative process</strong>—you’ll always know what’s happening and what
                  I need from you.
                </li>
                <li>
                  <strong>Reading comfort</strong>—layouts that breathe and feel welcoming.
                </li>
                <li>
                  <strong>Practical SEO</strong>—semantic HTML, headings, and content structure that
                  search engines understand.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="lg">
        <Container>
          <div className="space-y-6 max-w-reading">
            <Heading level={2}>A simple process</Heading>
            <ol className="space-y-3 text-body text-text-primary/85 list-decimal list-inside">
              <li>
                <strong>Discovery</strong>: goals, audience, tone, and what “success” looks like.
              </li>
              <li>
                <strong>Structure</strong>: content plan + page outline (so the site reads well).
              </li>
              <li>
                <strong>Design + build</strong>: Tailwind-based UI, responsive layout, performance
                basics.
              </li>
              <li>
                <strong>Launch</strong>: handoff, guidance, and optional ongoing support.
              </li>
            </ol>
            <div className="pt-2">
              <Button as="link" href="/contact">
                Contact me
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

