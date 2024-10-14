import Image from 'next/image';
import React from 'react';

import adeyemo from '../../../public/images/adeyemo.png';
import eric from '../../../public/images/eric.png';
import lois from '../../../public/images/lois.png';

const images = [adeyemo, eric, lois, eric];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex items-center gap-4 w-[1260px]'> {/* 420px * 3 = 1260px for 3 images */}
        {images.map((src, index) => (
          <div key={index} className='shrink-0'>
            <Image
              src={src}
              className='w-[420px] h-[454px] object-cover'
              alt='carousel'
              width={420}
              height={454}
              placeholder='blur'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
