'use client';
import Image from 'next/image';
import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from '@/components/buttons/Button';

import Oval from '../../../public/images/oval.png';

const ForYou = () => {
  return (
    <section className='max-w-[1500px] mx-auto bg-cover bg-no-repeat py-10 md:py-10'>
      <section className='flex flex-col items-start justify-between gap-10 py-10 px-4 md:flex-row md:justify-between md:py-12 lg:px-8 xl:px-20'>
        <div className='relative w-full md:w-1/2 flex flex-col gap-14'>
          <div className='bg-bg-gray max-w-max py-3 px-4 rounded-md'>
            <p>About Us + Vision</p>
          </div>

          <p className='text-marquee-text text-4xl font-bold lg:text-5xl'>
            Empowering Communities  one project at a time
          </p>
          <Image
            src={Oval}
            alt='Workers'
            width={447}
            height={298}
            placeholder='blur'
          />
        </div>

        <div className='px-2 md:px-10 flex flex-col gap-8 lg:px-0 xl:px-2 w-full md:w-1/2'>
          <p className='text-black w-full text-base md:text-lg'>
            We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today. We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today.
          </p>

          <p className='text-black w-full text-base md:text-lg'>
            We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today. We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today.
          </p>

          <p className='text-black w-full text-base md:text-lg'>
            We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today. We are a non-profit organization dedicated to creating positive change in communities through sustainable projects and initiatives. Join us in making a difference today.
          </p>
          <Button
            type='button'
            className='mt-8 max-w-max rounded-full px-6 py-2 text-white md:py-4 md:text-lg'
          >
            Get in touch with us
          </Button>
        </div>
      </section>
    </section>
  );
};

export default ForYou;
