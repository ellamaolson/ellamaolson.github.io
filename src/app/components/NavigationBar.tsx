'use client';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const NavContainer = styled.div`
  margin-bottom: 50px;
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
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </NavContainer>
  );
}
