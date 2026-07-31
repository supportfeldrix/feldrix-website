import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/common/SEO';
import { ScrollReveal } from '../../components/animations';

const Privacy = () => (
  <>
    <SEO
      title="Privacy Policy | Feldrix"
      description="Feldrix privacy policy. Learn how we collect, use, and protect your personal information."
      canonical="/privacy"
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
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last updated: July 2026
          </Typography>

          <Box sx={{ '& h5': { mt: 4, mb: 2 }, '& p': { mb: 2, lineHeight: 1.8 } }}>
            <Typography variant="h5">1. Introduction</Typography>
            <Typography variant="body1" color="text.secondary">
              Feldrix ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our platform.
            </Typography>

            <Typography variant="h5">2. Information We Collect</Typography>
            <Typography variant="body1" color="text.secondary">
              We collect information you provide directly (name, email, farm data) and information collected automatically (usage analytics, device information, IP address).
            </Typography>

            <Typography variant="h5">3. How We Use Your Information</Typography>
            <Typography variant="body1" color="text.secondary">
              We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations.
            </Typography>

            <Typography variant="h5">4. Data Security</Typography>
            <Typography variant="body1" color="text.secondary">
              We implement industry-standard security measures including encryption in transit and at rest, regular backups, and access controls to protect your data.
            </Typography>

            <Typography variant="h5">5. Your Rights</Typography>
            <Typography variant="body1" color="text.secondary">
              You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@feldrix.com for any privacy-related requests.
            </Typography>

            <Typography variant="h5">6. Contact</Typography>
            <Typography variant="body1" color="text.secondary">
              For privacy enquiries, please contact us at privacy@feldrix.com.
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  </>
);

export default Privacy;
