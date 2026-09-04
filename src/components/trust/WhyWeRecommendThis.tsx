import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface WhyWeRecommendThisProps {
  title: string;
  summary: string;
  bullets: string[];
  caveat?: string;
  className?: string;
}

export function WhyWeRecommendThis({
  title,
  summary,
  bullets,
  caveat,
  className,
}: WhyWeRecommendThisProps) {
  return (
    <Card className={cn('rounded-[1.75rem] border-border/60 shadow-none', className)}>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{summary}</p>
        </div>

        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-6 text-muted-foreground">{b}</span>
            </li>
          ))}
        </ul>

        {caveat && (
          <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <p className="text-xs leading-5 text-muted-foreground">{caveat}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
