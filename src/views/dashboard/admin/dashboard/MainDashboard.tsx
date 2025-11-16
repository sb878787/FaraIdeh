'use client';

// Next Imports
import Link from 'next/link';

// Components
import TeamMemberIcon from '@/component/icons/dashboard/TeamMemberIcon';
import ThreeWingsSVG from '@/component/icons/SVG/ThreeWingsSVG';
import ProjectsIcon from '@/component/icons/dashboard/ProjectsIcon';
import BlogsIcon from '@/component/icons/dashboard/BlogsIcon';
import OrdersIcon from '@/component/icons/dashboard/OrdersIcon';
import FeedbackIcon from '@/component/icons/dashboard/FeedbackIcon';
import CircleDashboardSVG from '@/component/icons/SVG/CircleDashboardSVG';

const MainDashboard = () => {
  const dashboardData = [
    {
      icon: <TeamMemberIcon />,
      title: 'اعضای تیم',
      count: 16,
      link: '/admin/ourteam',
    },
    {
      icon: <ProjectsIcon className="text-black" size="40" />,
      title: 'پروژه ها',
      count: 16,
      link: '/admin/projects',
    },
    {
      icon: <BlogsIcon className="text-black" size="40" />,
      title: 'وبلاگ',
      count: 16,
      link: '/admin/blogs',
    },
    {
      icon: <OrdersIcon className="text-black" size="40" />,
      title: 'سفارشات',
      count: 16,
      link: '/admin/orders',
    },
    {
      icon: <FeedbackIcon className="text-black" size="40" />,
      title: 'بازخورد ها',
      count: 16,
      link: '/admin/feedbacks',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 px-12 mt-12 relative">
      {dashboardData.map((item, index) => (
        <div key={index} className="w-full bg-white border border-[#D7D7D7] rounded-xl z-40">
          <div className="py-8 px-8 flex items-center justify-between">
            <div>
              {item.icon}
              <p className="font-iranYekan font-semibold text-xl pt-3">{item.title}</p>
            </div>

            <div className="relative">
              <div className="absolute -top-5 -right-9">
                <ThreeWingsSVG />
              </div>
              <p className="font-yekanBakhFaNum font-semibold text-7xl pt-2">{item.count}</p>
            </div>
          </div>

          <div className="border-t border-[#D7D7D7] py-4 pl-8 text-left">
            <Link href={item.link} className="font-iranYekan text-[#0259FA] hover:underline">
              مشاهده بیشتر
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute top-14 left-0">
        <CircleDashboardSVG />
      </div>
    </div>
  );
};

export default MainDashboard;
