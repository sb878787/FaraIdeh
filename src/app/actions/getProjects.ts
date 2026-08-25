import { CACHE_TAGS } from '@/libs/cacheTags';
import { prisma } from '@/libs/prisma';
import { ProjectsType } from '@/types/ProjectsType';
import { Prisma } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import 'server-only';

/**
 * Fetch active projects with an optional category filter.
 * - When `category` is 'all' or undefined, the filter is ignored.
 * - Uses `select` to minimize payload.
 * - Ordered by `createdAt desc, id desc` for stable pagination if needed later.
 *
 * DB index recommendation (optional but good for performance):
 *   @@index([isActive, category, createdAt])
 */
async function fetchProjects(category?: string): Promise<ProjectsType[]> {
  // Strongly-typed where to satisfy ESLint rule: no-explicit-any
  const where: Prisma.ProjectWhereInput = {
    isActive: true,
    ...(category && category !== 'all' ? { category } : {}),
  };

  const rows = await prisma.project.findMany({
    where,
    orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
    select: {
      id: true,
      name: true,
      description: true,
      requesterName: true,
      technologies: true, // Json -> string[]
      year: true,
      viewCount: true,
      projectLink: true,
      photos: true, // Json -> string[]
      category: true,
    },
  });

  return rows.map((p) => {
    const photos = Array.isArray(p.photos) ? (p.photos as string[]) : [];
    const techs = Array.isArray(p.technologies) ? (p.technologies as string[]) : [];

    const rn = p.requesterName;
    const requesterName = typeof rn === 'string' || rn === null ? rn : null;

    return {
      id: p.id,
      name: p.name,
      description: p.description,
      requesterName,
      technologies: techs.join(' | '),
      year: String(p.year),
      viewCount: String(p.viewCount ?? 0),
      projectLink: p.projectLink ?? null,
      photo:
        photos[0] ||
        'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob',
      category: p.category,
    };
  });
}

/**
 * Cached public read. Previously this used `noStore()`, which forced `/` and
 * `/projects` to render dynamically on every request. The admin actions
 * (`createProject`, `updateProject`, `toggleProjectActive`) invalidate the
 * `projects` tag, so edits still show up immediately.
 *
 * `viewCount` therefore lags by up to `revalidate` seconds — `trackProjectView`
 * deliberately does not invalidate the tag, since a click must not undo the
 * cache for everyone else.
 */
export const getProjects = unstable_cache(fetchProjects, ['projects'], {
  tags: [CACHE_TAGS.projects],
  revalidate: 3600,
});
