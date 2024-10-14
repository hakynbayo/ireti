import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import mope1 from '../../../public/images/mope1.png';
import mope2 from '../../../public/images/mope2.png';
import mopesmall from '../../../public/images/mopesmall.png';
import FloatingText from '@/components/floatingText/FloatingText';
import Button from '@/components/buttons/Button';
import { PiArrowRight } from 'react-icons/pi';

const images = [mope1, mope2];

const ImageSwitcher = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className='relative w-full h-[43rem] hidden md:block'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ paddingBottom: '45%' }} // Maintain aspect ratio
      >
        <motion.div
          key='image1'
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered ? 0 : 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute top-0 left-0'
        >
          <Image
            src={images[0]}
            alt='Product'
            priority // Ensures the image is loaded quickly
            quality={100}
            width={612}
            height={651}
          />
        </motion.div>

        <motion.div
          key='image2'
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute top-0 left-0'
        >
          <Image
            src={images[1]}
            alt='Product'
            quality={100}
            width={612}
            height={651}
          />
        </motion.div>
      </div>
      <motion.div>
        <div className='flex flex-col md:hidden px-4 bg-bg-gray pb-8 rounded-lg'>
          <motion.div className='relative flex justify-center text-[7px] md:text-xs items-center'>
            <div className='relative h-[355px] w-[255px] sm:h-[335px] sm:w-[235px] lg:h-[200px] lg:w-[200px] xl:h-[242px] xl:w-[242px]'>
              <Image src='/svg/mope.svg' alt='mope-ai' fill className='block object-contain' />
            </div>
            <FloatingText text='Hi! 👋 How can I help you?' className='absolute top-16 left-0 px-2 py-1 w-[45%] sm:w-[25%] md:w-[30%] lg:w-[58%] xl:w-[34%] md:left-28 sm:left-16 rounded-tr-[13px] lg:top-2 lg:-left-8 xl:left-14 xl:top-4' />
            <FloatingText text='I want to get MacBook 16 M2 Ultra Max' className='absolute py-1 w-[40%] sm:w-[25%] md:w-[30%] lg:w-[50%] xl:w-[38%] md:right-20 sm:right-12 -right-4 top-28 leading-3 sm:leading-[14px] rounded-tl-[13px] lg:-right-8 xl:right-0 lg:top-16 xl:top-16' />
            <FloatingText text='Sending you some quotes from merchants near you' className='absolute px-2 py-1 w-[50%] sm:w-[30%] md:w-[30%] lg:w-[65%] xl:w-[34%] md:left-28 sm:left-12 -left-4 top-42 leading-3 sm:leading-[14px] rounded-tr-[13px] xl:left-12 lg:-left-8 lg:top-24 xl:top-32 ' />
            <FloatingText text='Thanks, Mope! 😍' className='absolute px-2 py-1 bottom-28 w-[35%] sm:w-[20%] md:w-[30%] sm:right-16 lg:w-[42%] xl:w-[25%] rounded-tl-[13px] -right-4 lg:bottom-6 xl:bottom-10 lg:right-0 xl:right-20' />
            {/* Adding floating icons */}
          </motion.div>

          <div className='w-full flex flex-col'>
            <div className='relative h-[125px] w-[125px]'>
              <Image
                src='/svg/mopelogo.svg'
                alt='mope-ai'
                fill
                className='block object-contain' />
            </div>
            <div className='flex flex-col'>
              <p className='w-full xl:w-[70%] text-left text-base md:text-lg lg:text-sm xl:text-base'>
                <span className='font-bold text-base'>Send Mope</span> is our interactive shopping assistant designed to bring all your shopping needs to life
              </p>
              <div className='mt-6 flex items-center gap-6'>
                <Button variant='primary' className='py-3 rounded-xl bg-transparent hover:bg-transparent hover:text-blue text-blue flex px-8 justify-center items-center' rightIcon={PiArrowRight}>
                  Visit Mope
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ImageSwitcher;
