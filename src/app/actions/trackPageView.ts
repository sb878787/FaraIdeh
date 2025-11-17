'use server';

import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';

/**
 * ثبت بازدید جدید بر اساس IP
 * برای جلوگیری از ثبت تکراری، چک می‌کنیم که آیا این IP در 24 ساعت گذشته بازدید داشته یا نه
 */
export async function trackPageView(): Promise<{ success: boolean }> {
  try {
    const headersList = await headers();

    // دریافت IP از headers
    const forwarded = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const ipAddress = forwarded?.split(',')[0] || realIp || 'unknown';

    // دریافت User Agent
    const userAgent = headersList.get('user-agent') || 'unknown';

    // چک کردن اینکه آیا این IP در 24 ساعت گذشته بازدید داشته
    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);

    const recentVisit = await prisma.pageView.findFirst({
      where: {
        ipAddress,
        visitedAt: {
          gte: oneDayAgo,
        },
      },
    });

    // اگر بازدید تکراری نبود، ثبت کن
    if (!recentVisit) {
      await prisma.pageView.create({
        data: {
          ipAddress,
          userAgent,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error tracking page view:', error);
    return { success: false };
  }
}

/**
 * دریافت تعداد کل بازدیدهای یونیک
 */
export async function getTotalPageViews(): Promise<number> {
  try {
    // شمارش بازدیدهای یونیک بر اساس IP و تاریخ
    // هر IP در هر روز فقط یک بار شمرده می‌شه
    const uniqueViews = await prisma.pageView.groupBy({
      by: ['ipAddress'],
      _count: {
        id: true,
      },
    });

    return uniqueViews.length;
  } catch (error) {
    console.error('Error getting total page views:', error);
    return 0;
  }
}

/**
 * دریافت آمار بازدید برای بازه زمانی خاص
 */
export async function getPageViewsStats(days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const views = await prisma.pageView.count({
      where: {
        visitedAt: {
          gte: startDate,
        },
      },
    });

    // بازدیدهای یونیک در این بازه
    const uniqueViews = await prisma.pageView.groupBy({
      by: ['ipAddress'],
      where: {
        visitedAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
    });

    return {
      total: views,
      unique: uniqueViews.length,
    };
  } catch (error) {
    console.error('Error getting page views stats:', error);
    return { total: 0, unique: 0 };
  }
}
