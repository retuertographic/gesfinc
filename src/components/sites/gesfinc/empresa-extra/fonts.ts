import { Poppins, Roboto } from "next/font/google";

/** Poppins is used by the Elementor headings on these pages; the root layout doesn't load it. */
export const poppins = Poppins({
  variable: "--gf-ex-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/** Body copy uses Roboto with <strong> at 700, which the root layout doesn't load (400/500 only). */
export const roboto = Roboto({
  variable: "--gf-ex-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const exFonts = `${poppins.variable} ${roboto.variable}`;
