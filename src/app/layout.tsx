import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './components/StyledRoot';
import './globals.css';
import './fonts.css';

export const metadata: Metadata = {
  title: 'Elana Olson',
  description: 'Engineer who loves traveling and painting',
  other: {
    'viewport-fit': 'cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://twitter.com" />
        <link rel="preconnect" href="https://medium.com" />

        {/* Preload critical fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/inter-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preload critical images for better performance */}
        <link rel="preload" as="image" href="/holding-baby-alpaca.jpeg" type="image/jpeg" />
        <link rel="preload" as="image" href="/pisac-ruins.jpeg" type="image/jpeg" />
        <link rel="preload" as="image" href="/sequoia.jpeg" type="image/jpeg" />
        <link rel="preload" as="image" href="/elana-eli.jpeg" type="image/jpeg" />
        <link rel="preload" as="image" href="/eating-sm.jpeg" type="image/jpeg" />
        <link rel="preload" as="image" href="/lisbon.jpeg" type="image/jpeg" />
      </head>
      <body className="font-inter">
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
