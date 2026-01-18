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
      <Container className="mt-8 mb-12">
        <NavigationBar />
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
