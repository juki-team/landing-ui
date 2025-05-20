/** @type {import('next').NextConfig} */
const { version } = require('./package.json');

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      tls: false,
      bufferutil: false,
      'utf-8-validate': false,
    };
    
    return config;
  },
  publicRuntimeConfig: {
    version,
  },
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.juki.pub',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'images.juki.pub',
        pathname: '/c/**',
      },
      {
        protocol: 'https',
        hostname: 'images.juki.pub',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'juki-judge.s3.us-east-2.amazonaws.com',
        pathname: '/public/user/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
