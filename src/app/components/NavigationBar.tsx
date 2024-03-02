'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'blog',
  },
};

export function NavigationBar() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link underline="hover" color="inherit" href="/" key={path}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
