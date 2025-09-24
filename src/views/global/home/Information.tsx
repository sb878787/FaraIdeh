'use client';

// React Imports
import { useEffect, useState } from 'react';

// Components
import AchievementIcon from '@/component/icons/AchievementIcon';
import OrderIcon from '@/component/icons/OrderIcon';
import ProjectIcon from '@/component/icons/ProjectIcon';
import UnionSVGInformation from '@/component/icons/UnionSVGInformation';
import UsersIcon from '@/component/icons/UsersIcon';

// Utils
import { getTeamMemberCount } from '@/utils/teamMembers';

const Information = () => {
  const [teamCount, setTeamCount] = useState<number>(0);

  useEffect(() => {
    const fetchTeamCount = async () => {
      const count = await getTeamMemberCount();
      setTeamCount(count);
    };
    fetchTeamCount();
  }, []);

  return (
    <div className="absolute inset-x-0 -bottom-1 h-[156px] z-10">
      <div className="absolute inset-0 pointer-events-none">
        <UnionSVGInformation />
      </div>

      <div className="relative flex flex-row-reverse items-center justify-between container mx-auto mt-8 px-8">
        {/* Team members */}
        <div className="flex flex-row-reverse items-center gap-4">
          <UsersIcon />
          <div className="flex flex-col items-start">
            <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">{teamCount}</p>
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
