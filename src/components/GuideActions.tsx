"use client";

import { Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function PrintButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => window.print()}
    >
      <Printer className="h-4 w-4" />
      Print
    </Button>
  );
}

export function ShareButton({ title, url }: { title: string; url: string }) {
  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The guide URL has been copied to your clipboard.",
        variant: "success",
      });
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleShare}>
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  );
}
