'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter as X } from 'react-icons/fa6';
import { scroller } from 'react-scroll';

const Footer = () => {
  // const scrollToDemo = () => {
  //   scroller.scrollTo('Demo', {
  //     duration: 500,
  //     delay: 0,
  //     smooth: 'easeInOut',
  //   });
  // };
  const currentYear = new Date().getFullYear();

  return (
    <section
      className='bg-white hidden md:block max-w-[1500px] w-full py-0 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-24'
      id='Contacts'
    >
      <div className='bg-white border-t border-black py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div>
            <p className='text-xs mt-4 text-center md:mt-0'>
              © {currentYear} Ireti Foundation.
            </p>
          </div>
          <div>
            <Link href='mailto:info@iretifoundation.org' className='text-xs hover:underline text-black flex flex-col items-center gap-2'>
              <p className='text-marquee-text'>Send us an email</p>
              <p>info@iretifoundation.org</p>
            </Link>
          </div>
          <div>
            <Link href='#' className='text-xs hover:underline text-black flex flex-col items-center gap-2'>
              <p className='text-marquee-text'>Contact Us</p>
              <p>08158986965, 08169897458</p>
            </Link>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className='flex items-center gap-4'>
            <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook size={20} />
            </Link>
            <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram size={20} />
            </Link>
            <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <X size={20} />
            </Link>
            <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={20} />
            </Link>
          </div>

        </div>

        {/* Footer Note */}
      </div>
    </section>
  );
};

export default Footer;
