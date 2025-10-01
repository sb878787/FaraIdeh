'use client';

// Components
import StartUpIcon from '@/component/icons/services/StartUpIcon';

const StartUp = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl hover:bg-[#EBE5FF]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="bg-[#EBE5FF] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
        <StartUpIcon />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-lg sm:text-xl mt-4 sm:mt-5">
        راه اندازی استارت‌آپ
      </p>
      <p className="text-[#808080] font-iranYekan mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify rtl text-sm sm:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله
      </p>
    </div>
  );
};

export default StartUp;
