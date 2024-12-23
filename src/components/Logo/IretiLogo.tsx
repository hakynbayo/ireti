import Image from 'next/image';

import { cn } from '@/lib/utils';

const IretiLogo: React.FC<{
  variant: 'blue' | 'white';
  className?: string;
}> = ({ className }) => {
  return (
    <span
      className={cn('relative block aspect-[39/10] w-32 lg:w-48 xl:w-52', [
        className && className,
      ])}
    >
      <Image
        alt='Logo'
        src='/images/iretiLogo.png'
        fill={true}
        priority={true}
        className='object-contain'
      />
    </span>
  );
};

export default IretiLogo;
