'use client';

// Components
import Container from '@/component/Container';
import HeroSection from './HeroSection';

const LandingPageWrapper = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="w-full border-b border-[#EBEBEB] mt-1"></div>
      </Container>
    </>
  );
};

export default LandingPageWrapper;
