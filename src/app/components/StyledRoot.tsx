import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';
import { Container } from './ui/Container';

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-brand text-text-onDark border-b border-border-onDark">
        <Container maxWidth="wide" className="py-4">
          <NavigationBar />
        </Container>
      </header>

      {/* Pages control their own inner Container; sections can bleed full-width */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
