import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";
import { withBase } from "@/lib/base-path";
import { SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "Gesfinc Canarias, expertos en administración de fincas y comunidades de propietarios en La Orotava, Tenerife: administración, asesoría jurídica, limpieza, mantenimiento, jardinería y seguros.";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Gesfinc Canarias – Administración de fincas en Tenerife",
    template: "%s",
  },
  description: DESCRIPTION,
  applicationName: "Gesfinc Canarias",
  keywords: [
    "administración de fincas",
    "administrador de fincas Tenerife",
    "comunidades de propietarios",
    "La Orotava",
    "Gesfinc Canarias",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: withBase("/sites/gesfinc/images/favicon-48.png"),
    apple: withBase("/sites/gesfinc/images/apple-touch-icon.png"),
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Gesfinc Canarias",
    description: DESCRIPTION,
    images: [
      {
        url: "sites/gesfinc/images/og-gesfinc.jpg",
        width: 1200,
        height: 630,
        alt: "Gesfinc Canarias – Administración de fincas",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#3f4e8f",
};

/** Local business data for search engines (shown in Google's knowledge panel / maps results). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gesfinc Canarias",
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/sites/gesfinc/images/apple-touch-icon.png`,
  image: `${SITE_URL}/sites/gesfinc/images/og-gesfinc.jpg`,
  telephone: "+34 922 975 075",
  faxNumber: "+34 922 32 50 48",
  email: "info@gesfinc.es",
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Calle Juan Ortiz de Zárate 6, Edificio Mencey – Local A Peatonal",
    postalCode: "38300",
    addressLocality: "La Orotava",
    addressRegion: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },
  areaServed: "Canarias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontVariables} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
