'use client';

import { useState } from 'react';
import { Mail, CheckCircle2, Loader2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InlineMagnet {
  slug: string;
  title: string;
  subline?: string;
  icon?: string;
  ctaText?: string;
}

interface InlineOptInProps {
  siteId: string;
  niche?: string | null;
  /** Optional lead magnet — when provided, the form shows the magnet offer
   *  instead of generic newsletter copy, and redirects to /free/[slug] on success. */
  magnet?: InlineMagnet | null;
}

/**
 * Compact inline newsletter opt-in for embedding within blog post content.
 * Renders as a subtle card between content sections.
 * When `magnet` is provided, shows site-specific lead magnet offer.
 */
export function InlineOptIn({ siteId, niche, magnet }: InlineOptInProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          site_id: siteId,
          source: magnet ? `inline_magnet_${magnet.slug}` : 'inline_newsletter',
        }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      if (magnet) {
        setStatus('success');
        // Redirect to the magnet download page
        setTimeout(() => {
          window.location.href = `/free/${magnet.slug}/download`;
        }, 900);
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="not-prose my-8 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium">
          {magnet
            ? "You're in! Redirecting to your free download…"
            : "You're in! Check your inbox for a welcome email."}
        </span>
      </div>
    );
  }

  // --- Magnet variant: site-specific offer ----------------------------------
  if (magnet) {
    const ctaText = magnet.ctaText || 'Get Free Download';
    return (
      <div className="not-prose my-8 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background px-5 py-5">
        <div className="flex items-start gap-4">
          {magnet.icon && (
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-2xl"
              aria-hidden="true"
            >
              {magnet.icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Free Download
            </p>
            <p className="text-base font-bold text-foreground leading-snug mb-1">
              {magnet.title}
            </p>
            {magnet.subline && (
              <p className="text-xs text-muted-foreground mb-3">{magnet.subline}</p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={status === 'loading'}
                required
              />
              <Button type="submit" size="sm" disabled={status === 'loading'} className="shrink-0">
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    {ctaText}
                  </>
                )}
              </Button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-xs text-red-500">Something went wrong — please try again.</p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              Instant download. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- Fallback: generic newsletter (unchanged) -----------------------------
  return (
    <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 px-5 py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <Mail className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            Free {niche || 'insider'} newsletter
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-1 gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={status === 'loading'}
            required
          />
          <Button type="submit" size="sm" disabled={status === 'loading'} className="shrink-0">
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500">Something went wrong — please try again.</p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
