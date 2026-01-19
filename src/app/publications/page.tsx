import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
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
            <Heading level={1}>Publications</Heading>
            <p className="text-body text-text-secondary">
              Writing and talks—mostly frontend engineering, React/Next.js, and Angular.
            </p>
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
                    {/* Use <img> to avoid next/image remote domain config for static export */}
                    <div className="shrink-0">
                      <img
                        src={pub.image}
                        alt=""
                        className="h-16 w-16 rounded-xl border border-border-subtle bg-surface-raised object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-editorial text-h3 text-text-primary">
                        <a
                          href={pub.link}
                          className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pub.title}
                        </a>
                      </h2>

                      <p className="text-body text-text-primary/85 max-w-reading">{pub.description}</p>

                      <p className="text-body-small text-text-secondary">
                        Published {pubDate} ·{' '}
                        <a
                          href={pub.siteUrl}
                          className="hover:text-accent underline underline-offset-4 decoration-border-strong transition-colors duration-200 focus:outline-none focus-visible:decoration-accent/80"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {pubSite}
                        </a>
                      </p>
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
