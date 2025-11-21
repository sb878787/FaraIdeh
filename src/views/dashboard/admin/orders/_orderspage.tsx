'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainOrders from './MainOrders';

const OrdersPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainOrders />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default OrdersPageWrapper;
