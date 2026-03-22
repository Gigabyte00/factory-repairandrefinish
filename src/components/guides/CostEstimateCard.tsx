'use client';

import { cn, formatCurrency } from '@/lib/utils';
import { DollarSign, Clock, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import type { CostEstimate, Difficulty } from '@/types';

interface CostEstimateCardProps {
  cost: CostEstimate;
  estimatedTime: string;
  difficulty: Difficulty;
  className?: string;
}

function CostBar({
  low,
  high,
  max,
  color,
}: {
  low: number;
  high: number;
  max: number;
  color: string;
}) {
  const leftPct = Math.max(0, (low / max) * 100);
  const widthPct = Math.max(5, ((high - low) / max) * 100);

  return (
    <div className="relative h-3 w-full rounded-full bg-warm-100 overflow-hidden">
      <div
        className="absolute inset-y-0 rounded-full transition-all duration-700 ease-out"
        style={{
          left: `${leftPct}%`,
          width: `${widthPct}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

function getVerdict(difficulty: Difficulty): {
  icon: React.ReactNode;
  text: string;
  color: string;
} {
  switch (difficulty) {
    case 'beginner':
      return {
        icon: <ThumbsUp className="h-5 w-5" />,
        text: 'Definitely worth doing yourself! This is a straightforward fix that most homeowners can handle.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      };
    case 'intermediate':
      return {
        icon: <Minus className="h-5 w-5" />,
        text: 'Worth DIY if you have some experience. Set aside enough time and read through all steps first.',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
      };
    case 'advanced':
      return {
        icon: <ThumbsDown className="h-5 w-5" />,
        text: 'Consider hiring a pro unless you have prior experience. The savings are significant, but mistakes can be costly.',
        color: 'text-red-700 bg-red-50 border-red-200',
      };
  }
}

export function CostEstimateCard({
  cost,
  estimatedTime,
  difficulty,
  className,
}: CostEstimateCardProps) {
  // Parse a rough pro cost from the diyVsPro string
  const proMatch = cost.diyVsPro.match(/\$([0-9,]+)\s*[-–]\s*\$([0-9,]+)/);
  const proLow = proMatch ? parseInt(proMatch[1].replace(/,/g, ''), 10) : cost.high * 5;
  const proHigh = proMatch ? parseInt(proMatch[2].replace(/,/g, ''), 10) : cost.high * 10;
  const maxCost = Math.max(proHigh, cost.high) * 1.1;
  const savings = proLow - cost.mid;

  const verdict = getVerdict(difficulty);

  return (
    <div className={cn('cost-card rounded-xl p-6', className)}>
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="h-5 w-5 text-primary" />
        <h2 className="font-heading text-xl font-bold text-primary">
          DIY vs. Hire a Pro
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* DIY Side */}
        <div className="rounded-lg border border-emerald-200 bg-white p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              🔧
            </span>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-emerald-700">
              Do It Yourself
            </h3>
          </div>

          <div className="mb-3">
            <span className="font-heading text-2xl font-bold text-foreground">
              {formatCurrency(cost.low)} - {formatCurrency(cost.high)}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">
              Typical: {formatCurrency(cost.mid)}
            </p>
          </div>

          <CostBar
            low={cost.low}
            high={cost.high}
            max={maxCost}
            color="#059669"
          />

          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{estimatedTime}</span>
          </div>
        </div>

        {/* Pro Side */}
        <div className="rounded-lg border border-warm-200 bg-white p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-warm-100 text-warm-700 text-sm font-bold">
              👷
            </span>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-warm-600">
              Hire a Professional
            </h3>
          </div>

          <div className="mb-3">
            <span className="font-heading text-2xl font-bold text-foreground">
              {formatCurrency(proLow)} - {formatCurrency(proHigh)}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">
              Typical range
            </p>
          </div>

          <CostBar
            low={proLow}
            high={proHigh}
            max={maxCost}
            color="#A8A29E"
          />

          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Scheduling: 1-2 weeks typical</span>
          </div>
        </div>
      </div>

      {/* Savings callout */}
      {savings > 0 && (
        <div className="mb-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 p-4 text-center">
          <p className="font-heading text-lg font-bold text-accent">
            Save up to {formatCurrency(proHigh - cost.low)} by doing it yourself
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {cost.diyVsPro}
          </p>
        </div>
      )}

      {/* Verdict */}
      <div className={cn('rounded-lg border p-4 flex items-start gap-3', verdict.color)}>
        <div className="mt-0.5 shrink-0">{verdict.icon}</div>
        <div>
          <p className="font-heading text-sm font-bold mb-0.5">Worth DIY?</p>
          <p className="text-sm leading-relaxed">{verdict.text}</p>
        </div>
      </div>
    </div>
  );
}
