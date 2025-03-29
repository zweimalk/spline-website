import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'ui-avatars.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'v5.airtableusercontent.com',
      'rosy-mink-728.convex.cloud',
      'perceptive-quail-838.convex.cloud',
      'plus.unsplash.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['motion/react', '@react-three/fiber', '@react-three/drei'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable SWC minification
  swcMinify: true,
};

export default nextConfig;
