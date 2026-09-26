import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Files in /public are revalidated on every request by default. Voice clips and stroke
  // data rarely change, so let browsers and the CDN keep them — fewer requests, faster audio.
  async headers() {
    return [
      {
        source: "/audio/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }], // 30 days
      },
      {
        source: "/strokes/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }], // 1 day
      },
    ];
  },
};

export default nextConfig;
