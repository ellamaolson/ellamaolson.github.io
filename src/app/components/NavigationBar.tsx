import Link from 'next/link';

export function NavigationBar() {
  const primaryNavItems = [
    { href: '/', name: 'Home' },
    { href: '/services', name: 'Website services' },
    { href: '/contracting', name: 'Contract engineering' },
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
  ];

  return (
    <header className="mb-0">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
        <div className="flex items-baseline justify-between gap-4 sm:justify-start">
          <Link
            href="/"
            className="text-heading-3 font-medium text-text-onDark hover:text-accent transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
            aria-label="Rooted Studio, home"
          >
            Rooted Studio
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:items-end sm:ml-auto">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6" aria-label="Primary navigation">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body text-text-onDark/85 hover:text-text-onDark transition-colors duration-200 py-1 focus:outline-none focus-visible:underline focus-visible:underline-offset-8 focus-visible:decoration-accent/80"
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
