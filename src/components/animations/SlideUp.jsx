import { motion } from 'framer-motion';

const SlideUp = ({ children, delay = 0, duration = 0.6, distance = 40, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    {...props}
  >
    {children}
  </motion.div>
);

export default SlideUp;
