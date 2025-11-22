'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import EyeStrockIcon from '@/component/icons/blogs/EyeStrockIcon';
import EditIcon from '@/component/icons/blogs/EditIcon';
import InformationIcon from '@/component/icons/blogs/InformationIcon';

const MainBlogs = () => {
  return (
    <div className="px-12 mt-12">
      <div className="h-176 overflow-y-scroll grid grid-cols-3 gap-y-9 gap-x-12 pb-2">
        {/* Blogs */}
        <div className="bg-white shadow rounded-xl h-130">
          {/* Image & Views Blogs */}
          <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
            {/* Image */}
            <Image
              src="https://s6.uupload.ir/files/adobestock_339068706_1_8rmc.png"
              alt="BlogImage"
              fill
              className="object-center object-cover"
            />

            {/* Views */}
            <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 right-5 z-20 px-4 py-2.5">
              <EyeStrockIcon size="24" className="text-white" />
              {/* blogs.views */}
              <span className="font-yekanBakhFaNum text-white font-medium">50</span>
            </div>
          </div>

          {/* Detail */}
          <div className="px-8 pt-7">
            {/* Title */}
            <p className="text-[#6B7A99] font-iranYekan font-extrabold text-2xl">
              چگونه یک سایت بسازیم؟
            </p>

            {/* Excerpt */}
            <p className="line-clamp-2 text-[#ADB8CC] font-iranYekan leading-8 mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-5 px-8 mt-5">
            {/* View Button */}
            <Link
              href="#" // href={`/blogs/${blog.slug}`}
              className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200"
            >
              <EyeStrockIcon
                size="24"
                className="text-primary group-hover:text-white transition-all duration-200"
              />
              مشاهده
            </Link>

            {/* Edit Button */}
            <Link
              href="#"
              className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200"
            >
              <EditIcon
                size="22"
                className="text-primary group-hover:text-white transition-all duration-200"
              />
              ویرایش
            </Link>

            {/* Information Button */}
            <button className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
              <InformationIcon
                size="22"
                className="text-primary group-hover:text-white transition-all duration-200"
              />
              اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogs;
