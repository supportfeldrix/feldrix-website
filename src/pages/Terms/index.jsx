import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';

const Terms = () => (
  <>
    <SEO
      title="Terms of Service | Feldrix"
      description="Read the Feldrix Terms of Service. Understand your rights and responsibilities when using our cloud-based farm management platform."
      canonical="/terms"
      keywords="terms of service, terms and conditions, user agreement, farm management platform, Feldrix terms"
    />
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <ScrollReveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ mb: 4 }}>
            Terms of Service
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
            Last updated: August 2026
          </Typography>

          <Box sx={{ '& h5': { mt: 5, mb: 2, fontWeight: 700 }, '& p': { mb: 2, lineHeight: 1.8 } }}>

            {/* 1. Acceptance of Terms */}
            <Typography variant="h5">1. Acceptance of Terms</Typography>
            <Typography variant="body1" color="text.secondary">
              By accessing or using the Feldrix platform, website, mobile applications, and related services (collectively, the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Platform.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              These Terms constitute a legally binding agreement between you ("User", "you", "your") and Feldrix (Pty) Ltd ("Feldrix", "we", "our", "us"), a company registered in South Africa.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We reserve the right to update these Terms at any time. Material changes will be communicated via email or in-app notification at least 14 days before taking effect. Continued use of the Platform after such notice constitutes acceptance of the updated Terms.
            </Typography>

            {/* 2. User Accounts */}
            <Typography variant="h5">2. User Accounts</Typography>
            <Typography variant="body1" color="text.secondary">
              To access the Platform, you must create an account by providing accurate and complete information. You are responsible for:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorised access to your account</li>
              <li>Ensuring that your account information remains current and accurate</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              You may not share your account credentials with third parties, create multiple accounts for the same individual, or use another person's account without permission. We reserve the right to suspend or terminate accounts that violate these provisions.
            </Typography>

            {/* 3. Subscription Plans */}
            <Typography variant="h5">3. Subscription Plans</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix offers the following subscription tiers:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Free Plan</strong> — Limited feature access with no time restriction. Free accounts remain free indefinitely.</li>
              <li><strong>Pro Plan</strong> — Full feature access billed on a monthly or annual basis. Annual subscriptions include a discount as advertised on our pricing page.</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              We reserve the right to modify plan features, pricing, and availability with 30 days' advance notice. Existing subscribers will be grandfathered into their current pricing for the remainder of their billing cycle.
            </Typography>

            {/* 4. Payments */}
            <Typography variant="h5">4. Payments</Typography>
            <Typography variant="body1" color="text.secondary">
              All paid subscriptions are billed in advance on a recurring basis (monthly or annually) according to your chosen plan. By subscribing, you authorise us to charge your designated payment method at the beginning of each billing cycle.
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Payments are processed by PCI-DSS compliant third-party payment providers</li>
              <li>All prices are displayed inclusive of applicable taxes unless otherwise stated</li>
              <li>Failed payments will result in a grace period of 7 days before service suspension</li>
              <li>No refunds are provided for partial billing periods upon cancellation</li>
              <li>You may cancel your subscription at any time; access continues until the end of the current billing period</li>
            </Box>

            {/* 5. User Responsibilities */}
            <Typography variant="h5">5. User Responsibilities</Typography>
            <Typography variant="body1" color="text.secondary">
              As a user of the Platform, you agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Use the Platform only for lawful purposes related to farm management</li>
              <li>Provide accurate data and keep your information up to date</li>
              <li>Maintain appropriate backups of critical farm data</li>
              <li>Comply with all applicable local, national, and international laws and regulations</li>
              <li>Respect the intellectual property rights of Feldrix and other users</li>
              <li>Report any bugs, security vulnerabilities, or misuse promptly</li>
            </Box>

            {/* 6. Acceptable Use */}
            <Typography variant="h5">6. Acceptable Use</Typography>
            <Typography variant="body1" color="text.secondary">
              You may not use the Platform to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Engage in any illegal, fraudulent, or harmful activity</li>
              <li>Upload malicious code, viruses, or any harmful software</li>
              <li>Attempt to gain unauthorised access to our systems or other users' accounts</li>
              <li>Interfere with or disrupt the Platform's infrastructure or services</li>
              <li>Scrape, crawl, or harvest data from the Platform using automated tools</li>
              <li>Resell, sublicence, or commercially exploit access to the Platform without written permission</li>
              <li>Impersonate another person or entity</li>
              <li>Use the Platform for purposes unrelated to farm or agricultural management</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Violation of this acceptable use policy may result in immediate account suspension or termination without notice.
            </Typography>

            {/* 7. Intellectual Property */}
            <Typography variant="h5">7. Intellectual Property</Typography>
            <Typography variant="body1" color="text.secondary">
              All intellectual property rights in the Platform — including but not limited to the software, design, branding, logos, documentation, and user interface — are owned by Feldrix (Pty) Ltd and are protected by South African and international intellectual property laws.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              You retain full ownership of all farm data, content, and records you input into the Platform. By using the Platform, you grant Feldrix a limited, non-exclusive licence to store, process, and display your data solely for the purpose of providing the service to you.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              You may not copy, modify, distribute, reverse-engineer, or create derivative works of any part of the Platform without prior written consent from Feldrix.
            </Typography>

            {/* 8. Availability */}
            <Typography variant="h5">8. Availability</Typography>
            <Typography variant="body1" color="text.secondary">
              We strive to maintain 99.9% uptime for the Platform. However, we do not guarantee uninterrupted access and the Platform may be temporarily unavailable due to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Scheduled maintenance (communicated in advance where possible)</li>
              <li>Emergency security patches or critical updates</li>
              <li>Circumstances beyond our reasonable control (force majeure)</li>
              <li>Third-party service provider outages</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              We will make reasonable efforts to notify users of planned downtime and restore service as quickly as possible during unplanned outages.
            </Typography>

            {/* 9. Disclaimer */}
            <Typography variant="h5">9. Disclaimer</Typography>
            <Typography variant="body1" color="text.secondary">
              The Platform is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix does not warrant that the Platform will meet your specific requirements, that it will be error-free, or that any defects will be corrected within a specific timeframe. Any agricultural recommendations, AI-generated insights, or data analysis provided by the Platform are for informational purposes only and should not be relied upon as professional agricultural advice.
            </Typography>

            {/* 10. Limitation of Liability */}
            <Typography variant="h5">10. Limitation of Liability</Typography>
            <Typography variant="body1" color="text.secondary">
              To the maximum extent permitted by applicable law, Feldrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or farm records</li>
              <li>Loss of livestock, crops, or agricultural yield due to reliance on Platform data</li>
              <li>Business interruption or downtime</li>
              <li>Cost of procurement of substitute services</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              In no event shall our total liability exceed the amount you paid to Feldrix in the twelve (12) months preceding the claim. This limitation applies regardless of the legal theory upon which the claim is based.
            </Typography>

            {/* 11. Termination */}
            <Typography variant="h5">11. Termination</Typography>
            <Typography variant="body1" color="text.secondary">
              You may terminate your account at any time by contacting us or using the account settings within the Platform. Upon termination:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li>Your access to the Platform will cease immediately</li>
              <li>You may request an export of your farm data within 30 days of termination</li>
              <li>After 30 days, your data will be permanently deleted from our systems</li>
              <li>Any outstanding payment obligations remain due</li>
            </Box>
            <Typography variant="body1" color="text.secondary">
              We may suspend or terminate your account immediately and without notice if you breach these Terms, engage in fraudulent activity, or if required to do so by law. We may also terminate the Platform entirely with 90 days' notice to all users.
            </Typography>

            {/* 12. Governing Law */}
            <Typography variant="h5">12. Governing Law</Typography>
            <Typography variant="body1" color="text.secondary">
              These Terms are governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of South Africa.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </Typography>

            {/* 13. Contact Information */}
            <Typography variant="h5">13. Contact Information</Typography>
            <Typography variant="body1" color="text.secondary">
              If you have any questions or concerns about these Terms of Service, please contact us:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } }}>
              <li><strong>Email:</strong> legal@feldrix.com</li>
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

export default Terms;
