import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://affairs.mt/",
      lastModified: "2026-11-06",
      changeFrequency: "weekly",
      priority: 1,
      images: ["https://affairs.mt/og-affairs.jpg", "https://affairs.mt/img/feed/tickets-qr.webp"],
    },
  ];
}
