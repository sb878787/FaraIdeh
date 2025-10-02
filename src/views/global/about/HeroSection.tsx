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

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
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
      </Container>
    </div>
  );
};

export default HeroSection;
