// Components
import Container from '@/component/Container';
import HeroSection from './HeroSection';
import OurStory from './OurStory';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const LandingPageWrapper = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="w-full border-b border-[#EBEBEB] mt-1"></div>
      </Container>
      <OurStory />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default LandingPageWrapper;
