'use client';
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import TeamDescription from './TeamDescription';

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null); // Reference to the container

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' }); // Scroll left by 420px
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' }); // Scroll right by 420px
    }
  };

  return (
    <section
      id='Testimonials'
      className='overflow-hidden flex items-center justify-center bg-cover bg-no-repeat'
    >
      <section className='items-center justify-between bg-white gap-4 max-w-[1500px] p-0 md:p-10 overflow-x-hidden no-scrollbar'>
        <div className='px-2 md:px-4 w-full flex flex-col mx-auto gap-4'>
          <p className='text-base font-semibold bg-[#F5F5F5] text-black max-w-max p-2 rounded-lg'>
            Our Amazing Team
          </p>
          <div className='w-full flex justify-between items-center'>
            <p className='text-4xl font-bold md:text-5xl text-marquee-text w-full md:w-[50%]'>
              Meet the passionate folks behind our mission
            </p>
            <div className='hidden md:flex gap-4'>
              <button
                onClick={scrollLeft}
                className='bg-[#DEDEDE] text-[#00365E] p-2 rounded-full'
              >
                <FaArrowLeft size={20} />
              </button>

              <button
                onClick={scrollRight}
                className='bg-marquee-text text-white p-2 rounded-full'
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
          <div>
            <div className='overflow-x-auto no-scrollbar w-full' ref={scrollRef}
            >
              <TeamDescription />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
