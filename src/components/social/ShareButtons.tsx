'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';
import {
  Facebook,
  Twitter,
  Mail,
  Link2,
  Printer,
  Check,
} from 'lucide-react';
import { trackSocialShare, trackPrint, trackCopyLink } from '@/lib/analytics';

// Pinterest icon as inline SVG since lucide-react doesn't include it
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

interface ShareButtonsProps {
  title: string;
  url?: string;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

interface ShareButtonDef {
  name: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  getUrl: (title: string, url: string) => string | null;
  action?: 'copy' | 'print';
}

const shareButtons: ShareButtonDef[] = [
  {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    color: 'text-[#1877F2]',
    hoverColor: 'hover:bg-[#1877F2]/10',
    getUrl: (_, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'X (Twitter)',
    icon: <Twitter className="h-4 w-4" />,
    color: 'text-foreground',
    hoverColor: 'hover:bg-warm-100',
    getUrl: (title, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    name: 'Pinterest',
    icon: <PinterestIcon className="h-4 w-4" />,
    color: 'text-[#E60023]',
    hoverColor: 'hover:bg-[#E60023]/10',
    getUrl: (title, url) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
  {
    name: 'Email',
    icon: <Mail className="h-4 w-4" />,
    color: 'text-muted-foreground',
    hoverColor: 'hover:bg-warm-100',
    getUrl: (title, url) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this guide: ${url}`)}`,
  },
  {
    name: 'Copy Link',
    icon: <Link2 className="h-4 w-4" />,
    color: 'text-muted-foreground',
    hoverColor: 'hover:bg-warm-100',
    getUrl: () => null,
    action: 'copy',
  },
  {
    name: 'Print',
    icon: <Printer className="h-4 w-4" />,
    color: 'text-muted-foreground',
    hoverColor: 'hover:bg-warm-100',
    getUrl: () => null,
    action: 'print',
  },
];

export function ShareButtons({
  title,
  url,
  className,
  direction = 'horizontal',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopy = useCallback(async () => {
    const showSuccess = () => {
      setCopied(true);
      toast({
        title: 'Link copied!',
        description: 'The guide link has been copied to your clipboard.',
        variant: 'success',
      });
      setTimeout(() => setCopied(false), 2000);
    };

    // Try modern Clipboard API first
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(currentUrl);
        showSuccess();
        return;
      } catch {
        // Permission denied - fall through to fallback
      }
    }

    // Fallback: textarea + execCommand
    try {
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showSuccess();
    } catch {
      toast({
        title: 'Could not copy link',
        description: 'Please copy the URL from your browser address bar.',
      });
    }
  }, [currentUrl]);

  // Extract slug from URL for analytics
  const guideSlug = currentUrl.includes('/guides/')
    ? currentUrl.split('/guides/').pop()?.split('?')[0]
    : undefined;

  function handleClick(button: ShareButtonDef) {
    if (button.action === 'copy') {
      handleCopy();
      trackCopyLink(guideSlug);
      return;
    }
    if (button.action === 'print') {
      trackPrint(guideSlug);
      window.print();
      return;
    }
    trackSocialShare(button.name, guideSlug);
    const shareUrl = button.getUrl(title, currentUrl);
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
    }
  }

  return (
    <div
      className={cn(
        'flex items-center gap-1',
        direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
        className
      )}
    >
      <span className="text-xs font-medium text-muted-foreground mr-1">
        Share:
      </span>
      {shareButtons.map((button) => (
        <button
          key={button.name}
          onClick={() => handleClick(button)}
          className={cn(
            'inline-flex items-center justify-center rounded-lg p-2 transition-all duration-200 cursor-pointer',
            button.color,
            button.hoverColor
          )}
          title={button.name}
          aria-label={`Share on ${button.name}`}
        >
          {button.action === 'copy' && copied ? (
            <Check className="h-4 w-4 text-emerald-600" />
          ) : (
            button.icon
          )}
        </button>
      ))}
    </div>
  );
}
