// Components
import ProjectsPageWrapper from '@/views/global/projects/_projectspage';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

const ProjectsPage = async () => {
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

  return <ProjectsPageWrapper projects={projects} />;
};

export default ProjectsPage;
