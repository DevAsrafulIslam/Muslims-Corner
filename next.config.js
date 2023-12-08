/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

module.exports = nextConfig;
