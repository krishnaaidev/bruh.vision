import { motion } from 'motion/react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loading"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: '3px solid rgba(227, 27, 27, 0.2)',
          borderTop: '3px solid #e31b1b',
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;