import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    basePath: isProd ? "/frontend-next.js-mui-project" : "",
    assetPrefix: isProd ? "/frontend-next.js-mui-project/" : "",
    images: {
        unoptimized: true, // Вимикає автоматичну оптимізацію Next.js
    },
};

export default nextConfig;
