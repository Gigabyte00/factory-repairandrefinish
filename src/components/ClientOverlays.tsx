'use client';

import dynamic from 'next/dynamic';

const ExitIntentPopup = dynamic(
  () => import('@/components/ExitIntentPopup').then(m => ({ default: m.ExitIntentPopup })),
  { ssr: false }
);
const StickyCTA = dynamic(
  () => import('@/components/StickyCTA').then(m => ({ default: m.StickyCTA })),
  { ssr: false }
);
const ActivityToast = dynamic(
  () => import('@/components/ActivityToast').then(m => ({ default: m.ActivityToast })),
  { ssr: false }
);

export function ClientOverlays() {
  return (
    <>
      <ExitIntentPopup />
      <StickyCTA />
      <ActivityToast />
    </>
  );
}
