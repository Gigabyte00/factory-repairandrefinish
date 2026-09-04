'use client';

import { useState, useEffect } from 'react';

const CITIES = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Dallas', 'San Antonio', 'San Diego', 'Austin', 'Denver', 'Seattle', 'Miami', 'Atlanta', 'Boston', 'Nashville', 'Portland', 'Charlotte', 'Minneapolis'];
const ACTIONS = [
  'just found a $500 off deal',
  'compared their top options',
  'read our latest buying guide',
  'found the perfect match',
  'saved on their purchase',
  'chose a top-rated pick',
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function ActivityToast() {
  const [toast, setToast] = useState<{ city: string; action: string } | null>(null);

  useEffect(() => {
    let count = parseInt(sessionStorage.getItem('activity_toast_count') || '0');
    if (count >= 3) return;

    const delay = 15000 + Math.random() * 30000;
    const timer = setTimeout(() => {
      setToast({ city: getRandomItem(CITIES), action: getRandomItem(ACTIONS) });
      count++;
      sessionStorage.setItem('activity_toast_count', String(count));

      setTimeout(() => setToast(null), 5000);

      if (count < 3) {
        const nextDelay = 30000 + Math.random() * 60000;
        const nextTimer = setTimeout(() => {
          setToast({ city: getRandomItem(CITIES), action: getRandomItem(ACTIONS) });
          sessionStorage.setItem('activity_toast_count', String(count + 1));
          setTimeout(() => setToast(null), 5000);
        }, nextDelay);
        return () => clearTimeout(nextTimer);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 left-4 z-30 animate-in slide-in-from-left duration-300">
      <div className="bg-background border shadow-lg rounded-lg p-3 max-w-xs">
        <p className="text-sm">
          <span className="font-medium">Someone in {toast.city}</span>{' '}
          <span className="text-muted-foreground">{toast.action}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">just now</p>
      </div>
    </div>
  );
}
