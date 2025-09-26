'use client';

// Components
import Container from '@/component/Container';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';
import ProjectsHome from '@/component/icons/SVG/ProjectsHome';

const Projects = () => {
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
      </Container>

      <div className="absolute top-52 right-0">
        <ProjectsHome />
      </div>
    </div>
  );
};

export default Projects;
