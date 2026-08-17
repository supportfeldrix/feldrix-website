import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import { ScrollReveal, StaggerContainer, FadeIn } from '../../components/animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

const HeroSection = () => (
  <Box
    component="section"
    sx={{
      pt: { xs: 14, md: 18 },
      pb: { xs: 8, md: 12 },
      minHeight: { md: '90vh' },
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#FFFFFF',
    }}
  >
    {/* Background image — right side */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '55%' },
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #D1FAE5 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
            md: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          },
        }}
      />
      {/* Floating drone illustration */}
      <MotionBox
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '5rem', md: '8rem' },
          }}
        >
          🚁
        </Box>
      </MotionBox>
      {/* Field pattern dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: 200,
          height: 200,
          opacity: 0.15,
          backgroundImage: 'radial-gradient(circle, #16A34A 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Chip
              label="NEW FROM FELDRIX"
              size="small"
              sx={{
                mb: 3,
                bgcolor: 'rgba(22, 163, 74, 0.08)',
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '0.7rem',
                letterSpacing: '0.06em',
                border: '1px solid rgba(22, 163, 74, 0.2)',
                borderRadius: '8px',
                height: 30,
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 1,
                fontSize: { xs: 'clamp(3rem, 8vw, 5rem)', md: 'clamp(4rem, 6vw, 5.5rem)' },
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'text.primary',
              }}
            >
              FLYBY
            </Typography>
            <Typography
              variant="h4"
              component="p"
              sx={{
                mb: 3,
                color: 'primary.main',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: { xs: '1.3rem', md: '1.6rem' },
              }}
            >
              Precision Agriculture from Above
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                maxWidth: 460,
              }}
            >
              Professional drone operations software designed specifically for agricultural spraying companies.
            </Typography>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {[
                'Plan missions.',
                'Manage pilots.',
                'Track aircraft.',
                'Monitor batteries.',
                'Fly safely.',
                'Generate professional reports.',
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{ color: 'text.secondary', fontSize: '0.95rem', fontWeight: 500 }}
                >
                  {item}
                </Typography>
              ))}
              <Typography
                sx={{ color: 'text.primary', fontSize: '0.95rem', fontWeight: 700, mt: 1 }}
              >
                Everything in one platform.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <PrimaryButton
                component="a"
                href="#early-access"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4.5, py: 1.8 }}
              >
                Join Early Access
              </PrimaryButton>
              <SecondaryButton
                endIcon={<PlayArrowRoundedIcon />}
                sx={{ px: 4, py: 1.8, borderColor: 'rgba(15,23,42,0.2)', color: 'text.primary' }}
              >
                Watch Preview
              </SecondaryButton>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right Side — visual on mobile */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 4 }}>
          <MotionBox
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ fontSize: '6rem' }}
          >
            🚁
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ─── ONE ECOSYSTEM SECTION ────────────────────────────────────────────────────

const EcosystemSection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F8FAFC 100%)',
    }}
  >
    <Container maxWidth="md">
      <ScrollReveal>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: 'primary.main', fontWeight: 750 }}
        >
          One Ecosystem.
        </Typography>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 8, color: 'text.primary', fontWeight: 750 }}
        >
          Endless Possibilities.
        </Typography>
      </ScrollReveal>

      <Grid container spacing={4} justifyContent="center">
        {/* Feldrix Card */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <ScrollReveal delay={0.1}>
            <MotionCard
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(22,163,74,0.12)' }}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 4,
                borderRadius: '20px',
                border: '1px solid rgba(22,163,74,0.1)',
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: '3rem', mb: 2 }}>🌾</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, letterSpacing: '0.02em' }}>
                  FELDRIX
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Helping farmers manage everything on the ground.
                </Typography>
                <Chip
                  label="Farm Management"
                  size="small"
                  sx={{
                    mt: 2,
                    bgcolor: 'rgba(22,163,74,0.06)',
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                />
              </CardContent>
            </MotionCard>
          </ScrollReveal>
        </Grid>

        {/* FlyBy Card */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <ScrollReveal delay={0.2}>
            <MotionCard
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(22,163,74,0.12)' }}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 4,
                borderRadius: '20px',
                border: '1px solid rgba(22,163,74,0.15)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)',
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: '3rem', mb: 2 }}>🚁</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, letterSpacing: '0.02em' }}>
                  FLYBY
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Helping drone operators manage everything in the sky.
                </Typography>
                <Chip
                  label="Drone Operations"
                  size="small"
                  sx={{
                    mt: 2,
                    bgcolor: 'rgba(22,163,74,0.08)',
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    border: '1px solid rgba(22,163,74,0.15)',
                  }}
                />
              </CardContent>
            </MotionCard>
          </ScrollReveal>
        </Grid>
      </Grid>

      <ScrollReveal delay={0.3}>
        <Typography
          sx={{
            textAlign: 'center',
            mt: 6,
            color: 'text.secondary',
            fontSize: '1rem',
            fontWeight: 500,
            fontStyle: 'italic',
          }}
        >
          More innovations are already in development.
        </Typography>
      </ScrollReveal>
    </Container>
  </Box>
);

// ─── WHY FLYBY — FEATURES SECTION ────────────────────────────────────────────

const features = [
  {
    icon: <MapOutlinedIcon fontSize="inherit" />,
    title: 'Mission Planning',
    description: 'Professional agricultural spray planning with precision field mapping, automated flight paths, and intelligent coverage optimisation.',
  },
  {
    icon: <BadgeOutlinedIcon fontSize="inherit" />,
    title: 'Pilot Management',
    description: 'Manage pilots, licences, qualifications, flight hours, and certifications. Always know who is cleared to fly.',
  },
  {
    icon: <FlightOutlinedIcon fontSize="inherit" />,
    title: 'Fleet Management',
    description: 'Track aircraft readiness, maintenance schedules, service logs, and real-time availability across your entire fleet.',
  },
  {
    icon: <BatteryChargingFullOutlinedIcon fontSize="inherit" />,
    title: 'Battery Intelligence',
    description: 'Monitor battery health, charge cycles, temperature history, and remaining capacity. Predict when batteries need replacing.',
  },
  {
    icon: <CloudOutlinedIcon fontSize="inherit" />,
    title: 'Weather Intelligence',
    description: 'Safe spraying decisions based on live weather data. Wind speed, temperature inversions, humidity, and drift risk analysis.',
  },
  {
    icon: <RocketLaunchOutlinedIcon fontSize="inherit" />,
    title: 'Mission Execution',
    description: 'Dispatch. Fly. Monitor. Complete. Report. End-to-end mission lifecycle management from briefing to sign-off.',
  },
];

const WhyFlyBySection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', textAlign: 'center', display: 'block', mb: 2 }}
        >
          Why FlyBy
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Powerful features for professional operations
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', mb: 8, maxWidth: 580, mx: 'auto', fontSize: '1.1rem' }}
        >
          Every tool a drone operations company needs, built into one intelligent platform.
        </Typography>
      </ScrollReveal>

      <StaggerContainer stagger={0.08}>
        <Grid container spacing={3.5}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <MotionCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                sx={{ height: '100%', p: 1, cursor: 'default', borderRadius: '20px' }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '14px',
                      bgcolor: 'rgba(22, 163, 74, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      color: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main', fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Container>
  </Box>
);

// ─── HOW FLYBY WORKS — WORKFLOW SECTION ───────────────────────────────────────

const workflowSteps = [
  { icon: <PeopleOutlinedIcon />, label: 'Customer', number: 1 },
  { icon: <LandscapeOutlinedIcon />, label: 'Farm', number: 2 },
  { icon: <GridViewOutlinedIcon />, label: 'Field', number: 3 },
  { icon: <AirOutlinedIcon />, label: 'Weather', number: 4 },
  { icon: <MapOutlinedIcon />, label: 'Mission', number: 5 },
  { icon: <SendOutlinedIcon />, label: 'Dispatch', number: 6 },
  { icon: <PersonOutlinedIcon />, label: 'Pilot', number: 7 },
  { icon: <FlightOutlinedIcon />, label: 'Fly', number: 8 },
  { icon: <CheckCircleOutlinedIcon />, label: 'Complete', number: 9 },
];

const WorkflowSection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Subtle glow */}
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 60%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <ScrollReveal>
        <Typography
          variant="h3"
          sx={{ color: 'white', mb: 1, fontWeight: 700 }}
        >
          How FlyBy works
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, fontSize: '1.05rem' }}>
          From planning to completion. Every step connected.
        </Typography>
      </ScrollReveal>

      {/* Desktop workflow */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          flexWrap: 'nowrap',
        }}
      >
        {workflowSteps.map((step, index) => (
          <ScrollReveal key={step.label} delay={index * 0.06}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '14px',
                    bgcolor: 'rgba(22,163,74,0.1)',
                    border: '1px solid rgba(22,163,74,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22C55E',
                    mb: 1,
                    mx: 'auto',
                  }}
                >
                  {step.icon}
                </Box>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    mb: 0.3,
                  }}
                >
                  {step.number}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}
                >
                  {step.label}
                </Typography>
              </Box>
              {index < workflowSteps.length - 1 && (
                <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem', mx: 0.5 }}>
                  →
                </Typography>
              )}
            </Box>
          </ScrollReveal>
        ))}
      </Box>

      {/* Mobile workflow — grid */}
      <Grid container spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
        {workflowSteps.map((step, index) => (
          <Grid size={{ xs: 4 }} key={step.label}>
            <ScrollReveal delay={index * 0.05}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    bgcolor: 'rgba(22,163,74,0.1)',
                    border: '1px solid rgba(22,163,74,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22C55E',
                    mb: 0.75,
                    mx: 'auto',
                    fontSize: '1.2rem',
                  }}
                >
                  {step.icon}
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.55rem', fontWeight: 700 }}>
                  {step.number}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', fontWeight: 600 }}>
                  {step.label}
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// ─── MISSION CONTROL PREVIEW ──────────────────────────────────────────────────

const MissionControlSection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <Typography variant="overline" sx={{ color: 'primary.main', textAlign: 'center', display: 'block', mb: 2 }}>
          Coming Soon
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Mission Control
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', mb: 8, maxWidth: 580, mx: 'auto', fontSize: '1.1rem' }}
        >
          Professional mission planning for modern agricultural drone operations.
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Box
          sx={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(15,23,42,0.08)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.08)',
            bgcolor: '#F8FAFC',
            position: 'relative',
            minHeight: { xs: 200, md: 400 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Placeholder dashboard mockup */}
          <Box sx={{ p: 4, width: '100%' }}>
            {/* Browser chrome */}
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(15,23,42,0.06)',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <Box sx={{ height: 36, bgcolor: '#FAFAFA', borderBottom: '1px solid rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', px: 2, gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 0.6 }}>
                  <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#FCA5A5' }} />
                  <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#FDE68A' }} />
                  <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#86EFAC' }} />
                </Box>
                <Box sx={{ ml: 2, height: 22, width: 200, borderRadius: '6px', bgcolor: '#F1F5F9', display: 'flex', alignItems: 'center', px: 1.5 }}>
                  <Typography sx={{ fontSize: '0.6rem', color: 'text.tertiary' }}>flyby.feldrix.com/missions</Typography>
                </Box>
              </Box>
              <Box sx={{ p: 3, minHeight: { xs: 150, md: 300 } }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>Active Missions</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5 }}>
                      {[
                        { name: 'Field A-12 Spray', status: 'In Progress', color: '#16A34A' },
                        { name: 'Block 7 Mapping', status: 'Scheduled', color: '#F59E0B' },
                        { name: 'Section 3 Survey', status: 'Complete', color: '#3B82F6' },
                      ].map((mission) => (
                        <Box key={mission.name} sx={{ p: 1.5, borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)' }}>
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, mb: 0.5 }}>{mission.name}</Typography>
                          <Chip label={mission.status} size="small" sx={{ height: 20, fontSize: '0.55rem', bgcolor: `${mission.color}15`, color: mission.color, fontWeight: 600 }} />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
                  {[
                    { label: 'Fleet Ready', value: '8/10', color: '#16A34A' },
                    { label: 'Pilots Active', value: '5', color: '#3B82F6' },
                    { label: 'Batteries Charged', value: '24/30', color: '#F59E0B' },
                    { label: 'Weather Status', value: 'Clear', color: '#16A34A' },
                  ].map((stat) => (
                    <Box key={stat.label} sx={{ p: 1.5, borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)', textAlign: 'center' }}>
                      <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary', mb: 0.5 }}>{stat.label}</Typography>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 800, color: stat.color }}>{stat.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollReveal>
    </Container>
  </Box>
);

// ─── BUILT FOR PROFESSIONALS ──────────────────────────────────────────────────

const professionals = [
  { icon: '🚁', title: 'Agricultural Drone Contractors', description: 'Companies providing commercial spraying services to multiple farms.' },
  { icon: '🌾', title: 'Commercial Farming Operations', description: 'Large-scale farms running their own drone spraying programmes.' },
  { icon: '🎯', title: 'Precision Agriculture Teams', description: 'Teams focused on data-driven crop management and optimisation.' },
  { icon: '💧', title: 'Crop Spraying Companies', description: 'Specialist operators focused on chemical and biological applications.' },
  { icon: '🛠️', title: 'Agricultural Service Providers', description: 'Multi-service companies offering drone operations as part of their portfolio.' },
  { icon: '🏢', title: 'Large Farming Groups', description: 'Farming groups managing drone operations across multiple properties.' },
];

const ProfessionalsSection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <Typography variant="overline" sx={{ color: 'primary.main', textAlign: 'center', display: 'block', mb: 2 }}>
          Built For
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Built for Professionals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', mb: 8, maxWidth: 520, mx: 'auto', fontSize: '1.1rem' }}
        >
          FlyBy is designed for organisations that take drone operations seriously.
        </Typography>
      </ScrollReveal>

      <StaggerContainer stagger={0.08}>
        <Grid container spacing={3}>
          {professionals.map((pro, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <MotionCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                sx={{
                  height: '100%',
                  p: 3,
                  cursor: 'default',
                  borderRadius: '20px',
                  border: '1px solid rgba(15,23,42,0.06)',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography sx={{ fontSize: '2rem', mb: 2 }}>{pro.icon}</Typography>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: 'secondary.main' }}>
                    {pro.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {pro.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Container>
  </Box>
);

// ─── EARLY ACCESS SECTION ─────────────────────────────────────────────────────

const roles = ['Farmer', 'Drone Pilot', 'Drone Contractor', 'Agronomist', 'Other'];

const EarlyAccessSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      id="early-access"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <ScrollReveal>
          <Typography variant="h2" sx={{ color: 'white', textAlign: 'center', mb: 2 }}>
            Become an Early Access Partner
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              mb: 6,
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: 540,
              mx: 'auto',
            }}
          >
            FlyBy is currently being developed together with farmers and professional drone operators.
            Register your interest and be among the first organisations to experience FlyBy.
          </Typography>
        </ScrollReveal>

        {!submitted ? (
          <ScrollReveal delay={0.15}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 480,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={textFieldSx}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={textFieldSx}
              />
              <TextField
                label="Company"
                variant="outlined"
                fullWidth
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                sx={textFieldSx}
              />
              <TextField
                select
                label="Role"
                variant="outlined"
                fullWidth
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                sx={textFieldSx}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
              <PrimaryButton
                type="submit"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 1, py: 1.8, fontSize: '1rem' }}
              >
                Request Early Access
              </PrimaryButton>
            </Box>
          </ScrollReveal>
        ) : (
          <FadeIn>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <CheckCircleOutlinedIcon sx={{ fontSize: '3.5rem', color: '#22C55E', mb: 2 }} />
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
                You're on the list!
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 420, mx: 'auto' }}>
                Thank you for your interest in FlyBy. We'll be in touch soon with exclusive updates and early access details.
              </Typography>
            </Box>
          </FadeIn>
        )}
      </Container>
    </Box>
  );
};

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    bgcolor: 'rgba(255,255,255,0.04)',
    color: 'white',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(22,163,74,0.4)' },
    '&.Mui-focused fieldset': { borderColor: '#16A34A' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#22C55E' },
  '& .MuiSelect-icon': { color: 'rgba(255,255,255,0.5)' },
};

// ─── FUTURE OF FELDRIX SECTION ────────────────────────────────────────────────

const FutureSection = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
    <Container maxWidth="md">
      <ScrollReveal>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          The Future of the Feldrix Ecosystem
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', mb: 8, maxWidth: 540, mx: 'auto', fontSize: '1.05rem' }}
        >
          Building a complete agricultural technology ecosystem, one innovation at a time.
        </Typography>
      </ScrollReveal>

      <Grid container spacing={3.5} justifyContent="center">
        {[
          {
            emoji: '🌾',
            status: 'TODAY',
            name: 'Feldrix',
            description: 'Farm Management',
            color: '#16A34A',
            active: true,
          },
          {
            emoji: '🚁',
            status: 'NEXT',
            name: 'FlyBy',
            description: 'Professional Drone Operations',
            color: '#16A34A',
            active: true,
          },
          {
            emoji: '🚀',
            status: 'FUTURE',
            name: 'Coming Soon',
            description: 'More Agricultural Technology Solutions',
            color: '#64748B',
            active: false,
          },
        ].map((item, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
            <ScrollReveal delay={index * 0.1}>
              <MotionCard
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  border: `1px solid ${item.active ? 'rgba(22,163,74,0.15)' : 'rgba(15,23,42,0.06)'}`,
                  background: item.active
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)'
                    : '#FFFFFF',
                  cursor: 'default',
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: '2.5rem', mb: 2 }}>{item.emoji}</Typography>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      mb: 2,
                      bgcolor: item.active ? 'rgba(22,163,74,0.08)' : 'rgba(100,116,139,0.08)',
                      color: item.color,
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      letterSpacing: '0.06em',
                      border: `1px solid ${item.active ? 'rgba(22,163,74,0.2)' : 'rgba(100,116,139,0.15)'}`,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

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
    <EcosystemSection />
    <WhyFlyBySection />
    <WorkflowSection />
    <MissionControlSection />
    <ProfessionalsSection />
    <EarlyAccessSection />
    <FutureSection />
  </>
);

export default FlyBy;
