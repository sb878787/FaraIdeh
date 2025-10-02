'use client';

// React Imports
import { useEffect, useState } from 'react';

// Components
import AchievementIcon from '@/component/icons/AchievementIcon';
import OrderIcon from '@/component/icons/OrderIcon';
import ProjectIcon from '@/component/icons/ProjectIcon';
import UnionSVGInformation from '@/component/icons/UnionSVGInformation';
import UsersIcon from '@/component/icons/UsersIcon';

// Server Actions
import { getInformationCounts } from '@/app/actions/information';

const Information = () => {
  const [counts, setCounts] = useState({
    teamMembers: 0,
    projects: 0,
    orders: 0,
    achievements: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const data = await getInformationCounts();
      setCounts(data);
    };
    fetchCounts();
  }, []);

  const stats = [
    {
      icon: <UsersIcon />,
      count: counts.teamMembers,
      label: 'اعضای تیم',
    },
    {
      icon: <ProjectIcon />,
      count: counts.projects > 0 ? `+${counts.projects}` : '0',
      label: 'پروژه های انجام شده',
    },
    {
      icon: <OrderIcon />,
      count: counts.orders,
      label: 'سفارشات',
    },
    {
      icon: <AchievementIcon />,
      count: counts.achievements,
      label: 'دستاورد ها',
    },
  ];

  return (
    <div className="absolute inset-x-0 -bottom-52 sm:-bottom-10 h-auto lg:h-[156px] z-10">
      {/* Desktop SVG Background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <UnionSVGInformation />
      </div>

      {/* Mobile/Tablet Background */}
      <div className="lg:hidden bg-white rounded-t-xl rtl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-between text-center p-2">
              <div className="scale-75 sm:scale-90 md:scale-100">{stat.icon}</div>
              <div>
                <p className="font-yekanBakhFaNum font-bold text-xl sm:text-2xl md:text-3xl">
                  {stat.count}
                </p>
                <p className="font-iranYekan text-text-information text-xs sm:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative flex-row-reverse items-center justify-between container mx-auto mt-8 px-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-row-reverse items-center gap-4">
            {stat.icon}
            <div className="flex flex-col items-start">
              <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">
                {stat.count}
              </p>
              <p className="text-right w-full font-iranYekan text-text-information">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
