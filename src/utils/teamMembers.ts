import { prisma } from '@/lib/prisma';

export async function getTeamMemberCount() {
  try {
    const count = await prisma.teamMember.count();
    return count;
  } catch (error) {
    console.error('Failed to fetch team member count:', error);
    return 0;
  }
}

export async function getTeamMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return members;
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return [];
  }
}
