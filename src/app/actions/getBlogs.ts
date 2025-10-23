'use server';

import { prisma } from '@/lib/prisma';
import { BlogPost, GetBlogsParams } from '@/types/BlogsType';
import { Prisma } from '@prisma/client';

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

export async function getBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blogs.findUnique({
      where: {
        slug,
        published: true,
      },
    });

    if (!blog) return null;

    // Convert to BlogPost type
    const formattedBlog: BlogPost = {
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
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    };

    return formattedBlog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}
