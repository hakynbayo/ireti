import React from 'react';

import NavBar from '@/components/navBar/NavBar';

import ChangeSection from '@/app/_components/ChangeSection';
import Footer from '@/app/_components/Footer';
import ForYou from '@/app/_components/ForYou';
import HereSection from '@/app/_components/HereSection';
import MobileFooter from '@/app/_components/MobileFooter';
import ProgramsGallery from '@/app/_components/ProgramsGallery';
import Subscribe from '@/app/_components/Subscribe';
import TeamSection from '@/app/_components/TeamSection';
import Top from '@/app/_components/Top';
import UpcomingEvents from '@/app/_components/UpcomingEvents';

const HomePage = () => {
  return (
    <div className='w-full flex flex-col overflow-x-hidden'>
      <NavBar isHome />
      <Top />
      <ForYou />
      <HereSection />
      <ProgramsGallery />
      <UpcomingEvents />
      <TeamSection />
      <ChangeSection />
      <Subscribe />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default HomePage;
