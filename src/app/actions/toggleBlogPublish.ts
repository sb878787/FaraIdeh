'use server';

import { prisma } from '@/libs/prisma';
import { revalidatePath, revalidateTag } from 'next/cache';

import { CACHE_TAGS } from '@/libs/cacheTags';

export async function toggleBlogPublish(
  blogId: number,
  currentStatus: boolean,
): Promise<{ success: boolean; message: string }> {
  try {
    await prisma.blogs.update({
      where: { id: blogId },
      data: { published: !currentStatus },
    });

    revalidateTag(CACHE_TAGS.blogs);
    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');

    return {
      success: true,
      message: !currentStatus ? 'وبلاگ منتشر شد' : 'وبلاگ غیرفعال شد',
    };
  } catch (error) {
    console.error('Error toggling blog publish status:', error);
    return {
      success: false,
      message: 'خطا در تغییر وضعیت وبلاگ',
    };
  }
}
