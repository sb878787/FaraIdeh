/**
 * Tags shared between the cached public reads (`unstable_cache`) and the admin
 * server actions that invalidate them (`revalidateTag`).
 *
 * Kept in its own module so a `'use server'` action can import a tag without
 * pulling in a `server-only` data module.
 */
export const CACHE_TAGS = {
  projects: 'projects',
  socialMedia: 'social-media',
  blogs: 'blogs',
} as const;
