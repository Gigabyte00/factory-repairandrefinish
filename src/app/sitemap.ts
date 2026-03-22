import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllGuideSlugs } from "@/lib/guides-data";
import { getAllCategorySlugs } from "@/lib/categories-data";
import { guides } from "@/lib/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  /* Static pages */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  /* Guide pages */
  const guidePages: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => {
    const guide = guides.find((g) => g.slug === slug);
    return {
      url: `${baseUrl}/guides/${slug}`,
      lastModified: guide ? new Date(guide.updatedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  /* Category pages */
  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map(
    (slug) => ({
      url: `${baseUrl}/categories/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...guidePages, ...categoryPages];
}
