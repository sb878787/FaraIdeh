'use client';

// Components
import UiUxIcon from '@/component/icons/services/UiUxIcon';

const UiUxDesign = () => {
  return (
    <div className="p-8 rounded-2xl hover:bg-[#DFFFF2]/30 hover:-translate-y-1 hover:shadow transition-all duration-200">
      <div className="bg-[#DFFFF2] w-16 h-16 rounded-xl flex items-center justify-center">
        <UiUxIcon />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-xl mt-5">طراحی UI, UX</p>
      <p className="text-[#808080] font-iranYekan mt-3 leading-7 text-justify rtl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله
      </p>
    </div>
  );
};

export default UiUxDesign;
