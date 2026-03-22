'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/toast';
import {
  Mail,
  CheckCircle2,
  Loader2,
  Wrench,
  BookOpen,
  DollarSign,
  Shield,
} from 'lucide-react';
import { categories } from '@/lib/categories-data';
import { trackNewsletterSignup, trackEmailCapture } from '@/lib/analytics';

interface EmailCaptureFormProps {
  variant?: 'inline' | 'modal' | 'banner';
  headline?: string;
  showName?: boolean;
  showInterests?: boolean;
  className?: string;
}

const benefits = [
  { icon: Wrench, text: 'Step-by-step repair guides' },
  { icon: BookOpen, text: 'Weekly DIY tips & tricks' },
  { icon: DollarSign, text: 'Exclusive tool deals' },
  { icon: Shield, text: 'No spam, unsubscribe anytime' },
];

export function EmailCaptureForm({
  variant = 'inline',
  headline = 'Get Your Free Home Repair Toolkit',
  showName = false,
  showInterests = false,
  className,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccess(true);
      trackNewsletterSignup(variant, email);
      trackEmailCapture(variant === 'banner' ? 'inline' : variant === 'modal' ? 'exit-intent' : 'inline');
      toast({
        title: 'You\'re in!',
        description: 'Check your inbox for your free repair toolkit.',
        variant: 'success',
      });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function toggleInterest(categorySlug: string) {
    setInterests((prev) =>
      prev.includes(categorySlug)
        ? prev.filter((s) => s !== categorySlug)
        : [...prev, categorySlug]
    );
  }

  // Success state
  if (success) {
    return (
      <div
        className={cn(
          'rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center',
          className
        )}
      >
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
        <h3 className="font-heading text-lg font-bold text-emerald-800 mb-2">
          Welcome aboard!
        </h3>
        <p className="text-sm text-emerald-700">
          Check your inbox for your free Home Repair Toolkit. We&apos;ll send weekly tips to help you fix it right and make it beautiful.
        </p>
      </div>
    );
  }

  // Banner variant - compact horizontal
  if (variant === 'banner') {
    return (
      <div className={cn('rounded-xl bg-primary p-5', className)}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="font-heading text-base font-bold text-white">
              {headline}
            </h3>
            <p className="text-xs text-primary-foreground/70 mt-0.5">
              Join 10,000+ DIYers getting weekly repair tips
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-accent/50 flex-1 sm:w-60"
            />
            <Button
              type="submit"
              variant="accent"
              size="md"
              disabled={loading}
              className="shrink-0"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
        </form>
        {error && (
          <p className="mt-2 text-xs text-red-300 text-center sm:text-right">{error}</p>
        )}
      </div>
    );
  }

  // Modal / Inline variant
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card overflow-hidden',
        variant === 'modal' ? 'p-0' : 'p-6',
        className
      )}
    >
      {variant === 'modal' && (
        <div className="bg-gradient-to-r from-primary to-primary-600 p-6 text-center">
          <Mail className="mx-auto mb-2 h-10 w-10 text-white" />
          <h3 className="font-heading text-xl font-bold text-white">{headline}</h3>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Join 10,000+ homeowners improving their homes
          </p>
        </div>
      )}

      <div className={variant === 'modal' ? 'p-6' : ''}>
        {variant === 'inline' && (
          <>
            <h3 className="font-heading text-xl font-bold text-primary mb-2">
              {headline}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join 10,000+ homeowners getting weekly DIY tips.
            </p>
          </>
        )}

        {/* Benefits */}
        <div className="mb-5 grid grid-cols-2 gap-2">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2">
              <benefit.icon className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {showName && (
            <Input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Your email address"
            className="newsletter-input"
            required
          />

          {showInterests && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">
                What are you interested in?
              </p>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map((cat) => (
                  <label
                    key={cat.slug}
                    className="flex items-center gap-2 cursor-pointer text-xs"
                  >
                    <Checkbox
                      checked={interests.includes(cat.slug)}
                      onCheckedChange={() => toggleInterest(cat.slug)}
                    />
                    <span className="text-muted-foreground">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-destructive">{error}</p>
          )}

          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing up...
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                Get Free Toolkit
              </>
            )}
          </Button>

          <p className="text-center text-[10px] text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
}
