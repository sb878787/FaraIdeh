'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import Image from 'next/image';

// Components
import EyeIcon from '@/component/icons/dashboard/EyeIcon';
import EyeSlashIcon from '@/component/icons/login/EyeSlashIcon';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-64 absolute top-0 left-0 h-screen w-full justify-center">
      {/* Login Image */}
      <div className="relative overflow-hidden w-190 h-170 rounded-xl">
        <Image
          src="https://s6.uupload.ir/files/newletter-join-us-sign-up_l8df.png"
          alt="ImageLogin"
          fill
        />
      </div>

      {/* Login Form */}
      <div className="rtl w-140">
        <h2 className="text-4xl font-iranYekan font-semibold mb-5">ورود</h2>
        <p className="text-[#B9B8B8] font-iranYekan">
          لطفا برای ورود به پنل مدیریت نام کاربری و رمز عبور خود را وارد کنید.
        </p>

        {/* Form */}
        <form action="#" className="mt-8">
          {/* UserName */}
          <div>
            <label
              htmlFor="username"
              className="block mb-5 font-iranYekan font-semibold text-xl text-[#263A43]"
            >
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              className="bg-white border border-[#B1B1B1] text-gray-900 placeholder:text-[#8E8E8E] outline-none rounded-md focus:border-[#54E28D] block w-full py-4 px-5 font-iranYekan transition-all text-lg"
              placeholder="نام کاربری خود را وارد کنید..."
              required
            />
          </div>

          {/* Password */}
          <div className="mt-5 relative">
            <label
              htmlFor="password"
              className="block mb-5 font-iranYekan font-semibold text-xl text-[#263A43]"
            >
              رمز عبور
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="bg-white border border-[#B1B1B1] text-gray-900 placeholder:text-[#8E8E8E] outline-none rounded-md focus:border-[#54E28D] block w-full py-4 px-5 font-iranYekan transition-all text-lg"
              placeholder="رمز عبور خود را وارد کنید..."
              required
            />

            <div
              className="absolute top-17 left-5 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeSlashIcon size="25" className="text-[#8E8E8E]" />
              ) : (
                <EyeIcon size="25" className="text-[#8E8E8E]" />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white border border-transparent w-full rounded-md text-center font-iranYekan font-semibold py-4 text-xl mt-12 cursor-pointer hover:bg-white hover:text-primary hover:border-primary transition-all"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
