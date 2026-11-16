import type { NextConfig } from "next";

/**
 * GitHub Pages "project site" lives at https://<user>.github.io/<repo>/,
 * so every asset and route needs this prefix.
 * If you later move to a custom domain, set basePath to "" instead.
 */
const repoName = "portfolio-site";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
