'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';

const DashboardPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <div className="w-full border-b-1 border-[#CCCCCC] bg-white py-5 px-12 flex items-center justify-between">
          <p className="font-iranYekan text-2xl font-semibold">داشبورد</p>

          <div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 bg-black rounded-full border border-primary"></div>
              <div>
                <p className="text-[#767676] font-iranYekan text-xs">خوش آمدید</p>
                <p className="text-[#4C4C4C] font-iranYekan line-clamp-1 font-medium">
                  سید محمد علی صابری
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
