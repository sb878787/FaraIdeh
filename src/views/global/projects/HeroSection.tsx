'use client';

// Components
import Container from '@/component/Container';
import HeroSectionSVGProjects from '@/component/icons/SVG/HeroSectionSVGProjects';
import HeroSectionCircleSVGProjects from '@/component/icons/SVG/HeroSectionCircleSVGProjects';
import HeroSectionSquareSVGProjects from '@/component/icons/SVG/HeroSectionSquareSVGProjects';
import Header from '@/component/Header';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        {/* Hero Section */}
        <div className="lg:mt-56 mt-32 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          <div className="w-full relative hidden lg:block">
            <HeroSectionSVGProjects />

            <div className="absolute -top-24 right-8">
              <HeroSectionSquareSVGProjects />
            </div>

            <div className="absolute -bottom-3 -left-12">
              <HeroSectionCircleSVGProjects />
            </div>
          </div>

          <div className="w-full rtl">
            <p className="font-iranYekan text-text-primary text-lg lg:text-xl">
              نمونه کارهای فراایده
            </p>
            <p className="font-iranYekan font-semibold lg:font-bold text-xl lg:text-3xl leading-9 lg:leading-11 mt-1 lg:mt-4">
              ما طراحی وب سایت در سطح جهانی <br /> ایجاد می‌کنیم، ارتباطات و مارکها
            </p>
            <p className="text-text-description font-iranYekan text-justify leading-7 lg:leading-8 text-sm lg:text-base mt-3 lg:mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
