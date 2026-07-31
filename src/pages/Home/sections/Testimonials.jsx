import { Container, Box, Typography } from '@mui/material';
import SectionTitle from '../../../components/common/SectionTitle';
import { FadeIn } from '../../../components/animations';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
    <Container maxWidth="sm">
      <SectionTitle
        chip="Testimonials"
        title="What farmers say"
        subtitle="We're building Feldrix with real farmers. Their stories are coming soon."
      />
      <FadeIn>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 5, md: 7 },
            borderRadius: '24px',
            bgcolor: 'background.surface',
            border: '1px solid rgba(15,23,42,0.06)',
            position: 'relative',
          }}
        >
          <FormatQuoteIcon
            sx={{ fontSize: 56, color: 'primary.main', opacity: 0.15, mb: 2 }}
          />
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2, fontWeight: 500, fontStyle: 'italic' }}>
            "Coming Soon"
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Your story could appear here. Start your Feldrix journey today.
          </Typography>
        </Box>
      </FadeIn>
    </Container>
  </Box>
);

export default Testimonials;
