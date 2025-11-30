
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const toastVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <motion.div
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`fixed bottom-5 right-5 p-4 rounded-lg text-white shadow-lg ${bgColor}`}
    >
      {message}
    </motion.div>
  );
};

export default Toast;
