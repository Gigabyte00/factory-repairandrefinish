"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  MessageSquare,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { toast } from "@/components/ui/toast";
import { trackContactFormSubmit } from "@/lib/analytics";

const subjectOptions = [
  "General Question",
  "Guide Suggestion",
  "Error in a Guide",
  "Partnership Inquiry",
  "Advertising",
  "Technical Issue",
  "Other",
] as const;

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!subject) newErrors.subject = "Please select a subject.";
    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackContactFormSubmit();
    toast({
      title: "Message sent!",
      description:
        "Thanks for reaching out. We'll get back to you within 1-2 business days.",
      variant: "success",
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setErrors({});
    setSubmitting(false);
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question, found an error in a guide, or want to suggest a
              topic? We&apos;d love to hear from you. Our team typically responds
              within 1-2 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle>Send Us a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors cursor-pointer ${
                        errors.subject ? "border-destructive" : "border-input"
                      } ${!subject ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      <option value="" disabled>
                        Select a subject...
                      </option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={submitting}
                    className="w-full sm:w-auto"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Email card */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <CardTitle className="text-base">Email Us Directly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:hello@repairandrefinish.com"
                    className="text-sm text-accent hover:underline"
                  >
                    hello@repairandrefinish.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respond within 1-2 business days.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">
                      Common Questions
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="cq-1">
                      <AccordionTrigger className="text-sm">
                        Can I suggest a guide topic?
                      </AccordionTrigger>
                      <AccordionContent>
                        We welcome topic suggestions. Select &ldquo;Guide
                        Suggestion&rdquo; in the subject dropdown and describe
                        the repair or project you&apos;d like us to cover.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cq-2">
                      <AccordionTrigger className="text-sm">
                        I found an error in a guide. What do I do?
                      </AccordionTrigger>
                      <AccordionContent>
                        Please select &ldquo;Error in a Guide&rdquo; and
                        include the guide title and the specific error. We take
                        accuracy seriously and will correct it promptly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cq-3">
                      <AccordionTrigger className="text-sm">
                        Do you offer guest posting?
                      </AccordionTrigger>
                      <AccordionContent>
                        We occasionally accept guest contributions from
                        licensed contractors and experienced tradespeople.
                        Select &ldquo;Partnership Inquiry&rdquo; and include
                        your credentials and topic idea.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
