import { getHowItWorksSteps } from '@/lib/site-config';

const defaultSteps = [
  { title: 'Read Our Reviews', description: 'In-depth, research-based reviews written by real experts.' },
  { title: 'Compare Options', description: 'Side-by-side comparisons to find the perfect fit.' },
  { title: 'Make an Informed Choice', description: 'Buy with confidence using our unbiased recommendations.' },
];

/**
 * 3-step "How It Works" — editorial numbered grid.
 * Steps can be customized via SITE_HOW_IT_WORKS_STEPS env var (JSON array of 3 objects).
 */
export function HowItWorks() {
  const customSteps = getHowItWorksSteps();
  const steps = (customSteps || defaultSteps).map((step, i) => ({
    number: String(i + 1).padStart(2, '0'),
    ...step,
  }));

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            How it works
          </span>
          <h2 className="text-display-section text-foreground">
            From research to ride in three honest steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step, i) => (
            <article key={step.number} className="relative">
              {/* Number — oversized */}
              <div className="text-display-stat text-primary leading-none mb-5">
                {step.number}
              </div>
              {/* Top rule above title for editorial feel */}
              <div className="h-px w-12 bg-foreground/15 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                {step.description}
              </p>
              {/* Connector arrow on md+ except last */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-7 lg:-right-10 text-foreground/20" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
