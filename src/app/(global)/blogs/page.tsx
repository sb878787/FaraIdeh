// Components
import BlogsPageWrapper from '@/views/global/blogs/_blogspage';

// Actions
import { getBlogs } from '@/app/actions/getBlogs';

const BlogsPage = async () => {
  // Fetch initial blogs on server
  const blogsData = await getBlogs({ limit: 6 });
  const latestBlogsData = await getBlogs({ limit: 5 });

  return (
    <BlogsPageWrapper
      initialBlogs={blogsData.blogs}
      hasMore={blogsData.hasMore}
      latestBlogs={latestBlogsData.blogs}
    />
  );
};

export default BlogsPage;
