'use client';

// Next Imports
import Image from 'next/image';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Types
import { Slide } from '@/types/SlidesType';

// Components
import Container from '@/component/Container';
import SliderSVGCircleAbout from '@/component/icons/SVG/SliderSVGCircleAbout';
import SliderSVGAbout from '@/component/icons/SVG/SliderSVGAbout';

const Slider = ({ slides }: { slides: Slide[] }) => {
  if (!slides?.length) return null;

  return (
    <Container>
      <div className="w-full mt-8 lg:mt-16 lg:rounded-2xl rounded-md relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="lg:rounded-2xl rounded-md cursor-pointer"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-32 lg:h-auto aspect-[3/1] overflow-hidden">
                <Image
                  src={slide.photo}
                  alt={slide.caption ?? 'slideImage'}
                  fill
                  sizes="100vw"
                  unoptimized
                  className="object-cover object-center"
                />
                {/* {s.caption && (
                <div className="absolute bottom-3 left-3 right-3 bg-black/40 text-white p-3 rounded">
                  {s.caption}
                </div>
              )} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute -top-16 -right-16 hidden lg:block scale-75 2xl:scale-100">
          <SliderSVGCircleAbout />
        </div>

        <div className="absolute -bottom-24 -left-24 hidden lg:block scale-75 2xl:scale-100">
          <SliderSVGAbout />
        </div>
      </div>
    </Container>
  );
};

export default Slider;
