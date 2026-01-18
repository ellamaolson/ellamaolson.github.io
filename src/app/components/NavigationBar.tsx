import Link from 'next/link';

export function NavigationBar() {
  const navItems = {
    '/': {
      name: 'home',
    },
    '/work': {
      name: 'work',
    },
    '/publications': {
      name: 'publications',
    },
    '/travel': {
      name: 'travel',
    },
  };

  return (
    <nav className="mb-12" aria-label="Main navigation">
      <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
        {Object.entries(navItems).map(([path, { name }]) => (
          <li key={path}>
            <Link
              href={path}
              className="text-body text-olive-leaf hover:text-opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive-leaf focus:ring-offset-2 rounded px-2 py-1"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
