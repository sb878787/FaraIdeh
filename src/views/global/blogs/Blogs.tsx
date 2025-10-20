'use client';

// Components
import Container from '@/component/Container';
import OurStoryHome from '@/component/icons/SVG/OurStoryHome';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';

const Blogs = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-0">
        <SmallLabel title="BLOGS" color="#3361FF" bgColor="#EBF0FF" />
        <LargeLabel label="BLOGS" subLabel="آخرین مقالات" />

        <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>

        <div className="hidden xl:block absolute top-0 right-0 2xl:right-90 scale-50 lg:scale-100 origin-top-right">
          <OurStoryHome width="124" height="104" />
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
