import { Poppins, Roboto } from "next/font/google";

// The contact pages' hero titles use Poppins, which the shared layout does not load.
export const poppins = Poppins({
  variable: "--gf-ct-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

// The shared layout loads Roboto 400/500 only; these pages also use real Roboto Bold (form labels, "Continue Reading").
export const robotoBold = Roboto({
  variable: "--gf-ct-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const ctFonts = `${poppins.variable} ${robotoBold.variable}`;
