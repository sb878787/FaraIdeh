'use client';

// React Imports
import { useState, useRef } from 'react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Components
import Header from '@/component/Header';
import BlogCard from './BlogCard';

interface BlogSlide {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
}

const HeroSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const blogs: BlogSlide[] = [
    {
      id: 1,
      image: 'https://s6.uupload.ir/files/adobestock_271347901_1_3hoz.png',
      category: 'علمی',
      date: '7 اسفند 1402',
      title: 'هزینه ساخت یک سایت',
    },
    {
      id: 2,
      image: 'https://s6.uupload.ir/files/adobestock_310133662_7eoh.png',
      category: 'علمی',
      date: '7 اسفند 1402',
      title: 'هزینه ساخت یک سایت',
    },
    {
      id: 3,
      image: 'https://s6.uupload.ir/files/adobestock_339068706_1_2rtq.png',
      category: 'علمی',
      date: '7 اسفند 1402',
      title: 'هزینه ساخت یک سایت',
    },
    {
      id: 4,
      image: 'https://s6.uupload.ir/files/adobestock_271347901_1_3hoz.png',
      category: 'علمی',
      date: '7 اسفند 1402',
      title: 'هزینه ساخت یک سایت',
    },
  ];

  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Header colorIcon="black" />

      {/* Hero Section */}
      <div className="relative w-full lg:mt-44 mt-32 pr-20">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          style={{ padding: '0 0px 0 90px' }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* Prev Button */}
        {!isBeginning && (
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 right-14 z-10 bg-[#E3E3E3] text-black w-12 h-12 rounded-full items-center justify-center cursor-pointer border-4 border-white hover:scale-90 transition-all duration-200 hidden lg:flex"
            aria-label="Prev Button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 19l7-7-7-7"></path>
            </svg>
          </button>
        )}

        {/* Next Button */}
        {!isEnd && (
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-[#E3E3E3] text-black w-12 h-12 rounded-full items-center justify-center cursor-pointer border-4 border-white hover:scale-90 transition-all duration-200 hidden lg:flex"
            aria-label="Next Button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
