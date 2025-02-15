import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dummyimage.com"],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000",
  },
};

module.exports = nextConfig;

export default nextConfig;
