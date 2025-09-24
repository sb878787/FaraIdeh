'use client';

// Components
import UnionSVGInformation from '@/component/icons/UnionSVGInformation';
import UsersIcon from '@/component/icons/UsersIcon';
import ProjectIcon from '@/component/icons/ProjectIcon';
import OrderIcon from '@/component/icons/OrderIcon';
import AchievementIcon from '@/component/icons/AchievementIcon';

const Information = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[156px] z-10">
      <div className="absolute inset-0 pointer-events-none">
        <UnionSVGInformation />
      </div>

      <div className="relative flex flex-row-reverse items-center justify-between container mx-auto mt-8 px-8">
        {/* Team members */}
        <div className="flex flex-row-reverse items-center gap-4">
          <UsersIcon />
          <div className="flex flex-col items-start">
            <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">16</p>
            <p className="text-right w-full font-iranYekan text-text-information">اعضای تیم</p>
          </div>
        </div>

        {/* Completed projects */}
        <div className="flex flex-row-reverse items-center gap-4">
          <ProjectIcon />
          <div className="flex flex-col items-start">
            <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">+1</p>
            <p className="text-right w-full font-iranYekan text-text-information">
              پروژه های انجام شده
            </p>
          </div>
        </div>

        {/* Orders */}
        <div className="flex flex-row-reverse items-center gap-4">
          <OrderIcon />
          <div className="flex flex-col items-start">
            <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">1</p>
            <p className="text-right w-full font-iranYekan text-text-information">سفارشات</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-row-reverse items-center gap-4">
          <AchievementIcon />
          <div className="flex flex-col items-start">
            <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">0</p>
            <p className="text-right w-full font-iranYekan text-text-information">دستاورد ها</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
