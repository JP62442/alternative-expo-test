import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "altproexpo.com" },
      { protocol: "https", hostname: "vegasoulinfusion.com" },
      { protocol: "https", hostname: "goodfruits.store" },
      { protocol: "https", hostname: "utoya.com" },
      { protocol: "https", hostname: "roadtripcompany.com" },
      { protocol: "https", hostname: "haveanicetrip.com" },
      { protocol: "https", hostname: "mellowfellow.fun" },
      { protocol: "https", hostname: "www.happyvibes.life" },
      { protocol: "https", hostname: "shopstonersteve.com" },
      { protocol: "https", hostname: "celestialwellness.com" },
      { protocol: "https", hostname: "mountainfloradispensary.com" },
      { protocol: "https", hostname: "thcpresearch.com" },
      { protocol: "https", hostname: "argylepayments.com" },
      { protocol: "https", hostname: "nasty.com" },
      { protocol: "https", hostname: "juicehead.com" },
      { protocol: "https", hostname: "podjuice.com" },
      { protocol: "https", hostname: "trinityhemp.com" },
      { protocol: "https", hostname: "fumevapors.com" },
      { protocol: "https", hostname: "cdn11.bigcommerce.com" },
      { protocol: "https", hostname: "cbdsylva.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
