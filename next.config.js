/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co', 'localhost', 'i.ytimg.com']
  }
};

module.exports = nextConfig;
