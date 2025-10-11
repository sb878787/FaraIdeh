'use client';

// Components
import Container from '@/component/Container';
import ProjectCard from './ProjectCard';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

// Utils
import { columnise } from '@/utils/columnise';

const columnOffsetClasses = ['md:mt-16', '', 'md:mt-28'];

const Projects = ({ projects }: { projects: ProjectsType[] }) => {
  const hasData = projects.length > 0;
  const columnisedProjects = hasData ? columnise(projects, 3) : [];

  return (
    <>
      <Container>
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
    </>
  );
};

export default Projects;
