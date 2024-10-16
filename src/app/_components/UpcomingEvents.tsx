'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/buttons/Button';
import Papa from '../../../public/images/papa.png';

const UpcomingEvents = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

    // Function to close the modal
    const closeModal = () => setModalOpen(false);

    return (
        <div className='w-full px-4 max-w-[1440px] flex flex-col lg:flex-row md:items-center mx-auto justify-between gap-8 my-6 bg-[#0A329A] py-12 md:p-32'>
            {/* Image Section */}
            <div className='w-full lg:w-1/2'>
                <Image
                    src={Papa}
                    alt='Workers'
                    width={507}
                    height={427}
                    placeholder='blur'
                />
            </div>

            {/* Text Section */}
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
                        onClick={() => setModalOpen(true)} // Open modal on click
                    >
                        Make a donation
                    </Button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded-lg max-w-md w-full'>
                        <h2 className='text-2xl font-bold text-center mb-4'>Donation Information</h2>
                        <p className='text-lg text-center'>
                            <strong>THE IRETI FOUNDATION FOR THE UNDERSERVED AND UNDERPRIVILEGED</strong>
                        </p>
                        <p className='text-lg text-center'>
                            0126205224
                        </p>
                        <p className='text-lg text-center mb-6'>
                            Wema Bank
                        </p>
                        <button
                            className='bg-[#00365E] text-white px-4 py-2 rounded-full w-full'
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;
