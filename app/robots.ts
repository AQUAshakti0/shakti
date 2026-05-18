import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/brain/"],
      },
    ],
    sitemap: "https://www.aquashakti.in/sitemap.xml",
  };
}
