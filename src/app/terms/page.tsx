import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Header } from '../components/ui/Header';
import { Paragraph } from '../components/ui/Paragraph';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Elana Olson',
  description:
    'Terms and conditions for the provision of services by Elana Olson and use of the Elana Olson website.',
};

export default function TermsPage() {
  return (
    <>
      <Section background="surface" padding="md" className="min-h-screen">
        <Container maxWidth="full" className="max-w-[80%] py-10 sm:py-14">
          <div className="space-y-10">
            <div>
              <Header level={1} className="text-text-primary">
                Terms &amp; Conditions
              </Header>
              <Paragraph variant="p2" className="text-text-secondary mt-2">
                Last updated: February 2, 2026
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Elana Olson of Elana Olson (“I,” or “me”) owns and operates elanaolson.com (the
                &quot;website&quot;). These Terms &amp; Conditions (&quot;Terms&quot;) govern the
                provision of services by Elana Olson (&quot;Service Provider,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) to any client (&quot;Client,&quot;
                &quot;you,&quot; or &quot;your&quot;). By accessing or using this website, engaging
                our services, signing a proposal or contract, or submitting payment, you agree to be
                bound by these Terms. You agree to use this website only for lawful purposes and in
                a manner that does not infringe the rights of others. If you do not agree with these
                Terms, please do not use this website or engage our services.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                1. Services
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                We provide professional services including, but not limited to:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>Website design and development</li>
                <li>Website redesigns</li>
                <li>Ongoing website maintenance and retainers</li>
                <li>Front-end and contract engineering services</li>
              </ul>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The specific scope, deliverables, timelines, and pricing for services will be
                defined in a written proposal, statement of work, or contract agreed upon by both
                parties (&quot;Agreement&quot;). Any services not expressly included in the agreed
                scope are outside the scope and may require a separate agreement or additional fees.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                2. Client Responsibilities
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The Client agrees to:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>
                  Provide timely access to required information, content, assets, credentials, and
                  approvals
                </li>
                <li>
                  Ensure that all materials provided are accurate, lawful, and owned or properly
                  licensed by the Client
                </li>
                <li>
                  Respond to communications and feedback requests within a reasonable timeframe
                </li>
              </ul>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Delays caused by the Client may result in adjusted timelines and may incur
                additional fees.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                3. Fees, Invoicing, and Payment
              </Header>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>Fees are outlined in the applicable Agreement or invoice</li>
                <li>Invoices are due according to the payment terms stated therein</li>
                <li>
                  Late payments may result in suspension of services until payment is received
                </li>
                <li>All fees are non-refundable unless expressly stated otherwise in writing</li>
                <li>
                  The Client is responsible for all applicable taxes, duties, or government charges
                  related to the services, excluding taxes imposed on the Service Provider&apos;s
                  income
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                4. VAT and Taxes (EU Clients)
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Where required by law, Value Added Tax (VAT) will be applied to invoices. If VAT is
                not charged due to reverse-charge or exemption rules, the Client remains responsible
                for accounting for VAT in accordance with applicable regulations.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                5. Intellectual Property
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Unless otherwise stated in writing:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>
                  All work remains the property of the Service Provider until full payment has been
                  received
                </li>
                <li>
                  Upon full payment, the Client is granted a license or ownership (as specified in
                  the Agreement) to the final deliverables
                </li>
                <li>
                  The Service Provider retains the right to display completed work in portfolios,
                  case studies, and promotional materials
                </li>
                <li>
                  Any pre-existing tools, frameworks, or materials owned by the Service Provider
                  remain the Service Provider&apos;s intellectual property
                </li>
              </ul>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                All content on this website (text, graphics, logos, images, and software) is the
                property of Elana Olson or its content suppliers and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, modify, or create
                derivative works from any such content without prior written permission.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                6. Revisions and Changes
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Reasonable revisions are included only if explicitly stated in the Agreement.
                Requests that materially alter the scope, direction, or complexity of the work may
                be treated as change requests and billed separately.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                7. Third-Party Services
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The Service Provider may rely on third-party tools, platforms, or services (e.g.,
                hosting providers, software libraries, plugins). We are not responsible for outages,
                changes, or failures caused by third-party services. This website may contain links
                to third-party websites; such links are for convenience only and do not imply
                endorsement. We are not responsible for the content, privacy practices, or
                availability of third-party sites.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                8. Limitation of Liability
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                To the maximum extent permitted by law:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>
                  The Service Provider shall not be liable for indirect, incidental, consequential,
                  or special damages
                </li>
                <li>
                  Total liability shall not exceed the total fees paid by the Client under the
                  applicable Agreement
                </li>
                <li>
                  Nothing in these Terms limits liability where such limitation is not permitted by
                  law
                </li>
              </ul>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                This website and its content are provided &quot;as is&quot; without warranties of
                any kind, express or implied.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                9. Termination
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Either party may terminate services in accordance with the Agreement. We reserve the
                right to terminate or suspend services immediately in cases of non-payment, breach
                of these Terms, or abusive or unlawful behavior. Upon termination, all outstanding
                invoices become immediately due.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                10. Confidentiality
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Both parties agree to keep confidential any non-public information received in
                connection with the services, unless disclosure is required by law.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                11. Relationship of the Parties
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The Service Provider is an independent contractor. Nothing in these Terms creates a
                partnership, employment relationship, or joint venture between the parties.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                12. Governing Law
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                These Terms are governed by the laws of the United States when the Service Provider
                is resident in the United States, and by the laws of the Netherlands when the
                Service Provider is resident in the Netherlands. Conflict-of-law principles are
                excluded to the extent permitted by law.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                13. Modifications
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                We may update these Terms from time to time. The version in effect at the time
                services are engaged will apply unless otherwise agreed in writing. The &quot;Last
                updated&quot; date at the top of this page reflects the most recent revision. Your
                continued use of this website or our services after changes constitutes acceptance
                of the updated Terms.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                14. Entire Agreement
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                These Terms, together with any applicable Agreement, constitute the entire agreement
                between the parties and supersede any prior discussions or understandings.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                15. Contact
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Questions regarding these Terms may be directed to:
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Email:{' '}
                <a
                  href="mailto:elana@elanaolson.com"
                  className="underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                >
                  elana@elanaolson.com
                </a>
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Website:{' '}
                <a
                  href="https://elanaolson.com"
                  className="underline underline-offset-4 decoration-border-onDark/60 hover:text-accent transition-colors duration-200"
                >
                  https://elanaolson.com
                </a>
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
