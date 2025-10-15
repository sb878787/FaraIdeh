'use server';

import { prisma } from '@/lib/prisma';
import type { Achievement } from '@prisma/client';

export type AchievementDTO = {
  id: number;
  photo: string;
  title: string;
  description: string;
  year: number;
};

export async function getAchievements(): Promise<AchievementDTO[]> {
  const rows: Achievement[] = await prisma.achievement.findMany({
    orderBy: [{ year: 'desc' }, { createdAt: 'desc' }],
  });

  return rows.map((a) => ({
    id: a.id,
    photo: a.photo,
    title: a.title,
    description: a.description,
    year: a.year,
  }));
}
