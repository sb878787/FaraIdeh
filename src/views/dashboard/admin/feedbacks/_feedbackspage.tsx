'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainFeedbacks from './MainFeedbacks';

const FeedbacksPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainFeedbacks />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default FeedbacksPageWrapper;
