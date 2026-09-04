interface StatsBarProps {
  articles?: number;
  products?: number;
}

/**
 * Editorial stats panel — full-bleed primary band, oversized numbers,
 * minimal labels. Falls back to qualitative claims when real numbers are low.
 */
export function StatsBar({ articles = 0, products = 0 }: StatsBarProps) {
  const hasRealStats = articles >= 5 || products >= 5;

  const stats = hasRealStats
    ? [
        { value: `${articles}+`, label: 'Expert articles' },
        { value: `${products}+`, label: 'Products reviewed' },
        { value: 'Independent', label: 'Editorial standards' },
      ]
    : [
        { value: 'Independent', label: 'Editorial standards' },
        { value: 'Expert', label: 'Research-based reviews' },
        { value: 'Free', label: 'No paywalls, ever' },
      ];

  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-end">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stagger-child ${
                i > 0 ? 'md:border-l md:border-primary-foreground/20 md:pl-10 lg:md:pl-16' : ''
              }`}
            >
              <div className="text-display-stat leading-none">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.18em] opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
