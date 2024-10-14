'use client';
import Image from 'next/image';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from '@/components/buttons/Button';

import Papa from '../../../public/images/papa.png';

const UpcomingEvnets = () => {
    return (
        <div className='w-full px-4 max-w-[1440px] flex flex-col lg:flex-row md:items-center mx-auto justify-between gap-8 my-6 bg-[#0A329A] py-12 md:p-32'>

            <div className='w-full lg:w-1/2'>
                <Image
                    src={Papa}
                    alt='Workers'
                    width={507}
                    height={427}
                    placeholder='blur'
                />
            </div>

            <div className='relative z-10 flex flex-col gap-4 w-full lg:w-1/2'>
                <p className='text-base font-semibold bg-white text-black max-w-max p-2 rounded-lg'>
                    Upcoming Events
                </p>

                <p className='text-5xl font-bold text-white w-[60%]'>
                    The December Project 2024
                </p>

                <p className='text-xl font-normal text-white w-[85%]'>
                    The December Project offers support to vulnerable and disadvantaged
                    individuals by distributing food, clothing, shoes, and books.
                </p>

                <div className='flex flex-col md:flex-row md:items-center gap-4'>
                    <Button
                        type='button'
                        className='max-w-max rounded-full px-6 py-2 text-white md:text-lg'
                    >
                        Register to attend
                    </Button>

                    <Button
                        type='button'
                        variant='outline'
                        className='max-w-max rounded-full px-6 py-2 text-white md:text-lg'
                    >
                        Make a donation
                    </Button>
                </div>
            </div >
        </div >
    );
};

export default UpcomingEvnets;
