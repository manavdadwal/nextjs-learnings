/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  // Replace 'kwm-assignment' with your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/kwm-assignment' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kwm-assignment/' : '',
}

module.exports = nextConfig

