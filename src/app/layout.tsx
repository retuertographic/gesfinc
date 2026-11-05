import type { Metadata } from "next";
import { Cabin, Covered_By_Your_Grace, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500"] });
const robotoSlab = Roboto_Slab({ variable: "--font-roboto-slab", subsets: ["latin"], weight: ["400", "500"] });
const cabin = Cabin({ variable: "--font-cabin", subsets: ["latin"], weight: ["500", "700"] });
const covered = Covered_By_Your_Grace({ variable: "--font-covered", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Gesfinc Canarias – GESFINC: expertos en administracion de fincas",
  description:
    "Gesfinc Canarias, expertos en administración de fincas de comunidades de vecinos en La Orotava, Tenerife.",
  icons: { icon: "/sites/gesfinc/images/Logo-Gesfinc.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${robotoSlab.variable} ${cabin.variable} ${covered.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
