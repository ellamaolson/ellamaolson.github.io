import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import { StyledRoot } from './components/StyledRoot';
import { GTMPageView } from './components/GTMPageView';
import './globals.css';
import './fonts.css';

const CALENDLY_WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elana Olson',
  description: 'Software Engineer and Website Creator',
  icons: {
    icon: '/favicon.ico',
  },
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
    <html lang="en" className={dmSerifDisplay.variable}>
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
        <link rel="preconnect" href="https://medium.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Calendly badge widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

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

        {/* Preload critical hero images for better performance */}
        <link rel="preload" as="image" href="/oak%20growing%20right.jpg" fetchPriority="high" />
        {/* Preload other critical hero images */}
        <link rel="preload" as="image" href="/sunset-forest.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/green-moutnain.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/la-jolla.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/flowers-growing.jpg" fetchPriority="high" />
      </head>
      <body className="font-body">
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

        {/* Load Calendly widget script at end of body */}
        <Script src={CALENDLY_WIDGET_SRC} strategy="lazyOnload" async />
      </body>
    </html>
  );
}
