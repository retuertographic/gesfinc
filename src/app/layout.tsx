import type { Metadata } from "next";
import {
  Cabin,
  Covered_By_Your_Grace,
  Karla,
  Roboto,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import { withBase } from "@/lib/base-path";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["500", "700"],
});
const covered = Covered_By_Your_Grace({
  variable: "--font-covered",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gesfinc Canarias – GESFINC: expertos en administracion de fincas",
  description:
    "Gesfinc Canarias, expertos en administración de fincas de comunidades de vecinos en La Orotava, Tenerife.",
  icons: { icon: withBase("/sites/gesfinc/images/Logo-Gesfinc.png") },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${robotoSlab.variable} ${cabin.variable} ${covered.variable} ${karla.variable} antialiased`}
    >
      <head>
        {/* GlacialIndifference @font-face lives here (not in CSS) so the font URLs get the deployment base path. */}
        <style
          dangerouslySetInnerHTML={{
            __html: ["Regular", "Bold"]
              .map(
                (w) =>
                  `@font-face{font-family:"GlacialIndifference-${w}";src:url("${withBase(`/sites/gesfinc/fonts/GlacialIndifference-${w}.woff`)}") format("woff");font-weight:${w === "Bold" ? 700 : 400};font-style:normal;font-display:swap}`,
              )
              .join(""),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
