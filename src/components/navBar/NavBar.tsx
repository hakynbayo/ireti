'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { PiCaretDownLight } from 'react-icons/pi';
import { scroller } from 'react-scroll';

import useMediaQuery from '@/hooks/useMediaQuery';

import Button from '@/components/buttons/Button';
import Logo from '@/components/Logo';
import GenModal from '@/components/modal/Modal';
import ProductModal from '@/components/productModal/ProductModal';

import { navbarItems } from '@/constant/data';

const NavBar = ({ isHome }: { isHome?: boolean }) => {
  const scrollToContact = () => {
    scroller.scrollTo('Contacts', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOut',
    });
  };

  const scrollToTestimonial = () => {
    scroller.scrollTo('Testimonials', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOut',
    });
  };

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const toggleProductModal = () => {
    setIsProductModalOpen(!isProductModalOpen);
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleButtonClick = (itemText: string) => {
    if (itemText === 'Products') {
      toggleProductModal();
    }
    if (itemText === 'Testimonials') {
      scrollToTestimonial();
    }
    if (itemText === 'Contacts') {
      scrollToContact();
    }
    toggleModal(); // Close the modal after clicking any item
  };

  if (isMobile) {
    return (
      <>
        <div className='py-4 flex w-full items-center justify-between px-2 md:px-6'>
          <div className='relative h-[34px] w-[220px]'>
            <a href='/' className='block w-max py-4 text-2xl px-6'>
              <Logo className='' variant='white' />
            </a>
          </div>
          <div className='relative h-[24px] w-[24px]'>
            <Image
              src='/svg/menu.svg'
              fill
              className='object-contain'
              alt='logo'
              onClick={toggleModal}
            />
          </div>
        </div>
        <GenModal isOpen={open} handleCloseModal={toggleModal}>
          <div className='mt-4 item-center flex flex-col gap-10'>
            {navbarItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleButtonClick(item.text)}
                  className='cursor-pointer'
                >
                  <div className='flex items-center'>
                    <p className='text-base text-darktext font-[500]'>
                      {item.text}
                    </p>
                    {item.text === 'Products' && (
                      <PiCaretDownLight className='ml-1' />
                    )}
                  </div>
                </button>
              </div>
            ))}
            <div>
              <Button
                onClick={() => {
                  scrollToContact();
                  toggleModal();
                }}
                type='button'
                className=' h-[46px] bg-[#065DA7] rounded-full'
              >
                Partner with us
              </Button>
            </div>
          </div>
        </GenModal>
      </>
    );
  }

  return (
    <nav className='fixed top-0 z-20 mb-10 flex w-full items-center justify-between bg-white px-6 py-4 sm:px-10 lg:px-16 xl:px-20'>
      <div className='relative h-[56px] w-[131px]'>
        <Link
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          className='block w-max py-4 text-2xl px-6 cursor-pointer'
        >
          <Logo className='' variant='white' />
        </Link>
      </div>

      <div className='flex items-center'>
        {isHome && (
          <div className='item-center flex gap-10'>
            {navbarItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleButtonClick(item.text)}
                  className='cursor-pointer'
                >
                  <div className='flex items-center'>
                    <p className='text-base text-darktext font-[500]'>
                      {item.text}
                    </p>
                    {item.text === 'Products' && (
                      <PiCaretDownLight className='ml-1' />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
        <Button
          onClick={scrollToContact}
          type='button'
          className='ml-6 h-[45px] bg-[#065DA7] rounded-full'
        >
          Partner with us
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;