/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myfunnyvalenfile-blog',
  assetPrefix: '/myfunnyvalenfile-blog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/myfunnyvalenfile-blog',
  },
}

module.exports = nextConfig

