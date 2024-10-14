'use client';
import Image from 'next/image';

import MissionMob from '../../../public/images/missionMob.png';
import Programs from '../../../public/images/programs.png';

const HereSection = () => {
  return (
    <section className='max-w-[1500px] w-full overflow-hidden bg-cover bg-no-repeat'>
      <section className='w-full my-8'>
        {/* Image for medium screens and above */}
        <div className='hidden md:block'>
          <Image
            src={Programs}
            alt='programs'
            placeholder='blur'
            width={1440}
            height={778}
          />
        </div>
        {/* Image for small screens */}
        <div className='block md:hidden'>
          <Image
            src={MissionMob}
            alt='programs'
            placeholder='blur'
            width={1440}
            height={778}
          />
        </div>
      </section>
    </section>
  );
};

export default HereSection;
