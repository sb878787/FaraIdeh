'use client';

// Components
import ContentManagementIcon from '@/component/icons/services/ContentManagementIcon';

const ContentManagement = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl hover:bg-[#E4F2FF]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="bg-[#E4F2FF] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
        <ContentManagementIcon fill="#3898FC" />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-lg sm:text-xl mt-4 sm:mt-5">
        مدیریت محتوا
      </p>
      <p className="text-[#808080] font-iranYekan mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify rtl text-sm sm:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله
      </p>
    </div>
  );
};

export default ContentManagement;
