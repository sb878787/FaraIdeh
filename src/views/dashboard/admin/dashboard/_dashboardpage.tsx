'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';

const DashboardPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <Header />
      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
