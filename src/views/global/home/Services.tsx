'use client';

// Components
import Container from '@/component/Container';
import SmallLabel from '@/component/SmallLabel';
import LargeLabel from '@/component/LargeLabel';
import ServicesHome from '@/component/icons/SVG/ServicesHome';
import WebsiteDesign from './services/WebsiteDesign';
import StartUp from './services/StartUp';
import ApplicationDesign from './services/ApplicationDesign';
import InstagramManagement from './services/InstagramManagement';
import UiUxDesign from './services/UiUxDesign';
import ContentManagement from './services/ContentManagement';

const Services = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-20">
        <SmallLabel title="SERVICES" color="#3361FF" bgColor="#EBF0FF" />

        <LargeLabel label="SERVICES" subLabel="ما خدمات گسترده‌ای به مشتریان ارائه می‌دهیم" />

        <p className="text-[#7D8FB3] text-center font-iranYekan leading-8 px-96 rtl -mt-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>

        <div className="absolute bottom-6 left-64">
          <ServicesHome />
        </div>
      </div>

      <div className="grid grid-cols-3 rtl gap-8 gap-x-52 mt-14">
        <WebsiteDesign />
        <StartUp />
        <ApplicationDesign />
        <InstagramManagement />
        <UiUxDesign />
        <ContentManagement />
      </div>
    </Container>
  );
};

export default Services;
