import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {


    basePath: isProd ? "/my-next-app" : "",
    assetPrefix: isProd ? "/my-next-app/" : "",
};

export default nextConfig;
