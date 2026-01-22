import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { SocialLinks } from '../components/ui/SocialLinks';
import workData from './work.json';

export default function Work() {
  const workList = workData?.work;

  const formatDate = (date: string) => {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleString('en-us', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <>
      <Section background="surfaceMuted" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-4 max-w-reading">
            <Header level={1}>Work</Header>
            <Paragraph className="text-text-secondary">
              A few roles and projects I’ve been part of—focused on frontend engineering, systems work, and
              clear communication.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section background="surface" padding="lg">
        <Container maxWidth="wide">
          <div className="space-y-12">
            {workList.map((work, index) => {
              const startDate = formatDate(work.startDate);
              const endDate = work.endDate ? formatDate(work.endDate) : 'Present';

              return (
                <article key={`${work.company}-${work.title}-${index}`} className="space-y-4">
                  <header className="space-y-2">
                    <Header level={2}>{work.company}</Header>
                    <Header level={3}>{work.title}</Header>
                    <Paragraph variant="p3" className="text-text-secondary">
                      {startDate} – {endDate}
                      {work.location ? <span> · {work.location}</span> : null}
                      {work.status ? <span> · {work.status}</span> : null}
                    </Paragraph>
                  </header>

                  {work.description ? (
                    <Paragraph className="text-text-primary/85 max-w-reading">{work.description}</Paragraph>
                  ) : null}

                  {work.notes?.length ? (
                    <ul className="list-disc pl-5 space-y-2 text-body text-text-primary/85 max-w-reading">
                      {work.notes.map((note, noteIndex) => (
                        <li key={noteIndex}>{note}</li>
                      ))}
                    </ul>
                  ) : null}

                  {work.relavantLinks?.length ? (
                    <div className="space-y-2 max-w-reading">
                      <Paragraph variant="p3" className="font-medium tracking-[0.14em] uppercase text-text-secondary">
                        Links
                      </Paragraph>
                      <ul className="space-y-2">
                        {work.relavantLinks.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link}
                              className="text-body text-brand-olive hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-border-strong focus:outline-none focus-visible:decoration-accent/80"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {index !== workList.length - 1 ? (
                    <hr className="pt-8 border-0 border-t border-border-subtle" />
                  ) : null}
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="surfaceMuted" padding="md">
        <Container maxWidth="wide">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <Paragraph className="text-text-secondary max-w-reading">
              If you’d like to collaborate, start with a short note—what you’re building, what’s stuck, and
              what “good” looks like.
            </Paragraph>
            <SocialLinks />
          </div>
        </Container>
      </Section>
    </>
  );
}
