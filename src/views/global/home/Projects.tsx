﻿'use client';

// Components
import Container from '@/component/Container';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';
import ProjectsHome from '@/component/icons/SVG/ProjectsHome';
import ProjectCard from '../projects/ProjectCard';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

// Utils
import { columnise } from '@/utils/columnise';

const columnOffsetClasses = ['md:mt-16', '', 'md:mt-28'];

const Projects = ({ projects }: { projects: ProjectsType[] }) => {
  const hasData = projects.length > 0;
  const columnisedProjects = hasData ? columnise(projects, 3) : [];

  return (
    <div className="relative w-full">
      <Container>
        <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-0">
          <SmallLabel title="PROJECTS" color="#FF6633" bgColor="#FFF0EB" />
          <LargeLabel label="PROJECTS" subLabel="ما خدمات گسترده‌ای به مشتریان ارائه می‌دهیم" />

          <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          </p>
        </div>

        {/* Projects */}
        <div className="lg:mt-16 mt-8">
          {!hasData ? (
            <div className="flex items-center justify-center">
              <p className="lg:text-center text-justify bg-text-description font-iranYekan rtl text-white py-5 lg:py-3 px-5 lg:px-0 rounded w-3/4">
                به دلیل تازه‌ توسعه بودن سایت، فعلاً پروژه‌ای ثبت نشده است. به‌ زودی پروژه‌های جدید
                اینجا نمایش داده خواهند شد.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-10 md:hidden">
                {projects.map((project) => (
                  <ProjectCard key={`mobile-${project.id}`} {...project} />
                ))}
              </div>

              <div className="hidden md:grid md:grid-cols-3 md:gap-x-10">
                {columnisedProjects.map((columnProjects, columnIndex) => (
                  <div
                    key={`column-${columnIndex}`}
                    className={`flex flex-col gap-10 ${columnOffsetClasses[columnIndex]}`}
                  >
                    {columnProjects.map((project) => (
                      <ProjectCard key={`desktop-${project.id}`} {...project} />
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>

      <div className="absolute top-52 right-0 hidden xl:block">
        <ProjectsHome />
      </div>
    </div>
  );
};

export default Projects;
