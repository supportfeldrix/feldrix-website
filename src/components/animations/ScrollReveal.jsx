import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, duration = 0.6, direction = 'up', ...props }) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
