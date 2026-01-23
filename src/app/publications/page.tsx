import Image from 'next/image';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import publicationsData from './publications.json';

export default function Publications() {
  const pubs = publicationsData?.publications;
  const sortedPubs = pubs?.sort((a, b) => {
    return Date.parse(b?.date) - Date.parse(a?.date);
  });

  return (
    <>
      <Section background="surfaceMuted" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-4 max-w-reading">
            <Header level={1}>Publications</Header>
            <Paragraph className="text-text-secondary">
              Writing and talks—mostly frontend engineering, React/Next.js, and Angular.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <ul className="space-y-10">
            {sortedPubs.map((pub, index) => {
              const pubDate = new Date(pub.date).toLocaleString('en-us', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              });
              const pubSite = pub.site[0].toUpperCase() + pub.site.slice(1);

              return (
                <li
                  key={`${pub.title}-${index}`}
                  className="border-l border-border-strong pl-6 space-y-3"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="shrink-0 relative h-16 w-16">
                      <Image
                        src={pub.image}
                        alt=""
                        fill
                        sizes="64px"
                        className="rounded-xl border border-border-subtle bg-surface-raised object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-2">
                      <Header level={2}>
                        <a
                          href={pub.link}
                          className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pub.title}
                        </a>
                      </Header>

                      <Paragraph className="text-text-primary/85 max-w-reading">{pub.description}</Paragraph>

                      <Paragraph variant="p3" className="text-text-secondary">
                        Published {pubDate} ·{' '}
                        <a
                          href={pub.siteUrl}
                          className="hover:text-accent underline underline-offset-4 decoration-border-strong transition-colors duration-200 focus:outline-none focus-visible:decoration-accent/80"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pubSite}
                        </a>
                      </Paragraph>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
