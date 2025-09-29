'use client';

// Components
import Container from '@/component/Container';
import EmailIcon from '@/component/icons/contact/EmailIcon';
import MessageIcon from '@/component/icons/contact/MessageIcon';
import PhoneIcon from '@/component/icons/contact/PhoneIcon';
import UserIcon from '@/component/icons/contact/UserIcon';
import ContactHome from '@/component/icons/SVG/ContactHome';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';

// Utils
import { normalizePhoneInput } from '@/utils/normalizePhoneInput';

const Contact = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-36 py-20 bg-[#F2F3F5] rounded-2xl">
        <SmallLabel title="CONTACTS" color="#3361FF" bgColor="#DFE5F6" />

        <LargeLabel label="IN TOUCH" subLabel="همین حالا لمسش کن" color="#EAECF1" />

        <p className="text-[#7D8FB3] text-center font-iranYekan leading-8 px-96 rtl -mt-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
        </p>

        <div className="absolute -top-16 -left-12">
          <ContactHome />
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 rtl mt-10 w-full px-52 gap-8">
          {/* Name */}
          <div
            className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
          >
            <UserIcon />

            <div className="relative w-full">
              <input
                className="peer text-[#7D8FB3] placeholder:text-[#7D8FB3] font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                type="text"
                name="name"
                id="name"
                placeholder=" "
              />

              <label
                htmlFor="name"
                className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-[#7D8FB3]
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
              >
                نام
              </label>
            </div>
          </div>

          {/* Family */}
          <div
            className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
          >
            <UserIcon />

            <div className="relative w-full">
              <input
                className="peer text-[#7D8FB3] placeholder:text-[#7D8FB3] font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                type="text"
                name="family"
                id="family"
                placeholder=" "
              />

              <label
                htmlFor="family"
                className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-[#7D8FB3]
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
              >
                نام خانوادگی
              </label>
            </div>
          </div>

          {/* Phone Number */}
          <div
            className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
          >
            <PhoneIcon />

            <div className="relative w-full">
              <input
                className="peer text-[#7D8FB3] placeholder:text-[#7D8FB3] font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                type="tel"
                name="phone"
                id="phone"
                placeholder=" "
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="tel"
                onInput={(e) => normalizePhoneInput(e, { maxLength: 11 })}
              />

              <label
                htmlFor="phone"
                className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-[#7D8FB3]
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
              >
                شماره تماس
              </label>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
          >
            <EmailIcon />

            <div className="relative w-full">
              <input
                className="peer text-[#7D8FB3] placeholder:text-[#7D8FB3] font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                type="email"
                name="email"
                id="email"
                placeholder=" "
              />

              <label
                htmlFor="email"
                className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-[#7D8FB3]
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
              >
                ایمیل
              </label>
            </div>
          </div>

          {/* Message */}
          <div
            className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg col-span-2"
          >
            <MessageIcon />

            <div className="relative w-full">
              <input
                className="peer text-[#7D8FB3] placeholder:text-[#7D8FB3] font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                type="text"
                name="message"
                id="message"
                placeholder=" "
              />

              <label
                htmlFor="message"
                className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-[#7D8FB3]
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
              >
                پیام
              </label>
            </div>
          </div>
        </div>

        <button className="bg-primary text-white font-iranYekan text-center rounded-full mt-10 px-14 py-4 font-semibold border-b-4 border-[#000a75] cursor-pointer hover:border-transparent hover:translate-y-1 transition-all duration-200">
          ارسال
        </button>
      </div>
    </Container>
  );
};

export default Contact;
