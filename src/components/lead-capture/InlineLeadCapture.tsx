'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { trackNewsletterSignup, trackEmailCapture } from '@/lib/analytics';

interface InlineLeadCaptureProps {
  className?: string;
}

export function InlineLeadCapture({ className }: InlineLeadCaptureProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      trackNewsletterSignup('inline', email);
      trackEmailCapture('inline');
      toast({
        title: 'Subscribed!',
        description: 'You\'ll get our best repair tips weekly.',
        variant: 'success',
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        className={cn(
          'my-8 rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 text-center',
          className
        )}
      >
        <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-emerald-600" />
        <p className="text-sm font-medium text-emerald-800">
          Thanks for subscribing! Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'my-8 rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 p-5',
        className
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <Sparkles className="h-5 w-5 shrink-0 text-accent mt-0.5" />
        <div>
          <h3 className="font-heading text-base font-bold text-foreground">
            Enjoying this guide?
          </h3>
          <p className="text-sm text-muted-foreground">
            Get weekly tips, tool deals, and new repair guides in your inbox.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="flex-1 newsletter-input"
          required
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
      </form>

      <p className="mt-2 text-[10px] text-muted-foreground text-center">
        Free forever. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
