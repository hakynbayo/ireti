'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from '@/components/buttons/Button';

import children from '../../../public/images/children.png';
import dancing from '../../../public/images/dancing.png';
import goodies from '../../../public/images/goodies.png';
import img1 from '../../../public/images/img1.png';
import img2 from '../../../public/images/img2.png';
import img3 from '../../../public/images/img3.png';
import member from '../../../public/images/member.png';
import packageImg from '../../../public/images/package.png'; // Rename 'package' to avoid conflict with reserved words
import papa from '../../../public/images/papa.png';
import playing from '../../../public/images/playing.png';
import soup from '../../../public/images/soup.png';

const Top = () => {
  const [showFullText, setShowFullText] = useState(false); // State to toggle text visibility

  const images = [
    img1,
    img2,
    img3,
    goodies,
    playing,
    dancing,
    papa,
    soup,
    packageImg,
    member,
    children,
  ];

  return (
    <section className='max-w-[1680px] mx-auto overflow-hidden bg-cover bg-no-repeat' id='Home'>
      <section className='flex flex-col md:justify-between gap-10 pb-[2rem] sm:pb-[32rem] md:pb-12 px-6 pt-4 sm:px-10 md:flex-row md:pt-32 lg:px-16 xl:px-20'>
        <div className='w-full md:w-1/2'>
          <p className='font-bold text-primary-blue text-3xl md:text-5xl leading-tight md:leading-snug'>
            Providing essential support for those in need.
          </p>
        </div>

        <div className='relative h-max w-full md:w-3/5'>
          {/* Conditionally render full text based on the state */}
          <p className='text-xl'>
            The Ireti Foundation for the Underprivileged and Underserved is driven by one vision — to ignite hope by providing essential support for those in need.
            {showFullText && ' Our foundation works tirelessly to empower the most vulnerable by delivering resources, support, and opportunities.'}
          </p>

          <Button
            type='button'
            className='mt-8 rounded-full px-6 py-2 text-white md:py-4 md:text-lg'
            onClick={() => setShowFullText(!showFullText)} // Toggle text visibility on click
          >
            {showFullText ? 'Show less' : 'Learn more about us'}
          </Button>
        </div>
      </section>

      <div className='w-full bg-image-icons overflow-hidden'>
        <Marquee autoFill className='flex items-center gap-4'>
          <div className='flex items-center gap-4 w-full'>
            {images.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  className='w-[420px] h-[420px] object-cover'
                  alt='carousel'
                  width={420}
                  height={420}
                  placeholder='blur'
                  priority
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Top;
