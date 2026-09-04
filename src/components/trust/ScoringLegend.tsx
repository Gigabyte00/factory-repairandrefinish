import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ScoringItem {
  label: string;
  description: string;
  value: string;
}

interface ScoringLegendProps {
  title?: string;
  intro?: string;
  items: ScoringItem[];
  className?: string;
}

export function ScoringLegend({
  title = 'How we score',
  intro,
  items,
  className,
}: ScoringLegendProps) {
  return (
    <Card className={cn('rounded-[1.75rem] border-border/60 shadow-none', className)}>
      <CardContent className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          {intro && (
            <p className="mt-1 text-sm text-muted-foreground leading-6">{intro}</p>
          )}
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="shrink-0 w-12 text-right">
                <span className="text-sm font-bold text-primary">{item.value}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground leading-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
