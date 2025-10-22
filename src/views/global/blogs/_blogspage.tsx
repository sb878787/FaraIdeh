'use client';

// React Imports
import { useState } from 'react';

// Components
import HeroSection from './HeroSection';
import Blogs from './Blogs';
import Footer from '@/component/Footer';

// Types
import { BlogPost } from '@/types/BlogsType';

interface IBlogsPageWrapperProps {
  initialBlogs: BlogPost[];
  hasMore: boolean;
}

const BlogsPageWrapper = ({ initialBlogs, hasMore }: IBlogsPageWrapperProps) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  return (
    <>
      <HeroSection />
      <Blogs blogs={blogs} setBlogs={setBlogs} hasMore={hasMore} />
      <Footer />
    </>
  );
};

export default BlogsPageWrapper;
