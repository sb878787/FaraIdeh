'use client';

// Components
import Container from '@/component/Container';
import HeroSVGAbout from '@/component/icons/SVG/HeroSVGAbout';
import HandSVGAbout from '@/component/icons/SVG/HandSVGAbout';
import Header from '@/component/Header';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        {/* Hero Section */}
        <div className="lg:mt-44 mt-32 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          {/* Desktop */}
          <div className="flex-1 hidden xl:block">
            <HeroSVGAbout />
          </div>

          {/* Tablet */}
          <div className="flex-1 hidden lg:block xl:hidden">
            <HeroSVGAbout width="450" height="450" />
          </div>

          {/* Mobile */}
          <div className="flex-1 lg:hidden">
            <HeroSVGAbout width="300" height="300" />
          </div>

          <div className="rtl flex-1">
            <div className="flex items-end">
              <h5 className="text-text-primary font-iranYekan">سلام! ما تیم فراایده هستیم.</h5>
              <HandSVGAbout />
            </div>

            <p className="font-iranYekan text-2xl lg:text-4xl font-semibold leading-10 lg:leading-14 w-full xl::w-3/4 mt-4">
              ما یک تیم دیجیتالی و آژانس نرم‌افزاری در ایران هستیم. <br /> استراتژی، طراحی و توسعه
              در تمام سیستم عامل ها.
            </p>
            <p className="text-text-description font-iranYekan leading-7 text-justify lg:mt-6 mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
              را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
