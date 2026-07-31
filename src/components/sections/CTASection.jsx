import { Box, Container, Typography } from '@mui/material';
import PrimaryButton from '../buttons/PrimaryButton';
import { FadeIn } from '../animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CTASection = ({
  title = 'Ready to manage your farm smarter?',
  subtitle = 'Start your free account today. No credit card required.',
  buttonText = 'Start Free',
  buttonHref = 'https://app.feldrix.com/register',
}) => (
  <Box
    component="section"
    sx={{
      py: { xs: 12, md: 16 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
    }}
  >
    {/* Glow orb */}
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 60%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }}
    />
    <Container maxWidth="sm" sx={{ position: 'relative', textAlign: 'center' }}>
      <FadeIn>
        <Typography variant="h2" sx={{ color: 'white', mb: 2.5 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}
        >
          {subtitle}
        </Typography>
        <PrimaryButton
          href={buttonHref}
          sx={{ px: 5, py: 1.8, fontSize: '1rem' }}
          endIcon={<ArrowForwardIcon />}
        >
          {buttonText}
        </PrimaryButton>
      </FadeIn>
    </Container>
  </Box>
);

export default CTASection;
