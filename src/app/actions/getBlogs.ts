'use server';

import { prisma } from '@/libs/prisma';
import { BlogPost, GetBlogsParams } from '@/types/BlogsType';
import { Prisma } from '@prisma/client';

/**
 * Paginated blog list for the client-side "load more" button.
 *
 * Server-rendered reads use the cached helpers in `getPublicBlogs.ts` instead —
 * actions are never cached, so awaiting one during render makes the page
 * dynamic.
 */
export async function getBlogs(params?: GetBlogsParams) {
  try {
    const { limit = 6, skip = 0 } = params || {};

    const where: Prisma.BlogsWhereInput = {
      published: true,
    };

    const [blogs, totalCount] = await Promise.all([
      prisma.blogs.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        take: limit,
        skip,
      }),
      prisma.blogs.count({ where }),
    ]);

    // Convert to BlogPost type with proper type casting
    const formattedBlogs: BlogPost[] = blogs.map((blog) => ({
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
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    }));

    return {
      blogs: formattedBlogs,
      totalCount,
      hasMore: skip + blogs.length < totalCount,
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [],
      totalCount: 0,
      hasMore: false,
    };
  }
}
