import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Generate an HMAC token for unsubscribe link validation.
 * Token = HMAC-SHA256(email:siteId, UNSUBSCRIBE_SECRET), hex-encoded, first 32 chars.
 * Returns empty string if UNSUBSCRIBE_SECRET is not configured.
 */
export function createUnsubscribeToken(email: string, siteId: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  if (!secret) return '';
  return createHmac('sha256', secret)
    .update(`${email.toLowerCase()}:${siteId}`)
    .digest('hex')
    .slice(0, 32);
}

/**
 * Build the one-click unsubscribe URL used by the email footer link and the
 * List-Unsubscribe header. Includes the HMAC token when UNSUBSCRIBE_SECRET is set;
 * the /api/unsubscribe route also accepts token-less links (older mail), rate-limited.
 */
export function buildUnsubscribeUrl(email: string, siteId: string, domain: string): string {
  const token = createUnsubscribeToken(email, siteId);
  const params = new URLSearchParams({ email });
  if (token) params.set('token', token);
  return `https://${domain}/api/unsubscribe?${params.toString()}`;
}

/**
 * Verify a token using a constant-time comparison to prevent timing attacks.
 * Returns false if UNSUBSCRIBE_SECRET is not configured or the token is wrong.
 */
export function verifyUnsubscribeToken(email: string, siteId: string, token: string): boolean {
  const expected = createUnsubscribeToken(email, siteId);
  if (!expected || !token) return false;
  try {
    return timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(token, 'hex'));
  } catch {
    return false;
  }
}
