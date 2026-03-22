'use client';

import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import type { FAQ } from '@/types';

interface GuideFAQProps {
  faqs: FAQ[];
  guideTitle: string;
  className?: string;
}

export function GuideFAQ({ faqs, guideTitle, className }: GuideFAQProps) {
  if (faqs.length === 0) return null;

  // JSON-LD FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={cn('', className)}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-primary" />
        <h2 className="font-heading text-2xl font-bold text-primary">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Accordion type="single" collapsible className="px-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className={cn(
                index === faqs.length - 1 && 'border-b-0'
              )}
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
