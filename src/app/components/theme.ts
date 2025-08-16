'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "sans-serif"',
    body1: {
      fontWeight: 400,
      color: 'white',
    },
    body2: {
      fontWeight: 400,
      color: 'white',
    },
    h1: {
      fontWeight: 500,
      fontSize: '1.75rem',
      marginBottom: '32px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.5rem',
      marginBottom: '8px',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.25rem',
      marginBottom: '4px',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1rem',
      marginBottom: '2px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
      color: 'white',
    },
  },
});

export default theme;
