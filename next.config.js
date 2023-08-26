/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['placehold.co']
  }
};

module.exports = nextConfig;
