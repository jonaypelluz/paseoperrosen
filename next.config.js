/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    unoptimized: true,
  },
  basePath: 'paseoperrosen/',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/vacarisas/',
        destination: '/vacarisses/',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
