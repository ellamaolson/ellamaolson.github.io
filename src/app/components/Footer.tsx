import Link from 'next/link';
import { Container } from './ui/Container';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-onDark bg-brand text-text-onDark">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-body font-medium text-text-onDark">Rooted Studio</p>
            <p className="text-body-small text-text-onDark/75 max-w-reading">
              Web design and engineering for small businesses and teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <p className="text-body-small font-medium text-text-onDark">Start here</p>
              <ul className="space-y-1">
                <li>
                  <Link className="text-body-small text-text-onDark/80 hover:text-text-onDark" href="/services">
                    Website services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-body-small text-text-onDark/80 hover:text-text-onDark"
                    href="/contracting"
                  >
                    Contract engineering
                  </Link>
                </li>
                <li>
                  <Link className="text-body-small text-text-onDark/80 hover:text-text-onDark" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-body-small font-medium text-text-onDark">More</p>
              <ul className="space-y-1">
                <li>
                  <Link className="text-body-small text-text-onDark/70 hover:text-text-onDark" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-body-small text-text-onDark/70 hover:text-text-onDark" href="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-body-small text-text-onDark/70 hover:text-text-onDark"
                    href="/publications"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-body-small text-text-onDark/70 hover:text-text-onDark"
                    href="/travel"
                  >
                    Travel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <SocialLinks className="pt-2 [&_a]:text-white [&_a:hover]:text-accent [&_a]:focus:ring-accent [&_a]:focus:ring-offset-brand [&_a]:focus:ring-offset-2" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-body-small text-text-onDark/60">
          <p>© {new Date().getFullYear()} Rooted Studio</p>
        </div>
      </Container>
    </footer>
  );
}

