import Image from 'next/image';
import Link from 'next/link';
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
      <Section
        background="transparent"
        padding="md"
        className="relative overflow-hidden min-h-screen"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/flowers-growing.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#242D1A]/80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-surfaceMuted via-surfaceMuted to-transparent"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
          aria-hidden="true"
        />
        <Container className="relative" maxWidth="wide">
          <div className="space-y-6 max-w-reading mx-auto text-center py-20">
            <Header level={1} className="text-text-onDark">
              Hi, I&apos;m Elana
            </Header>
            <Paragraph variant="p1" className="text-text-onDark">
              I&rsquo;m a software engineer turned independent website creator, helping small
              businesses and teams turn ideas into awesome digital experiences.
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
                      priority={true}
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-raised">
                    <LoadableImage
                      alt="Walking the canals in Utrecht, Netherlands"
                      src={elanaNetherlandsImage}
                      className="w-full h-full"
                      priority={true}
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
              <div>
                <Header level={2} className="text-text-onDark">
                  Where people and technology meet
                </Header>
                <div className="space-y-4">
                  <Paragraph variant="p2" className="leading-relaxed text-text-onDark">
                    I know “people person” isn’t what most folks picture when I say I’m a software
                    engineer — but working with people is my favorite part of the job. I work at the
                    intersection of both worlds: understanding people deeply and digging into the
                    details to build something thoughtful and well-crafted.
                  </Paragraph>
                  <Paragraph variant="p2" className="text-text-onDark leading-relaxed">
                    My goal is simple:{' '}
                    <span className="font-bold italic">
                      bring steady engineering, clear structure, and good energy to every project
                      and team.
                    </span>
                  </Paragraph>
                </div>
              </div>
              <div>
                <Header level={2} className="mt-28 text-text-onDark">
                  How I got here (and why it works)
                </Header>
                <div className="space-y-4">
                  <Paragraph variant="p2" className="text-text-onDark leading-relaxed">
                    I studied Software Engineering at SJSU, where hands-on projects sparked my
                    interest in web development. After that, I worked across both small startups and
                    large companies, including Atlassian and Google, building websites and products
                    used by millions. Today, I partner with small businesses and developing teams to
                    create websites and products that support real business growth.
                  </Paragraph>

                  <div className="text-body text-text-onDark/85 text-left mt-6">
                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                      <Image
                        src="/sjsu.svg"
                        alt="San Jose State University"
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div className="space-y-0.5">
                        <Header level={4} className="font-[700] italic text-text-onDark">
                          BS in Software Engineering
                        </Header>
                        <Paragraph className="text-text-onDark/85">
                          San Jose State University
                        </Paragraph>
                        <Paragraph variant="p3" className="text-text-onDark/70">
                          Graduated Cum Laude, May 2020
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Header level={2} className="mt-28 text-text-onDark">
                  Me outside of work
                </Header>
                <div className="space-y-4">
                  <Paragraph variant="p2" className="text-text-onDark leading-relaxed">
                    I seek out opportunities to engage in my local communities. I co-lead a women’s
                    group and volunteer at a sustainability oriented community kitchen. These spaces
                    ground me and remind me why I care so much about people, process, and creating
                    things that genuinely serve. I also love to read, crochet, hike, and travel the
                    world. Check out my{' '}
                    <Link
                      href="/travel"
                      className="text-text-onDark underline underline-offset-4 decoration-current hover:text-accent transition-colors duration-200"
                    >
                      travel section
                    </Link>{' '}
                    to see more.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button as="link" href="/contact" variant="primary">
              Let&rsquo;s chat!
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
