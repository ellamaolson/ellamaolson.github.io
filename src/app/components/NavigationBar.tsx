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
            className="text-heading-3 font-medium text-noir hover:text-olive-leaf transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive-leaf focus:ring-offset-2 rounded px-1 py-1"
            aria-label="Rooted Studio, home"
          >
            Rooted Studio
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:items-end sm:ml-auto">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4" aria-label="Primary navigation">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body text-olive-leaf hover:text-noir transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive-leaf focus:ring-offset-2 rounded px-2 py-1"
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
