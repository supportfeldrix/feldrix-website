import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { ScrollReveal, FadeIn } from '../../components/animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const MotionBox = motion.create(Box);

// ─── FLYBY LOGO SVG (Drone-style mark) ───────────────────────────────────────

const FlyByLogo = ({ size = 40, color = '#16A34A' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Drone body */}
    <rect x="18" y="20" width="12" height="8" rx="4" fill={color} />
    {/* Arms */}
    <rect x="8" y="22" width="12" height="3" rx="1.5" fill={color} opacity="0.85" />
    <rect x="28" y="22" width="12" height="3" rx="1.5" fill={color} opacity="0.85" />
    {/* Rotors */}
    <ellipse cx="10" cy="20" rx="6" ry="2" fill={color} opacity="0.5" />
    <ellipse cx="38" cy="20" rx="6" ry="2" fill={color} opacity="0.5" />
    <ellipse cx="10" cy="27" rx="6" ry="2" fill={color} opacity="0.5" />
    <ellipse cx="38" cy="27" rx="6" ry="2" fill={color} opacity="0.5" />
    {/* Camera */}
    <circle cx="24" cy="30" r="2" fill="white" />
  </svg>
);

// ─── DRONE ICON SVG (used in ecosystem & footer) ─────────────────────────────

const DroneIcon = ({ size = 32, color = '#0F172A' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="8" height="5" rx="2.5" fill={color} />
    <rect x="5" y="15" width="8" height="2" rx="1" fill={color} opacity="0.8" />
    <rect x="19" y="15" width="8" height="2" rx="1" fill={color} opacity="0.8" />
    <ellipse cx="7" cy="13.5" rx="4" ry="1.2" fill={color} opacity="0.4" />
    <ellipse cx="25" cy="13.5" rx="4" ry="1.2" fill={color} opacity="0.4" />
    <ellipse cx="7" cy="18.5" rx="4" ry="1.2" fill={color} opacity="0.4" />
    <ellipse cx="25" cy="18.5" rx="4" ry="1.2" fill={color} opacity="0.4" />
    <circle cx="16" cy="20.5" r="1.5" fill={color} opacity="0.6" />
  </svg>
);

// ─── FEATURE ICONS (Line-art style SVGs matching the mockup) ─────────────────

const MissionPlanningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <path d="M16 24 L22 30 L34 18" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M24 8 L24 12 M24 36 L24 40 M8 24 L12 24 M36 24 L40 24" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3" stroke="#1E293B" strokeWidth="1.5" fill="none" />
  </svg>
);

const PilotManagementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="16" r="7" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <path d="M12 38 C12 30 18 26 24 26 C30 26 36 30 36 38" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M18 13 L30 13" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 16 L36 12 M36 16 L38 14" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const FleetManagementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="12" height="8" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <rect x="26" y="18" width="12" height="8" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <rect x="18" y="30" width="12" height="8" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <path d="M7 16 L11 16 M21 16 L27 16 M37 16 L41 16" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="16" cy="14" r="2" stroke="#1E293B" strokeWidth="1" fill="none" opacity="0.5" />
    <circle cx="32" cy="14" r="2" stroke="#1E293B" strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

const BatteryIntelligenceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="20" height="24" rx="3" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <rect x="18" y="10" width="8" height="4" rx="1" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <rect x="15" y="24" width="14" height="10" rx="1" fill="#1E293B" opacity="0.15" />
    <path d="M22 20 L20 26 L25 26 L23 32" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="15" y="34" width="4" height="1.5" rx="0.5" fill="#1E293B" opacity="0.3" />
    <rect x="20" y="34" width="4" height="1.5" rx="0.5" fill="#1E293B" opacity="0.3" />
    <rect x="25" y="34" width="4" height="1.5" rx="0.5" fill="#1E293B" opacity="0.3" />
  </svg>
);

const WeatherIntelligenceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 28 C10 28 8 25 8 22 C8 19 10 16 14 16 C14 12 18 9 22 9 C26 9 29 11 30 14 C34 14 38 17 38 22 C38 26 35 28 32 28" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M16 34 L16 38 M22 32 L22 40 M28 34 L28 38 M34 33 L34 37" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M12 32 L14 30 M32 30 L34 28" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
);

const MissionExecutionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="28" height="24" rx="3" stroke="#1E293B" strokeWidth="1.5" fill="none" />
    <path d="M10 20 L38 20" stroke="#1E293B" strokeWidth="1.5" />
    <circle cx="15" cy="16" r="1.5" fill="#1E293B" opacity="0.3" />
    <circle cx="20" cy="16" r="1.5" fill="#1E293B" opacity="0.3" />
    <circle cx="25" cy="16" r="1.5" fill="#1E293B" opacity="0.3" />
    <path d="M15 26 L20 26 M15 30 L25 30 M15 34 L22 34" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M30 26 L33 29 L36 24" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── WORKFLOW ICONS ───────────────────────────────────────────────────────────

const WorkflowIcons = {
  Customer: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4" stroke="#1E293B" strokeWidth="1.5" fill="none"/><path d="M7 24c0-4 3-7 7-7s7 3 7 7" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
  ),
  Farm: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 22h20M7 22V14l7-6 7 6v8M12 22v-5h4v5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
  ),
  Field: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20l6-4 6 3 8-5M4 24h20M8 24v-3M14 24v-2M20 24v-4" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
  ),
  Weather: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 16c-2 0-3-1.5-3-3s1-3 3-3c0-2 2-4 5-4s4.5 1.5 5 3c2 0 4 1.5 4 3.5S20 16 18 16" stroke="#1E293B" strokeWidth="1.5" fill="none"/><path d="M10 20v2M14 19v3M18 20v2" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  Mission: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="6" width="18" height="16" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none"/><path d="M5 11h18M9 15h4M9 18h6" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  Dispatch: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l9-9 9 9M7 14l7 9 7-9" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
  ),
  Pilot: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="4" stroke="#1E293B" strokeWidth="1.5" fill="none"/><path d="M9 10h10" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 24c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
  ),
  Fly: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="11" y="12" width="6" height="4" rx="2" fill="#1E293B"/><rect x="4" y="13" width="8" height="2" rx="1" fill="#1E293B" opacity="0.7"/><rect x="16" y="13" width="8" height="2" rx="1" fill="#1E293B" opacity="0.7"/><ellipse cx="6" cy="11.5" rx="3" ry="1" fill="#1E293B" opacity="0.35"/><ellipse cx="22" cy="11.5" rx="3" ry="1" fill="#1E293B" opacity="0.35"/></svg>
  ),
  Complete: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="5" width="18" height="18" rx="3" stroke="#1E293B" strokeWidth="1.5" fill="none"/><path d="M10 14l3 3 6-6" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

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
    {/* Background — drone photo area on the right */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '50%' },
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 30%, #A5D6A7 60%, #81C784 100%)',
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
      {/* Drone SVG illustration with floating animation */}
      <MotionBox
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '22%',
          right: '12%',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Drone body */}
          <rect x="115" y="85" width="50" height="30" rx="15" fill="#1E293B" />
          {/* Arms */}
          <rect x="45" y="95" width="75" height="8" rx="4" fill="#334155" />
          <rect x="160" y="95" width="75" height="8" rx="4" fill="#334155" />
          {/* Front arms */}
          <rect x="60" y="80" width="60" height="8" rx="4" fill="#334155" transform="rotate(-15 90 84)" />
          <rect x="160" y="80" width="60" height="8" rx="4" fill="#334155" transform="rotate(15 190 84)" />
          {/* Rotors - spinning effect */}
          <ellipse cx="55" cy="78" rx="28" ry="5" fill="#64748B" opacity="0.4" />
          <ellipse cx="225" cy="78" rx="28" ry="5" fill="#64748B" opacity="0.4" />
          <ellipse cx="55" cy="115" rx="28" ry="5" fill="#64748B" opacity="0.4" />
          <ellipse cx="225" cy="115" rx="28" ry="5" fill="#64748B" opacity="0.4" />
          {/* Rotor hubs */}
          <circle cx="55" cy="78" r="4" fill="#475569" />
          <circle cx="225" cy="78" r="4" fill="#475569" />
          <circle cx="55" cy="115" r="4" fill="#475569" />
          <circle cx="225" cy="115" r="4" fill="#475569" />
          {/* Camera gimbal */}
          <rect x="132" y="115" width="16" height="10" rx="3" fill="#475569" />
          <circle cx="140" cy="127" r="5" fill="#334155" />
          <circle cx="140" cy="127" r="3" fill="#1E293B" />
          <circle cx="140" cy="127" r="1.5" fill="#16A34A" opacity="0.8" />
          {/* LED lights */}
          <circle cx="120" cy="88" r="2" fill="#16A34A" opacity="0.9" />
          <circle cx="160" cy="88" r="2" fill="#EF4444" opacity="0.9" />
          {/* Landing gear */}
          <rect x="120" y="130" width="3" height="15" rx="1.5" fill="#64748B" />
          <rect x="157" y="130" width="3" height="15" rx="1.5" fill="#64748B" />
          <rect x="112" y="144" width="20" height="3" rx="1.5" fill="#64748B" />
          <rect x="148" y="144" width="20" height="3" rx="1.5" fill="#64748B" />
          {/* Spray nozzles */}
          <path d="M100 125 L100 140 L95 155" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M180 125 L180 140 L185 155" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          {/* Spray droplets */}
          <circle cx="93" cy="160" r="1.5" fill="#16A34A" opacity="0.3" />
          <circle cx="96" cy="165" r="1" fill="#16A34A" opacity="0.25" />
          <circle cx="90" cy="168" r="1.5" fill="#16A34A" opacity="0.2" />
          <circle cx="187" cy="160" r="1.5" fill="#16A34A" opacity="0.3" />
          <circle cx="184" cy="165" r="1" fill="#16A34A" opacity="0.25" />
          <circle cx="190" cy="168" r="1.5" fill="#16A34A" opacity="0.2" />
        </svg>
      </MotionBox>
      {/* Field/crop pattern at bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(0deg, rgba(22,163,74,0.12) 0%, transparent 100%)',
          display: { xs: 'none', md: 'block' },
        }}
      />
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
                bgcolor: '#16A34A',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.05em',
                borderRadius: '6px',
                height: 28,
              }}
            />

            {/* FLYBY heading with logo mark */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: 'clamp(3.5rem, 10vw, 5.5rem)', md: 'clamp(4.5rem, 7vw, 6rem)' },
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  color: '#0F172A',
                }}
              >
                FLYBY
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DroneIcon size={48} color="#16A34A" />
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
              Precision Agriculture from Above
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: 420,
              }}
            >
              FlyBy is a powerful drone operations platform built for agricultural spraying companies and professional pilots.
            </Typography>

            {/* Button */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <PrimaryButton
                component="a"
                href="#early-access"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.6 }}
              >
                Join Early Access
              </PrimaryButton>
            </Stack>
          </motion.div>
        </Grid>

        {/* Mobile drone visual */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 3 }}>
          <MotionBox
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <DroneIcon size={120} color="#1E293B" />
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ─── ONE ECOSYSTEM BAR ────────────────────────────────────────────────────────

const EcosystemBar = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 5, md: 6 },
      bgcolor: '#F0FDF4',
      borderTop: '1px solid rgba(22,163,74,0.08)',
      borderBottom: '1px solid rgba(22,163,74,0.08)',
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 3, py: 2, borderRadius: '14px', bgcolor: 'white', border: '1px solid rgba(22,163,74,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '10px', bgcolor: 'rgba(22,163,74,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 3, py: 2, borderRadius: '14px', bgcolor: 'white', border: '1px solid rgba(22,163,74,0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '10px', bgcolor: 'rgba(22,163,74,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DroneIcon size={24} color="#1E293B" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.03em', color: '#0F172A' }}>FLYBY</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>Drone Operations Software</Typography>
            </Box>
          </Box>

          {/* Arrow */}
          <Typography sx={{ color: 'text.tertiary', fontSize: '1.2rem', display: { xs: 'none', sm: 'block' } }}>→</Typography>

          {/* More */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 3, py: 2 }}>
            <Box sx={{ width: 36, height: 36, borderRadius: '50%', border: '2px dashed rgba(15,23,42,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ fontWeight: 700, color: 'text.tertiary', fontSize: '1.1rem' }}>+</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.03em', color: 'text.secondary', textTransform: 'uppercase' }}>More Innovations</Typography>
              <Typography sx={{ fontSize: '0.65rem', color: 'text.tertiary' }}>Coming Soon</Typography>
            </Box>
          </Box>
        </Box>
      </ScrollReveal>
    </Container>
  </Box>
);

// ─── FEATURES SECTION (Horizontal row like the mockup) ───────────────────────

const features = [
  { Icon: MissionPlanningIcon, title: 'Mission Planning', description: 'Plan intelligent spray missions with precision and confidence.' },
  { Icon: PilotManagementIcon, title: 'Pilot Management', description: 'Assign pilots, track flight hours and manage certifications.' },
  { Icon: FleetManagementIcon, title: 'Fleet Management', description: 'Monitor your entire fleet status, maintenance and performance.' },
  { Icon: BatteryIntelligenceIcon, title: 'Battery Intelligence', description: 'Track battery health, cycles, and readiness in real time.' },
  { Icon: WeatherIntelligenceIcon, title: 'Weather Intelligence', description: 'Advanced weather data to help you spray at the right time.' },
  { Icon: MissionExecutionIcon, title: 'Mission Execution', description: 'Dispatch, fly, monitor and complete missions with ease.' },
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
          Powerful features for professional operations
        </Typography>
      </ScrollReveal>

      <Grid container spacing={{ xs: 4, md: 3 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
            <ScrollReveal delay={index * 0.06}>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
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
                  }}
                >
                  <feature.Icon />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    color: '#0F172A',
                    mb: 1,
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    maxWidth: 160,
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

// ─── HOW FLYBY WORKS (Dark horizontal workflow) ──────────────────────────────

const workflowSteps = [
  { Icon: WorkflowIcons.Customer, label: 'Customer', number: 1 },
  { Icon: WorkflowIcons.Farm, label: 'Farm', number: 2 },
  { Icon: WorkflowIcons.Field, label: 'Field', number: 3 },
  { Icon: WorkflowIcons.Weather, label: 'Weather', number: 4 },
  { Icon: WorkflowIcons.Mission, label: 'Mission', number: 5 },
  { Icon: WorkflowIcons.Dispatch, label: 'Dispatch', number: 6 },
  { Icon: WorkflowIcons.Pilot, label: 'Pilot', number: 7 },
  { Icon: WorkflowIcons.Fly, label: 'Fly', number: 8 },
  { Icon: WorkflowIcons.Complete, label: 'Complete', number: 9 },
];

const WorkflowSection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: { xs: 3, md: 6 } }}>
        {/* Left title */}
        <Box sx={{ minWidth: { md: 180 } }}>
          <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.2rem', mb: 0.5 }}>
            How FlyBy works
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>
            From planning to completion.{' '}
            <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
            Every step connected.
          </Typography>
        </Box>

        {/* Workflow steps */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', md: 'center' },
            gap: { xs: 1, md: 1.5 },
            overflowX: 'auto',
            pb: { xs: 1, md: 0 },
            '&::-webkit-scrollbar': { height: 4 },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 },
          }}
        >
          {workflowSteps.map((step, index) => (
            <Box key={step.label} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, md: 1 }, flexShrink: 0 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 36, md: 42 },
                    height: { xs: 36, md: 42 },
                    borderRadius: '10px',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 0.5,
                    mx: 'auto',
                    '& svg': { width: 20, height: 20 },
                    '& svg *': { stroke: 'rgba(255,255,255,0.8)', fill: 'none' },
                    '& svg rect[fill], & svg circle[fill]': { fill: 'rgba(255,255,255,0.8)' },
                  }}
                >
                  <step.Icon />
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem', fontWeight: 700 }}>
                  {step.number}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6rem', fontWeight: 600 }}>
                  {step.label}
                </Typography>
              </Box>
              {index < workflowSteps.length - 1 && (
                <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', mx: 0.3 }}>
                  →
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

// ─── EARLY ACCESS SECTION (Centered with premium image) ─────────────────────

const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <Box
      id="early-access"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #15803D 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <ScrollReveal>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              lineHeight: 1.2,
            }}
          >
            Be an Early Access Partner
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.75)',
              mb: 5,
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Join a select group of agricultural professionals helping shape the future of drone operations in agriculture.
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {!submitted ? (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                gap: 1.5,
                flexDirection: { xs: 'column', sm: 'row' },
                maxWidth: 500,
                mx: 'auto',
                mb: 6,
              }}
            >
              <TextField
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    bgcolor: 'rgba(255,255,255,0.95)',
                    height: 50,
                    '& fieldset': { borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: 'rgba(22,163,74,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#16A34A' },
                  },
                  '& .MuiInputBase-input': { fontSize: '0.9rem', px: 2 },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#22C55E',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  borderRadius: '12px',
                  px: 3.5,
                  height: 50,
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(22,163,74,0.3)',
                  whiteSpace: 'nowrap',
                  '&:hover': { bgcolor: '#16A34A', boxShadow: '0 6px 20px rgba(22,163,74,0.4)' },
                }}
              >
                Join Early Access
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 6 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: 'rgba(34,197,94,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#22C55E', fontSize: '1.2rem', fontWeight: 700 }}>✓</Typography>
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1rem', mb: 0.3 }}>
                  You're on the list!
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  We'll be in touch with early access details soon.
                </Typography>
              </Box>
            </Box>
          )}
        </ScrollReveal>

        {/* Premium drone operator card */}
        <ScrollReveal delay={0.2}>
          <Box
            sx={{
              width: { xs: '100%', sm: 320 },
              height: 240,
              borderRadius: '20px',
              overflow: 'hidden',
              bgcolor: 'rgba(22,163,74,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Drone operator with controller SVG */}
            <svg width="200" height="190" viewBox="0 0 200 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground */}
              <ellipse cx="100" cy="180" rx="70" ry="8" fill="rgba(255,255,255,0.05)" />
              {/* Person body */}
              <path d="M80 175 C80 140 85 125 100 118 C115 125 120 140 120 175" fill="rgba(255,255,255,0.18)" />
              {/* Person head */}
              <circle cx="100" cy="98" r="16" fill="rgba(255,255,255,0.2)" />
              {/* Cap visor */}
              <path d="M84 95 Q100 88 116 95" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Arms holding controller */}
              <path d="M82 135 Q75 145 78 155" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M118 135 Q125 145 122 155" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Controller/tablet */}
              <rect x="76" y="148" width="48" height="30" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <rect x="80" y="152" width="40" height="22" rx="2" fill="rgba(255,255,255,0.06)" />
              {/* Screen content — mini map */}
              <path d="M85 160 L95 158 L105 162 L115 157" stroke="rgba(34,197,94,0.5)" strokeWidth="1" />
              <circle cx="100" cy="163" r="2" fill="rgba(34,197,94,0.4)" />
              {/* Drone above */}
              <g transform="translate(55, 30)">
                <rect x="34" y="18" width="22" height="12" rx="6" fill="rgba(255,255,255,0.25)" />
                <rect x="14" y="22" width="22" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
                <rect x="54" y="22" width="22" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
                <ellipse cx="18" cy="19" rx="10" ry="3" fill="rgba(255,255,255,0.12)" />
                <ellipse cx="72" cy="19" rx="10" ry="3" fill="rgba(255,255,255,0.12)" />
                <circle cx="45" cy="32" r="3" fill="rgba(34,197,94,0.4)" />
              </g>
              {/* Signal waves from controller to drone */}
              <path d="M100 148 Q100 100 100 55" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────

const FlyBy = () => (
  <>
    <SEO
      title="FlyBy by Feldrix | Precision Agriculture from Above"
      description="Professional drone operations software for agricultural spraying companies. Mission planning, fleet management, pilot management, battery intelligence, weather awareness, and live mission execution."
      canonical="/flyby"
      keywords="agricultural drone software, drone operations management, precision agriculture, crop spraying software, drone fleet management, FlyBy Feldrix"
    />
    <HeroSection />
    <EcosystemBar />
    <FeaturesSection />
    <WorkflowSection />
    <EarlyAccessSection />
  </>
);

export default FlyBy;
