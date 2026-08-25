'use server';

import { prisma } from '@/libs/prisma';
import { CreateBlogInput } from '@/types/BlogsType';
import { revalidatePath, revalidateTag } from 'next/cache';

import { CACHE_TAGS } from '@/libs/cacheTags';

export async function createBlog(data: CreateBlogInput) {
  try {
    // Check if slug already exists
    const existingBlog = await prisma.blogs.findUnique({
      where: { slug: data.slug },
    });

    if (existingBlog) {
      return {
        success: false,
        message: 'این Slug قبلاً استفاده شده است. لطفاً یک Slug دیگر انتخاب کنید.',
      };
    }

    // Create new blog
    const blog = await prisma.blogs.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        contentType: 'markdown',
        published: false, // Default: unpublished
        category: data.category,
        author: data.author,
        featuredImage: data.featuredImage,
        readingTimeMinutes: data.readingTimeMinutes,
        labels: data.labels, // Prisma automatically converts to JSON
        views: 0,
      },
    });

    // Revalidate related pages
    revalidateTag(CACHE_TAGS.blogs);
    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');

    return {
      success: true,
      message: 'بلاگ با موفقیت ایجاد شد!',
      data: blog,
    };
  } catch (error) {
    console.error('Error creating blog:', error);
    return {
      success: false,
      message: 'خطایی در ایجاد بلاگ رخ داد. لطفاً دوباره تلاش کنید.',
    };
  }
}
