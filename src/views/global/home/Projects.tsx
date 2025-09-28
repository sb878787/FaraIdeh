// Components
import Container from '@/component/Container';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';
import ProjectsHome from '@/component/icons/SVG/ProjectsHome';
import ProjectCard from '../projects/ProjectCard';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Utils
import { columnise } from '@/utils/columnise';

const columnOffsetClasses = ['md:mt-16', '', 'md:mt-28'];

const Projects = async () => {
  const rows = await getProjects();

  const projects: ProjectsType[] = rows.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    requesterName: p.requesterName ?? undefined,
    technologies: p.technologiesLabel,
    year: p.yearLabel,
    viewCount: p.viewCountLabel,
    projectLink: p.projectLink ?? undefined,
    photo: p.photo,
  }));

  const hasData = projects.length > 0;

  const columnisedProjects = hasData ? columnise(projects, 3) : [];

  return (
    <div className="relative w-full">
      <Container>
        <div className="relative w-full flex flex-col items-center justify-center mt-20">
          <SmallLabel title="PROJECTS" color="#FF6633" bgColor="#FFF0EB" />

          <LargeLabel label="PROJECTS" subLabel="ما خدمات گسترده‌ای به مشتریان ارائه می‌دهیم" />

          <p className="text-[#7D8FB3] text-center font-iranYekan leading-8 px-96 rtl -mt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16">
          {!hasData ? (
            <div className="flex items-center justify-center">
              <p className="text-center bg-[#7D8FB3] font-iranYekan rtl text-white py-3 rounded w-3/4">
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

      <div className="absolute top-52 right-0">
        <ProjectsHome />
      </div>
    </div>
  );
};

export default Projects;
