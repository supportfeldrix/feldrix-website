import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedNumber = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value, 10);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1500;
    const stepTime = duration / num;
    const timer = setInterval(() => {
      start += Math.ceil(num / 40);
      if (start >= num) {
        setDisplay(num);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{typeof display === 'number' ? display.toLocaleString() : display}{suffix}
    </span>
  );
};

const StatisticCard = ({ value, suffix = '', prefix = '', label }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    }}
  >
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}
      >
        <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  </motion.div>
);

export default StatisticCard;
