import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Grid } from '../components/ui/Grid';
import { LoadableImage } from '../components/LoadableImage';
import babyAlpacaImage from '../../../public/holding-baby-alpaca.jpeg';
import sequoiaImage from '../../../public/sequoia.jpeg';
import lisbonImage from '../../../public/lisbon.jpeg';
import elanaEliImage from '../../../public/elana-eli.jpeg';

export default function AboutPage() {
  return (
    <>
      {/* Header: warm ochre wash (subtle translucency) */}
      <Section background="transparent" padding="md" className="bg-palette-ochre">
        <Container>
          <div className="space-y-6 max-w-reading">
            <Header level={1}>About</Header>
            <Paragraph variant="p1" className="text-text-primary/90">
              I care about work that feels steady and human: clear writing, thoughtful structure, and calm UI
              that helps people understand what they’re looking at.
            </Paragraph>
            <Paragraph className="text-text-primary/85">
              I’m happiest when I’m simplifying complex ideas—whether that’s turning a messy UI into a clean
              component system, or helping a small business describe their offer in a way that feels honest
              and easy to trust.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Credibility / approach: left-aligned reading, balanced with imagery */}
      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <Grid variant="asymmetric" reverseOnDesktop>
            <div className="space-y-5">
              <Header level={2} className="text-balance">
                 Warm clarity: a friendly tone and precise structure.
              </Header>
              <div className="space-y-4 max-w-reading">
                <Paragraph variant="p1" className="text-text-primary/90 leading-relaxed">
                  My work tends to be steady and practical: calm typography, clear structure, and
                  interfaces that feel easy to trust.
                </Paragraph>
                <Paragraph className="text-text-secondary leading-relaxed">
                  I’m thoughtful about how things read, where attention goes, and what a visitor
                  needs to feel comfortable saying “yes.”
                </Paragraph>
              </div>

              <div className="pt-2">
                <div className="border-l border-border-strong pl-4 space-y-2 max-w-reading">
                  <Paragraph className="text-text-primary/85">
                    <strong>For small businesses:</strong> welcoming pages, simple maintenance, and
                    practical SEO.
                  </Paragraph>
                  <Paragraph className="text-text-primary/85">
                    <strong>For teams:</strong> React + TypeScript work that’s maintainable and kind
                    to the next engineer.
                  </Paragraph>
                </div>
              </div>

              {/* Spacer beats parent `space-y-*` specificity */}
              <div className="h-20 md:h-32" aria-hidden="true" />
              <Header level={2} className="text-balance">
                Strong engineering, sites built for the long run.
              </Header>
              <div className="space-y-4 max-w-reading">
                <Paragraph variant="p1" className="text-text-primary/90 leading-relaxed">
                  My work tends to be steady and practical: calm typography, clear structure, and
                  interfaces that feel easy to trust.
                </Paragraph>
                <Paragraph className="text-text-secondary leading-relaxed">
                  I’m thoughtful about how things read, where attention goes, and what a visitor
                  needs to feel comfortable saying “yes.”
                </Paragraph>
              </div>

              <div className="pt-2">
                <div className="border-l border-border-strong pl-4 space-y-2 max-w-reading">
                  <Paragraph className="text-text-primary/85">
                    <strong>For small businesses:</strong> welcoming pages, simple maintenance, and
                    practical SEO.
                  </Paragraph>
                  <Paragraph className="text-text-primary/85">
                    <strong>For teams:</strong> React + TypeScript work that’s maintainable and kind
                    to the next engineer.
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* Collage-style imagery (reference-inspired density + warmth) */}
            <div className="grid grid-cols-6 gap-3 sm:gap-4">
              <div className="col-span-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="Me holding a baby alpaca in Peru"
                    src={babyAlpacaImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="My brother Eli and I at Yosemite National Park"
                    src={elanaEliImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="Me in the old town of Lisbon, Portugal"
                    src={lisbonImage}
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>

              <div className="col-span-2 hidden sm:block">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised">
                  <LoadableImage
                    alt="Me standing under a Sequoia tree"
                    src={sequoiaImage}
                    className="w-full h-full"
                    objectPosition="top center"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Current Focus Section */}
      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-8 max-w-reading">
            <Header level={2}>
              What am I focusing on right now?
            </Header>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <Header level={3}>
                  Building a supportive community for women
                </Header>
                <Paragraph className="text-text-primary/85 leading-relaxed">
                  I co-lead a local women&apos;s group in San Diego with my good friend Ali. For the
                  past two years we have led workshops on topics ranging from financial literacy to
                  feminism to modern women&apos;s health science. We facilitate a space to learn,
                  support, and grow together as a community - reflecting on diverse perspectives and
                  leading with curiosity first.
                </Paragraph>
              </div>

              <div className="space-y-3">
                <Header level={3}>
                  Doing lots of art projects
                </Header>
                <Paragraph className="text-text-primary/85 leading-relaxed">
                  Love to watercolor and tend to travel with a small kit to capture scenes and embrace
                  the present moment a bit more colorfully. At home I&apos;m working on a temperature
                  blanket (the size of my bed) mapping daily high temperatures to yarn colors.
                </Paragraph>
              </div>

              <div className="space-y-3">
                <Header level={3}>
                  Learning about health, relational dynamics, morality, and the occasional fantasy series
                </Header>
                <Paragraph className="text-text-primary/85 leading-relaxed mb-4">
                  Here&apos;s some recs:
                </Paragraph>
                <ul className="space-y-3 list-disc list-inside text-body text-text-primary/85 ml-4">
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

    </>
  );
}

