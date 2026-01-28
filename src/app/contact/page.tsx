'use client';

import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
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
        url: 'https://calendly.com/elana-elanaolson/30min',
      });
    } else {
      // Fallback: open in new tab if script not loaded
      window.open('https://calendly.com/elana-elanaolson/30min', '_blank');
    }
  };

  return (
    <>
      <Section
        background="transparent"
        padding="none"
        className="relative min-h-screen overflow-hidden"
      >
        {/* Full-viewport background image */}
        <div
          className="absolute inset-0 bg-brand bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/la-jolla.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#726D6D]/20" aria-hidden="true" />
        {/* Calm overlay for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand/55 via-text-primary/35 to-brand/60"
          aria-hidden="true"
        />

        <Container maxWidth="wide" className="relative min-h-screen py-10 sm:py-14">
          <div className="flex items-start justify-center min-h-[calc(100vh-8rem)] pt-20">
            <div className="w-full max-w-reading mx-auto text-left text-text-onDark">
              {/* 1. Contact me */}
              <div className="space-y-4">
                <Header level={1} className="text-text-onDark">
                  Contact me
                </Header>
                <Paragraph variant="p1" className="text-text-onDark">
                  Contact me to discuss your business needs and see if we&apos;re a good fit.
                </Paragraph>
              </div>
              <div className="space-y-4 mt-16">
                <Header level={2} className="text-text-onDark">
                  Schedule a call
                </Header>
                <Paragraph className="text-text-onDark">
                  Ready for a quick call? Schedule a free 30-minute consultation to share your
                  vision or explain your team&#39;s needs and we&#39;ll see where I can help.
                </Paragraph>
                <Button
                  as="button"
                  onClick={handleScheduleClick}
                  variant="primary"
                  className="bg-[#c2a23a] hover:bg-[#a8922e] text-white border-[#c2a23a]"
                >
                  Book a call with me
                </Button>
              </div>

              {/* 3. What to include */}
              <div className="space-y-4 mt-10">
                <Header level={3} className="text-text-onDark">
                  What to include
                </Header>
                <ul className="space-y-3 text-body text-text-onDark list-disc list-inside">
                  <li>
                    What service you&#39;re interested in:
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

              {/* 4. If you have a question */}
              <div className="space-y-4 mt-16">
                <Paragraph className="text-text-onDark">
                  If you have a question before you&#39;re ready to book a call, you can email me at{' '}
                  <a
                    className="text-text-onDark underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                    href="mailto:elana@elanaolson.com"
                  >
                    elana@elanaolson.com
                  </a>
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
