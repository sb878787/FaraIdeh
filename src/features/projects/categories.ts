export const PROJECT_CATEGORIES = {
  all: 'all',
  website: 'website',
  application: 'application',
  instagram: 'instagram',
  uiux: 'uiux',
  content: 'content',
} as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];

export const categoryLabels: Record<ProjectCategory, string> = {
  all: 'همه کار‌ها',
  website: 'طراحی سایت',
  application: 'طراحی اپلیکیشن',
  instagram: 'مدیریت صفحه اینستاگرام',
  uiux: 'طراحی UI, UX',
  content: 'مدیریت محتوا',
};
