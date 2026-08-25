import { MetadataRoute } from 'next';

import { SITE_URL } from '@/libs/siteConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // `/api/og` must stay crawlable: blog pages use it for their OG images.
        allow: ['/', '/api/og'],
        disallow: [
          '/admin/', // Admin Dashboard
          '/api/', // API routes
          '/login', // Login page
          // NOTE: never disallow `/_next/` — Google needs the CSS/JS chunks
          // under `/_next/static/*` to render pages.
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
