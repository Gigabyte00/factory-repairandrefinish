// Repair & Refinish — Resend email client with drip campaign
// Fire-and-forget pattern: email failures never block API responses

import { Resend } from 'resend';
import { siteConfig } from './site-config';
import {
  welcomeEmailTemplate,
  drip2Template,
  drip3Template,
  drip4Template,
  drip5Template,
} from './email-templates';

// ─── Resend Client ──────────────────────────────────────────

let resend: Resend | null = null;

function getResend(): Resend | null {
  if (resend) return resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log('[email] RESEND_API_KEY not configured — emails disabled');
    return null;
  }
  resend = new Resend(key);
  return resend;
}

function getFromEmail(): string {
  if (process.env.SENDER_EMAIL) return process.env.SENDER_EMAIL;
  return `${siteConfig.name} <onboarding@resend.dev>`;
}

async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  const client = getResend();
  if (!client) return false;

  try {
    const { error } = await client.emails.send({
      from: getFromEmail(),
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    });
    if (error) {
      console.error('[email] Send failed:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('[email] Unexpected error:', err);
    return false;
  }
}

// ─── Welcome Email ──────────────────────────────────────────

/**
 * Send the welcome email immediately on newsletter signup.
 * Fire-and-forget — does not await or throw.
 */
export function sendNewsletterWelcome(email: string, name?: string): void {
  const { subject, html } = welcomeEmailTemplate(email, name);
  sendEmail({ to: email, subject, html });
}

// ─── Drip Campaign ──────────────────────────────────────────

/**
 * Drip schedule:
 *   Step 1 (Day 3):  5 Home Repairs Every Homeowner Should Know
 *   Step 2 (Day 7):  The Tools That Make Every Repair Easier
 *   Step 3 (Day 14): Seasonal Home Maintenance Checklist
 *   Step 4 (Day 21): From Repair to Refinish
 *
 * Returns true if sent, false if skipped or failed.
 */
export async function sendDripEmail(email: string, dripStep: number): Promise<boolean> {
  const client = getResend();
  if (!client) return false;

  let subject: string;
  let html: string;

  switch (dripStep) {
    case 1: {
      const result = drip2Template(email);
      subject = result.subject;
      html = result.html;
      break;
    }
    case 2: {
      const result = drip3Template(email);
      subject = result.subject;
      html = result.html;
      break;
    }
    case 3: {
      const result = drip4Template(email);
      subject = result.subject;
      html = result.html;
      break;
    }
    case 4: {
      const result = drip5Template(email);
      subject = result.subject;
      html = result.html;
      break;
    }
    default:
      console.log(`[email] Unknown drip step ${dripStep} — skipping`);
      return false;
  }

  try {
    const { error } = await client.emails.send({
      from: getFromEmail(),
      to: email,
      subject,
      html,
    });
    if (error) {
      console.error(`[email] Drip step ${dripStep} failed:`, error);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[email] Drip step ${dripStep} error:`, err);
    return false;
  }
}
