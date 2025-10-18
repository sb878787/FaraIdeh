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
import BlogSlide from './BlogSlide';

interface IBlogSlide {
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

  const blogs: IBlogSlide[] = [
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
      <div className="relative w-full mt-32 sm:mt-36 lg:mt-44 pr-4 lg:pr-10 xl:pr-20">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
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
          className="!pl-4 lg:!pl-10 xl:!pl-20"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogSlide blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* Desktop */}
        {/* Prev Button */}
        {!isBeginning && (
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 right-5 xl:right-14 z-10 bg-[#E3E3E3] text-black w-12 h-12 rounded-full items-center justify-center cursor-pointer border-4 border-white hover:scale-90 transition-all duration-200 hidden lg:flex"
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

        {/* Mobile */}
        <div className="flex flex-row-reverse items-center justify-end gap-2 mt-2 ml-3 lg:hidden">
          {/* Prev Button */}
          {!isBeginning && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#f1f1f1] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-2 border-[#c4c4c4] hover:scale-90 transition-all duration-200"
              aria-label="Prev Button"
            >
              <svg
                className="w-5 h-5"
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
              className="bg-[#f1f1f1] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-2 border-[#c4c4c4] hover:scale-90 transition-all duration-200"
              aria-label="Next Button"
            >
              <svg
                className="w-5 h-5"
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
    </div>
  );
};

export default HeroSection;
