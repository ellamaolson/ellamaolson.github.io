import Link from 'next/link';
import { Container } from './ui/Container';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-antique/40 bg-antique/40">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-body font-medium text-noir">Elana Olson</p>
            <p className="text-body-small text-noir/75 max-w-reading">
              Calm, practical work—built for real people. Websites for small businesses and frontend
              engineering support for teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <p className="text-body-small font-medium text-noir">Start here</p>
              <ul className="space-y-1">
                <li>
                  <Link className="text-body-small text-olive-leaf hover:text-noir" href="/services">
                    Website services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-body-small text-olive-leaf hover:text-noir"
                    href="/contracting"
                  >
                    Contract engineering
                  </Link>
                </li>
                <li>
                  <Link className="text-body-small text-olive-leaf hover:text-noir" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-body-small font-medium text-noir">More</p>
              <ul className="space-y-1">
                <li>
                  <Link className="text-body-small text-noir/75 hover:text-noir" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-body-small text-noir/75 hover:text-noir" href="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-body-small text-noir/75 hover:text-noir"
                    href="/publications"
                  >
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-body-small font-medium text-noir">Around</p>
              <ul className="space-y-1">
                <li>
                  <Link className="text-body-small text-noir/75 hover:text-noir" href="/travel">
                    Travel
                  </Link>
                </li>
              </ul>
              <SocialLinks className="pt-2" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-body-small text-noir/60">
          <p>© {new Date().getFullYear()} Elana Olson</p>
        </div>
      </Container>
    </footer>
  );
}

