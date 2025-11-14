/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myfunnyvalenfile-blog',
  assetPrefix: '/myfunnyvalenfile-blog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

