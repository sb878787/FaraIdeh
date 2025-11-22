// Components
import FeedbacksPageWrapper from '@/views/dashboard/admin/feedbacks/_feedbackspage';

// Actions
import { getFeedbacks } from '@/app/actions/getFeedbacks';

const FeedbacksPage = async () => {
  const feedbacks = await getFeedbacks();

  return <FeedbacksPageWrapper feedbacks={feedbacks} />;
};

export default FeedbacksPage;
