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
      <Section background="surface" padding="none" className="min-h-screen py-8 sm:py-section">
        <Container maxWidth="notebook">
          <div className="space-y-10">
            <div>
              <Header level={1} className="text-text-primary">
                Terms &amp; Conditions
              </Header>
              <Paragraph variant="p2" className="text-text-secondary mt-2">
                Last updated: June 5, 2026
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Elana Olson of Elana Olson (“I,” or “me”) owns and operates elanaolson.com (the
                &quot;website&quot;). These Terms &amp; Conditions (&quot;Terms&quot;) govern the
                provision of services by Elana Olson (&quot;Service Provider,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) to any client (&quot;Client,&quot;
                &quot;you,&quot; or &quot;your&quot;). By engaging services, signing an agreement,
                accepting a proposal, or submitting payment, the Client agrees to these Terms &
                Conditions and any applicable project agreement. If there is a conflict between
                these Terms and an Agreement, the Agreement will control for that project.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                1. Services
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Services may include:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-body text-text-primary leading-relaxed font-body">
                <li>Website design, development, redesigns, and maintenance</li>
                <li>Front-end and contract engineering services</li>
                <li>Technical consulting and digital operations support</li>
                <li>
                  Staff onboarding, training, documentation, workflow design, and technology
                  adoption support
                </li>
                <li>Digital systems audits, process improvement, and operational guidance</li>
              </ul>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Specific deliverables, timelines, pricing, and scope will be defined in the
                applicable Agreement. Any work not expressly included is outside scope and may
                require additional fees.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                2. Client Responsibilities
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Client agrees to provide required materials, access, approvals, and feedback in a
                timely manner and to ensure all supplied content is accurate, lawful, and properly
                licensed. Delays caused by the Client may result in adjusted timelines.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                3. Payment and Fees
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Invoices are due according to the payment terms stated in the Agreement or invoice.
                Late payments may result in suspension of services until payment is received. All
                fees paid are non-refundable unless otherwise stated in writing. Client is
                responsible for applicable taxes except taxes imposed on Service Provider&apos;s
                income.
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Final deliverables, website transfers, and launches will only occur after all
                outstanding invoices have been paid in full — this applies to design projects,
                development projects, and website builds.
              </Paragraph>
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
                All work, drafts, designs, code, documentation, and deliverables remain the property
                of the Service Provider until full payment has been received. Upon full payment,
                ownership or usage rights to final deliverables will transfer as specified in the
                Agreement. Service Provider retains ownership of any pre-existing materials,
                frameworks, templates, systems, processes, libraries, or tools used to provide
                services. Service Provider may display completed work in portfolios, case studies,
                marketing materials, and professional presentations unless otherwise agreed in
                writing.
              </Paragraph>

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
                Revisions included in a project are defined in the applicable Agreement. Revisions
                are intended to refine agreed deliverables and do not include new functionality,
                additional pages, new design directions, substantial restructuring, or expanded
                scope. Additional work may require a separate quote or be billed at the standard
                hourly rate.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                7. Third-Party Services
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The Service Provider may rely on third-party tools, platforms, or services (e.g.,
                hosting providers, software libraries, plugins). We are not responsible for outages,
                security incidents, policy changes, platform limitations, software defects, service
                interruptions, pricing changes, or data loss caused by third-party providers. Client
                acknowledges that websites and digital services rely on third-party infrastructure
                beyond Service Provider&apos;s control.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                8. Website Availability &amp; Maintenance
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Websites depend on third-party platforms, hosting providers, domain registrars, and
                technical infrastructure outside my control. As a result, websites may experience
                temporary downtime due to software updates, hosting outages, DNS propagation,
                security patches, or scheduled maintenance. Uninterrupted uptime is not guaranteed.
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                I will make reasonable professional efforts to investigate and resolve issues that
                fall within the scope of agreed services. Maintenance requests submitted during
                normal business hours will generally be addressed within 1–2 business days,
                depending on complexity. This is a good-faith service expectation, not a guaranteed
                service-level agreement.
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Maintenance retainers include routine updates, troubleshooting, and minor
                adjustments within the allocated hours for the billing period. They do not include
                major redesigns, large new features, or significant scope expansions. Unused
                maintenance hours do not roll over to the following billing period unless otherwise
                agreed in writing. Work that exceeds the included hours may be billed at my standard
                hourly rate.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                9. Project Delays
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Project timelines depend on timely client communication and the delivery of required
                materials. If a client does not provide content, approvals, credentials, or other
                necessary inputs in a reasonable timeframe, the project timeline may be extended
                accordingly.
              </Paragraph>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                If a project becomes inactive for more than 30 days due to client non-response or
                unpaid invoices, I reserve the right to reschedule the project based on current
                availability or to invoice the remaining balance as outlined in the Agreement.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                10. Limitation of Liability
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
                11. Termination
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
                12. Confidentiality
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                Both parties agree to keep confidential any non-public information received in
                connection with the services, unless disclosure is required by law.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                13. Relationship of the Parties
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                The Service Provider is an independent contractor. Nothing in these Terms creates a
                partnership, employment relationship, or joint venture between the parties.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                14. Governing Law
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
                15. Modifications
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
                16. Entire Agreement
              </Header>
              <Paragraph variant="p2" className="text-text-primary leading-relaxed">
                These Terms, together with any applicable Agreement, constitute the entire agreement
                between the parties and supersede any prior discussions or understandings.
              </Paragraph>
            </div>

            <div className="space-y-6">
              <Header level={2} className="text-text-primary">
                17. Contact
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
