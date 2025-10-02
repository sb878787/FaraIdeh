'use client';

// Next Imports
import Link from 'next/link';

// Components
import Container from '@/component/Container';
import SmallLabel from '@/component/SmallLabel';
import LargeLabel from '@/component/LargeLabel';
import OurStoryHome from '@/component/icons/SVG/OurStoryHome';

const OurStory = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-0">
        <SmallLabel title="OUR STORY" color="#34C759" bgColor="#EAFAEC" />
        <LargeLabel label="OUR STORY" subLabel="ما بهترین گزینه را پیدا خواهیم کرد" />

        <p className="text-text-description text-center font-iranYekan leading-7 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-3 font-light sm:font-medium lg:-mt-8 text-sm sm:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>

        <Link href="/about" className="mt-5 sm:mt-6 md:mt-7">
          <button className="bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer font-iranYekan rtl text-sm sm:text-base">
            بیشتر بدانید...
          </button>
        </Link>

        <div className="hidden xl:block absolute top-0 right-0 2xl:right-16 scale-50 lg:scale-100 origin-top-right">
          <OurStoryHome />
        </div>
      </div>
    </Container>
  );
};

export default OurStory;
