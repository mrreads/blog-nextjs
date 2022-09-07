/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "custom",
    domains: ['localhost:1337']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
