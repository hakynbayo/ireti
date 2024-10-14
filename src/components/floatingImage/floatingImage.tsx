import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Small from '../../../public/images/small.png';

interface IFloatingButton {
  className: string;
  image: string; // Update to accept an image
}

const FloatingText: React.FC<IFloatingButton> = ({ className }) => {
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
      className={`${className}  p-4`}
    >
      <div className='relative w-full h-full object-contain'>
        <Image
          src={Small}
          alt='Floating button'
          className='rounded-[24px]'
          placeholder='blur'
          width={351}
          height={210}
        />
      </div>
    </motion.div>
  );
};

export default FloatingText;
