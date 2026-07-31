import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const IconCard = ({ icon, label, description }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <Box
      sx={{
        textAlign: 'center',
        p: 3,
        borderRadius: '16px',
        transition: 'background-color 0.2s',
        '&:hover': { bgcolor: 'background.surface' },
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '16px',
          bgcolor: 'rgba(22, 163, 74, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 2,
          color: 'primary.main',
          fontSize: '1.75rem',
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 0.5, fontSize: '1rem' }}>
        {label}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
    </Box>
  </motion.div>
);

export default IconCard;
