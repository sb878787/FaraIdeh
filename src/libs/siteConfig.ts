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
