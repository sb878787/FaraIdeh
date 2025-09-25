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
      <div className="relative w-full flex flex-col items-center justify-center mt-20">
        <SmallLabel title="OUR STORY" color="#34C759" bgColor="#EAFAEC" />

        <LargeLabel label="OUR STORY" subLabel="ما بهترین گزینه را پیدا خواهیم کرد" />

        <p className="text-[#7D8FB3] text-center font-iranYekan leading-8 px-96 rtl -mt-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>

        <Link href="/about" className="mt-7">
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer font-iranYekan rtl">
            بیشتر بدانید...
          </button>
        </Link>

        <div className="absolute top-0 right-24">
          <OurStoryHome />
        </div>
      </div>
    </Container>
  );
};

export default OurStory;
