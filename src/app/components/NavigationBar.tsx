'use client';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import styled from '@emotion/styled';

const NavContainer = styled.div`
  margin-bottom: 1em;
`;

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
  };

  return (
    <NavContainer>
      <Breadcrumbs aria-label="breadcrumb">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link color="text.primary" href={path} key={path}>
            {name}
          </Link>
        ))}
      </Breadcrumbs>
    </NavContainer>
  );
}
