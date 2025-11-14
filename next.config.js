/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages: /myfunnyvalenfile-blog
  // Nicepage: /blog (로컬 빌드 시)
  basePath: process.env.BASE_PATH || '/myfunnyvalenfile-blog',
  assetPrefix: process.env.BASE_PATH || '/myfunnyvalenfile-blog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || '/myfunnyvalenfile-blog',
  },
}

module.exports = nextConfig

