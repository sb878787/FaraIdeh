import { prisma } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export type ProjectCardDTO = {
  id: number;
  name: string;
  description: string;
  requesterName?: string | null;
  technologiesLabel: string;
  yearLabel: string;
  viewCountLabel: string;
  projectLink?: string | null;
  photo: string;
};

export async function getProjects(): Promise<ProjectCardDTO[]> {
  noStore();

  const rows = await prisma.project.findMany({
    where: { isActive: true },
    orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
  });

  return rows.map((p) => {
    const photos = Array.isArray(p.photos) ? (p.photos as string[]) : [];
    const techs = Array.isArray(p.technologies) ? (p.technologies as string[]) : [];

    type MaybeRequester = { requesterName?: string | null };
    const rn = (p as MaybeRequester).requesterName;
    const requesterName = typeof rn === 'string' || rn === null ? rn : null;

    return {
      id: p.id,
      name: p.name,
      description: p.description,
      requesterName,
      technologiesLabel: techs.join(' | '),
      yearLabel: String(p.year),
      viewCountLabel: String(p.viewCount ?? 0),
      projectLink: p.projectLink ?? null,
      photo: photos[0] || '/images/placeholders/project.png',
    };
  });
}
