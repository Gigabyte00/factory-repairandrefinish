// Repair & Refinish — branded HTML email templates
// Deep blue/orange theme with table-based responsive layout (Dubai Chocolate standard)

import { siteConfig } from './site-config';
import { createHmac } from 'crypto';

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── Design Tokens ──────────────────────────────────────────
const COLORS = {
  bgOuter: '#F5F0EB',
  headerBg: '#1E3A5F',
  headerAccent: '#E8712B',
  cardBg: '#FFFFFF',
  ctaBg: '#E8712B',
  ctaText: '#FFFFFF',
  bodyText: '#1a1a1a',
  mutedText: '#57534E',
  lightText: '#78716C',
  divider: '#E7E5E4',
  cardBorder: '#E7E5E4',
  footerBg: '#1E3A5F',
  footerText: '#E8712B',
  linkColor: '#1E3A5F',
};

function getDomain(): string {
  return siteConfig.domain || 'repairandrefinish.com';
}

export function generateUnsubscribeToken(email: string): string {
  const secret = process.env.UNSUBSCRIBE_SECRET || process.env.RESEND_API_KEY || 'fallback-secret';
  return createHmac('sha256', secret).update(email.toLowerCase()).digest('hex');
}

export function getUnsubscribeUrl(email: string): string {
  const domain = getDomain();
  const token = generateUnsubscribeToken(email);
  return `https://${domain}/api/unsubscribe?token=${token}&email=${encodeURIComponent(email)}`;
}

// ─── Shared Layout ──────────────────────────────────────────

function layout(title: string, preheader: string, body: string, email?: string): string {
  const domain = getDomain();
  const year = new Date().getFullYear();
  const unsubUrl = email ? getUnsubscribeUrl(email) : `https://${domain}/api/unsubscribe?token={{unsubscribe_token}}&email={{email}}`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>${escapeHtml(title)}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
    table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}
    img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:none;text-decoration:none}
    body{margin:0;padding:0;width:100%!important;height:100%!important}
    @media only screen and (max-width:620px){
      .container{width:100%!important;padding:0 12px!important}
      .content-cell{padding:24px 16px!important}
      .guide-card{display:block!important;width:100%!important}
      .guide-card td{display:block!important;width:100%!important}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.bgOuter};font-family:'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <!-- Preheader text (hidden) -->
  <div style="display:none;font-size:1px;color:${COLORS.bgOuter};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${escapeHtml(preheader)}
    ${'&#847; &zwnj; &nbsp; '.repeat(30)}
  </div>

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.bgOuter};">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- Container -->
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:${COLORS.headerBg};padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <span style="font-size:32px;line-height:1;">&#128295;</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:8px;">
                    <h1 style="margin:0;font-family:'Space Grotesk','Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;color:${COLORS.headerAccent};letter-spacing:0.5px;">Repair &amp; Refinish</h1>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:4px;">
                    <div style="width:60px;height:2px;background-color:${COLORS.headerAccent};margin:0 auto;"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="content-cell" style="background-color:${COLORS.cardBg};padding:32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${COLORS.footerBg};padding:28px 32px;border-radius:0 0 12px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <!-- Social Links -->
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:0 8px;">
                          <a href="https://youtube.com/@repairandrefinish" style="color:${COLORS.footerText};text-decoration:none;font-size:14px;font-family:'Inter','Segoe UI',sans-serif;">YouTube</a>
                        </td>
                        <td style="color:${COLORS.mutedText};font-size:14px;">&middot;</td>
                        <td style="padding:0 8px;">
                          <a href="https://instagram.com/repairandrefinish" style="color:${COLORS.footerText};text-decoration:none;font-size:14px;font-family:'Inter','Segoe UI',sans-serif;">Instagram</a>
                        </td>
                        <td style="color:${COLORS.mutedText};font-size:14px;">&middot;</td>
                        <td style="padding:0 8px;">
                          <a href="https://pinterest.com/repairandrefinish" style="color:${COLORS.footerText};text-decoration:none;font-size:14px;font-family:'Inter','Segoe UI',sans-serif;">Pinterest</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:16px;">
                    <div style="width:100%;height:1px;background-color:rgba(232,113,43,0.2);"></div>
                  </td>
                </tr>

                <!-- Copyright & Unsubscribe -->
                <tr>
                  <td align="center">
                    <p style="margin:0 0 8px;font-family:'Inter','Segoe UI',sans-serif;font-size:12px;color:${COLORS.lightText};line-height:1.5;">
                      &copy; ${year} Repair &amp; Refinish &middot; All rights reserved.
                    </p>
                    <p style="margin:0 0 8px;font-family:'Inter','Segoe UI',sans-serif;font-size:12px;color:${COLORS.lightText};line-height:1.5;">
                      Repair &amp; Refinish | [City, State]
                    </p>
                    <p style="margin:0 0 8px;font-family:'Inter','Segoe UI',sans-serif;font-size:12px;color:${COLORS.lightText};line-height:1.5;">
                      You received this email because you signed up at
                      <a href="https://${domain}" style="color:${COLORS.footerText};text-decoration:underline;">${domain}</a>
                    </p>
                    <p style="margin:0;font-family:'Inter','Segoe UI',sans-serif;font-size:12px;line-height:1.5;">
                      <a href="${unsubUrl}" style="color:${COLORS.footerText};text-decoration:underline;">Unsubscribe</a>
                      &nbsp;&middot;&nbsp;
                      <a href="https://${domain}/privacy" style="color:${COLORS.lightText};text-decoration:underline;">Privacy Policy</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Container -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Helper: CTA Button ─────────────────────────────────────

function ctaButton(text: string, url: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
  <tr>
    <td align="center" style="background-color:${COLORS.ctaBg};border-radius:8px;">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:48px;v-text-anchor:middle;width:240px;" arcsize="17%" strokecolor="${COLORS.ctaBg}" fillcolor="${COLORS.ctaBg}">
      <w:anchorlock/>
      <center style="color:${COLORS.ctaText};font-family:Inter,sans-serif;font-size:15px;font-weight:bold;">${escapeHtml(text)}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-->
      <a href="${url}" style="display:inline-block;padding:14px 32px;font-family:'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:${COLORS.ctaText};text-decoration:none;letter-spacing:0.3px;">${escapeHtml(text)}</a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`;
}

// ─── Helper: Section Divider ─────────────────────────────────

function divider(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
  <tr>
    <td style="height:1px;background-color:${COLORS.divider};font-size:0;line-height:0;">&nbsp;</td>
  </tr>
</table>`;
}


// ═══════════════════════════════════════════════════════════════
// 1. WELCOME EMAIL
// ═══════════════════════════════════════════════════════════════

export function welcomeEmailTemplate(recipientEmail: string, recipientName?: string): { subject: string; html: string } {
  const domain = getDomain();
  const greeting = recipientName
    ? `Welcome, ${escapeHtml(recipientName)}!`
    : 'Welcome to Repair & Refinish!';

  const body = `
<!-- Greeting -->
<h2 style="margin:0 0 16px;font-family:'Space Grotesk','Inter','Segoe UI',sans-serif;font-size:22px;font-weight:700;color:${COLORS.bodyText};">${greeting}</h2>

<p style="margin:0 0 20px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;">
  Welcome aboard! You've joined thousands of homeowners who are <strong>fixing it right and making it beautiful</strong>. We're here to give you the guides, tool picks, and pro tips you need to tackle any home project with confidence.
</p>

<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;">
  Every week, we'll send you:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
  <tr>
    <td style="padding:12px 16px;background-color:${COLORS.bgOuter};border-radius:8px;border-left:3px solid ${COLORS.ctaBg};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-bottom:10px;">
            <span style="font-size:16px;">&#128295;</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};font-weight:600;padding-left:6px;">Step-by-step repair guides</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};padding-left:4px;">&mdash; tested &amp; photographed</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:10px;">
            <span style="font-size:16px;">&#128161;</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};font-weight:600;padding-left:6px;">Pro tips &amp; cost estimates</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};padding-left:4px;">&mdash; so you know before you start</span>
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-size:16px;">&#9881;&#65039;</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};font-weight:600;padding-left:6px;">Tool recommendations</span>
            <span style="font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};padding-left:4px;">&mdash; the gear that actually matters</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

${divider()}

<!-- Featured Links -->
<h3 style="margin:0 0 16px;font-family:'Space Grotesk','Inter','Segoe UI',sans-serif;font-size:18px;font-weight:700;color:${COLORS.bodyText};">Start Here</h3>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
  <!-- Link 1 -->
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${COLORS.divider};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="36" valign="top" style="padding-right:12px;">
            <span style="display:inline-block;width:28px;height:28px;background-color:${COLORS.ctaBg};border-radius:50%;text-align:center;line-height:28px;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:${COLORS.ctaText};">1</span>
          </td>
          <td>
            <a href="https://${domain}/guides" style="font-family:'Inter','Segoe UI',sans-serif;font-size:15px;font-weight:600;color:${COLORS.bodyText};text-decoration:none;">Browse Repair Guides</a>
            <p style="margin:4px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.mutedText};line-height:1.5;">50+ step-by-step guides for every skill level.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- Link 2 -->
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${COLORS.divider};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="36" valign="top" style="padding-right:12px;">
            <span style="display:inline-block;width:28px;height:28px;background-color:${COLORS.ctaBg};border-radius:50%;text-align:center;line-height:28px;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:${COLORS.ctaText};">2</span>
          </td>
          <td>
            <a href="https://${domain}/categories" style="font-family:'Inter','Segoe UI',sans-serif;font-size:15px;font-weight:600;color:${COLORS.bodyText};text-decoration:none;">Shop Recommended Tools</a>
            <p style="margin:4px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.mutedText};line-height:1.5;">Our team's top tool picks from Home Depot, Lowe's, and Amazon.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- Link 3 -->
  <tr>
    <td style="padding:12px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="36" valign="top" style="padding-right:12px;">
            <span style="display:inline-block;width:28px;height:28px;background-color:${COLORS.ctaBg};border-radius:50%;text-align:center;line-height:28px;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:${COLORS.ctaText};">3</span>
          </td>
          <td>
            <a href="https://${domain}/guides?difficulty=beginner" style="font-family:'Inter','Segoe UI',sans-serif;font-size:15px;font-weight:600;color:${COLORS.bodyText};text-decoration:none;">Start With a Beginner Project</a>
            <p style="margin:4px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.mutedText};line-height:1.5;">Never repaired anything? Start here &mdash; easy wins that build confidence.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<!-- CTA -->
${ctaButton('Explore Our Guides', `https://${domain}/guides`)}

<p style="margin:24px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.lightText};line-height:1.6;text-align:center;">
  Happy fixing,<br>
  <strong style="color:${COLORS.bodyText};">The Repair &amp; Refinish Team</strong>
</p>
`;

  return {
    subject: 'Welcome to Repair & Refinish \u{1F6E0}\u{FE0F}',
    html: layout(
      'Welcome to Repair & Refinish',
      'Your home repair journey starts here. Expert guides, tool recommendations, and pro tips delivered weekly.',
      body,
      recipientEmail
    ),
  };
}


// ═══════════════════════════════════════════════════════════════
// 2. DRIP #2 (Day 3): 5 Home Repairs Every Homeowner Should Know
// ═══════════════════════════════════════════════════════════════

export function drip2Template(recipientEmail: string): { subject: string; html: string } {
  const domain = getDomain();

  const repairs = [
    { title: 'Fix a Running Toilet', savings: 'Save $150+', slug: 'fix-running-toilet', desc: 'The #1 water-waster in your home. A $10 flapper valve and 15 minutes is all it takes.' },
    { title: 'Patch Drywall Like a Pro', savings: '', slug: 'patch-repair-drywall', desc: 'From nail holes to fist-sized dents &mdash; the same technique contractors charge $200+ for.' },
    { title: 'Unclog Any Drain', savings: '', slug: 'unclog-kitchen-sink', desc: 'Skip the $300 plumber call. A plunger, snake, and the right technique handle 90% of clogs.' },
    { title: 'Replace a Light Switch', savings: '', slug: 'replace-light-switch', desc: 'A 20-minute fix that makes a room feel brand new. Yes, you can do electrical &mdash; safely.' },
    { title: 'Weather-Strip Doors &amp; Windows', savings: '', slug: 'weather-strip-door', desc: 'Cut your heating bill by 10&ndash;15% with $20 in materials and one afternoon.' },
  ];

  const repairRows = repairs.map((repair, i) => `
  <tr>
    <td style="padding:14px 0;${i < repairs.length - 1 ? `border-bottom:1px solid ${COLORS.divider};` : ''}">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="36" valign="top" style="padding-right:12px;">
            <span style="display:inline-block;width:28px;height:28px;background-color:${COLORS.ctaBg};border-radius:50%;text-align:center;line-height:28px;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:${COLORS.ctaText};">${i + 1}</span>
          </td>
          <td>
            <a href="https://${domain}/guides/${repair.slug}" style="font-family:'Space Grotesk','Inter',sans-serif;font-size:15px;font-weight:600;color:${COLORS.bodyText};text-decoration:none;">${repair.title}${repair.savings ? ` <span style="color:${COLORS.ctaBg};">(${repair.savings})</span>` : ''}</a>
            <p style="margin:4px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.mutedText};line-height:1.5;">${repair.desc}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`).join('\n');

  const body = `
<!-- Intro -->
<h2 style="margin:0 0 8px;font-family:'Space Grotesk','Inter',sans-serif;font-size:22px;font-weight:700;color:${COLORS.bodyText};">5 Home Repairs Every Homeowner Should Know</h2>
<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.mutedText};line-height:1.7;">
  Master these essential fixes and save hundreds in contractor fees. Each one takes under an hour and requires basic tools you probably already own.
</p>

<!-- Repair List -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
${repairRows}
</table>

${divider()}

<!-- CTA -->
<p style="margin:0 0 16px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;text-align:center;">
  Ready for more? We have 50+ guides covering every room in your home.
</p>

${ctaButton('See All 50+ Guides', `https://${domain}/guides`)}
`;

  return {
    subject: '5 Home Repairs Every Homeowner Should Know',
    html: layout(
      '5 Home Repairs Every Homeowner Should Know',
      'Master these essential fixes and save hundreds in contractor fees.',
      body,
      recipientEmail
    ),
  };
}


// ═══════════════════════════════════════════════════════════════
// 3. DRIP #3 (Day 7): The Tools That Make Every Repair Easier
// ═══════════════════════════════════════════════════════════════

export function drip3Template(recipientEmail: string): { subject: string; html: string } {
  const domain = getDomain();

  const tools = [
    { name: 'Power Drill', desc: 'Every homeowner needs one. From hanging shelves to assembling furniture, a cordless drill is the single most-used tool in any home workshop.', emoji: '&#128296;' },
    { name: 'Stud Finder', desc: 'Never miss a stud again. Hang TVs, shelves, and heavy mirrors with confidence. The difference between a secure mount and a hole in your wall.', emoji: '&#128269;' },
    { name: 'Multibit Screwdriver', desc: 'One tool, 20 bits. Phillips, flathead, Torx, hex &mdash; this replaces an entire drawer of screwdrivers for under $15.', emoji: '&#128736;' },
  ];

  const toolRows = tools.map((tool, i) => `
  <tr>
    <td style="padding:16px 0;${i < tools.length - 1 ? `border-bottom:1px solid ${COLORS.divider};` : ''}">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="36" valign="top" style="padding-right:12px;">
            <span style="font-size:24px;line-height:1;">${tool.emoji}</span>
          </td>
          <td>
            <h3 style="margin:0 0 4px;font-family:'Space Grotesk','Inter',sans-serif;font-size:16px;font-weight:700;color:${COLORS.bodyText};">${tool.name}</h3>
            <p style="margin:0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};line-height:1.6;">${tool.desc}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`).join('\n');

  const body = `
<!-- Header Badge -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;">
  <tr>
    <td align="center">
      <span style="display:inline-block;padding:6px 16px;background-color:${COLORS.bgOuter};border:1px solid ${COLORS.ctaBg};border-radius:20px;font-family:'Inter',sans-serif;font-size:12px;font-weight:700;color:${COLORS.ctaBg};text-transform:uppercase;letter-spacing:1px;">Tool Guide</span>
    </td>
  </tr>
</table>

<h2 style="margin:0 0 8px;font-family:'Space Grotesk','Inter',sans-serif;font-size:22px;font-weight:700;color:${COLORS.bodyText};text-align:center;">The Tools That Make<br>Every Repair Easier</h2>
<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};text-align:center;line-height:1.6;">
  Our team's top picks from Home Depot, Lowe's, and Amazon.
</p>

<!-- Tool List -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
${toolRows}
</table>

${divider()}

<!-- Pro Tip -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
  <tr>
    <td style="padding:16px 20px;background-color:${COLORS.bgOuter};border-radius:8px;border-left:3px solid ${COLORS.ctaBg};">
      <p style="margin:0 0 4px;font-family:'Space Grotesk','Inter',sans-serif;font-size:14px;font-weight:700;color:${COLORS.ctaBg};">&#128161; Pro Tip</p>
      <p style="margin:0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
        Start with the basics. You don't need a $500 toolkit &mdash; a $100 starter set handles 80% of home repairs. Invest in quality where it counts (drill, tape measure, level) and fill in the rest as projects demand.
      </p>
    </td>
  </tr>
</table>

<!-- CTA -->
${ctaButton('Browse Our Tool Guides', `https://${domain}/categories`)}

<p style="margin:20px 0 0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.lightText};line-height:1.6;text-align:center;">
  <em>Affiliate disclosure: We may earn a small commission when you buy through our links, at no extra cost to you.</em>
</p>
`;

  return {
    subject: 'The Tools That Make Every Repair Easier',
    html: layout(
      'The Tools That Make Every Repair Easier',
      "Our team's top tool picks from Home Depot, Lowe's, and Amazon.",
      body,
      recipientEmail
    ),
  };
}


// ═══════════════════════════════════════════════════════════════
// 4. DRIP #4 (Day 14): Seasonal Home Maintenance Checklist
// ═══════════════════════════════════════════════════════════════

export function drip4Template(recipientEmail: string): { subject: string; html: string } {
  const domain = getDomain();

  const seasons = [
    { name: 'Spring', emoji: '&#127800;', tasks: ['Clean gutters &amp; downspouts', 'Inspect roof for winter damage', 'Service A/C before it gets hot', 'Power wash deck &amp; siding'] },
    { name: 'Summer', emoji: '&#9728;&#65039;', tasks: ['Seal driveway cracks', 'Paint exterior trim', 'Check irrigation system', 'Stain/seal deck wood'] },
    { name: 'Fall', emoji: '&#127810;', tasks: ['Weather-strip doors &amp; windows', 'Service furnace before winter', 'Clean dryer vents', 'Caulk around bathtubs &amp; sinks'] },
    { name: 'Winter', emoji: '&#10052;&#65039;', tasks: ['Insulate exposed pipes', 'Test smoke &amp; CO detectors', 'Reverse ceiling fan direction', 'Check for ice dam buildup'] },
  ];

  const seasonBlocks = seasons.map((season) => {
    const taskItems = season.tasks.map(t =>
      `<tr><td style="padding:4px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.5;"><strong style="color:${COLORS.ctaBg};">&#10003;</strong>&nbsp; ${t}</td></tr>`
    ).join('\n');

    return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;border:1px solid ${COLORS.cardBorder};border-radius:8px;overflow:hidden;">
  <tr>
    <td style="background-color:${COLORS.bgOuter};padding:12px 16px;">
      <h3 style="margin:0;font-family:'Space Grotesk','Inter',sans-serif;font-size:16px;font-weight:700;color:${COLORS.bodyText};">${season.emoji} ${season.name}</h3>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${taskItems}
      </table>
    </td>
  </tr>
</table>`;
  }).join('\n');

  const body = `
<!-- Intro -->
<h2 style="margin:0 0 8px;font-family:'Space Grotesk','Inter',sans-serif;font-size:22px;font-weight:700;color:${COLORS.bodyText};">Seasonal Home Maintenance Checklist</h2>
<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.mutedText};line-height:1.7;">
  The best repairs are the ones you never have to make. A little preventive maintenance each season keeps small issues from becoming big (expensive) problems.
</p>

<!-- Season Cards -->
${seasonBlocks}

${divider()}

<!-- CTA -->
<p style="margin:0 0 16px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;text-align:center;">
  Want the full interactive checklist with cost estimates and time requirements?
</p>

${ctaButton('Get the Full Checklist', `https://${domain}/guides`)}
`;

  return {
    subject: 'Seasonal Home Maintenance Checklist',
    html: layout(
      'Seasonal Home Maintenance Checklist',
      'The best repairs are the ones you never have to make. Quick seasonal tasks that prevent costly damage.',
      body,
      recipientEmail
    ),
  };
}


// ═══════════════════════════════════════════════════════════════
// 5. DRIP #5 (Day 21): From Repair to Refinish
// ═══════════════════════════════════════════════════════════════

export function drip5Template(recipientEmail: string): { subject: string; html: string } {
  const domain = getDomain();

  const body = `
<!-- Intro -->
<h2 style="margin:0 0 8px;font-family:'Space Grotesk','Inter',sans-serif;font-size:22px;font-weight:700;color:${COLORS.bodyText};text-align:center;">From Repair to Refinish</h2>
<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.mutedText};text-align:center;line-height:1.6;">
  Making your home beautiful
</p>

${divider()}

<p style="margin:0 0 20px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;">
  You've been fixing things around the house &mdash; and you're getting good at it. Now it's time to go from functional to <strong>beautiful</strong>.
</p>

<p style="margin:0 0 24px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.7;">
  The same skills that fix a leaky faucet can transform a room. Painting, flooring, cabinet updates &mdash; these are the projects that make your home feel like <em>yours</em>.
</p>

<!-- Refinish Projects -->
<h3 style="margin:0 0 16px;font-family:'Space Grotesk','Inter',sans-serif;font-size:18px;font-weight:700;color:${COLORS.bodyText};">High-Impact Refinish Projects</h3>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;border:1px solid ${COLORS.cardBorder};border-radius:8px;overflow:hidden;">
  <tr>
    <td style="background-color:${COLORS.headerBg};padding:16px 20px;">
      <h3 style="margin:0;font-family:'Space Grotesk','Inter',sans-serif;font-size:16px;font-weight:700;color:${COLORS.headerAccent};">Transform Any Room This Weekend</h3>
    </td>
  </tr>
  <tr>
    <td style="padding:20px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:8px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
            <strong style="color:${COLORS.ctaBg};">&#127912; Paint a room</strong> &mdash; The single biggest visual impact for under $100. One weekend, one room, totally different feel.
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
            <strong style="color:${COLORS.ctaBg};">&#129717; Refinish hardwood floors</strong> &mdash; Sand, stain, and seal. It's a big project, but nothing else adds this much value to a home.
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
            <strong style="color:${COLORS.ctaBg};">&#128682; Update cabinet hardware</strong> &mdash; New knobs and pulls for $50&ndash;$100 make a kitchen look 10 years newer. A screwdriver is all you need.
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
            <strong style="color:${COLORS.ctaBg};">&#128161; Upgrade light fixtures</strong> &mdash; Swap out builder-grade fixtures for something with personality. Same wiring, brand new vibe.
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:'Inter','Segoe UI',sans-serif;font-size:14px;color:${COLORS.bodyText};line-height:1.6;">
            <strong style="color:${COLORS.ctaBg};">&#128703; Install peel-and-stick backsplash</strong> &mdash; No mortar, no mess. A $60 upgrade that makes your kitchen or bathroom look custom.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<!-- Social Proof -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
  <tr>
    <td style="padding:16px 20px;background-color:${COLORS.bgOuter};border-radius:8px;border-left:3px solid ${COLORS.ctaBg};">
      <p style="margin:0 0 8px;font-family:'Inter','Segoe UI',sans-serif;font-size:15px;color:${COLORS.bodyText};line-height:1.6;font-style:italic;">
        "I started with fixing a running toilet. Three months later, I refinished my entire bathroom. These guides gave me the confidence to go from repair to refinish."
      </p>
      <p style="margin:0;font-family:'Inter','Segoe UI',sans-serif;font-size:13px;color:${COLORS.mutedText};font-weight:600;">
        &mdash; Marcus T., Weekend DIYer
      </p>
    </td>
  </tr>
</table>

<!-- CTA -->
${ctaButton('Browse Refinish Guides', `https://${domain}/guides`)}
`;

  return {
    subject: 'From Repair to Refinish: Making Your Home Beautiful',
    html: layout(
      'From Repair to Refinish: Making Your Home Beautiful',
      "You've been fixing things. Now it's time to make your home beautiful. Paint, flooring, cabinets — the projects that transform a room.",
      body,
      recipientEmail
    ),
  };
}
