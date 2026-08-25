import 'server-only';

import { unstable_cache } from 'next/cache';

import { CACHE_TAGS } from '@/libs/cacheTags';
import { prisma } from '@/libs/prisma';
import type { SocialMediaData } from '@/types/SocialMediaType';

const EMPTY_SOCIAL_MEDIA: SocialMediaData = {
  githubLink: '',
  linkedinLink: '',
  instagramLink: '',
  telegramLink: '',
};

/**
 * Read-only, cached counterpart of the `getSocialMedia` server action.
 *
 * The action creates the row when it is missing, which makes it a write and so
 * uncacheable — awaiting it in `(global)/layout.tsx` forced every public page to
 * render dynamically. This variant only reads, so the public pages can be
 * prerendered; `updateSocialMedia` invalidates the tag.
 *
 * The action is still the right call from the admin panel, where the row has to
 * exist before it can be edited.
 */
export const getPublicSocialMedia = unstable_cache(
  async (): Promise<SocialMediaData> => {
    const row = await prisma.socialMedia.findFirst({
      select: {
        githubLink: true,
        linkedinLink: true,
        instagramLink: true,
        telegramLink: true,
      },
    });

    return row ?? EMPTY_SOCIAL_MEDIA;
  },
  ['public-social-media'],
  { tags: [CACHE_TAGS.socialMedia], revalidate: 3600 },
);
