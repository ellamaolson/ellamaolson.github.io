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
      <Container className="mt-8 mb-10">
        <NavigationBar />
      </Container>

      {/* Pages control their own inner Container; sections can bleed full-width */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
