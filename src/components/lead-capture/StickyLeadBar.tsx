'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { X, Mail, Loader2 } from 'lucide-react';
import { trackNewsletterSignup, trackEmailCapture } from '@/lib/analytics';

const DISMISS_KEY = 'rr-sticky-bar-dismissed';

interface StickyLeadBarProps {
  className?: string;
}

export function StickyLeadBar({ className }: StickyLeadBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed
    if (sessionStorage.getItem(DISMISS_KEY)) {
      setDismissed(true);
      return;
    }

    function handleScroll() {
      const scrollPct =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPct > 0.5);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, 'true');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      trackNewsletterSignup('sticky-bar', email);
      trackEmailCapture('sticky-bar');
      toast({
        title: 'Subscribed!',
        description: 'Welcome to our weekly repair tips.',
        variant: 'success',
      });
      setDismissed(true);
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

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={cn(
            'fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md shadow-xl',
            className
          )}
        >
          <div className="container-wide py-3">
            <div className="flex items-center gap-4">
              <Mail className="hidden sm:block h-5 w-5 shrink-0 text-accent" />

              <p className="hidden sm:block text-sm font-medium text-foreground shrink-0">
                Get weekly repair tips
              </p>
              <p className="sm:hidden text-xs font-medium text-foreground shrink-0">
                Weekly repair tips
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-1 items-center gap-2"
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for repair tips"
                  className="h-9 text-sm flex-1 min-w-0"
                  required
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="sm"
                  disabled={loading}
                  className="shrink-0"
                >
                  {loading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>

              <button
                onClick={handleDismiss}
                className="shrink-0 rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-warm-100 transition-colors cursor-pointer"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
