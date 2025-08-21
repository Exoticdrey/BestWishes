import { motion } from "motion/react";

function SlideUp({ children, delay = 0, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // start below and invisible
      animate={{ opacity: 1, y: 0 }} // animate to normal position
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default SlideUp;
