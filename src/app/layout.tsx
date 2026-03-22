import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toast";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://repairandrefinish.com"),
  title: {
    default: "Repair & Refinish — Fix It Right. Make It Beautiful.",
    template: "%s | Repair & Refinish",
  },
  description:
    "Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates to help you fix it right and make it beautiful.",
  keywords: [
    "home repair",
    "DIY",
    "home improvement",
    "how to fix",
    "repair guide",
    "refinish",
    "home maintenance",
    "plumbing",
    "electrical",
    "painting",
    "flooring",
    "tool recommendations",
  ],
  authors: [{ name: "Repair & Refinish Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repairandrefinish.com",
    siteName: "Repair & Refinish",
    title: "Repair & Refinish — Fix It Right. Make It Beautiful.",
    description:
      "Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates for every skill level.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repair & Refinish — Fix It Right. Make It Beautiful.",
    description:
      "Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates for every skill level.",
    images: ["/og-default.jpg"],
  },
  verification: {
    google: "BBrotdlUGC9yTTlhkqulpfNz74rTlBmO0sTNvPX6nS8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary focus:font-medium focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to content
        </a>
        <GoogleAnalytics />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
