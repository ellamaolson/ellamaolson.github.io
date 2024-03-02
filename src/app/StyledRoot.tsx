'use client';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { NavigationBar } from './components/NavigationBar';

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <NavigationBar />
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
