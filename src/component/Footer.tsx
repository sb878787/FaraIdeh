'use client';

// React Imports
import { useCallback } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Images
import LogoType from '@/assets/images/LogoType.png';

// Components
import Container from './Container';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import ArrNewsletterIcon from './icons/ArrNewsletterIcon';
import FooterSVG from './icons/SVG/FooterSVG';
import FooterSVGright from './icons/SVG/FooterSVGright';
import FooterShadowSVG from './icons/SVG/FooterShadowSVG';
import ArrToTop from './icons/ArrToTop';

const Footer = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-primary w-full lg:mt-32 mt-16 lg:pt-16 pt-8 pb-4 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 rtl items-end">
          {/* Bio */}
          <div>
            <Image src={LogoType} alt="logoType" className="w-60" />

            <p className="text-white font-iranYekan text-justify leading-8 mt-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            </p>
          </div>

          {/* Site sections */}
          <div className="flex items-start justify-between lg:items-center lg:justify-center">
            <div>
              <p className="text-white font-iranYekan font-semibold text-xl">بخش های سایت</p>

              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                    href="/"
                  >
                    قوانین و مقررات
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                    href="/about"
                  >
                    درباره ما
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                    href="/projects"
                  >
                    پروژه ها
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                    href="/"
                  >
                    خدمات فراایده
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="flex flex-col items-center lg:gap-5 gap-4 lg:hidden">
              <li>
                <Link href="https://github.com/sb878787" className="group">
                  <GitHubIcon
                    size={30}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
                  <InstagramIcon
                    size={30}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
                  <TelegramIcon
                    width={30}
                    height={30}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
                  <LinkedInIcon
                    size={30}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            {/* Social media */}
            <ul className="lg:flex items-center gap-5 hidden">
              <li>
                <Link href="https://github.com/sb878787" className="group">
                  <GitHubIcon
                    size={40}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
                  <InstagramIcon
                    size={40}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
                  <TelegramIcon
                    width={40}
                    height={40}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>

              <li>
                <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
                  <LinkedInIcon
                    size={40}
                    className="text-white transition-all duration-200 group-hover:-translate-y-2"
                  />
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <p className="text-white font-iranYekan font-semibold text-xl">خبرنامه</p>

              <p className="rtl text-white font-iranYekan mt-2">
                عضو خبرنامه فراایده شوید و از جدیدترین مطالب و خدمات ویژه با خبر شوید!
              </p>

              <div className="mt-5 bg-white rounded overflow-hidden flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="لطفا ایمیل خود را وارد کنید..."
                  className="placeholder:text-[#b1b1b1] font-iranYekan rtl outline-none bg-white w-full p-5"
                />

                <div className="w-20 h-16 flex items-center justify-center cursor-pointer group hover:bg-gray-200 transition-all">
                  <ArrNewsletterIcon className="group-hover:-translate-x-2 transition-all duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center lg:mt-24 mt-10">
          <p className="text-white font-iranYekan rtl text-xs md:text-base leading-6 text-center">
            تمامی حقوق مادی و معنوی برای گروه توسعه نرم‌افزار و استارتاپی فراایده محفوظ است.
          </p>
        </div>
      </Container>

      {/* SVGs */}
      <div className="absolute top-0 left-0 hidden xl:block">
        <FooterSVG />
      </div>

      <div className="absolute bottom-0 right-0 hidden xl:block">
        <FooterSVGright />
      </div>

      <div className="absolute top-2 right-60 hidden xl:block">
        <FooterShadowSVG />
      </div>

      <div className="absolute bottom-0 left-96 hidden xl:block">
        <FooterShadowSVG />
      </div>

      {/* Desktop Scroll to Top */}
      <button
        type="button"
        onClick={handleScrollTop}
        className="lg:flex items-center justify-center bg-primary p-4 border-4 border-white rounded-full absolute -top-10 right-12 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-white group hidden"
      >
        <ArrToTop className="text-white transition-colors duration-200 group-hover:text-primary" />
      </button>

      {/* Mobile Scroll to Top */}
      <button
        type="button"
        onClick={handleScrollTop}
        className="flex items-center justify-center bg-primary p-4 border-4 border-white rounded-full absolute -top-10 left-8 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-white group lg:hidden"
      >
        <ArrToTop className="text-white transition-colors duration-200 group-hover:text-primary" />
      </button>
    </div>
  );
};

export default Footer;
