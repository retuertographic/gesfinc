import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";
import { withBase } from "@/lib/base-path";

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
    <html lang="es" className={`${fontVariables} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
