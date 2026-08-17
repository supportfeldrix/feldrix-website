import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../components/animations';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

const FlyByAnnouncement = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 8, md: 12 },
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
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    />

    {/* Floating drone accent */}
    <MotionBox
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      sx={{
        position: 'absolute',
        top: { xs: '10%', md: '15%' },
        right: { xs: '5%', md: '12%' },
        opacity: 0.3,
        pointerEvents: 'none',
      }}
    >
      <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="16" width="16" height="10" rx="5" fill="white" />
        <rect x="8" y="19" width="18" height="4" rx="2" fill="white" opacity="0.8" />
        <rect x="38" y="19" width="18" height="4" rx="2" fill="white" opacity="0.8" />
        <ellipse cx="12" cy="15" rx="8" ry="2.5" fill="white" opacity="0.4" />
        <ellipse cx="52" cy="15" rx="8" ry="2.5" fill="white" opacity="0.4" />
        <ellipse cx="12" cy="27" rx="8" ry="2.5" fill="white" opacity="0.4" />
        <ellipse cx="52" cy="27" rx="8" ry="2.5" fill="white" opacity="0.4" />
        <circle cx="32" cy="28" r="2.5" fill="white" opacity="0.6" />
      </svg>
    </MotionBox>

    <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
      <ScrollReveal>
        <Chip
          label="✈  NEW FROM FELDRIX"
          size="small"
          sx={{
            mb: 3,
            bgcolor: 'rgba(22, 163, 74, 0.1)',
            color: '#22C55E',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            border: '1px solid rgba(22, 163, 74, 0.25)',
            borderRadius: '8px',
            height: 32,
            px: 1,
          }}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            mb: 1.5,
            fontWeight: 800,
            fontSize: { xs: 'clamp(2rem, 6vw, 3.5rem)', md: 'clamp(2.5rem, 4vw, 3.5rem)' },
          }}
        >
          Introducing{' '}
          <Box component="span" sx={{ color: '#22C55E' }}>
            FlyBy
          </Box>
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.15rem',
            fontWeight: 500,
            fontStyle: 'italic',
            mb: 3,
          }}
        >
          Precision Agriculture from Above
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            lineHeight: 1.8,
            maxWidth: 560,
            mx: 'auto',
            mb: 5,
          }}
        >
          FlyBy is the newest member of the Feldrix ecosystem. Built specifically for agricultural
          drone operators, FlyBy brings together intelligent mission planning, fleet management,
          pilot management, battery intelligence, weather awareness and live mission execution
          into one professional platform.
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <PrimaryButton
            component={Link}
            to="/flyby"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4.5, py: 1.7 }}
          >
            Explore FlyBy
          </PrimaryButton>
          <SecondaryButton
            component={Link}
            to="/flyby#early-access"
            sx={{
              px: 4,
              py: 1.7,
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              '&:hover': {
                borderColor: '#22C55E',
                bgcolor: 'rgba(22,163,74,0.08)',
              },
            }}
          >
            Request Early Access
          </SecondaryButton>
        </Stack>
      </ScrollReveal>
    </Container>
  </Box>
);

export default FlyByAnnouncement;
