// Components
import LandingPageWrapper from '@/views/global/home/_homepage';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

const LandingPage = async () => {
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

  return <LandingPageWrapper projects={projects} />;
};

export default LandingPage;
