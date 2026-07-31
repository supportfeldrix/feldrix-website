import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const FeatureCard = ({ icon, title, description, sx = {} }) => (
  <MotionCard
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
    sx={{
      height: '100%',
      cursor: 'default',
      p: 1,
      ...sx,
    }}
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
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 1, color: 'secondary.main' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
        {description}
      </Typography>
    </CardContent>
  </MotionCard>
);

export default FeatureCard;
