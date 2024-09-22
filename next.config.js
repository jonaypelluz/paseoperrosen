/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: 'default',
    unoptimized: true,
  },
  basePath: '/paseoperrosen',
  trailingSlash: true
};

module.exports = nextConfig;
