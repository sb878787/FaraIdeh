'use client';

const MainFeedbacks = () => {
  return (
    <div className="px-12 mt-12">
      <div className="bg-white border border-[#D7D7D7] px-16 rounded-3xl h-176 overflow-y-scroll">
        <div className="border-b border-[#D7D7D7] rtl flex flex-col gap-y-3 pb-8 mt-10">
          <div className="flex items-start justify-between">
            {/* Full Name */}
            <h2 className="font-iranYekan font-semibold text-2xl">رضا علایی</h2>

            {/* Date */}
            <span className="font-yekanBakhFaNum text-[#767676] font-medium">1402/8/5</span>
          </div>

          {/* Phone Number */}
          <p className="font-yekanBakhFaNum text-[#767676] font-medium text-lg">09335942415</p>

          {/* Email */}
          <p className="font-iranYekan text-[#767676] font-medium text-lg">example@gmail.com</p>

          {/* Description */}
          <p className="font-iranYekan text-[#767676] text-justify leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeedbacks;
