/** @type {import('next').NextConfig} */

// Replace with your GitHub repository name
const repoName = 'kwm-assignment'
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment
  trailingSlash: true,
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
}

module.exports = nextConfig

