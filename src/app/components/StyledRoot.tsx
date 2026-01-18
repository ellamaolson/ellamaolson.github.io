import { NavigationBar } from './NavigationBar';
import { Container } from './ui/Container';

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Container className="mt-8 mb-8">
        <NavigationBar />
        <main>{children}</main>
      </Container>
    </div>
  );
}
