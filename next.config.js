/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Nicepage 호스팅용: /blog로 변경
  basePath: process.env.BASE_PATH || '/blog',
  assetPrefix: process.env.BASE_PATH || '/blog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || '/blog',
  },
}

module.exports = nextConfig

