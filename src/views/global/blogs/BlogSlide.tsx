'use client';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';

// Components
import CategoryIcon from '@/component/icons/blogs/CategoryIcon';
import CalendarIcon from '@/component/icons/blogs/CalendarIcon';

interface IBlogSlide {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
}

interface IBlogSlideProps {
  blog: IBlogSlide;
}

const BlogSlide = ({ blog }: IBlogSlideProps) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="w-full h-96 rounded-2xl overflow-hidden relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="absolute object-cover object-center -z-10"
        />

        <div className="bg-black/50 w-full h-96">
          <div className="bg-white rounded-lg w-20 h-11 flex items-center justify-center absolute top-3 left-3">
            <p className="font-iranYekan font-semibold">جدید</p>
          </div>

          <div className="absolute bottom-12 right-10 flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <CategoryIcon size="20" className="text-white" />
                <p className="text-white font-iranYekan text-sm">{blog.category}</p>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon size="21" className="text-white" />
                <p className="text-white font-yekanBakhFaNum text-sm pt-1">{blog.date}</p>
              </div>
            </div>

            <p className="text-white font-iranYekan font-extrabold text-3xl">{blog.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogSlide;
