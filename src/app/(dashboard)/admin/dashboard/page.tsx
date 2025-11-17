// Components
import DashboardPageWrapper from '@/views/dashboard/admin/dashboard/_dashboardpage';

// Actions
import { getDashboardStats } from '@/app/actions/getDashboardStats';

const DashboardPage = async () => {
  const stats = await getDashboardStats();

  return <DashboardPageWrapper stats={stats} />;
};

export default DashboardPage;
