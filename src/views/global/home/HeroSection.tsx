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
    <div className="relative min-h-screen w-full pt-8">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        placeholder="empty"
      />

      <div className="absolute inset-y-0 right-0 bg-[#070707]/75 w-1/2 rounded-tl-[45px] flex items-center justify-center">
        <div className="flex flex-col items-end justify-end">
          <h1 className="font-iranYekan font-extrabold text-white text-right text-5xl leading-16">
            ما خدمات گسترده‌ای <br /> به مشتریان ارائه می‌دهیم
          </h1>
          <p className="text-text font-iranYekan text-lg mt-6">فراایده، ایده‌هایی برای مهربانی</p>

          <Link
            href="/order-form"
            className="bg-orange text-white font-iranYekan font-semibold pr-4 rounded mt-8 group hover:bg-orange/90 transition-colors duration-200 flex flex-row-reverse items-center gap-3"
          >
            ثبت سفارش
            <div className="bg-[#FF8030] py-3 px-5 rounded-l mr-1 group-hover:bg-[#e67329] transition-colors duration-200">
              <CustomIconEmoji />
            </div>
          </Link>
        </div>
      </div>

      <Container>
        <div className="relative z-10">
          <div className="flex gap-3">
            <Link href="https://github.com/sb878787" className="group">
              <GitHubIcon
                size={22}
                className="text-white transition-colors duration-200 group-hover:text-primary"
              />
            </Link>

            <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
              <InstagramIcon
                size={22}
                className="text-white transition-colors duration-200 group-hover:text-primary"
              />
            </Link>

            <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
              <TelegramIcon
                width={20}
                height={20}
                className="text-white transition-colors duration-200 group-hover:text-primary"
              />
            </Link>

            <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
              <LinkedInIcon
                size={21}
                className="text-white transition-colors duration-200 group-hover:text-primary"
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
