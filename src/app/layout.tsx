import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import { StyledRoot } from './components/StyledRoot';
import { GTMPageView } from './components/GTMPageView';
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
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQ27FNXB');
          `}
        </Script>

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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ27FNXB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Suspense fallback={null}>
          <GTMPageView />
        </Suspense>
        <StyledRoot>{children}</StyledRoot>
      </body>
    </html>
  );
}
