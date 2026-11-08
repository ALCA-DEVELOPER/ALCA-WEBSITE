import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.100.13",
    "192.168.1.116",
  ],
};

export default nextConfig;
