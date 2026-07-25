import { MetadataRoute } from "next";
import { rooms } from "@/lib/data";

const siteUrl = "https://www.theroyalhoteldhamtari.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/rooms", "/gallery", "/about", "/contact", "/booking"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const roomRoutes = rooms.map((r) => ({
    url: `${siteUrl}/rooms/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...roomRoutes];
}
