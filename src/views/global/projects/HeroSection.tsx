'use client';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';

// Components
import Container from '@/component/Container';
import InstagramIcon from '@/component/icons/InstagramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import Navbar from '@/component/Navbar';
import GitHubIcon from '@/component/icons/GitHubIcon';
import HeroSectionSVGProjects from '@/component/icons/SVG/HeroSectionSVGProjects';
import HeroSectionCircleSVGProjects from '@/component/icons/SVG/HeroSectionCircleSVGProjects';
import HeroSectionSquareSVGProjects from '@/component/icons/SVG/HeroSectionSquareSVGProjects';

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
        <div className="lg:mt-28 mt-8 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          <div className="w-full relative hidden lg:block">
            <HeroSectionSVGProjects />

            <div className="absolute -top-24 right-0">
              <HeroSectionSquareSVGProjects />
            </div>

            <div className="absolute -bottom-3 -left-16">
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
