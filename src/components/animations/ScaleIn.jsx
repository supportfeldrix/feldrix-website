import { motion } from 'framer-motion';

const ScaleIn = ({ children, delay = 0, duration = 0.5, ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    {...props}
  >
    {children}
  </motion.div>
);

export default ScaleIn;
