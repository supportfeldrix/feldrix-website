import { Box, Container, Grid, Typography } from '@mui/material';
import { ScrollReveal } from '../../../components/animations';

const SCREENSHOT = '/images/dashboard-screenshot.svg';

const AppPreview = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 10, md: 14 },
      background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ position: 'absolute', top: '30%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 60%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <ScrollReveal direction="left">
            <Typography variant="h3" sx={{ color: 'white', mb: 2, fontWeight: 750 }}>
              See Feldrix in action
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, mb: 3 }}>
              Beautiful, responsive dashboards designed for clarity and speed across all your devices.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              Desktop • Tablet • Mobile
            </Typography>
          </ScrollReveal>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <ScrollReveal direction="right">
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minHeight: { xs: 220, md: 340 } }}>

              {/* Desktop */}
              <Box sx={{ width: '72%', position: 'relative', zIndex: 1 }}>
                <Box sx={{ borderRadius: '12px', overflow: 'hidden', bgcolor: '#FFF', boxShadow: '0 24px 80px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {/* Chrome bar */}
                  <Box sx={{ height: 28, bgcolor: '#F8FAFC', borderBottom: '1px solid rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', px: 1.5, gap: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FCA5A5' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FDE68A' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#86EFAC' }} />
                    <Box sx={{ ml: 1.5, height: 14, flex: 1, maxWidth: 140, borderRadius: '4px', bgcolor: '#FFF', border: '1px solid rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', px: 0.8 }}>
                      <Typography sx={{ fontSize: '0.4rem', color: 'text.secondary' }}>app.feldrix.com</Typography>
                    </Box>
                  </Box>
                  {/* Screenshot */}
                  <Box
                    component="img"
                    src={SCREENSHOT}
                    alt="Feldrix Dashboard"
                    sx={{ width: '100%', display: 'block' }}
                  />
                </Box>
              </Box>

              {/* Tablet — right overlap */}
              <Box sx={{ width: '28%', position: 'absolute', right: 0, bottom: 0, zIndex: 2 }}>
                <Box sx={{ borderRadius: '12px', overflow: 'hidden', bgcolor: '#1E293B', p: 0.5, boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}>
                  <Box sx={{ borderRadius: '9px', overflow: 'hidden', bgcolor: '#FFF' }}>
                    <Box sx={{ height: 12, bgcolor: '#F8FAFC' }} />
                    <Box
                      component="img"
                      src={SCREENSHOT}
                      alt="Feldrix Tablet View"
                      sx={{ width: '100%', display: 'block' }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Mobile — left overlap */}
              <Box sx={{ width: '14%', position: 'absolute', left: '6%', bottom: 0, zIndex: 3 }}>
                <Box sx={{ borderRadius: '14px', overflow: 'hidden', bgcolor: '#1E293B', p: 0.4, boxShadow: '0 12px 36px rgba(0,0,0,0.4)' }}>
                  <Box sx={{ borderRadius: '11px', overflow: 'hidden', bgcolor: '#FFF' }}>
                    <Box sx={{ height: 10, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', pb: 0.2 }}>
                      <Box sx={{ width: 18, height: 2.5, borderRadius: 2, bgcolor: '#E2E8F0' }} />
                    </Box>
                    <Box
                      component="img"
                      src={SCREENSHOT}
                      alt="Feldrix Mobile View"
                      sx={{ width: '100%', display: 'block' }}
                    />
                  </Box>
                </Box>
              </Box>

            </Box>
          </ScrollReveal>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default AppPreview;
