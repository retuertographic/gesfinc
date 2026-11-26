import localFont from "next/font/local";

/*
 * All fonts are self-hosted (files in src/fonts, latin subset): no requests to Google at runtime or build time.
 * next/font/local hashes the files and serves them under /_next, so they get the deployment base path for free.
 * (Font loader options must be written as literals.)
 */

export const roboto = localFont({
  variable: "--font-roboto",
  display: "swap",
  src: [
    { path: "../fonts/Roboto-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Roboto-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Roboto-700.woff2", weight: "700", style: "normal" },
  ],
});
export const robotoSlab = localFont({
  variable: "--font-roboto-slab",
  display: "swap",
  src: [
    { path: "../fonts/RobotoSlab-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/RobotoSlab-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/RobotoSlab-700.woff2", weight: "700", style: "normal" },
  ],
});
export const cabin = localFont({
  variable: "--font-cabin",
  display: "swap",
  src: [
    { path: "../fonts/Cabin-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Cabin-700.woff2", weight: "700", style: "normal" },
  ],
});
export const covered = localFont({
  variable: "--font-covered",
  display: "swap",
  src: [
    {
      path: "../fonts/CoveredByYourGrace-400.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
export const karla = localFont({
  variable: "--font-karla",
  display: "swap",
  src: [
    { path: "../fonts/Karla-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Karla-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Karla-700.woff2", weight: "700", style: "normal" },
  ],
});
export const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../fonts/Poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Poppins-700.woff2", weight: "700", style: "normal" },
  ],
});
export const glacialRegular = localFont({
  variable: "--font-glacial-regular",
  display: "swap",
  src: [
    {
      path: "../fonts/GlacialIndifference-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
export const glacialBold = localFont({
  variable: "--font-glacial-bold",
  display: "swap",
  src: [
    {
      path: "../fonts/GlacialIndifference-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const fontVariables = [
  roboto,
  robotoSlab,
  cabin,
  covered,
  karla,
  poppins,
  glacialRegular,
  glacialBold,
]
  .map((f) => f.variable)
  .join(" ");
