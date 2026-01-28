import Link from 'next/link';
import { Container } from './ui/Container';
import { Paragraph } from './ui/Paragraph';
import { Header } from './ui/Header';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-onDark bg-brand text-text-onDark">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <Paragraph className="text-[2rem] font-medium text-text-onDark font-heading">Elana Olson</Paragraph>
            <Paragraph variant="p3" className="text-text-onDark max-w-reading">
              Web design and engineering for small businesses and teams.
            </Paragraph>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <Header level={5} className="text-text-onDark">Start here</Header>
              <ul className="space-y-1">
                <li>
                  <Link className="text-small text-text-onDark hover:text-text-onDark" href="/services">
                    Website services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-small text-text-onDark hover:text-text-onDark"
                    href="/contracting"
                  >
                    Contract engineering
                  </Link>
                </li>
                <li>
                  <Link className="text-small text-text-onDark hover:text-text-onDark" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <Header level={5} className="text-text-onDark">More</Header>
              <ul className="space-y-1">
                <li>
                  <Link className="text-small text-text-onDark hover:text-text-onDark" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-small text-text-onDark hover:text-text-onDark" href="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-small text-text-onDark hover:text-text-onDark"
                    href="/publications"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-small text-text-onDark hover:text-text-onDark"
                    href="/travel"
                  >
                    Travel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <Paragraph variant="p3" className="text-text-onDark">
                <a
                  href="mailto:elana@elanaolson.com"
                  className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-accent/80"
                >
                  elana@elanaolson.com
                </a>
              </Paragraph>
              <SocialLinks className="pt-2 [&_a]:text-white [&_a:hover]:text-accent [&_a]:focus:ring-accent [&_a]:focus:ring-offset-brand [&_a]:focus:ring-offset-2" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Paragraph variant="p3" className="text-text-onDark">© {new Date().getFullYear()} Elana Olson</Paragraph>
        </div>
      </Container>
    </footer>
  );
}

