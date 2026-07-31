import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const StaggerContainer = ({ children, stagger = 0.1, ...props }) => (
  <motion.div
    variants={{
      ...containerVariants,
      visible: {
        ...containerVariants.visible,
        transition: { staggerChildren: stagger, delayChildren: 0.1 },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    {...props}
  >
    {children}
  </motion.div>
);

export { StaggerContainer, itemVariants };
export default StaggerContainer;
