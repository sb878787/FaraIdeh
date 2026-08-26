/**
 * Canonical public origin for the site, without a trailing slash.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project env vars for production.
 * `.env*` is gitignored, so the fallback keeps production correct even if the
 * variable is missing there.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fara-ideh.ir').replace(
  /\/+$/,
  '',
);

/** Build an absolute URL on the canonical origin. */
export const absoluteUrl = (path = '') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** The name Google should print above the search result. */
export const SITE_NAME = 'فراایده';

/**
 * Open Graph fields that have to be repeated on every page.
 *
 * Next.js replaces a parent `openGraph` object instead of merging it field by
 * field, so any page that declares its own `openGraph` silently drops
 * `og:site_name`, `og:type` and `og:locale` from the root layout. Spread this
 * into every page-level `openGraph`, and override `type` where it differs.
 */
export const OG_DEFAULTS = {
  type: 'website',
  locale: 'fa_IR',
  siteName: SITE_NAME,
} as const;
