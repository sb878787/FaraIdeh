'use server';

import { prisma } from '@/lib/prisma';

export async function getInformationCounts() {
  try {
    const [teamMembers, projects, orders] = await Promise.all([
      prisma.teamMember.count(),
      prisma.project.count({
        where: {
          isActive: false, // Completed projects
        },
      }),
      prisma.order.count(),
    ]);

    return {
      teamMembers,
      projects,
      orders,
    };
  } catch (error) {
    console.error('Failed to fetch information counts:', error);
    return {
      teamMembers: 0,
      projects: 0,
      orders: 0,
    };
  }
}
