'use client';

import Link from 'next/link';
import { useRef } from 'react';

export function NavigationBar() {
  const menuDetailsRef = useRef<HTMLDetailsElement>(null);
  
  const primaryNavItems = [
    { href: '/services', name: 'Website services' },
    { href: '/contracting', name: 'Contract engineering' },
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
  ];

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    if (menuDetailsRef.current) {
      menuDetailsRef.current.removeAttribute('open');
    }
  };

  return (
    <header className="mb-0">
      <nav className="flex items-center justify-between gap-4 w-full">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="text-[1.5rem] font-medium text-text-onDark hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80 font-heading"
          aria-label="Elana Olson home"
        >
          Elana Olson
        </Link>

        {/* Mobile: hamburger + dropdown */}
        <details ref={menuDetailsRef} className="group relative sm:hidden">
          <summary
            className="list-none inline-flex items-center justify-center rounded-md p-2 text-text-onDark/90 hover:text-text-onDark hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand [&::-webkit-details-marker]:hidden"
            aria-label="Open primary navigation"
          >
            <span className="sr-only">Open menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 group-open:hidden"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 hidden group-open:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </summary>

          <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-border-onDark bg-brand shadow-lg z-50">
            <ul className="py-2" aria-label="Primary navigation">
              {primaryNavItems.map((item) => {
                const isContact = item.href === '/contact';
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={
                        isContact
                          ? 'block px-4 py-3 text-[1.1rem] text-accent hover:text-accent/90 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80 font-heading'
                          : 'block px-4 py-3 text-[1.1rem] text-text-onDark/90 hover:text-accent hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80 font-heading'
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>

        {/* Desktop: inline menu */}
        <div className="hidden sm:flex sm:items-center sm:ml-auto">
          <ul className="flex flex-wrap items-center gap-6" aria-label="Primary navigation">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[1.1rem] text-text-onDark/85 hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80 font-heading"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
