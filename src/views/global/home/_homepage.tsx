// Components
import HeroSection from './HeroSection';
import OurStory from './OurStory';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '@/component/Footer';
import Line from '@/component/Line';

const LandingPageWrapper = () => {
  return (
    <>
      <HeroSection />
      <Line className="mt-56 sm:mt-16 md:mt-14 lg:mt-11" />
      <OurStory />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPageWrapper;
