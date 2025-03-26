import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "gi1n4aj2u4.ufs.sh",
    }]
  }
};

export default nextConfig;
