import { CheckCircle2, Microscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MethodologyStep { label: string; description: string; }
interface MethodologyPanelProps {
  eyebrow?: string; title: string; intro: string;
  steps: MethodologyStep[]; notes?: string[]; className?: string;
}
export function MethodologyPanel({ eyebrow = 'How we evaluate', title, intro, steps, notes = [], className }: MethodologyPanelProps) {
  return (
    <Card className={cn('rounded-[1.75rem] border-border/60 shadow-none', className)}>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-3">
          <Badge variant="outline" className="gap-2 rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary">
            <Microscope className="h-3.5 w-3.5" />{eyebrow}
          </Badge>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{intro}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.label} className="rounded-2xl bg-muted/35 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Step {index + 1}</p>
              <h4 className="mt-2 text-base font-semibold text-foreground">{step.label}</h4>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        {notes.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {notes.map((note) => (
              <div key={note} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
