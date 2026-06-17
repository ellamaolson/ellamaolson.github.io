import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';

export default function PortfolioPage() {
  return (
    <Section background="surface" padding="lg">
      <Container maxWidth="reading">
        <div className="text-center space-y-6 py-16">
          <Header level={1}>Portfolio</Header>
          <Paragraph className="text-text-secondary">
            Explore the Hayoga website and brand design project.
          </Paragraph>
          <div className="flex justify-center">
            <Button as="link" href="/portfolio/hayoga" variant="primary">
              View Hayoga Project
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
