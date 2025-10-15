// Libs
import { prisma } from '@/lib/prisma';

// Actions
import { getTeamMembers } from '@/app/actions/getTeamMembers';
import { getAchievements } from '@/app/actions/getAchievements';

// Components
import AboutPageWrapper from '@/views/global/about/_aboutpage';

const AboutPage = async () => {
  const [slides, members, achievements] = await Promise.all([
    prisma.slider.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      select: { id: true, photo: true, caption: true },
    }),
    getTeamMembers(),
    getAchievements(),
  ]);

  return <AboutPageWrapper slides={slides} members={members} achievements={achievements} />;
};

export default AboutPage;
