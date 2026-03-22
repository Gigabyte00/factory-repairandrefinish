import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Repair & Refinish. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <article className="py-12 md:py-20">
        <div className="container-narrow">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: March 22, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold text-primary mt-0">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect information you provide directly, such as your name
                and email address when you subscribe to our newsletter or submit
                a contact form. We also collect certain information
                automatically when you visit our site, including your IP
                address, browser type, device type, pages visited, and
                referring URL.
              </p>
              <p className="text-muted-foreground">
                We use privacy-focused analytics (Plausible Analytics) that do
                not use cookies or track individual users. No personally
                identifiable information is collected through our analytics
                system.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">We use your information to:</p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Send you our newsletter and repair tips (if you subscribe)</li>
                <li>Respond to your questions and messages</li>
                <li>Improve our content and user experience</li>
                <li>Monitor site performance and fix technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to
                third parties.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                3. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                Our primary analytics tool (Plausible) is cookie-free and
                respects Do Not Track settings. However, certain third-party
                services embedded on our site may use cookies:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong>Essential cookies:</strong> Required for basic site
                  functionality such as remembering your newsletter
                  subscription preference.
                </li>
                <li>
                  <strong>Third-party cookies:</strong> Affiliate retailer
                  links (Amazon, Home Depot, Lowe&apos;s, Wayfair) may set
                  cookies when you click through to their sites. These cookies
                  are governed by the respective retailer&apos;s privacy policy.
                </li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Blocking
                all cookies may limit some site functionality.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                4. Affiliate Links
              </h2>
              <p className="text-muted-foreground">
                Repair &amp; Refinish participates in affiliate programs with
                Amazon, Home Depot, Lowe&apos;s, Wayfair, and other retailers.
                When you click an affiliate link on our site and make a
                purchase, we may earn a commission at no additional cost to you.
              </p>
              <p className="text-muted-foreground">
                Clicking an affiliate link may redirect you to the
                retailer&apos;s website, where their own privacy policy and
                cookie practices apply. We do not receive any personally
                identifiable information about your purchases from these
                retailers — only aggregate sales data needed for commission
                tracking.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                5. Third-Party Services
              </h2>
              <p className="text-muted-foreground">
                We use the following third-party services that may process your
                data:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong>Plausible Analytics</strong> — Privacy-focused
                  website analytics (no cookies, no personal data collection)
                </li>
                <li>
                  <strong>Vercel</strong> — Website hosting and content
                  delivery
                </li>
                <li>
                  <strong>Email service provider</strong> — Newsletter delivery
                  and subscriber management
                </li>
              </ul>
              <p className="text-muted-foreground">
                Each service has its own privacy policy, and we encourage you to
                review them.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                6. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your newsletter subscription data until you
                unsubscribe. Contact form messages are retained for up to 12
                months. Analytics data is aggregated and does not contain
                personal identifiers.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                <li>Unsubscribe from our newsletter at any time using the link in any email</li>
                <li>Request access to personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt out of any marketing communications</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@repairandrefinish.com"
                  className="text-accent hover:underline"
                >
                  privacy@repairandrefinish.com
                </a>
                .
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground">
                Our site is not directed at children under 13. We do not
                knowingly collect personal information from children. If you
                believe a child has provided us with personal information,
                please contact us and we will delete it.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                9. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this privacy policy periodically. Changes will be
                posted on this page with an updated revision date. Continued
                use of the site after changes constitutes acceptance of the
                revised policy.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold text-primary">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy, please contact
                us at:
              </p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:privacy@repairandrefinish.com"
                  className="text-accent hover:underline"
                >
                  privacy@repairandrefinish.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Or use our{" "}
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
