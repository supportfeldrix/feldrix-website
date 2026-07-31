import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';

const Terms = () => (
  <>
    <SEO
      title="Terms of Service | Feldrix"
      description="Feldrix terms of service. Read our terms and conditions for using the platform."
      canonical="/terms"
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
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last updated: July 2026
          </Typography>

          <Box sx={{ '& h5': { mt: 4, mb: 2 }, '& p': { mb: 2, lineHeight: 1.8 } }}>
            <Typography variant="h5">1. Acceptance of Terms</Typography>
            <Typography variant="body1" color="text.secondary">
              By accessing or using Feldrix, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
            </Typography>

            <Typography variant="h5">2. Use of Service</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix grants you a non-exclusive, non-transferable licence to use our platform for farm management purposes in accordance with these terms.
            </Typography>

            <Typography variant="h5">3. Account Responsibilities</Typography>
            <Typography variant="body1" color="text.secondary">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </Typography>

            <Typography variant="h5">4. Subscription & Billing</Typography>
            <Typography variant="body1" color="text.secondary">
              Free accounts remain free indefinitely. PRO subscriptions are billed monthly and can be cancelled at any time. No refunds for partial months.
            </Typography>

            <Typography variant="h5">5. Data Ownership</Typography>
            <Typography variant="body1" color="text.secondary">
              You retain full ownership of all farm data you input into Feldrix. We do not sell or share your data with third parties.
            </Typography>

            <Typography variant="h5">6. Limitation of Liability</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from use of the platform.
            </Typography>

            <Typography variant="h5">7. Contact</Typography>
            <Typography variant="body1" color="text.secondary">
              For legal enquiries, contact us at legal@feldrix.com.
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  </>
);

export default Terms;
