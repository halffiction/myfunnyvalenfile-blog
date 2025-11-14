/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myfunnyvalenfile-blog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

