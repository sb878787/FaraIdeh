import { getPublicSocialMedia } from '@/app/actions/getPublicSocialMedia';
import { SocialMediaProvider } from '@/context/SocialMediaContext';

export default async function GlobalLayout({ children }: { children: React.ReactNode }) {
  const socialMedia = await getPublicSocialMedia();

  return <SocialMediaProvider socialMedia={socialMedia}>{children}</SocialMediaProvider>;
}
