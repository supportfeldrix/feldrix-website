import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../../../components/animations';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

// ─── Product data ─────────────────────────────────────────────────────────────

const products = [
  {
    name: 'FlyBy',
    accent: '#22C55E',
    accentDark: '#16A34A',
    tagline: 'Precision Agriculture from Above',
    description:
      'A professional drone operations platform for agricultural spraying companies — mission planning, fleet and pilot management, battery intelligence and live execution.',
    cta: 'Explore FlyBy',
    href: 'https://fly.feldrix.com/',
    icon: (
      <svg width="40" height="28" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="16" width="16" height="10" rx="5" fill="white" />
        <rect x="8" y="19" width="18" height="4" rx="2" fill="white" opacity="0.85" />
        <rect x="38" y="19" width="18" height="4" rx="2" fill="white" opacity="0.85" />
        <ellipse cx="12" cy="15" rx="8" ry="2.5" fill="white" opacity="0.45" />
        <ellipse cx="52" cy="15" rx="8" ry="2.5" fill="white" opacity="0.45" />
        <ellipse cx="12" cy="27" rx="8" ry="2.5" fill="white" opacity="0.45" />
        <ellipse cx="52" cy="27" rx="8" ry="2.5" fill="white" opacity="0.45" />
        <circle cx="32" cy="28" r="2.5" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'WineRix',
    accent: '#B23A5B',
    accentDark: '#7B1E3B',
    tagline: 'Intelligent management for modern vineyards',
    description:
      'A full-stack vineyard intelligence platform covering the entire grape-to-glass lifecycle — blocks, cellar operations, harvest, sales, lab and finance in one calm workspace.',
    cta: 'Explore WineRix',
    href: 'https://wine.feldrix.com',
    icon: (
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 6 C38 8 42 15 40 23 C33 23 28 18 30 6 Z" fill="white" opacity="0.85" />
        <circle cx="16" cy="24" r="4.2" fill="white" />
        <circle cx="24" cy="24" r="4.2" fill="white" />
        <circle cx="20" cy="31" r="4.2" fill="white" />
        <circle cx="28" cy="31" r="4.2" fill="white" />
        <circle cx="16" cy="38" r="4.2" fill="white" />
        <circle cx="24" cy="38" r="4.2" fill="white" />
        <path d="M22 20 L26 12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      </svg>
    ),
  },
];

// ─── Product card ─────────────────────────────────────────────────────────────

const ProductCard = ({ product }) => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      p: { xs: 3, md: 4 },
      borderRadius: '20px',
      bgcolor: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
      transition: 'transform 0.25s ease, border-color 0.25s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        borderColor: `${product.accent}66`,
      },
    }}
  >
    {/* Icon + name */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75, mb: 2 }}>
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '14px',
          background: `linear-gradient(135deg, ${product.accent} 0%, ${product.accentDark} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {product.icon}
      </Box>
      <Box>
        <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1.1 }}>
          {product.name}
        </Typography>
        <Typography sx={{ color: product.accent, fontWeight: 600, fontStyle: 'italic', fontSize: '0.85rem' }}>
          {product.tagline}
        </Typography>
      </Box>
    </Box>

    {/* Description */}
    <Typography
      sx={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.92rem',
        lineHeight: 1.7,
        mb: 3,
        flexGrow: 1,
      }}
    >
      {product.description}
    </Typography>

    {/* CTA */}
    <Box>
      <PrimaryButton
        component="a"
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<ArrowForwardIcon />}
        sx={{
          px: 3.5,
          py: 1.4,
          bgcolor: product.accent,
          '&:hover': { bgcolor: product.accentDark },
        }}
      >
        {product.cta}
      </PrimaryButton>
    </Box>
  </Box>
);

// ─── Section ──────────────────────────────────────────────────────────────────

const FlyByAnnouncement = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
    }}
  >
    {/* Glow orbs */}
    <MotionBox
      sx={{
        position: 'absolute',
        top: '40%',
        left: '20%',
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 60%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    />
    <MotionBox
      sx={{
        position: 'absolute',
        top: '40%',
        right: '20%',
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(178,58,91,0.1) 0%, transparent 60%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
      <ScrollReveal>
        <Chip
          label="✨  NEW FROM FELDRIX"
          size="small"
          sx={{
            mb: 2,
            bgcolor: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px',
            height: 32,
            px: 1,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            mb: 1,
            fontWeight: 800,
            fontSize: { xs: 'clamp(1.8rem, 6vw, 2.6rem)', md: 'clamp(2rem, 3.5vw, 2.8rem)' },
          }}
        >
          Two new ways to grow with Feldrix
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            maxWidth: 560,
            mx: 'auto',
            mb: { xs: 4, md: 5 },
          }}
        >
          Purpose-built platforms that extend the Feldrix ecosystem from the field to the cellar.
        </Typography>
      </ScrollReveal>

      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        {products.map((product, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={product.name}>
            <ScrollReveal delay={0.1 + index * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default FlyByAnnouncement;
