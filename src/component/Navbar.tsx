'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Images
import Logo from '@/assets/images/Logo.png';

// Components
import SearchIcon from './icons/SearchIcon';

const Navbar = () => {
  const pathname = usePathname();

  const routeLinks = [
    { name: 'صفحه نخست', path: '/home' },
    { name: 'درباره ما', path: '/about' },
    { name: 'پروژه ها', path: '/projects' },
    { name: 'خدمات فراایده', path: '/services' },
    { name: 'وبلاگ', path: '/blogs' },
  ];

  return (
    <div className="w-full bg-white mt-3 rounded-md shadow-md py-3 px-10 flex flex-row-reverse items-center justify-between">
      <Link href="/home">
        <Image src={Logo} alt="logo" className="w-6" />
      </Link>

      <nav>
        <ul className="flex flex-row-reverse items-center gap-10">
          {routeLinks.map((link, index) => (
            <li key={index} className="group">
              <Link
                href={link.path}
                className={`font-iranYekan font-medium ${pathname === link.path ? 'text-primary' : 'text-text-link'} group-hover:text-primary`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        <SearchIcon size={35} strokeWidth={1} />
      </button>
    </div>
  );
};

export default Navbar;
