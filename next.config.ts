import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/hkbu',
  assetPrefix: '/hkbu',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
