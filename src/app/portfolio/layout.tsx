import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website portfolio | Elana Olson',
  description: 'A website development portfolio — custom design and build for small businesses.',
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
