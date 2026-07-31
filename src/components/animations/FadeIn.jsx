import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.6, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    {...props}
  >
    {children}
  </motion.div>
);

export default FadeIn;
