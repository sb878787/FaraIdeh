'use server';

import { prisma } from '@/lib/prisma';
import { getTotalPageViews } from './trackPageView';
import { DashboardStats } from '@/types/DashboardStatsType';

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [teamMembers, projects, blogs, orders, contacts, totalViews] = await Promise.all([
      // تعداد اعضای تیم
      prisma.teamMember.count(),

      // تعداد پروژه‌های فعال
      prisma.project.count({
        where: { isActive: true },
      }),

      // تعداد بلاگ‌های منتشر شده
      prisma.blogs.count({
        where: { published: true },
      }),

      // تعداد سفارشات
      prisma.order.count(),

      // تعداد پیام‌های تماس (بازخوردها)
      prisma.contact.count(),

      // تعداد بازدیدهای یونیک سایت
      getTotalPageViews(),
    ]);

    return {
      totalViews,
      teamMembers,
      projects,
      blogs,
      orders,
      contacts,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalViews: 0,
      teamMembers: 0,
      projects: 0,
      blogs: 0,
      orders: 0,
      contacts: 0,
    };
  }
}
