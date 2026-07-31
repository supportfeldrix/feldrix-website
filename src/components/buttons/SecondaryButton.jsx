import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionButton = motion.create(Button);

const SecondaryButton = ({ children, href, size = 'large', sx = {}, endIcon, ...props }) => (
  <MotionButton
    variant="outlined"
    color="primary"
    size={size}
    href={href}
    endIcon={endIcon}
    whileHover={{ scale: 1.015 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    sx={{
      px: 4,
      py: 1.6,
      fontSize: '0.95rem',
      borderRadius: '50px',
      fontWeight: 600,
      textTransform: 'none',
      ...sx,
    }}
    {...props}
  >
    {children}
  </MotionButton>
);

export default SecondaryButton;
