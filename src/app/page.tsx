// Next Imports
import type { Metadata } from 'next';

// Components
import LandingPageWrapper from '@/views/global/home/HomePage';

// Actions
import { getProjects } from '@/app/actions/getProjects';
import { getPublicSocialMedia } from '@/app/actions/getPublicSocialMedia';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

export const metadata: Metadata = {
  title: {
    absolute: 'فراایده | صفحه اصلی',
  },
  description:
    'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام ارائه می‌دهد.',
  openGraph: {
    title: 'فراایده | تیم توسعه نرم‌افزار و استارتاپی',
    description:
      'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام ارائه می‌دهد.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
};

/**
 * Rendered on the server without a page-level `<Suspense>` fallback.
 *
 * The previous version wrapped the whole page in `<Suspense fallback={<WifiLoader />}>`
 * and read the data with `use()`, so the first HTML byte a crawler (or a user on
 * a slow connection) received was a loading spinner instead of the hero — bad
 * for LCP and for indexing. Both reads are cached, so this awaits nothing on a
 * warm cache and the page can be prerendered.
 */
const LandingPage = async () => {
  const [rows, socialMedia] = await Promise.all([getProjects(), getPublicSocialMedia()]);

  const projects: ProjectsType[] = rows.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    requesterName: p.requesterName ?? undefined,
    technologies: p.technologies,
    year: p.year,
    viewCount: p.viewCount,
    projectLink: p.projectLink ?? undefined,
    photo: p.photo,
    category: p.category,
  }));

  return <LandingPageWrapper projects={projects} socialMedia={socialMedia} />;
};

export default LandingPage;
