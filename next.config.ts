import type { NextConfig } from "next";

// GitHub Pages build: static export under the repository sub-path (see .github/workflows/pages.yml).
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
