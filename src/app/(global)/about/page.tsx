// Components
import AboutPageWrapper from '@/views/global/about/_aboutpage';
import { prisma } from '@/lib/prisma';

const page = async () => {
  const slides = await prisma.slider.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
    select: { id: true, photo: true, caption: true },
  });

  return <AboutPageWrapper slides={slides} />;
};

export default page;
