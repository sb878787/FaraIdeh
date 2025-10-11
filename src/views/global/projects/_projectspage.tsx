'use client';

import Footer from '@/component/Footer';
// Components
import HeroSection from './HeroSection';
import Projects from './Projects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

const ProjectsPageWrapper = ({ projects }: { projects: ProjectsType[] }) => {
  return (
    <>
      <HeroSection />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export default ProjectsPageWrapper;
