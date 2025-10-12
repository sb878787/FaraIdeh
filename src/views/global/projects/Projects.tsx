'use client';

// Components
import Container from '@/component/Container';
import ProjectCard from './ProjectCard';
import Filters from './Filters';

// Types
import type { ProjectsType } from '@/types/ProjectsType';
import { ProjectCategory } from '@/features/projects/categories';

// Utils
import { columnise } from '@/utils/columnise';

const columnOffsetClasses = ['md:mt-16', '', 'md:mt-28'];

interface ProjectsProps {
  projects: ProjectsType[];
  selectedCategory: ProjectCategory;
}

const Projects = ({ projects, selectedCategory }: ProjectsProps) => {
  const hasData = projects.length > 0;
  const columnisedProjects = hasData ? columnise(projects, 3) : [];

  return (
    <>
      <Filters selectedCategory={selectedCategory} />

      <Container>
        {/* Projects */}
        <div className="lg:mt-20 mt-8">
          {!hasData ? (
            <div className="flex items-center justify-center">
              <p className="lg:text-center text-justify bg-text-description font-iranYekan rtl text-white py-5 lg:py-3 px-5 lg:px-0 rounded w-3/4">
                {selectedCategory === 'all'
                  ? 'به دلیل تازه‌ توسعه بودن سایت، فعلاً پروژه‌ای ثبت نشده است. به‌ زودی پروژه‌های جدید اینجا نمایش داده خواهند شد.'
                  : 'در حال حاضر در این دسته‌بندی پروژه نیست.'}
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
