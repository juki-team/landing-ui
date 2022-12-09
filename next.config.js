/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.juki.pub',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'images.juki.pub',
        pathname: '/c/**'
      },
      {
        protocol: 'https',
        hostname: 'juki-judge.s3.us-east-2.amazonaws.com',
        pathname: '/public/user/image/**'
      }
    ]
  }
};

module.exports = nextConfig;
