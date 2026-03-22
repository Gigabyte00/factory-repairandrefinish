import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Repair & Refinish. Review our terms, affiliate disclaimer, and content accuracy policies.",
};

export default function TermsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      </div>

      <article className="py-12 md:py-20">
        <div className="container-narrow">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 22, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold text-primary mt-0">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using Repair &amp; Refinish
                (&ldquo;repairandrefinish.com&rdquo;, &ldquo;the Site&rdquo;),
                you agree to be bound by these Terms of Service. If you do not
                agree with any part of these terms, you should not use the
                Site.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                2. Content Accuracy Disclaimer
              </h2>
              <p className="text-muted-foreground">
                The guides, tutorials, and information on this Site are
                provided for general educational and informational purposes
                only. While we strive for accuracy and regularly update our
                content:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong>We are not liable for errors or omissions.</strong>{" "}
                  Home repair involves variables (home age, local codes,
                  material conditions) that we cannot account for in every
                  guide.
                </li>
                <li>
                  <strong>Our guides are not a substitute for professional
                  advice.</strong> If a repair involves permits, structural
                  elements, gas lines, or main electrical panels, consult a
                  licensed professional.
                </li>
                <li>
                  <strong>Building codes vary by location.</strong> Always check
                  local building codes and permit requirements before starting
                  a project.
                </li>
                <li>
                  <strong>You are responsible for your own safety.</strong>{" "}
                  Follow all safety warnings in our guides and use appropriate
                  protective equipment.
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                3. Affiliate Disclaimer
              </h2>
              <p className="text-muted-foreground">
                Repair &amp; Refinish is a participant in affiliate advertising
                programs, including but not limited to the Amazon Services LLC
                Associates Program, Home Depot affiliate program, Lowe&apos;s
                affiliate program, and Wayfair affiliate program. These
                programs provide a means for us to earn commissions by linking
                to retailer websites.
              </p>
              <p className="text-muted-foreground">
                When you click an affiliate link and make a purchase, we may
                earn a small commission at no additional cost to you. This
                income supports the creation of free content on this Site.
              </p>
              <p className="text-muted-foreground">
                Affiliate relationships do not influence our editorial
                decisions. Product recommendations are based on quality, value,
                and suitability — not commission rates. We clearly identify
                affiliate links throughout the Site.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on this Site — including text, images, graphics,
                logos, guides, and design elements — is the property of Repair
                &amp; Refinish and is protected by copyright laws. You may not
                reproduce, distribute, or republish any content from this Site
                without prior written permission.
              </p>
              <p className="text-muted-foreground">
                You may share links to our guides and reference brief excerpts
                for personal, non-commercial use with proper attribution.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                5. User Conduct
              </h2>
              <p className="text-muted-foreground">
                When using our Site, you agree not to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Use the Site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Scrape, crawl, or harvest content in bulk without permission</li>
                <li>Submit false or misleading information through contact forms</li>
                <li>Interfere with the proper functioning of the Site</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Repair &amp; Refinish
                shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Your use of or reliance on any information on this Site</li>
                <li>Any errors, omissions, or inaccuracies in our content</li>
                <li>Personal injury or property damage resulting from home repair work</li>
                <li>Products purchased through affiliate links</li>
                <li>Interruptions or errors in Site availability</li>
              </ul>
              <p className="text-muted-foreground">
                You acknowledge that home repair carries inherent risks and
                that you undertake all projects at your own risk.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                7. Third-Party Links
              </h2>
              <p className="text-muted-foreground">
                Our Site contains links to third-party websites, including
                retailer product pages. These links are provided for your
                convenience. We do not control or endorse the content, privacy
                practices, or availability of third-party sites. Your use of
                linked sites is governed by their respective terms and policies.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                8. Cost Estimates
              </h2>
              <p className="text-muted-foreground">
                Cost estimates provided in our guides are based on national
                average prices as of the guide&apos;s last-updated date. Actual
                costs may vary significantly based on your location, material
                choices, and market conditions. Cost estimates should be used
                for general budgeting purposes only.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated date.
                Your continued use of the Site following any changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms of Service are governed by the laws of the United
                States. Any disputes arising from the use of this Site shall be
                resolved in accordance with applicable federal and state laws.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                11. Contact
              </h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:legal@repairandrefinish.com"
                  className="text-accent hover:underline"
                >
                  legal@repairandrefinish.com
                </a>{" "}
                or use our{" "}
                <a href="/contact" className="text-accent hover:underline">
                  contact form
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
