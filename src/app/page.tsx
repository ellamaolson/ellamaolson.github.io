'use client';

import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { Heading } from './components/ui/Heading';
import { Button } from './components/ui/Button';
import { SocialLinks } from './components/ui/SocialLinks';
import babyAlpacaImage from '../../public/holding-baby-alpaca.jpeg';
import inkanRuinsImage from '../../public/pisac-ruins.jpeg';
import sequoiaImage from '../../public/sequoia.jpeg';
import lisbonImage from '../../public/lisbon.jpeg';
import eatingImage from '../../public/eating-sm.jpeg';
import elanaEliImage from '../../public/elana-eli.jpeg';
import { LoadableImage } from './components/LoadableImage';

export default function Home() {
  return (
    <>
      {/* Hero Section - Two clear paths */}
      <Section background="olive-leaf" padding="lg">
        <Container maxWidth="content">
          <div className="space-y-6">
            <Heading level={1} className="text-salt">
              Hi, I&apos;m Elana
            </Heading>
            <p className="text-body-large text-salt/95 max-w-reading">
              I build calm, welcoming websites for small businesses—and I also contract as a frontend
              engineer for teams who want clarity, maintainability, and thoughtful execution.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="link" href="/services" variant="secondary">
                Small business website services
              </Button>
              <Button as="link" href="/contracting" variant="outline">
                Frontend contract engineering
              </Button>
              <Button as="link" href="/contact" variant="ghost" className="text-salt hover:bg-salt/10">
                Contact →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* First Content Section - Warm credibility + human presence */}
      <Section background="warm-sand" padding="lg">
        <Container maxWidth="content">
          <div className="space-y-8">
            <div className="space-y-6 max-w-reading">
              <p className="text-body-large text-noir leading-relaxed">
                My work tends to be steady and practical: clear structure, calm typography, and
                interfaces that feel easy to trust. I care a lot about how a site reads—not just how
                it looks.
              </p>
              <p className="text-body text-noir/85 leading-relaxed">
                Outside of the office, I chase the sun, paint a little, and keep collecting travel
                moments that feel lived-in and real.
              </p>
            </div>

            {/* Photo Gallery - Lived-in, natural feel */}
            <div className="columns-2 sm:columns-3 gap-4 mt-12">
              <div className="relative h-40 mb-4 break-inside-avoid">
                <LoadableImage
                  alt="Me holding a baby alpaca in Peru"
                  src={babyAlpacaImage}
                  className="w-full h-full"
                  priority={true}
                />
              </div>
              <div className="relative h-80 mb-4 sm:mb-0 break-inside-avoid">
                <LoadableImage
                  alt="Me enjoying the winds whipping through the mountains in the Inkan ruins of Pisac, Peru"
                  src={inkanRuinsImage}
                  className="w-full h-full"
                  objectPosition="center"
                  priority={true}
                />
              </div>
              <div className="relative h-40 sm:h-80 sm:mb-4 break-inside-avoid">
                <LoadableImage
                  alt="Me standing under a Sequoia tree"
                  src={sequoiaImage}
                  className="w-full h-full"
                  objectPosition="top center"
                  priority={true}
                />
              </div>
              <div className="relative h-40 mb-4 sm:mb-0 break-inside-avoid">
                <LoadableImage
                  alt="My brother Eli and I at Yosemite National Park"
                  src={elanaEliImage}
                  className="w-full h-full"
                  priority={true}
                />
              </div>
              <div className="relative h-40 mb-4 break-inside-avoid">
                <LoadableImage
                  alt="Eating doner kebab - yum!"
                  src={eatingImage}
                  className="w-full h-full"
                  priority={true}
                />
              </div>
              <div className="relative h-80 break-inside-avoid">
                <LoadableImage
                  alt="Me in the old town of Lisbon, Portugal"
                  src={lisbonImage}
                  className="w-full h-full"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Current Focus Section */}
      <Section background="salt" padding="lg">
        <Container maxWidth="content">
          <div className="space-y-8 max-w-reading">
            <Heading level={2} className="text-noir">
              What am I focusing on right now?
            </Heading>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Building a supportive community for women
                </h3>
                <p className="text-body text-noir/90 leading-relaxed">
                  I co-lead a local women&apos;s group in San Diego with my good friend Ali. For the
                  past two years we have led workshops on topics ranging from financial literacy to
                  feminism to modern women&apos;s health science. We facilitate a space to learn,
                  support, and grow together as a community - reflecting on diverse perspectives and
                  leading with curiosity first.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Doing lots of art projects
                </h3>
                <p className="text-body text-noir/90 leading-relaxed">
                  Love to watercolor and tend to travel with a small kit to capture scenes and embrace
                  the present moment a bit more colorfully. At home I&apos;m working on a temperature
                  blanket (the size of my bed) mapping daily high temperatures to yarn colors.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-heading-3 font-medium text-noir">
                  Learning about health, relational dynamics, morality, and the occasional fantasy series
                </h3>
                <p className="text-body text-noir/90 leading-relaxed mb-4">
                  Here&apos;s some recs:
                </p>
                <ul className="space-y-3 list-disc list-inside text-body text-noir/90 ml-4">
                  <li>
                    <em>Huberman Labs</em> - a health and science podcast led by Andrew Huberman to bring
                    scientific findings and tools to the general public
                  </li>
                  <li>
                    <em>Us: Getting Past You and Me to Build a More Loving Relationship</em> - Terrance Real
                    approaches relational dynamics with an &quot;us&quot; way of thinking, instead of
                    handling life&apos;s challenges from a &quot;you&quot; and &quot;me&quot; perspective
                  </li>
                  <li>
                    <em>Lying</em> - In such a little book, Sam Harris discusses the morality of lying and
                    breaks down various applications and ethical dilemmas surrounding it
                  </li>
                  <li>
                    <em>Throne of Glass series</em> - Sarah J. Maas creates this vivid and dynamic world
                    with magic, strong heroines, and complex series-long plot arcs that reveal kingdom
                    conspiracies and demand a balance of fighting for survival and sacrificing for the
                    greater good.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Links Section */}
      <Section background="warm-sand" padding="md">
        <Container maxWidth="content">
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </Container>
      </Section>
    </>
  );
}
