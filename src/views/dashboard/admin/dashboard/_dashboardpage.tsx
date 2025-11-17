'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import MainDashboard from './MainDashboard';
import Footer from '@/component/dashboard/Footer';

// Actions
import type { DashboardStats } from '@/app/actions/getDashboardStats';

interface DashboardPageWrapperProps {
  stats: DashboardStats;
}

const DashboardPageWrapper = ({ stats }: DashboardPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainDashboard stats={stats} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
