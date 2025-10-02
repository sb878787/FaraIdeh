'use client';

// Next Imports
import Link from 'next/link';

// Components
import Container from '@/component/Container';
import InstagramIcon from '@/component/icons/InstagramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import Navbar from '@/component/Navbar';
import GitHubIcon from '@/component/icons/GitHubIcon';
import HeroSVGAbout from '@/component/icons/SVG/HeroSVGAbout';
import HandSVGAbout from '@/component/icons/SVG/HandSVGAbout';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        {/* Navbar and Social Media */}
        <div className="relative z-10">
          {/* Social links */}
          <div className="flex gap-2 sm:gap-3">
            <Link href="https://github.com/sb878787" className="group">
              <GitHubIcon
                size={18}
                className="text-text-link transition-colors duration-200 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
            </Link>

            <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
              <InstagramIcon
                size={18}
                className="text-text-link transition-colors duration-200 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
            </Link>

            <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
              <TelegramIcon
                width={16}
                height={16}
                className="text-text-link transition-colors duration-200 group-hover:text-primary sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
              />
            </Link>

            <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
              <LinkedInIcon
                size={17}
                className="text-text-link transition-colors duration-200 group-hover:text-primary sm:w-[19px] sm:h-[19px] md:w-[21px] md:h-[21px]"
              />
            </Link>
          </div>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="lg:mt-20 mt-8 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          {/* Desktop */}
          <div className="flex-1 hidden lg:block">
            <HeroSVGAbout />
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

            <p className="font-iranYekan text-2xl lg:text-4xl font-semibold leading-10 lg:leading-14 w-full lg:w-3/4 mt-4">
              ما یک تیم دیجیتالی و آژانس نرم‌افزاری در ایران هستیم. <br /> استراتژی، طراحی و توسعه
              در تمام سیستم عامل ها.
            </p>
            <p className="text-text-description font-iranYekan leading-7 text-justify lg:mt-8 mt-4">
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
