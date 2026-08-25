import 'server-only';

import { unstable_cache } from 'next/cache';

import { CACHE_TAGS } from '@/libs/cacheTags';
import { prisma } from '@/libs/prisma';
import type { BlogPost, RelatedBlog } from '@/types/BlogsType';

/**
 * Cached, read-only blog queries for the public pages.
 *
 * The `'use server'` version in `getBlogs.ts` is a server *action*, and actions
 * are never cached — awaiting one during render forced `/blogs` and
 * `/blogs/[slug]` to be dynamic on every request. `getBlogs` stays an action
 * because the "load more" button calls it from the client; these variants exist
 * for the server render path.
 *
 * `createBlog` / `updateBlog` / `toggleBlogPublish` invalidate the `blogs` tag,
 * so publishing still shows up immediately.
 *
 * NOTE: `unstable_cache` round-trips its return value through JSON, so `Date`
 * columns come back as ISO strings. Each cached function below therefore returns
 * an explicitly serialized shape, and the exported wrapper revives the dates —
 * that keeps the `BlogPost` / `RelatedBlog` contracts (and every consumer of
 * `formatDate` and `toISOString`) unchanged.
 */

type Serialized<T, K extends keyof T> = Omit<T, K> & Record<K, string>;

type SerializedBlogPost = Serialized<BlogPost, 'createdAt' | 'updatedAt'>;
type SerializedRelatedBlog = Serialized<RelatedBlog, 'createdAt'>;

const toSerializedBlogPost = (blog: {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  contentType: string;
  published: boolean;
  category: string;
  author: string;
  featuredImage: string | null;
  readingTimeMinutes: number;
  labels: unknown;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}): SerializedBlogPost => ({
  id: blog.id,
  slug: blog.slug,
  title: blog.title,
  excerpt: blog.excerpt,
  content: blog.content,
  contentType: blog.contentType,
  published: blog.published,
  category: blog.category,
  author: blog.author,
  featuredImage: blog.featuredImage,
  readingTimeMinutes: blog.readingTimeMinutes,
  labels: typeof blog.labels === 'string' ? blog.labels : JSON.stringify(blog.labels),
  views: blog.views,
  createdAt: blog.createdAt.toISOString(),
  updatedAt: blog.updatedAt.toISOString(),
});

const reviveBlogPost = (blog: SerializedBlogPost): BlogPost => ({
  ...blog,
  createdAt: new Date(blog.createdAt),
  updatedAt: new Date(blog.updatedAt),
});

const reviveRelatedBlog = (blog: SerializedRelatedBlog): RelatedBlog => ({
  ...blog,
  createdAt: new Date(blog.createdAt),
});

const cachedPublishedBlogs = unstable_cache(
  async (limit: number) => {
    const where = { published: true };

    const [blogs, totalCount] = await Promise.all([
      prisma.blogs.findMany({ where, orderBy: { createdAt: 'desc' }, take: limit }),
      prisma.blogs.count({ where }),
    ]);

    return {
      blogs: blogs.map(toSerializedBlogPost),
      totalCount,
      hasMore: blogs.length < totalCount,
    };
  },
  ['published-blogs'],
  { tags: [CACHE_TAGS.blogs], revalidate: 3600 },
);

/** Published blogs, newest first — the initial server render of `/blogs`. */
export async function getPublishedBlogs(limit: number) {
  const { blogs, totalCount, hasMore } = await cachedPublishedBlogs(limit);

  return { blogs: blogs.map(reviveBlogPost), totalCount, hasMore };
}

/** Slugs of every published blog — used by `generateStaticParams`. */
export const getPublishedBlogSlugs = unstable_cache(
  async () => {
    const blogs = await prisma.blogs.findMany({
      where: { published: true },
      select: { slug: true },
      orderBy: { createdAt: 'desc' },
    });

    return blogs.map((blog) => blog.slug);
  },
  ['published-blog-slugs'],
  { tags: [CACHE_TAGS.blogs], revalidate: 3600 },
);

const cachedPublishedBlogBySlug = unstable_cache(
  async (slug: string): Promise<SerializedBlogPost | null> => {
    const blog = await prisma.blogs.findUnique({ where: { slug, published: true } });

    return blog ? toSerializedBlogPost(blog) : null;
  },
  ['published-blog-by-slug'],
  { tags: [CACHE_TAGS.blogs], revalidate: 3600 },
);

export async function getPublishedBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blog = await cachedPublishedBlogBySlug(slug);

  return blog ? reviveBlogPost(blog) : null;
}

const cachedPublishedRelatedBlogs = unstable_cache(
  async (
    category: string,
    currentSlug: string,
    limit: number,
  ): Promise<SerializedRelatedBlog[]> => {
    const blogs = await prisma.blogs.findMany({
      where: { category, slug: { not: currentSlug }, published: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        category: true,
        featuredImage: true,
        readingTimeMinutes: true,
        views: true,
        createdAt: true,
      },
    });

    return blogs.map((blog) => ({ ...blog, createdAt: blog.createdAt.toISOString() }));
  },
  ['published-related-blogs'],
  { tags: [CACHE_TAGS.blogs], revalidate: 3600 },
);

export async function getPublishedRelatedBlogs(
  category: string,
  currentSlug: string,
  limit = 3,
): Promise<RelatedBlog[]> {
  const blogs = await cachedPublishedRelatedBlogs(category, currentSlug, limit);

  return blogs.map(reviveRelatedBlog);
}
