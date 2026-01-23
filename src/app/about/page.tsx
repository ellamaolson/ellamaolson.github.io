import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';
import { LoadableImage } from '../components/LoadableImage';
import babyAlpacaImage from '../../../public/holding-baby-alpaca.jpeg';
import lisbonImage from '../../../public/lisbon.jpeg';
import elanaEliImage from '../../../public/elana-eli.jpeg';
import elanaSpainImage from '../../../public/elana-spain.jpeg';
import elanaTreesImage from '../../../public/elana-trees-sm.jpg';
import elanaNetherlandsImage from '../../../public/elana-netherlands.jpeg';

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section background="transparent" padding="md" className="relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/flowers-growing.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[#A15A2B]/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-surfaceMuted via-surfaceMuted to-transparent"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
          aria-hidden="true"
        />
        <Container className="relative" maxWidth="wide">
          <div className="space-y-6 max-w-reading mb-12">
            <Header level={1} className="text-text-onDark">Hi, I&apos;m Elana</Header>
            <Paragraph variant="p1" className="text-text-onDark">
              I&rsquo;m a software engineer turned independent website creator, helping small businesses and
              teams turn ideas into awesome digital experiences.
            </Paragraph>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.35fr_1.25fr] md:items-start">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="grid gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="Visiting Seville, Spain"
                    src={elanaSpainImage}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="Walking the canals in Utrecht, Netherlands"
                    src={elanaNetherlandsImage}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="My brother Eli and I at Yosemite National Park"
                    src={elanaEliImage}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="Sitting in the old town of Lisbon, Portugal"
                    src={lisbonImage}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="Holding a baby alpaca in Peru"
                    src={babyAlpacaImage}
                    className="w-full h-full"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-raised">
                  <LoadableImage
                    alt="Surrounded by Sequoia trees in the Sequoia National Park"
                    src={elanaTreesImage}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-reading">
            <div className="mb-16">
              <Header level={2} className="text-text-onDark">
                Where people and technology meet
              </Header>
              <div className="space-y-4">
                <Paragraph variant="p1" className="leading-relaxed text-text-onDark">
                I know “people person” isn’t what most folks picture when I say I’m a software 
                engineer — but working with people is my favorite part of the job. I work at the 
                intersection of both worlds: understanding people deeply and digging into the details 
                to build something thoughtful and well-crafted.
                </Paragraph>
              </div>
            </div>
            <div className="mb-16">
              <Header level={2} className="mt-16 text-text-onDark">
                How I got here (and why it works)
              </Header>
              <div className="space-y-4">
                <Paragraph variant="p1" className="text-text-onDark leading-relaxed">
                I studied Software Engineering at San José State University and have worked across 
                startups and larger organizations, where I found my home in frontend development. 
                Today, I work directly with small businesses and product teams — designing and building 
                thoughtful, maintainable websites and offering contract frontend support when teams need it.
                My goal is simple: bring steady engineering, clear structure, and good energy to every project.
                </Paragraph>
              </div>
            </div>
            <div className="mb-16">
              <Header level={2} className="mt-16 text-text-onDark">
                Me outside of work
              </Header>
              <div className="space-y-4">
                <Paragraph variant="p1" className="text-text-onDark leading-relaxed">
                I seek out opportunities to engage in my local communities. I co-lead a local women’s 
                group and volunteer at a sustainability oriented community kitchen - these spaces 
                ground me and remind me why I care so much about people, process, and creating things that genuinely serve.
                </Paragraph>
              </div>
            </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
          <Button
                as="link"
                href="/contact"
                variant="outlineLight"
                className="bg-transparent"
              >
                Contact →
              </Button>
          </div>
        </Container>
      </Section>

      
    </>
  );
}
