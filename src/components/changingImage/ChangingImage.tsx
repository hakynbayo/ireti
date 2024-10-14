import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/svg/reader.svg',
  '/svg/maninsuit.svg',
  '/svg/ladyshopping.svg',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='relative'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`image-${index}`}
          width={550}
          height={550}
          objectFit='contain'
          className={`absolute -top-48 left-0 transition-opacity duration-500 ease-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
