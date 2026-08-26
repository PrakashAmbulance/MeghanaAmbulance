import type { MetadataRoute } from "next";
import { business, services } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${business.siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${business.siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${business.siteUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${business.siteUrl}/hospital-partnerships`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${business.siteUrl}/coverage`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${business.siteUrl}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${business.siteUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${business.siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${business.siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${business.siteUrl}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
