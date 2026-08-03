import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';

const Privacy = () => (
  <>
    <SEO
      title="Privacy Policy | Feldrix"
      description="Learn how Feldrix collects, uses, and protects your personal information. POPIA compliant with GDPR readiness."
      canonical="/privacy"
      keywords="privacy policy, data protection, POPIA, GDPR, farm data security, Feldrix privacy"
    />
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <ScrollReveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ mb: 4 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
            Last updated: August 2026
          </Typography>

          <Box sx={{ '& h5': { mt: 5, mb: 2, fontWeight: 700 }, '& p': { mb: 2, lineHeight: 1.8 } }}>

            {/* 1. Introduction */}
            <Typography variant="h5">1. Introduction</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix (Pty) Ltd ("Feldrix", "we", "our", "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information when you access or use our cloud-based farm management platform, website, and related services (collectively, the "Platform").
            </Typography>
            <Typography variant="body1" color="text.secondary">
              By using the Platform, you consent to the practices described in this policy. If you do not agree with any part of this policy, please discontinue use of the Platform immediately.
            </Typography>

            {/* 2. Information We Collect */}
            <Typography variant="h5">2. Information We Collect</Typography>
            <Typography variant="body1" color="text.secondary">
              We collect information in several categories to provide and improve our services:
            </Typography>

            {/* 2.1 Account Information */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>2.1 Account Information</Typography>
            <Typography variant="body1" color="text.secondary">
              When you create an account, we collect your full name, email address, phone number (optional), farm name, and login credentials. This information is necessary to create and maintain your account, authenticate your identity, and provide customer support.
            </Typography>

            {/* 2.2 Farm Data */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>2.2 Farm Data</Typography>
            <Typography variant="body1" color="text.secondary">
              You may input data related to your farming operations, including but not limited to: livestock records, crop schedules, machinery logs, financial transactions, breeding programmes, veterinary records, planting calendars, and harvest data. This data belongs to you and is stored securely to provide the Platform's core functionality.
            </Typography>

            {/* 2.3 Payment Information */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>2.3 Payment Information</Typography>
            <Typography variant="body1" color="text.secondary">
              If you subscribe to a paid plan, we collect billing information including your name, billing address, and payment method details. Payment processing is handled by PCI-DSS compliant third-party payment processors. We do not store full credit card numbers on our servers.
            </Typography>

            {/* 2.4 Cookies */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>2.4 Cookies</Typography>
            <Typography variant="body1" color="text.secondary">
              We use cookies and similar tracking technologies to maintain your session, remember your preferences, and improve the user experience. For detailed information about the cookies we use, please refer to our Cookie Policy.
            </Typography>

            {/* 2.5 Analytics */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}>2.5 Analytics</Typography>
            <Typography variant="body1" color="text.secondary">
              We collect anonymised usage data including pages visited, features used, session duration, device type, browser information, and general geographic location. This data helps us understand how the Platform is used and identify areas for improvement. We do not use this data to personally identify individual users.
            </Typography>

            {/* 3. How We Use Your Information */}
            <Typography variant="h5">3. How We Use Your Information</Typography>
            <Typography variant="body1" color="text.secondary">
              We use the information we collect for the following purposes:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>To provide, maintain, and improve the Platform and its features</li>
              <li>To create and manage your user account</li>
              <li>To process payments and manage subscriptions</li>
              <li>To send important service notifications and updates</li>
              <li>To provide customer support and respond to enquiries</li>
              <li>To analyse usage patterns and improve user experience</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our Terms of Service</li>
              <li>To communicate product updates, new features, and relevant educational content (with your consent)</li>
            </Box>

            {/* 4. Data Security */}
            <Typography variant="h5">4. Data Security</Typography>
            <Typography variant="body1" color="text.secondary">
              We implement industry-standard security measures to protect your personal information and farm data:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>All data is encrypted in transit using TLS 1.2 or higher</li>
              <li>Data at rest is encrypted using AES-256 encryption</li>
              <li>Regular automated backups with geographic redundancy</li>
              <li>Role-based access controls for all internal systems</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure hosting infrastructure with 99.9% uptime SLA</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              While we strive to protect your data, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security but will notify affected users promptly in the event of a data breach.
            </Typography>

            {/* 5. Third-Party Services */}
            <Typography variant="h5">5. Third-Party Services</Typography>
            <Typography variant="body1" color="text.secondary">
              We may share limited information with trusted third-party service providers who assist us in operating the Platform:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Payment processors</strong> — to handle subscription billing securely</li>
              <li><strong>Cloud hosting providers</strong> — to store and serve your data reliably</li>
              <li><strong>Analytics services</strong> — to understand Platform usage (anonymised data only)</li>
              <li><strong>Email service providers</strong> — to send transactional and notification emails</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              These providers are contractually obligated to protect your data and may only use it for the specific services they provide to us. We do not sell your personal information or farm data to any third party.
            </Typography>

            {/* 6. Data Retention */}
            <Typography variant="h5">6. Data Retention</Typography>
            <Typography variant="body1" color="text.secondary">
              We retain your personal information and farm data for as long as your account is active or as needed to provide you with our services. If you choose to close your account, we will delete your personal data within 30 days, unless retention is required by law or for legitimate business purposes (such as resolving disputes or enforcing our agreements).
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Anonymised and aggregated data that cannot be used to identify you may be retained indefinitely for research and statistical purposes.
            </Typography>

            {/* 7. User Rights */}
            <Typography variant="h5">7. User Rights</Typography>
            <Typography variant="body1" color="text.secondary">
              You have the following rights regarding your personal information:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Access</strong> — Request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — Request deletion of your personal data (subject to legal retention requirements)</li>
              <li><strong>Portability</strong> — Request your farm data in a commonly used, machine-readable format</li>
              <li><strong>Restriction</strong> — Request that we limit processing of your data in certain circumstances</li>
              <li><strong>Objection</strong> — Object to processing of your data for direct marketing purposes</li>
              <li><strong>Withdrawal of consent</strong> — Withdraw previously given consent at any time</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              To exercise any of these rights, please contact us at privacy@feldrix.com. We will respond to your request within 30 days.
            </Typography>

            {/* 8. South African POPIA Compliance */}
            <Typography variant="h5">8. South African POPIA Compliance</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix is a South African company and complies with the Protection of Personal Information Act, 2013 (POPIA). In accordance with POPIA:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>We process personal information lawfully and in a reasonable manner that does not infringe on your privacy</li>
              <li>We collect personal information only for a specific, explicitly defined, and lawful purpose</li>
              <li>We do not retain personal information longer than is necessary for the purpose it was collected</li>
              <li>We take appropriate technical and organisational measures to secure the integrity and confidentiality of personal information</li>
              <li>You may lodge a complaint with the Information Regulator (South Africa) if you believe your rights have been infringed</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Our designated Information Officer can be contacted at privacy@feldrix.com for all POPIA-related enquiries.
            </Typography>

            {/* 9. GDPR Readiness */}
            <Typography variant="h5">9. GDPR Readiness</Typography>
            <Typography variant="body1" color="text.secondary">
              While Feldrix is currently focused on the South African market, we are building our privacy framework with the European Union's General Data Protection Regulation (GDPR) in mind. Our data processing practices align with GDPR principles including data minimisation, purpose limitation, storage limitation, and accountability.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              As we expand internationally, we will implement additional GDPR-specific safeguards including lawful basis documentation, Data Protection Impact Assessments (DPIAs), and appropriate data transfer mechanisms for cross-border data flows.
            </Typography>

            {/* 10. Children's Privacy */}
            <Typography variant="h5">10. Children's Privacy</Typography>
            <Typography variant="body1" color="text.secondary">
              The Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information promptly.
            </Typography>

            {/* 11. Changes to This Policy */}
            <Typography variant="h5">11. Changes to This Policy</Typography>
            <Typography variant="body1" color="text.secondary">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by posting a notice on the Platform or sending you an email. Your continued use of the Platform after such notification constitutes your acceptance of the revised policy.
            </Typography>

            {/* 12. Contact Information */}
            <Typography variant="h5">12. Contact Information</Typography>
            <Typography variant="body1" color="text.secondary">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Email:</strong> privacy@feldrix.com</li>
              <li><strong>General enquiries:</strong> hello@feldrix.com</li>
              <li><strong>Website:</strong> www.feldrix.com</li>
              <li><strong>Location:</strong> South Africa</li>
            </Box>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  </>
);

export default Privacy;
