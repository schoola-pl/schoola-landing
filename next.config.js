/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.fwaw7-1.fna.fbcdn.net', 'avatars.githubusercontent.com']
  }
};

const sentryWebpackPluginOptions = {
  silent: true
};
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
