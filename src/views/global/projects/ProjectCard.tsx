'use client';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';

// Types
import { ProjectsType } from '@/types/ProjectsType';

// Components
import EyeIcon from '@/component/icons/EyeIcon';

// Utils
import { normalizeUrl } from '@/utils/normalizeUrl';

const ProjectCard = ({
  name,
  description,
  photo,
  projectLink,
  requesterName,
  technologies,
  viewCount,
  year,
}: ProjectsType) => {
  const href = normalizeUrl(projectLink);

  return (
    <div className="group rounded-2xl overflow-hidden shadow-md relative">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-72 overflow-hidden flex flex-row-reverse justify-end">
          <Image
            src={photo}
            alt="ProjectImage"
            fill
            className="absolute object-cover object-center -z-10"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="w-20 h-11 pt-1 font-semibold flex items-center justify-center ml-2 mt-6 rounded-[8px] bg-black/50 font-yekanBakhFaNum text-white">
            <p>{year}</p>
          </div>

          <div className="w-20 h-11 font-semibold flex flex-row-reverse items-center justify-center gap-2 ml-6 mt-6 rounded-[8px] bg-black/50 font-yekanBakhFaNum text-white">
            <EyeIcon />
            <p className="pt-1">{viewCount}</p>
          </div>
        </div>
        <div className="py-5 px-7 rtl">
          <p className="text-[#6B7A99] font-iranYekan font-extrabold text-xl">{name}</p>
          <p className="text-[#ADB8CC] font-iranYekan text-lg font-medium mt-2 leading-8">
            {description}
          </p>
          {requesterName && (
            <p className="text-[#ADB8CC] font-iranYekan mt-3">{`درخواست کننده: ${requesterName}`}</p>
          )}
          {technologies && <p className="text-[#ADB8CC] font-semibold mt-3">{technologies}</p>}
        </div>

        <div className="absolute bg-black w-full h-full top-0 left-0 opacity-0 group-hover:opacity-60 transition-all duration-200 rounded-2xl flex items-center justify-center"></div>

        <button className="text-white font-iranYekan bg-orange px-4 py-3 rounded cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          مشاهده پروژه
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
