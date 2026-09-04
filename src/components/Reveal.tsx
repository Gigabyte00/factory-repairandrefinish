import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Optional className applied to the wrapping element. */
  className?: string;
  /** Tag name to render. Default: div. */
  as?: 'div' | 'section' | 'article' | 'aside';
}

/**
 * Reveal — pass-through wrapper. Earlier this used IntersectionObserver to
 * fade content in on scroll, but the keyframe (opacity 0→1) caused a flash
 * when JS upgraded the element from "no observer" to "observed". Replaced
 * with a static server component — content is always visible, no animation,
 * no flicker.
 */
export function Reveal({ children, className, as: Tag = 'div' }: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}
