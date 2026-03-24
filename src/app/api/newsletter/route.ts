import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';
import { sendNewsletterWelcome } from '@/lib/email';

// Simple email validation regex
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubscribeBody {
  email?: string;
  name?: string;
  source?: string;
  website?: string; // honeypot field
}

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0].trim() || 'unknown';
    const { allowed } = rateLimit(ip, 3, 15 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': '900' } }
      );
    }

    const body: SubscribeBody = await request.json();

    // Honeypot check — bots fill hidden fields, humans don't
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validate email
    if (!body.email || !EMAIL_RE.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const email = body.email.toLowerCase().trim();

    // Store subscriber via Resend Contacts API
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const audienceId = process.env.RESEND_AUDIENCE_ID;

      if (audienceId) {
        try {
          await resend.contacts.create({
            email,
            firstName: body.name || '',
            audienceId,
            unsubscribed: false,
          });
        } catch (err) {
          // Contact may already exist — that's fine
          console.log('[newsletter] Contact create (may be duplicate):', err);
        }
      }
    }

    // Fire-and-forget welcome email
    sendNewsletterWelcome(email, body.name || undefined);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[newsletter] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
