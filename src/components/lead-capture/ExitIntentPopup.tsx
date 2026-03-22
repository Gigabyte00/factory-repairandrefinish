'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EmailCaptureForm } from './EmailCaptureForm';
import { X } from 'lucide-react';
import { trackExitIntentShown, trackExitIntentDismissed } from '@/lib/analytics';

const STORAGE_KEY = 'rr-exit-intent-shown';

interface ExitIntentPopupProps {
  className?: string;
}

export function ExitIntentPopup({ className }: ExitIntentPopupProps) {
  const [open, setOpen] = useState(false);

  const show = useCallback(() => {
    // Only show once per session
    if (typeof window === 'undefined') return;
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) return;

    setOpen(true);
    sessionStorage.setItem(STORAGE_KEY, 'true');
    trackExitIntentShown();
  }, []);

  useEffect(() => {
    // Desktop: detect mouse leaving viewport
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        show();
      }
    }

    // Mobile: detect back button via popstate
    function handlePopState() {
      show();
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [show]);

  function handleClose() {
    setOpen(false);
    trackExitIntentDismissed();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-lg sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2',
              className
            )}
          >
            <div className="relative rounded-t-2xl sm:rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-warm-100 transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-600 p-6 pb-8 text-center">
                <span className="text-4xl mb-2 block">🔧</span>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Wait! Don&apos;t leave without your free guide
                </h2>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Get our complete Home Repair Toolkit delivered to your inbox
                </p>
              </div>

              {/* Form */}
              <div className="p-6 -mt-3">
                <EmailCaptureForm
                  variant="inline"
                  headline="Join 10,000+ DIYers"
                  showInterests={false}
                  className="border-0 p-0 shadow-none"
                />

                <button
                  onClick={handleClose}
                  className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  No thanks, I&apos;ll figure it out myself
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
