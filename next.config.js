/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['localhost', 'i.ytimg.com', 'placehold.co', 'picsum.photos', 'api-vamos.vamosavacilar.com']
  }
};

module.exports = nextConfig;
