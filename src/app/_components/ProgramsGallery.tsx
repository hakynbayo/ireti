'use client';
import Image from 'next/image';
import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Dot from '../../../public/images/dot.png';
import Papa from '../../../public/images/papa.png';
import img3 from '../../../public/images/img3.png';
import Soup from '../../../public/images/soup.png';

const ForYou = () => {
  return (
    <section className='max-w-[1500px] bg-cover bg-no-repeat py-10 md:py-10'>
      <section className='relative flex flex-col items-start justify-between gap-10 py-10 px-4 md:flex-row md:justify-between md:py-12 lg:px-8 xl:px-20'>
        <div className='relative w-full md:w-[60%] flex flex-col gap-14'>
          <div className='bg-bg-gray max-w-max py-3 px-4 rounded-md'>
            <p>Programs Gallery</p>
          </div>


          <p className='text-marquee-text text-4xl font-bold lg:text-5xl'>
            Enjoy moments that capture the heart of our mission
          </p>
        </div>


        <div className='absolute -top-[480px] -z-50 -right-[850px] px-2 md:px-10 lg:px-0 xl:px-2 w-full'>
          <Image
            src={Dot}
            alt='Workers'
            width={798}
            height={798}
            placeholder='blur'
          />
        </div>
      </section>

      <section className='flex flex-col items-center justify-between gap-10 py-10 px-4 md:flex-row md:justify-between md:py-12 lg:px-8 xl:px-20'>
        <div className='relative w-full md:w-1/2 flex flex-col gap-4'>
          <p className='text-black text-3xl font-bold lg:text-5xl font-literata'>
            The December Project
          </p>

          <p className='text-black w-full font-normal md:w-[65%] text-base md:text-xl'>
            The December Project offers support to vulnerable and disadvantaged
            individuals by distributing food, clothing, shoes, and books.
          </p>
        </div>

        <div className='px-2 md:px-10 flex flex-col gap-8 lg:px-0 xl:px-2 w-full md:w-1/2'>
          <Image
            src={Papa}
            alt='Workers'
            width={640}
            height={427}
            placeholder='blur'
          />
        </div>
      </section>

      <section className='w-full flex flex-col-reverse items-center justify-between gap-10 py-10 px-4 md:flex-row md:justify-between md:py-12 lg:px-8 xl:px-16'>
        <div className='px-2 md:px-10 flex flex-col gap-8 lg:px-0 xl:px-2 w-full md:w-2/3'>
          <Image
            src={img3}
            alt='Workers'
            width={640}
            height={427}
            placeholder='blur'
          />
        </div>

        <div className='relative w-full md:w-1/3 flex flex-col gap-4'>
          <p className='text-black text-3xl font-bold lg:text-5xl font-literata'>
          Fun For Free
          </p>

          <p className='text-black w-full font-normal text-base md:text-xl'>
          Fun4Free is an engaging funfair targeted specifically at underprivileged children.
          It provides a delightful experience for
          the kids and also presents the gospel in an exciting and accessible manner.
          </p>
        </div>
      </section>

      <section className='flex flex-col items-center justify-between gap-10 py-10 px-4 md:flex-row md:justify-between md:py-12 lg:px-8 xl:px-20'>
        <div className='relative w-full md:w-1/2 flex flex-col gap-4'>
          <p className='text-black text-3xl font-bold lg:text-5xl font-literata'>
            Soup Kitchen
          </p>

          <p className='text-black w-full font-normal md:w-[75%] text-base md:text-xl'>
          Our soup kitchen is aimed at offering
          nutritious breakfast and dinner meals to those in need.
          </p>
        </div>

        <div className='px-2 md:px-10 flex flex-col gap-8 lg:px-0 xl:px-2 w-full md:w-1/2'>
          <Image
            src={Soup}
            alt='Workers'
            width={640}
            height={427}
            placeholder='blur'
          />
        </div>
      </section>
      
    </section>
  );
};

export default ForYou;
