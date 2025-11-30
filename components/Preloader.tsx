import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Preloader: React.FC = () => {
  const text = "Fayaz Ahmed.";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-4xl md:text-6xl font-bold text-white flex overflow-hidden"
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={itemVariants} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Preloader;