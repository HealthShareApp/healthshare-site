import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["46.62.231.114"],
  output: "export",
  basePath: isProd ? "/healthshare-site" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
