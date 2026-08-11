/**
 * Simple in-memory rate limiter for login attempts.
 *
 * Designed for a single, long-running Node.js process (e.g. a
 * self-hosted server), where state can safely live in memory.
 * Not suitable for serverless/multi-instance deployments, since
 * each instance would have its own separate memory.
 */

const MAX_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

interface AttemptRecord {
  failedCount: number;
  lockedUntil: number | null; // timestamp in ms
}

const attempts = new Map<string, AttemptRecord>();

interface RateLimitResult {
  allowed: boolean;
  message?: string;
}

/** Checks whether a login attempt for the given identifier is currently allowed. */
export function checkRateLimit(identifier: string): RateLimitResult {
  const record = attempts.get(identifier);

  if (!record) {
    return { allowed: true };
  }

  if (record.lockedUntil && record.lockedUntil > Date.now()) {
    const minutesLeft = Math.ceil((record.lockedUntil - Date.now()) / (60 * 1000));
    return {
      allowed: false,
      message: `به دلیل تلاش‌های ناموفق زیاد، حساب موقتاً قفل شده است. لطفاً ${minutesLeft} دقیقه دیگر تلاش کنید!`,
    };
  }

  return { allowed: true };
}

/** Records a failed login attempt and locks the identifier if threshold is reached. */
export function recordFailedAttempt(identifier: string): void {
  const record = attempts.get(identifier) ?? { failedCount: 0, lockedUntil: null };

  const newCount = record.failedCount + 1;
  const shouldLock = newCount >= MAX_ATTEMPTS;

  attempts.set(identifier, {
    failedCount: newCount,
    lockedUntil: shouldLock ? Date.now() + LOCK_DURATION_MS : null,
  });
}

/** Clears the failed-attempt record after a successful login. */
export function clearFailedAttempts(identifier: string): void {
  attempts.delete(identifier);
}

/**
 * Simple in-memory sliding-window rate limiter for form submissions
 * (e.g. the order form), to prevent spam/bot abuse from a single IP.
 *
 * Same in-memory caveat as above: not suitable for serverless/multi-instance
 * deployments.
 */

const MAX_SUBMISSIONS = 3;
const SUBMISSION_WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface SubmissionRecord {
  timestamps: number[];
}

const submissions = new Map<string, SubmissionRecord>();

/** Checks whether a new form submission from the given identifier is currently allowed. */
export function checkSubmissionRateLimit(identifier: string): RateLimitResult {
  const record = submissions.get(identifier);
  const now = Date.now();

  if (!record) {
    return { allowed: true };
  }

  // Keep only timestamps within the current window
  const recentTimestamps = record.timestamps.filter((t) => now - t < SUBMISSION_WINDOW_MS);

  if (recentTimestamps.length >= MAX_SUBMISSIONS) {
    return {
      allowed: false,
      message: 'تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً کمی بعد دوباره تلاش کنید',
    };
  }

  return { allowed: true };
}

/** Records a new form submission timestamp for the given identifier. */
export function recordSubmission(identifier: string): void {
  const record = submissions.get(identifier) ?? { timestamps: [] };
  const now = Date.now();

  // Keep only timestamps within the current window before adding the new one
  const recentTimestamps = record.timestamps.filter((t) => now - t < SUBMISSION_WINDOW_MS);
  recentTimestamps.push(now);

  submissions.set(identifier, { timestamps: recentTimestamps });
}
