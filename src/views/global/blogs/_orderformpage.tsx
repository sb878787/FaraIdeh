'use client';

// Components
import HeroSection from './HeroSection';
import Blogs from './Blogs';
import Footer from '@/component/Footer';

const BlogsPageWrapper = () => {
  return (
    <>
      <HeroSection />
      <Blogs />
      <Footer />
    </>
  );
};

export default BlogsPageWrapper;
