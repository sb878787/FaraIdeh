'use client';

// Components
import Footer from '@/component/Footer';
import HeroSection from './HeroSection';
import Slider from './Slider';
import Services from './Services';

// Types
import { Slide } from '@/types/SlidesType';

const AboutPageWrapper = ({ slides }: { slides: Slide[] }) => {
  if (!slides?.length) return null;

  return (
    <>
      <HeroSection />
      <Slider slides={slides} />
      <Services />
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
