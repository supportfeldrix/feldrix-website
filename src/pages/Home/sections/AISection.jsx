import { Box, Container, Grid, Typography } from '@mui/material';
import { ScrollReveal } from '../../../components/animations';
import { motion } from 'framer-motion';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const aiCapabilities = [
  { icon: <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 26 }} />, title: 'Recommendations', desc: 'Data-driven suggestions for better farm outcomes.' },
  { icon: <TimelineOutlinedIcon sx={{ fontSize: 26 }} />, title: 'Predictions', desc: 'Forecast yields, costs, and seasonal timelines.' },
  { icon: <PsychologyOutlinedIcon sx={{ fontSize: 26 }} />, title: 'Farm Intelligence', desc: 'Understand your operation at a glance.' },
  { icon: <SmartToyOutlinedIcon sx={{ fontSize: 26 }} />, title: 'Automation', desc: 'Automate repetitive tasks and workflows.' },
];

const AISection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 10, md: 16 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)',
    }}
  >
    {/* Background glow */}
    <Box sx={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.05) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      {/* Header — centered */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <ScrollReveal>
          <Box sx={{ display: 'inline-flex', px: 2.5, py: 0.75, borderRadius: '100px', bgcolor: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.2)', mb: 3 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#22C55E', letterSpacing: '0.04em' }}>Intelligence Engine</Typography>
          </Box>
          <Typography variant="h2" sx={{ color: 'white', mb: 2.5 }}>
            AI that understands farming
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Our AI analyses your farm data to provide actionable insights, predictions, and recommendations tailored to your operation.
          </Typography>
        </ScrollReveal>
      </Box>

      {/* Layout: Illustration left + Cards right */}
      <Grid container spacing={4} alignItems="center">
        {/* Left — AI illustration */}
        <Grid size={{ xs: 12, md: 4 }}>
          <ScrollReveal direction="left">
            <Box
              sx={{
                width: '100%',
                maxWidth: 380,
                aspectRatio: '1/1',
                borderRadius: '32px',
                bgcolor: 'rgba(22, 163, 74, 0.04)',
                border: '1px solid rgba(22, 163, 74, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                ml: { md: -4 },
              }}
            >
              <Box
                component="img"
                src="/images/ai-illustration.svg"
                alt="AI Intelligence Engine"
                loading="lazy"
                sx={{ width: '75%', height: '75%', objectFit: 'contain' }}
              />
            </Box>
          </ScrollReveal>
        </Grid>

        {/* Right — Capability cards 2x2 */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: '20px',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderColor: 'rgba(22,163,74,0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      bgcolor: 'rgba(22, 163, 74, 0.1)',
                      border: '1px solid rgba(22, 163, 74, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22C55E',
                      mb: 2.5,
                    }}
                  >
                    {cap.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: 'white', mb: 1, fontSize: '0.95rem' }}>
                    {cap.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {cap.desc}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default AISection;
