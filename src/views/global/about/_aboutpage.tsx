'use client';

// Components
import Footer from '@/component/Footer';
import HeroSection from './HeroSection';
import Slider from './Slider';
import Services from './Services';
import OurTeam from './OurTeam';

// Types
import { Slide } from '@/types/SlidesType';
import { TeamMemberType } from '@/types/TeamMemberType';

const AboutPageWrapper = ({ slides, members }: { slides: Slide[]; members: TeamMemberType[] }) => {
  if (!slides?.length) return null;

  return (
    <>
      <HeroSection />
      <Slider slides={slides} />
      <Services />
      <OurTeam members={members} />
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
