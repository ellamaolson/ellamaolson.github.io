'use client';

import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function ContactPage() {
  const handleScheduleClick = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/elanaolson/30min',
      });
    } else {
      // Fallback: open in new tab if script not loaded
      window.open('https://calendly.com/elanaolson/30min', '_blank');
    }
  };

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
                <Header level={1} className="text-text-onDark">
                  Contact me
                </Header>
                <Paragraph variant="p1" className="text-text-onDark">
                  If you're interested in working together, let's chat. Book a free 30-minute call and we can discuss your project.
                </Paragraph>
              </div>

              {/* Schedule a call (mobile: above What to include) */}
              <div className="lg:hidden space-y-4 text-text-onDark">
                <Button
                  as="button"
                  onClick={handleScheduleClick}
                  variant="primary"
                  className="bg-[#c2a23a] hover:bg-[#a8922e] text-white border-[#c2a23a]"
                >
                  Book a call with me
                </Button>
              </div>

              <div className="space-y-4 max-w-reading text-text-onDark">
                <Header level={2} className="text-text-onDark">
                  What to include
                </Header>
                <ul className="space-y-3 text-body text-text-onDark list-disc list-inside">
                  <li>
                    What service you're interested in:
                    <ul className="mt-2 pl-12 list-disc list-outside space-y-1">
                      <li>Website Creation</li>
                      <li>WebPage Redesign</li>
                      <li>Website Support</li>
                      <li>Contract Engineering</li>
                    </ul>
                  </li>
                  <li>Timeline and urgency</li>
                  <li>Links to anything relevant (site, repo, mockups)</li>
                  <li>Preferred contact method</li>
                </ul>
              </div>

              {/* Other ways to reach me (desktop: left column) */}
              <Section className="hidden lg:block pt-[13rem] max-w-reading" aria-label="Other ways to reach me">
                <div className="space-y-4 text-text-onDark">
                  <Paragraph className="text-text-onDark">
                    If you have a question before you're ready to book a call, email me at{' '}
                    <a
                      className="text-text-onDark underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                      href="mailto:elanaolson@gmail.com"
                    >
                      elanaolson@gmail.com
                    </a>
                    .
                  </Paragraph>

                  <div>
                    <Button as="link" href="mailto:elanaolson@gmail.com" variant="secondary">
                      Email me
                    </Button>
                  </div>
                </div>
              </Section>

              {/* Other ways to reach me (mobile: below What to include) */}
              <Section className="lg:hidden pt-8" aria-label="Other ways to reach me">
                <div className="space-y-4 max-w-reading text-text-onDark">
                  <Paragraph className="text-text-onDark">
                    If you have a question before you're ready to book a call, email me at{' '}
                    <a
                      className="text-text-onDark underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                      href="mailto:elanaolson@gmail.com"
                    >
                      elanaolson@gmail.com
                    </a>
                  </Paragraph>

                  <div>
                    <Button as="link" href="mailto:elanaolson@gmail.com" variant="secondary">
                      Email me
                    </Button>
                  </div>
                </div>
              </Section>
            </div>

            {/* Calendly Badge Widget (desktop: right column) */}
            <div className="hidden lg:block space-y-4 pt-[8.5rem]">
              <div className="space-y-4 text-text-onDark">
                <div className="space-y-2">
                  <Header level={2} className="text-text-onDark">
                    Schedule a call
                  </Header>
                  <Paragraph className="text-text-onDark max-w-reading">
                    Ready for a quick call? Schedule a free 30-minute slot to discuss your business needs and see where I can help.
                  </Paragraph>
                </div>
                
                <Button
                  as="button"
                  onClick={handleScheduleClick}
                  variant="primary"
                  className="bg-[#c2a23a] hover:bg-[#a8922e] text-white border-[#c2a23a]"
                >
                  Book a call with me
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
