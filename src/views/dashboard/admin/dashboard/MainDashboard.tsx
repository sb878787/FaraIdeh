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
import OurStoryHome from '@/component/icons/SVG/OurStoryHome';
import EyeIcon from '@/component/icons/dashboard/EyeIcon';

// Actions
import type { DashboardStats } from '@/app/actions/getDashboardStats';

interface MainDashboardProps {
  stats: DashboardStats;
}

const MainDashboard = ({ stats }: MainDashboardProps) => {
  const dashboardData = [
    {
      icon: <EyeIcon />,
      title: 'بازدید ها',
      count: stats.totalViews,
      link: '#',
    },
    {
      icon: <TeamMemberIcon />,
      title: 'اعضای تیم',
      count: stats.teamMembers,
      link: '/admin/ourteam',
    },
    {
      icon: <ProjectsIcon className="text-black" size="40" />,
      title: 'پروژه ها',
      count: stats.projects,
      link: '/admin/projects',
    },
    {
      icon: <BlogsIcon className="text-black" size="40" />,
      title: 'وبلاگ',
      count: stats.blogs,
      link: '/admin/blogs',
    },
    {
      icon: <OrdersIcon className="text-black" size="40" />,
      title: 'سفارشات',
      count: stats.orders,
      link: '/admin/orders',
    },
    {
      icon: <FeedbackIcon className="text-black" size="40" />,
      title: 'بازخورد ها',
      count: stats.contacts,
      link: '/admin/feedbacks',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 px-12 mt-12 relative">
        {dashboardData.map((item, index) => (
          <div key={index} className="w-full bg-white shadow rounded-xl z-40">
            <div className="py-8 px-8 flex items-center justify-between">
              <div>
                {item.icon}
                <p className="font-iranYekan font-semibold text-xl pt-3">{item.title}</p>
              </div>

              <div className="font-yekanBakhFaNum font-semibold text-7xl pt-2 relative">
                <div className="absolute -top-5 -right-9">
                  <ThreeWingsSVG />
                </div>
                {item.count}
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

      {/* Newsletter Section */}
      <div className="px-12 mt-16 relative">
        <div className="absolute -top-5 right-6">
          <OurStoryHome width="124" height="104" />
        </div>

        <p className="font-iranYekan font-semibold text-2xl pr-27">خبرنامه</p>

        <div className="w-full bg-white rounded-xl border border-[#D7D7D7] h-36 mt-3 overflow-y-scroll text-left px-5">
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
          <p className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3">
            example@gmail.com{' '}
            <span className="font-yekanBakhFaNum text-xs text-gray-400 ml-3">1404/5/3</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
