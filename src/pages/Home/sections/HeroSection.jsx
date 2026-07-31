import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const trustBullets = ['Free to start', 'No credit card required', 'Cancel anytime'];

const FeldrixDashboardPreview = () => (
  <Box sx={{ display: 'flex', minHeight: { xs: 240, md: 330 } }}>
    {/* Sidebar */}
    <Box sx={{ width: { xs: 0, sm: 130, md: 150 }, bgcolor: '#FAFAFA', borderRight: '1px solid rgba(15,23,42,0.04)', py: 1.5, px: 1, display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, px: 1 }}>
        <Box component="img" src="/Branding/app-icon-1024.png" alt="" sx={{ width: 20, height: 20, borderRadius: '6px' }} />
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>FELDRIX</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.9, bgcolor: '#16A34A', borderRadius: '8px', mb: 0.5 }}>
        <Box sx={{ width: 14, height: 14, borderRadius: '4px', bgcolor: 'rgba(255,255,255,0.4)' }} />
        <Typography sx={{ fontSize: '0.6rem', color: 'white', fontWeight: 600 }}>Dashboard</Typography>
      </Box>
      {['Livestock', 'Crops', 'Machinery', 'Planner', 'Finance', 'Reports', 'AI Assistant', 'Weather', 'Settings'].map((item) => (
        <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.7 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: '4px', bgcolor: '#E2E8F0' }} />
          <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary' }}>{item}</Typography>
        </Box>
      ))}
    </Box>

    {/* Main content */}
    <Box sx={{ flex: 1, p: 2, overflow: 'hidden' }}>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, mb: 0.2 }}>Welcome back, Tienie! 👋</Typography>
      <Typography sx={{ fontSize: '0.55rem', color: 'text.secondary', mb: 2 }}>Here's what's happening on your farm today.</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, mb: 2 }}>
        {[
          { icon: '🐄', label: 'Livestock', value: '124', sub: 'Total Animals', color: '#16A34A' },
          { icon: '🌱', label: 'Crops', value: '8', sub: 'Active Crops', color: '#F59E0B' },
          { icon: '📋', label: 'Tasks', value: '12', sub: 'Due Today', color: '#3B82F6' },
          { icon: '💰', label: 'Profit (MTD)', value: 'R 24,750', sub: '+15% vs last month', color: '#8B5CF6' },
        ].map((s) => (
          <Box key={s.label} sx={{ p: 1.2, borderRadius: '10px', border: '1px solid rgba(15,23,42,0.06)', display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{ fontSize: '0.48rem', color: 'text.secondary' }}>{s.icon} {s.label}</Typography>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: s.color }}>{s.value}</Typography>
            <Typography sx={{ fontSize: '0.4rem', color: 'text.secondary' }}>{s.sub}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 1.5, mb: 1.5 }}>
        <Box sx={{ p: 1.5, borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
          <Typography sx={{ fontSize: '0.55rem', fontWeight: 700, mb: 1 }}>Farm Health Score</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: '50%', border: '3.5px solid #16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#16A34A' }}>85</Typography>
            </Box>
            <Box>
              {['Livestock  87%', 'Crops  78%', 'Machinery  92%', 'Finance  84%'].map((l) => (
                <Typography key={l} sx={{ fontSize: '0.43rem', color: 'text.secondary', lineHeight: 1.7 }}>{l}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ p: 1.5, borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography sx={{ fontSize: '0.55rem', fontWeight: 700 }}>Upcoming Tasks</Typography>
            <Typography sx={{ fontSize: '0.43rem', color: 'primary.main', fontWeight: 600 }}>View all</Typography>
          </Box>
          {[{ t: 'Vaccinate herd', d: 'Today' }, { t: 'Irrigation check', d: 'Tomorrow' }, { t: 'Tractor service', d: '2 days' }, { t: 'Monthly financial review', d: '5 days' }].map((x) => (
            <Box key={x.t} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.4, borderBottom: '1px solid rgba(15,23,42,0.03)' }}>
              <Typography sx={{ fontSize: '0.46rem', color: 'text.secondary' }}>● {x.t}</Typography>
              <Typography sx={{ fontSize: '0.4rem', color: 'text.tertiary' }}>{x.d}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 1.5 }}>
        <Box sx={{ p: 1.5, borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
          <Typography sx={{ fontSize: '0.55rem', fontWeight: 700, mb: 0.5 }}>Weather</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 800 }}>☀️ 24°C</Typography>
            <Typography sx={{ fontSize: '0.4rem', color: 'text.secondary' }}>Partly Cloudy</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 0.75 }}>
            {['Tue 26°', 'Wed 27°', 'Thu 25°', 'Fri 26°'].map((d) => (
              <Typography key={d} sx={{ fontSize: '0.4rem', color: 'text.secondary' }}>{d}</Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ p: 1.5, borderRadius: '12px', border: '1px solid rgba(15,23,42,0.06)' }}>
          <Typography sx={{ fontSize: '0.55rem', fontWeight: 700, mb: 0.5 }}>Recent Activity</Typography>
          {[{ a: 'New calf born', t: '3 hours ago' }, { a: 'Irrigation completed', t: '4 hours ago' }].map((x) => (
            <Box key={x.a} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.35 }}>
              <Typography sx={{ fontSize: '0.43rem', color: 'text.secondary' }}>🔴 {x.a}</Typography>
              <Typography sx={{ fontSize: '0.38rem', color: 'text.tertiary' }}>{x.t}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

const HeroSection = () => (
  <Box
    component="section"
    sx={{
      pt: { xs: 14, md: 16 },
      pb: { xs: 8, md: 10 },
      minHeight: { md: '85vh' },
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#FFFFFF',
    }}
  >
    {/* Full-width farm background on the right side */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '55%' },
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        backgroundImage: 'url(/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay to blend into white on the left */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            md: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.2) 55%, transparent 100%)',
          },
        }}
      />
    </Box>

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Text */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block', fontWeight: 700 }}>
              Farm Management Platform
            </Typography>
            <Typography variant="h1" component="h1" sx={{ color: 'text.primary', mb: 3 }}>
              Farm Smarter.{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>Grow Stronger.</Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4.5, maxWidth: 420 }}>
              The complete farm management platform for livestock, crops, machinery, finance and planning.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4.5 }}>
              <Button
                variant="contained" color="primary" size="large"
                href="https://app.feldrix.com/register"
                endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: '50px', px: 4.5, py: 1.8, fontSize: '0.95rem', fontWeight: 600, textTransform: 'none', boxShadow: '0 6px 20px rgba(22,163,74,0.3)' }}
              >
                Start Free
              </Button>
              <Button
                variant="outlined" size="large" href="/contact"
                startIcon={<CalendarTodayOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
                sx={{ borderRadius: '50px', px: 3.5, py: 1.8, fontSize: '0.95rem', fontWeight: 600, textTransform: 'none', borderColor: 'rgba(15,23,42,0.2)', color: 'text.primary', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(22,163,74,0.03)' } }}
              >
                Book a Demo
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              {trustBullets.map((b) => (
                <Box key={b} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                  <CheckIcon sx={{ fontSize: '0.95rem', color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>{b}</Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Grid>

        {/* Right — Dashboard mockup overlaid on the farm photo */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box
              sx={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)',
                border: '1px solid rgba(15,23,42,0.08)',
                bgcolor: '#FFFFFF',
              }}
            >
              {/* Browser chrome */}
              <Box sx={{ height: 40, bgcolor: '#FFFFFF', borderBottom: '1px solid rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', px: 2, gap: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 0.7 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FCA5A5' }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FDE68A' }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#86EFAC' }} />
                </Box>
                <Box sx={{ ml: 1, flex: 1, maxWidth: 200, height: 24, borderRadius: '8px', bgcolor: '#F8FAFC', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', px: 1.5 }}>
                  <Typography sx={{ fontSize: '0.6rem', color: 'text.secondary' }}>app.feldrix.com</Typography>
                </Box>
                <Box sx={{ ml: 'auto', display: 'flex', gap: 0.75, alignItems: 'center' }}>
                  <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: '#F1F5F9' }} />
                  <Box sx={{ width: 80, height: 22, borderRadius: '11px', bgcolor: '#F8FAFC', border: '1px solid rgba(15,23,42,0.05)' }} />
                </Box>
              </Box>
              <FeldrixDashboardPreview />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HeroSection;
