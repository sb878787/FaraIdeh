export type ProjectsType = {
  id: number;
  name: string;
  description: string;
  requesterName?: string | null;
  technologies: string; // the display label (joined by " | ")
  year: string;
  viewCount: string;
  projectLink?: string | null;
  photo: string;
  category: string;
};
