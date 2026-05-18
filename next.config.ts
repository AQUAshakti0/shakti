import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  /* Image optimization */
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  /* HTTP headers for caching & security */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        /* Cache static assets aggressively */
        source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
