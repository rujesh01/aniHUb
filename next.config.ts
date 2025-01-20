import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hianime.to", // The domain of your image
        port: "", // Leave empty if there's no specific port
        pathname: "/images/**", // Use a wildcard to allow all images in the `/images/` folder
      },
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
