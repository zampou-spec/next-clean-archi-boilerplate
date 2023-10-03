/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co', 'localhost', 'i.ytimg.com', 'picsum.photos']
  }
};

module.exports = nextConfig;
