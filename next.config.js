/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment
  trailingSlash: true,
  // Replace 'kwm-assignment' with your GitHub repository name
  basePath: '/kwm-assignment',
  assetPrefix: '/kwm-assignment/',
}

module.exports = nextConfig

