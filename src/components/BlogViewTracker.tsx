'use client';

import { useEffect } from 'react';

import { trackBlogView } from '@/app/actions/trackBlogViews';

/**
 * Records a blog view from the client, mirroring `PageViewTracker`.
 *
 * `trackBlogView` reads `headers()` to dedupe by IP, which rules out both
 * calling it during render (a DB write on the critical path, and it would opt
 * the page out of static rendering) and calling it from `after()` (Next.js
 * forbids `headers()` inside an `after` callback). Firing it from an effect
 * keeps `/blogs/[slug]` statically prerendered.
 */
export default function BlogViewTracker({ blogId }: { blogId: number }) {
  useEffect(() => {
    trackBlogView(blogId);
  }, [blogId]);

  return null;
}
