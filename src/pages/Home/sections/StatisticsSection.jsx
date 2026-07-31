import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(value);
    if (isNaN(num)) { setCount(value); return; }
    const duration = 1000;
    const steps = 25;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else { setCount(Math.round(current * 10) / 10); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { icon: <ViewInArOutlinedIcon sx={{ fontSize: 28 }} />, value: '1', suffix: '', label: 'Platform', sub: 'Everything in one place' },
  { icon: <LayersOutlinedIcon sx={{ fontSize: 28 }} />, value: '6', suffix: '+', label: 'Integrated Modules', sub: 'Livestock to AI' },
  { icon: <CloudOutlinedIcon sx={{ fontSize: 28 }} />, value: '100', suffix: '%', label: 'Cloud Based', sub: 'Works anywhere' },
  { icon: <VerifiedOutlinedIcon sx={{ fontSize: 28 }} />, value: '99.9', suffix: '%', label: 'Uptime', sub: 'Always available' },
];

const StatisticsSection = () => (
  <Box
    component="section"
    sx={{
      py: { xs: 6, md: 8 },
      bgcolor: '#166534',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Subtle pattern */}
    <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, sm: 2 },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            style={{ flex: 1, textAlign: 'center' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Box sx={{ color: 'rgba(255,255,255,0.6)' }}>{stat.icon}</Box>
              <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </Typography>
              <Typography sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                {stat.label}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                {stat.sub}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  </Box>
);

export default StatisticsSection;
