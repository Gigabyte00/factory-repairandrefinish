import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateUnsubscribeToken } from '@/lib/email-templates';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  // Validate presence
  if (!token || !email) {
    return new NextResponse(
      unsubscribePage('Invalid unsubscribe link', 'The link appears to be malformed. Please contact us if you need help.'),
      { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  // Validate HMAC token
  const expectedToken = generateUnsubscribeToken(email);
  if (token !== expectedToken) {
    return new NextResponse(
      unsubscribePage('Invalid unsubscribe link', 'This link is invalid or has expired. Please contact us if you need help.'),
      { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  // Unsubscribe via Resend Contacts API
  const resendKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (resendKey && audienceId) {
    try {
      const resend = new Resend(resendKey);
      // Find and update contact
      const { data: contacts } = await resend.contacts.list({ audienceId });
      const contact = contacts?.data?.find(
        (c: { email: string }) => c.email.toLowerCase() === email.toLowerCase()
      );
      if (contact) {
        await resend.contacts.update({
          id: contact.id,
          audienceId,
          unsubscribed: true,
        });
      }
    } catch (err) {
      console.error('[unsubscribe] Resend error:', err);
    }
  }

  return new NextResponse(
    unsubscribePage(
      "You've been unsubscribed",
      "Sorry to see you go! You won't receive any more emails from Repair & Refinish. If this was a mistake, you can re-subscribe on our website."
    ),
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

function unsubscribePage(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} — Repair &amp; Refinish</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; background: #F5F0EB; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
    .card { background: #fff; border-radius: 12px; padding: 48px 32px; max-width: 480px; width: 100%; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    h1 { font-size: 24px; font-weight: 700; color: #1E3A5F; margin-bottom: 16px; }
    p { font-size: 15px; color: #57534E; line-height: 1.6; margin-bottom: 24px; }
    a { display: inline-block; padding: 12px 24px; background: #E8712B; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
    a:hover { background: #C95D1E; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="https://repairandrefinish.com">Visit Repair &amp; Refinish</a>
  </div>
</body>
</html>`;
}
