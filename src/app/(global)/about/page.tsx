// Libs
import { prisma } from '@/lib/prisma';

// Actions
import { getTeamMembers } from '@/app/actions/getTeamMembers';

// Components
import AboutPageWrapper from '@/views/global/about/_aboutpage';

const AboutPage = async () => {
  const [slides, members] = await Promise.all([
    prisma.slider.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      select: { id: true, photo: true, caption: true },
    }),
    getTeamMembers(),
  ]);

  return <AboutPageWrapper slides={slides} members={members} />;
};

export default AboutPage;
