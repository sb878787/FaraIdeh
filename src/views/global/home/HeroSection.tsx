'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import Container from '@/component/Container';
import InstagramIcon from '@/component/icons/InstagramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import Navbar from '@/component/Navbar';
import CustomIconEmoji from '@/component/icons/CustomIconEmoji';
import GitHubIcon from '@/component/icons/GitHubIcon';
import Information from './Information';

// Images
import heroImage from '@/assets/images/bg-HeroSection.png';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full pt-4 sm:pt-6 md:pt-8">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        placeholder="empty"
      />

      <div className="absolute inset-y-0 right-0 bg-[#070707]/75 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 sm:rounded-tl-[35px] md:rounded-tl-[45px] flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-end justify-end">
          <h1 className="font-iranYekan font-extrabold text-white text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-16">
            ما خدمات گسترده‌ای <br /> به مشتریان ارائه می‌دهیم
          </h1>
          <p className="text-text font-iranYekan text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6">
            فراایده، ایده‌هایی برای مهربانی
          </p>

          <Link
            href="/order-form"
            className="bg-orange text-white font-iranYekan font-semibold pr-3 sm:pr-4 rounded mt-4 sm:mt-6 md:mt-8 group hover:bg-orange/90 transition-colors duration-200 flex flex-row-reverse items-center gap-2 sm:gap-3"
          >
            <span className="text-sm sm:text-base">ثبت سفارش</span>
            <div className="bg-[#FF8030] py-2 px-3 sm:py-3 sm:px-4 md:px-5 rounded-l mr-1 group-hover:bg-[#e67329] transition-colors duration-200">
              <CustomIconEmoji size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </Link>
        </div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Social links */}
          <div className="flex gap-2 sm:gap-3">
            <Link href="https://github.com/sb878787" className="group">
              <GitHubIcon
                size={18}
                className="text-white transition-colors duration-200 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
            </Link>

            <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
              <InstagramIcon
                size={18}
                className="text-white transition-colors duration-200 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
            </Link>

            <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
              <TelegramIcon
                width={16}
                height={16}
                className="text-white transition-colors duration-200 group-hover:text-primary sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
              />
            </Link>

            <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
              <LinkedInIcon
                size={17}
                className="text-white transition-colors duration-200 group-hover:text-primary sm:w-[19px] sm:h-[19px] md:w-[21px] md:h-[21px]"
              />
            </Link>
          </div>
          <Navbar />
        </div>
      </Container>

      <Information />
    </div>
  );
};

export default HeroSection;
