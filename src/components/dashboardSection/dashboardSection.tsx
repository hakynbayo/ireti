import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import dash from '../../../public/images/dash.png';
import dashboard1 from '../../../public/images/dashboard1.png';
import dashboard2 from '../../../public/images/dashboard2.png';

const images = [dashboard1, dashboard2];

const ImageSwitcher = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className='relative w-full h-full overflow-hidden hidden md:block'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ paddingBottom: '45%' }}
      >
        <motion.div
          key='image1'
          initial={{ opacity: 1 }}
          animate={{ opacity: hover ? 0 : 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute top-0 left-0 w-full h-full'
        >
          <Image
            src={images[0]}
            alt='Product'
            width={1248}
            height={566}
            placeholder='blur'
            priority // Ensures the image is loaded quickly
          />
        </motion.div>

        <motion.div
          key='image2'
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute top-0 left-0 w-full h-full'
        >
          <Image
            src={images[1]}
            alt='Product'
            placeholder='blur'
            width={1248}
            height={566}
          />
        </motion.div>
      </div>
      <motion.div>
        <Image
          className='block md:hidden w-full'
          src={dash}
          alt='Product'
          placeholder='blur'
          width={326}
          height={620}
        />
      </motion.div>
    </>
  );
};

export default ImageSwitcher;
