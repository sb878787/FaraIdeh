// Components
import BlogsPageWrapper from '@/views/global/blogs/BlogsPage';

// Actions
import { getPublishedBlogs } from '@/app/actions/getPublicBlogs';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'وبلاگ',
  description:
    'در بلاگ فراایده از تجربه‌های واقعی پروژه‌ها می‌نویسیم؛ نکته‌های عملی طراحی، محتوا و رشد محصول کوتاه، شفاف و قابل‌اجرا برای امروزِ کسب‌وکار شما.',
  openGraph: {
    title: 'بلاگ فراایده',
    description:
      'در بلاگ فراایده از تجربه‌های واقعی پروژه‌ها می‌نویسیم؛ نکته‌های عملی طراحی، محتوا و رشد محصول کوتاه، شفاف و قابل‌اجرا برای امروزِ کسب‌وکار شما.',
    url: '/blogs',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/blogs',
  },
};

const BlogsPage = async () => {
  // Fetch initial blogs on server
  const [blogsData, latestBlogsData] = await Promise.all([
    getPublishedBlogs(6),
    getPublishedBlogs(5),
  ]);

  return (
    <BlogsPageWrapper
      initialBlogs={blogsData.blogs}
      hasMore={blogsData.hasMore}
      latestBlogs={latestBlogsData.blogs}
    />
  );
};

export default BlogsPage;
