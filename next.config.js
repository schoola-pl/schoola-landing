/** @type {import("next").NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['scontent.fwaw7-1.fna.fbcdn.net', 'avatars.githubusercontent.com']
  },
  webpack: (config) => {
    config.optimization.splitChunks.chunks = 'all';
    return config;
  }
});