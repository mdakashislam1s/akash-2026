/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
