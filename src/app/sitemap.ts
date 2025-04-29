import { getAllMirrorHours } from "@/src/lib/mirror-hours";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://mirror-clocks.vercel.app";
  const mirrorHours = getAllMirrorHours();
  const locales = ["en", "tr"];

  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ]);

  const mirrorHourPages = locales.flatMap((locale) =>
    mirrorHours.map((hour) => ({
      url: `${baseUrl}/${locale}/mirror-hour/${hour.time}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...mirrorHourPages];
}
