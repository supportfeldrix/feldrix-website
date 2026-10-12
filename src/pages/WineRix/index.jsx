import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { ScrollReveal } from '../../components/animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

// Brand palette (matching the WineRix vineyard-intelligence logo)
const WINE = '#7B1E3B'; // burgundy
const VINE = '#4B7A3F'; // vine green
const WINE_DARK = '#5C1630';

// ─── WINERIX LOGO SVG (Grapevine mark) ───────────────────────────────────────

const WineRixLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Leaf */}
    <path d="M30 6 C38 8 42 15 40 23 C33 23 28 18 30 6 Z" fill={VINE} />
    <path d="M31 9 C35 13 37 17 38 21" stroke="#2F5128" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    {/* Grapes */}
    <circle cx="16" cy="24" r="4.2" fill={WINE} />
    <circle cx="24" cy="24" r="4.2" fill={WINE} />
    <circle cx="20" cy="31" r="4.2" fill={WINE} />
    <circle cx="28" cy="31" r="4.2" fill={WINE} />
    <circle cx="16" cy="38" r="4.2" fill={WINE} />
    <circle cx="24" cy="38" r="4.2" fill={WINE} />
    {/* Stem */}
    <path d="M22 20 L26 12" stroke={VINE} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─── FEATURE ICONS (Line-art) ────────────────────────────────────────────────

const VineyardManagementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 38 L18 32 L28 36 L40 28" stroke={WINE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 40 L40 40" stroke={WINE} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 40 L14 34 M22 40 L22 35 M30 40 L30 33 M36 40 L36 30" stroke={WINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M24 8 C30 10 32 15 30 20 C25 20 22 16 24 8 Z" fill="none" stroke={VINE} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IntelligentOperationsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="28" width="6" height="12" rx="1.5" stroke={WINE} strokeWidth="1.5" fill="none" />
    <rect x="21" y="20" width="6" height="20" rx="1.5" stroke={WINE} strokeWidth="1.5" fill="none" />
    <rect x="32" y="12" width="6" height="28" rx="1.5" stroke={WINE} strokeWidth="1.5" fill="none" />
    <path d="M8 24 L18 18 L28 22 L40 10" stroke={VINE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const HarvestInsightsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="20" r="3.2" fill={WINE} />
    <circle cx="26" cy="20" r="3.2" fill={WINE} />
    <circle cx="22" cy="26" r="3.2" fill={WINE} />
    <circle cx="30" cy="26" r="3.2" fill={WINE} />
    <circle cx="26" cy="32" r="3.2" fill={WINE} />
    <path d="M24 16 L28 9" stroke={VINE} strokeWidth="2" strokeLinecap="round" />
    <path d="M28 9 C32 10 34 13 33 17" stroke={VINE} strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

const HeroSection = () => (
  <Box
    component="section"
    sx={{
      pt: { xs: 12, md: 14 },
      pb: { xs: 4, md: 6 },
      minHeight: { md: '65vh' },
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#FFFFFF',
    }}
  >
    {/* Background — vineyard gradient on the right */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '50%' },
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FBEEF2 0%, #F3D9E1 30%, #E8C7A8 65%, #D9B384 100%)',
      }}
    >
      {/* Gradient fade into white on the left */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 100%)',
            md: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.2) 45%, transparent 70%)',
          },
        }}
      />
      {/* Vineyard rows illustration */}
      <MotionBox
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '26%',
          right: '12%',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rolling hills */}
          <path d="M0 150 Q70 120 140 140 T280 130 L280 200 L0 200 Z" fill="#C9A26B" opacity="0.35" />
          {/* Vine rows */}
          <path d="M20 185 L90 120 M70 185 L130 120 M120 185 L170 120 M170 185 L210 120 M220 185 L250 120" stroke={VINE} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
          {/* Grape clusters */}
          <g fill={WINE} opacity="0.8">
            <circle cx="150" cy="70" r="7" />
            <circle cx="162" cy="70" r="7" />
            <circle cx="156" cy="81" r="7" />
            <circle cx="150" cy="92" r="7" />
            <circle cx="162" cy="92" r="7" />
          </g>
          {/* Leaf */}
          <path d="M172 58 C188 62 194 76 188 90 C174 88 166 76 172 58 Z" fill={VINE} opacity="0.85" />
          {/* Sun */}
          <circle cx="60" cy="55" r="20" fill="#F5C77E" opacity="0.6" />
        </svg>
      </MotionBox>
    </Box>

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: { md: '50vh' } }}>
        {/* Left Side — Text content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <Chip
              label="NEW FROM FELDRIX"
              size="small"
              sx={{
                mb: 3,
                bgcolor: WINE,
                color: 'white',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.05em',
                borderRadius: '6px',
                height: 28,
              }}
            />

            {/* WINERIX heading with logo mark */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: 'clamp(3rem, 9vw, 5rem)', md: 'clamp(4rem, 6.5vw, 5.5rem)' },
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  color: WINE,
                }}
              >
                WINERIX
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WineRixLogo size={52} />
              </Box>
            </Box>

            {/* Tagline */}
            <Typography
              sx={{
                mb: 2.5,
                color: '#1E293B',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}
            >
              Intelligent management for modern vineyards.
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: 440,
              }}
            >
              Here's what's happening across your vineyard today. Manage blocks, operations,
              harvest and finances — all in one calm workspace.
            </Typography>

            {/* Button */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <PrimaryButton
                component="a"
                href="https://wine.feldrix.com"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.6, bgcolor: WINE, '&:hover': { bgcolor: WINE_DARK } }}
              >
                Join Access
              </PrimaryButton>
            </Stack>
          </motion.div>
        </Grid>

        {/* Mobile vine visual */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 3 }}>
          <MotionBox
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <WineRixLogo size={120} />
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ─── ONE ECOSYSTEM BAR ────────────────────────────────────────────────────────

// Shared styles so every ecosystem card is identical in size and alignment
const ecosystemCardSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  px: 2.5,
  py: 2,
  borderRadius: '14px',
  bgcolor: 'white',
  border: '1px solid rgba(123,30,59,0.1)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  width: { xs: '100%', sm: 230 },
  minHeight: 76,
  flexShrink: 0,
};

const ecosystemIconSx = {
  width: 40,
  height: 40,
  borderRadius: '10px',
  bgcolor: 'rgba(123,30,59,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const EcosystemBar = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 5, md: 6 },
      bgcolor: '#FDF4F7',
      borderTop: '1px solid rgba(123,30,59,0.08)',
      borderBottom: '1px solid rgba(123,30,59,0.08)',
    }}
  >
    <Container maxWidth="lg">
      <ScrollReveal>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            color: '#0F172A',
            mb: 4,
          }}
        >
          One Ecosystem. Endless Possibilities.
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Feldrix */}
          <Box sx={ecosystemCardSx}>
            <Box sx={ecosystemIconSx}>
              <Typography sx={{ fontSize: '1.3rem' }}>🌾</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.03em', color: '#0F172A' }}>FELDRIX</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Farm Management Software</Typography>
            </Box>
          </Box>

          {/* Arrow */}
          <Typography sx={{ color: 'text.tertiary', fontSize: '1.2rem', display: { xs: 'none', sm: 'block' } }}>→</Typography>

          {/* FlyBy */}
          <Box sx={ecosystemCardSx}>
            <Box sx={ecosystemIconSx}>
              <Typography sx={{ fontSize: '1.3rem' }}>🚁</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.03em', color: '#0F172A' }}>FLYBY</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Drone Operations Software</Typography>
            </Box>
          </Box>

          {/* Arrow */}
          <Typography sx={{ color: 'text.tertiary', fontSize: '1.2rem', display: { xs: 'none', sm: 'block' } }}>→</Typography>

          {/* WineRix (active) */}
          <Box sx={{ ...ecosystemCardSx, border: `1px solid ${WINE}33`, boxShadow: '0 2px 8px rgba(123,30,59,0.08)' }}>
            <Box sx={{ ...ecosystemIconSx, bgcolor: 'rgba(123,30,59,0.08)' }}>
              <Typography sx={{ fontSize: '1.3rem' }}>🍇</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.03em', color: WINE }}>WINERIX</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Vineyard Intelligence</Typography>
            </Box>
          </Box>

          {/* Arrow */}
          <Typography sx={{ color: 'text.tertiary', fontSize: '1.2rem', display: { xs: 'none', sm: 'block' } }}>→</Typography>

          {/* More */}
          <Box sx={{ ...ecosystemCardSx, border: '1px solid rgba(15,23,42,0.08)', boxShadow: 'none', bgcolor: 'transparent' }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', border: '2px dashed rgba(15,23,42,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Typography sx={{ fontWeight: 700, color: 'text.tertiary', fontSize: '1.1rem' }}>+</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.03em', color: 'text.secondary', textTransform: 'uppercase' }}>More Innovations</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.tertiary' }}>Coming Soon</Typography>
            </Box>
          </Box>
        </Box>
      </ScrollReveal>
    </Container>
  </Box>
);

// ─── FEATURES SECTION ─────────────────────────────────────────────────────────

const features = [
  { Icon: VineyardManagementIcon, title: 'Vineyard Management', description: 'Keep block records up to date so operations, irrigation and spray programmes stay accurate.' },
  { Icon: IntelligentOperationsIcon, title: 'Intelligent Operations', description: 'Use the Planner for upcoming tasks so nothing is missed during busy periods.' },
  { Icon: HarvestInsightsIcon, title: 'Harvest Insights', description: 'Log harvest yields as they happen to build a reliable season-over-season record.' },
];

const FeaturesSection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            color: '#0F172A',
            mb: { xs: 6, md: 8 },
          }}
        >
          Everything your vineyard needs, in one calm workspace
        </Typography>
      </ScrollReveal>

      <Grid container spacing={{ xs: 4, md: 4 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
            <ScrollReveal delay={index * 0.08}>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  px: 2,
                  py: 4,
                  borderRadius: '16px',
                  border: '1px solid rgba(123,30,59,0.08)',
                  bgcolor: '#FFFCFD',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '14px',
                    bgcolor: 'rgba(123,30,59,0.06)',
                  }}
                >
                  <feature.Icon />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#0F172A',
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.82rem',
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    maxWidth: 260,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// ─── GUIDANCE SECTION ─────────────────────────────────────────────────────────

// All platform capabilities, shown together in one centered card.
const capabilities = [
  'Vineyard & block management (cultivars, hectares, soil)',
  'Irrigation & spray programme scheduling',
  'Harvest recording & yield tracking',
  'Wine batches, lots, vessels & cellar operations',
  'Bottling runs & finished goods inventory',
  'Stock management (locations, transfers, adjustments)',
  'Customer CRM, sales orders, dispatches & deliveries',
  'Lab samples, analytes, specifications & alerts',
  'Machinery fleet tracking',
  'Finance (income, expenses, net position)',
  'Weather integration',
  'Planner / task board',
  'AI Intelligence dashboard (rule-based insights from real data)',
  'Reporting & CSV exports',
];

const GuidanceSection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 8, md: 10 },
      background: `linear-gradient(135deg, ${WINE_DARK} 0%, ${WINE} 55%, #8A2A47 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Subtle pattern overlay */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <ScrollReveal>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 800,
            mb: 1.5,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            lineHeight: 1.2,
          }}
        >
          General guidance
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.8)',
            mb: 6,
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: 1.9,
            maxWidth: 760,
            mx: 'auto',
          }}
        >
          WineRix is a full-stack Vineyard Intelligence Platform built with React, Material UI and
          Supabase. It covers the entire grape-to-glass lifecycle:
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Box
          sx={{
            maxWidth: 860,
            mx: 'auto',
            p: { xs: 3, md: 5 },
            borderRadius: '20px',
            bgcolor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Grid container columnSpacing={4} rowSpacing={0}>
            {capabilities.map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    minHeight: 52,
                    py: 1,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 20 20"
                    sx={{ width: 18, height: 18, flexShrink: 0 }}
                  >
                    <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.18)" />
                    <path d="M6 10.5 L9 13 L14 7" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.45 }}>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <PrimaryButton
            component="a"
            href="https://wine.feldrix.com"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.6, bgcolor: 'white', color: WINE, '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
          >
            Join Access
          </PrimaryButton>
        </Box>
      </ScrollReveal>
    </Container>
  </Box>
);

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────

const WineRix = () => (
  <>
    <SEO
      title="WineRix by Feldrix | Intelligent Management for Modern Vineyards"
      description="Vineyard intelligence software from Feldrix. Manage blocks, operations, harvest and finances — all in one calm workspace."
      canonical="/winerix"
      keywords="vineyard management software, winery management, harvest tracking, vineyard operations, WineRix Feldrix, vineyard intelligence"
    />
    <HeroSection />
    <EcosystemBar />
    <FeaturesSection />
    <GuidanceSection />
  </>
);

export default WineRix;
