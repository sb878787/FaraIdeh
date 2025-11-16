'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import MainDashboard from './MainDashboard';

const DashboardPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainDashboard />
      </div>
      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
