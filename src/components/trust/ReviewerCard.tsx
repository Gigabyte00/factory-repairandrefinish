import { BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ReviewerCardProps {
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
  specialties?: string[];
  avatarUrl?: string;
  className?: string;
}

export function ReviewerCard({
  name,
  role,
  bio,
  credentials = [],
  specialties = [],
  avatarUrl,
  className,
}: ReviewerCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className={cn('rounded-[1.75rem] border-border/60 shadow-none', className)}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="shrink-0 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span className="text-lg font-bold text-primary">{initials}</span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-foreground">{name}</h4>
              <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">{bio}</p>

        {credentials.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {credentials.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="rounded-full text-xs"
              >
                {c}
              </Badge>
            ))}
          </div>
        )}

        {specialties.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Covers
            </p>
            <ul className="space-y-1">
              {specialties.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
