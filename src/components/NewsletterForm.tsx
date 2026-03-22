"use client";

import * as React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

interface NewsletterFormProps {
  variant?: "hero" | "inline" | "sidebar";
  buttonText?: string;
  className?: string;
}

export function NewsletterForm({
  variant = "inline",
  buttonText = "Subscribe",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    toast({
      title: "You're subscribed!",
      description: "Check your inbox for the free toolkit checklist.",
      variant: "success",
    });

    setEmail("");
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto ${className || ""}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            aria-label="Email address for newsletter"
            className="newsletter-input h-12 w-full rounded-xl border border-primary-600 bg-primary-800 pl-10 pr-4 text-sm text-white placeholder:text-primary-400 focus:outline-none transition-all"
          />
        </div>
        <Button type="submit" variant="accent" size="lg">
          {buttonText}
        </Button>
      </form>
    );
  }

  if (variant === "sidebar") {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          aria-label="Email address for newsletter"
          className="newsletter-input h-9 w-full rounded-lg border border-primary-600 bg-primary-800 px-3 text-sm text-white placeholder:text-primary-400 focus:outline-none mb-2"
        />
        <Button type="submit" variant="accent" size="sm" className="w-full">
          Subscribe Free
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className || ""}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        aria-label="Email address for newsletter"
        className="newsletter-input h-10 flex-1 rounded-lg border border-primary-600 bg-primary-800 px-4 text-sm text-white placeholder:text-primary-400 focus:outline-none"
      />
      <Button type="submit" variant="accent" size="md">
        {buttonText}
        <Mail className="h-4 w-4" />
      </Button>
    </form>
  );
}
