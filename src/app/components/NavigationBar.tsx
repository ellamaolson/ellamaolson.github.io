'use client';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

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
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '50px' }}>
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link color="text.primary" href={path} key={path}>
          <Typography variant="button">{name}</Typography>
        </Link>
      ))}
    </Breadcrumbs>
  );
}
