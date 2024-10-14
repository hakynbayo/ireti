import { motion } from 'framer-motion';
import React from 'react';

interface IFloatingButton {
  className: string;
  text: string;
}
const FloatingText: React.FC<IFloatingButton> = ({ className, text }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }} // Initial state (scaled down and hidden)
      animate={{ scale: 1, opacity: 1 }} // Animate to this state (full size and visible)
      exit={{ scale: 0.8, opacity: 0 }} // Exit state (scaled down and hidden when removed)
      whileHover={{ scale: 1.05 }} // Scale up when hovered
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={`${className} rounded-b-[13px] bg-white px-4 py-2 shadow-lg `}
    >
      <p className=''>{text}</p>
    </motion.div>
  );
};

export default FloatingText;
