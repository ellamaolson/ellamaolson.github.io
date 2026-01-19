import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { SocialLinks } from '../components/ui/SocialLinks';
import { CalendlyEmbed } from '../components/CalendlyEmbed';

export default function ContactPage() {
  return (
    <>
      <Section background="transparent" padding="none" className="relative min-h-screen overflow-hidden">
        {/* Full-viewport background image */}
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/little-tree.jpg')" }}
          aria-hidden="true"
        />
        {/* Calm overlay for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand/55 via-text-primary/35 to-brand/60"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative min-h-screen py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4 max-w-reading text-text-onDark">
                <Heading level={1} className="text-text-onDark">
                  Contact me
                </Heading>
                <p className="text-body-large text-text-onDark/90">
                  If you’re interested in working together, let’s chat. Book a free 30-minute call and we can discuss your project.
                </p>
              </div>

              <div className="space-y-4 max-w-reading text-text-onDark">
                <Heading level={2} className="text-text-onDark">
                  What to include
                </Heading>
                <ul className="space-y-3 text-body text-text-onDark/85 list-disc list-inside">
                  <li>What service you’re interested in (Website support or Contract engineering))</li>
                  <li>Timeline and urgency</li>
                  <li>Links to anything relevant (site, repo, mockups)</li>
                  <li>Preferred contact method</li>
                </ul>
              </div>
            </div>

            {/* Calendly */}
            <div className="space-y-4">
              <div className="space-y-2 text-text-onDark">
                <Heading level={2} className="text-text-onDark">
                  Schedule a call
                </Heading>
                <p className="text-body text-text-onDark/85 max-w-reading">
                  Ready for a quick call? Grab a free 30-minute slot.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border-onDark bg-white/10 backdrop-blur-sm">
                <CalendlyEmbed
                  url="https://calendly.com/elanaolson/30min?primary_color=c2a23a"
                  // Fit within viewport on larger screens; still scrollable on small screens if needed.
                  height="min(700px, calc(100vh - 240px))"
                  minWidth={320}
                />
              </div>

              {/* Secondary contact options (below Calendly) */}
              <section className="pt-2" aria-label="Other ways to reach me">
                <div className="space-y-4 max-w-reading text-text-onDark/90">
                  <p className="text-body">
                    If you have a question before you’re ready to book a call, email me at {' '}
                    <a
                      className="text-text-onDark underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                      href="mailto:elanaolson@gmail.com"
                    >
                      elanaolson@gmail.com
                    </a>
                    .
                  </p>

                  <div>
                    <Button as="link" href="mailto:elanaolson@gmail.com" variant="secondary">
                      Email me
                    </Button>
                  </div>

                  <SocialLinks className="pt-2 [&_a]:text-text-onDark/80 [&_a:hover]:text-accent [&_a]:focus:ring-accent [&_a]:focus:ring-offset-brand [&_a]:focus:ring-offset-2" />
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

