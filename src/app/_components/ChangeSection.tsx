'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from '@/components/buttons/Button';

const ChangeSection = () => {
  return (
    <div
      id='ChangeSection'
      style={{
        backgroundImage: 'url("/images/folashade.png")',
      }}
      className='w-full max-w-[1440px] mt-8 mx-auto sm:block bg-cover bg-center px-4 py-12 md:py-40 relative'
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B141ACC] to-[#0071C4CC]"></div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-6'>
        <p className='md:text-5xl text-4xl font-bold text-white w-full md:w-[50%] text-center'>
          Together, we can create meaningful change.
        </p>

        <p className='text-lg md:text-xl font-normal text-white w-full md:w-[54%] text-center'>
          Join hands with us to make a lasting impact. Whether through volunteering
          or partnership, your support drives change and transforms lives.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Button
            type='button'
            className='mt-0 md:mt-8 max-w-max rounded-full px-6 py-3 text-white md:text-lg'
          >
            Get in touch with us
          </Button>

          <Button
            type='button'
            variant='outline'
            className='mt-0 md:mt-8 max-w-max bg-white rounded-full px-6 py-3 text-[#1A74BB] md:text-lg'
          >
            Become a volunteer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSection;
