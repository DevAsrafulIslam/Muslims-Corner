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
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
