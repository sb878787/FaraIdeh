'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';

const DashboardPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10"></div>

      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
