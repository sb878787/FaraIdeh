// Next Imports
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Actions
import { getBlogBySlug } from '@/app/actions/getBlogs';

// Components
import Container from '@/component/Container';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import CategoryIcon from '@/component/icons/blogs/CategoryIcon';
import CalendarIcon from '@/component/icons/blogs/CalendarIcon';
import TimeIcon from '@/component/icons/blogs/TimeIcon';
import InstagramIcon from '@/component/icons/InstagramIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import FacebookIcon from '@/component/icons/FacebookIcon';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: IBlogDetailPageProps) => {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    notFound();
  }

  const blog = await getBlogBySlug(blogSlug);

  if (!blog) {
    notFound();
  }

  // Parse labels
  const labels = (() => {
    try {
      return typeof blog.labels === 'string' ? JSON.parse(blog.labels) : blog.labels;
    } catch {
      return [];
    }
  })();

  return (
    <>
      <Header colorIcon="black" />

      <Container>
        <div className="lg:mt-52 mt-32 flex justify-between gap-x-14 rtl">
          {/* Content */}
          <div className="w-full">
            {/* Title */}
            <h1 className="text-[47px] font-semibold font-iranYekan">{blog.title}</h1>

            {/* Detail */}
            <div className="flex mt-4 gap-8">
              {/* Category */}
              <div className="flex gap-2 items-center">
                <CategoryIcon className="text-black" />
                <p className="font-iranYekan">{blog.category}</p>
              </div>

              {/* Date */}
              <div className="flex gap-2 items-center">
                <CalendarIcon size="21" className="text-black" />
                <p className="font-iranYekan pt-0.5">{formatDate(blog.createdAt)}</p>
              </div>

              {/* Reading Time */}
              <div className="flex gap-2 items-center">
                <TimeIcon size="25" className="text-black" />
                <p className="font-iranYekan">
                  مطالعه <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                  دقیقه
                </p>
              </div>

              {/* Author */}
              <div className="flex gap-3 items-center">
                <div className="rounded-full border-2 border-text-primary">
                  <Image
                    src="https://s6.uupload.ir/files/16_(2)_-_copy_ztvp.jpg"
                    alt="AuthorImage"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </div>
                <p className="font-iranYekan">{blog.author}</p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full h-115 overflow-hidden relative rounded-2xl mt-6">
              <Image src={blog.featuredImage || ''} alt="BlogImage" fill />
            </div>

            {/* Content */}
            <div className="mt-9">
              <p className="font-iranYekan text-[#4C4C4C] text-justify leading-8">{blog.content}</p>
            </div>
          </div>

          {/* Related Articles & Labels & Share */}
          <div className="w-3/5">
            {/* Related Articles Title */}
            <p className="font-iranYekan font-medium text-2xl">مقاله های مرتبط</p>

            {/* Related Articles */}
            <div className="mt-8 flex flex-col gap-y-5">
              <Link href="/blogs/id">
                <div className="flex items-center gap-x-5 rounded-xl pb-1.5 px-1.5 border-b-2 border-transparent hover:border-text-primary hover:-translate-y-1 transition-all duration-200">
                  {/* Image */}
                  <div className="relative w-3/4 h-32 rounded-xl overflow-hidden">
                    <Image
                      src="https://s6.uupload.ir/files/adobestock_271347901_1_3hoz.png"
                      alt="BlogImage"
                      fill
                    />
                  </div>

                  {/* Detail */}
                  <div className="w-full">
                    {/* Category & Reading Time */}
                    <div className="w-full flex gap-x-4">
                      {/* Category */}
                      <div className="flex gap-2">
                        <CategoryIcon size="17" className="text-black" />
                        <p className="font-iranYekan text-sm">{blog.category}</p>
                      </div>

                      {/* Reading Time */}
                      <div className="flex gap-2 items-center">
                        <TimeIcon size="20" className="text-black" />
                        <p className="font-iranYekan text-sm">
                          مطالعه{' '}
                          <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                          دقیقه
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="font-iranYekan line-clamp-1 font-semibold text-xl mt-4">
                      هزینه ساخت یک وبسایت
                    </p>

                    {/* Excerpt */}
                    <p className="font-iranYekan text-[#4C4C4C] line-clamp-2 text-sm text-justify leading-6 mt-2 font-medium">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                      طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blogs/id">
                <div className="flex items-center gap-x-5 rounded-xl pb-1.5 px-1.5 border-b-2 border-transparent hover:border-text-primary hover:-translate-y-1 transition-all duration-200">
                  {/* Image */}
                  <div className="relative w-3/4 h-32 rounded-xl overflow-hidden">
                    <Image
                      src="https://s6.uupload.ir/files/adobestock_271347901_1_3hoz.png"
                      alt="BlogImage"
                      fill
                    />
                  </div>

                  {/* Detail */}
                  <div className="w-full">
                    {/* Category & Reading Time */}
                    <div className="w-full flex gap-x-4">
                      {/* Category */}
                      <div className="flex gap-2">
                        <CategoryIcon size="17" className="text-black" />
                        <p className="font-iranYekan text-sm">{blog.category}</p>
                      </div>

                      {/* Reading Time */}
                      <div className="flex gap-2 items-center">
                        <TimeIcon size="20" className="text-black" />
                        <p className="font-iranYekan text-sm">
                          مطالعه{' '}
                          <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                          دقیقه
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="font-iranYekan line-clamp-1 font-semibold text-xl mt-4">
                      هزینه ساخت یک وبسایت
                    </p>

                    {/* Excerpt */}
                    <p className="font-iranYekan text-[#4C4C4C] line-clamp-2 text-sm text-justify leading-6 mt-2 font-medium">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                      طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blogs/id">
                <div className="flex items-center gap-x-5 rounded-xl pb-1.5 px-1.5 border-b-2 border-transparent hover:border-text-primary hover:-translate-y-1 transition-all duration-200">
                  {/* Image */}
                  <div className="relative w-3/4 h-32 rounded-xl overflow-hidden">
                    <Image
                      src="https://s6.uupload.ir/files/adobestock_271347901_1_3hoz.png"
                      alt="BlogImage"
                      fill
                    />
                  </div>

                  {/* Detail */}
                  <div className="w-full">
                    {/* Category & Reading Time */}
                    <div className="w-full flex gap-x-4">
                      {/* Category */}
                      <div className="flex gap-2">
                        <CategoryIcon size="17" className="text-black" />
                        <p className="font-iranYekan text-sm">{blog.category}</p>
                      </div>

                      {/* Reading Time */}
                      <div className="flex gap-2 items-center">
                        <TimeIcon size="20" className="text-black" />
                        <p className="font-iranYekan text-sm">
                          مطالعه{' '}
                          <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                          دقیقه
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="font-iranYekan line-clamp-1 font-semibold text-xl mt-4">
                      هزینه ساخت یک وبسایت
                    </p>

                    {/* Excerpt */}
                    <p className="font-iranYekan text-[#4C4C4C] line-clamp-2 text-sm text-justify leading-6 mt-2 font-medium">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                      طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Labels Title */}
            <p className="font-iranYekan font-medium text-2xl mt-12">برچسب ها</p>

            {/* Labels */}
            <div className="flex flex-wrap gap-3 mt-5">
              {Array.isArray(labels) && labels.length > 0 ? (
                labels.map((label, index) => (
                  <div
                    key={index}
                    className="border-r-3 border-orange rounded-lg px-6 py-3 shadow-md"
                  >
                    <span className="font-iranYekan">{label}</span>
                  </div>
                ))
              ) : (
                <p className="text-center bg-text-description font-iranYekan rtl text-white rounded w-full py-2">
                  برچسبی وجود ندارد
                </p>
              )}
            </div>

            {/* Share */}
            <div className="w-full flex flex-col items-center justify-center mt-16">
              {/* Share Title */}
              <p className="font-iranYekan font-medium text-lg">اشتراک گذاری</p>

              {/* Share Icons */}
              <div className="flex items-center mt-1">
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <LinkedInIcon className="text-[#383838]" size={23} />
                </Link>

                <Link
                  href={`https://t.me/share/url?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <TelegramIcon className="text-[#383838]" width={24} height={24} />
                </Link>

                <Link
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <InstagramIcon className="text-[#383838]" size={25} />
                </Link>

                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <FacebookIcon className="text-[#383838]" size={29} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default BlogDetailPage;

// Generate metadata for SEO
export async function generateMetadata({ params }: IBlogDetailPageProps) {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    return { title: 'مقاله یافت نشد' };
  }

  const blog = await getBlogBySlug(blogSlug);
  if (!blog) {
    return { title: 'مقاله یافت نشد' };
  }

  return {
    title: blog.title,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.featuredImage ? [blog.featuredImage] : [],
    },
  };
}
