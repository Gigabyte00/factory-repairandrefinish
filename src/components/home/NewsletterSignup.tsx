'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';

interface NewsletterSignupProps {
  siteId: string;
  niche?: string | null;
  variant?: 'default' | 'minimal' | 'banner' | 'sticky';
}

/**
 * Newsletter signup form
 *
 * Features:
 * - Client-side form handling
 * - Supabase integration for email storage
 * - Success/error states
 * - Privacy note
 *
 * Requires 'use client' for form state
 */
export function NewsletterSignup({ siteId, niche, variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, site_id: siteId }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox for confirmation.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'minimal') {
    return <MinimalNewsletter email={email} setEmail={setEmail} status={status} onSubmit={handleSubmit} />;
  }

  if (variant === 'banner') {
    return <BannerNewsletter email={email} setEmail={setEmail} status={status} message={message} onSubmit={handleSubmit} niche={niche} />;
  }

  if (variant === 'sticky') {
    return <StickyNewsletter email={email} setEmail={setEmail} status={status} message={message} onSubmit={handleSubmit} niche={niche} />;
  }

  /**
   * Default variant — editorial card from Claude Design (handoff wJKENauckw0xoJWkBK8y_Q).
   * Adapted to share state with sibling minimal/banner/sticky variants.
   */
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background"
      aria-labelledby="newsletter-heading"
    >
      {/* Subtle radial dot grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-primary/15 bg-background/85 backdrop-blur-sm p-8 lg:p-12 shadow-xl shadow-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
            {/* LEFT — copy */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 ring-1 ring-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Newsletter
              </span>

              <h2
                id="newsletter-heading"
                className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
              >
                Stay in the Loop
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Get the latest {niche || 'product'} reviews, deals, and expert tips
                delivered straight to your inbox.
              </p>

              {/* Avatar stack + social proof */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  <span aria-hidden="true" className="w-5 h-5 rounded-full bg-primary/20 ring-2 ring-background" />
                  <span aria-hidden="true" className="w-5 h-5 rounded-full bg-primary/40 ring-2 ring-background" />
                  <span aria-hidden="true" className="w-5 h-5 rounded-full bg-primary/60 ring-2 ring-background" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Join readers who get the inside track first.
                </p>
              </div>
            </div>

            {/* RIGHT — form / success */}
            <div>
              {status === 'success' ? (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-lg bg-green-500/10 ring-1 ring-green-500/20 p-4 text-green-600"
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-sm font-medium leading-relaxed">
                    {message || "You're on the list. Check your inbox to confirm."}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={status === 'loading'}
                      aria-invalid={status === 'error'}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-shadow disabled:opacity-60"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                        Subscribe Free
                      </>
                    )}
                  </Button>

                  {status === 'error' && (
                    <div role="alert" className="flex items-start gap-2 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{message}</span>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    No spam. Unsubscribe anytime.{' '}
                    <a
                      href="/privacy"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Minimal variant - just the form inline
 */
function MinimalNewsletter({
  email,
  setEmail,
  status,
  onSubmit,
}: {
  email: string;
  setEmail: (value: string) => void;
  status: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-600 text-sm">
        <CheckCircle2 className="w-4 h-4" />
        <span>Subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-3 py-2 text-sm rounded border border-input bg-background"
        disabled={status === 'loading'}
      />
      <Button type="submit" size="sm" disabled={status === 'loading'}>
        {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Subscribe'}
      </Button>
    </form>
  );
}

/**
 * Sticky bottom bar — slides up after 60% page scroll, dismissable with a cookie
 */
function StickyNewsletter({
  email,
  setEmail,
  status,
  message,
  onSubmit,
  niche,
}: {
  email: string;
  setEmail: (value: string) => void;
  status: string;
  message: string;
  onSubmit: (e: React.FormEvent) => void;
  niche?: string | null;
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Respect previous dismissal stored in sessionStorage
    if (sessionStorage.getItem('newsletter_sticky_dismissed')) {
      setDismissed(true);
      return;
    }
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.6) setVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-dismiss 3 seconds after successful subscription
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => dismiss(), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('newsletter_sticky_dismissed', '1');
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-background/95 shadow-lg backdrop-blur-sm">
      <div className="container py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm font-semibold">
              Get the best {niche || 'product'} deals &amp; tips — free
            </span>
          </div>
          <div className="flex items-center gap-2">
            {status === 'success' ? (
              <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                {message || 'You\'re subscribed!'}
              </span>
            ) : (
              <form onSubmit={onSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-48 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={status === 'loading'}
                  required
                />
                <Button type="submit" size="sm" disabled={status === 'loading'}>
                  {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
                </Button>
              </form>
            )}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Banner variant - full-width strip
 */
function BannerNewsletter({
  email,
  setEmail,
  status,
  message,
  onSubmit,
  niche,
}: {
  email: string;
  setEmail: (value: string) => void;
  status: string;
  message: string;
  onSubmit: (e: React.FormEvent) => void;
  niche?: string | null;
}) {
  return (
    <div className="bg-primary text-primary-foreground py-4">
      <div className="container">
        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>{message}</span>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Get the best {niche || 'product'} deals weekly</span>
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-2 rounded text-foreground bg-background text-sm w-48"
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                variant="secondary"
                size="sm"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Subscribe'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
