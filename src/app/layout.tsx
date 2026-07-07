import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://bosnianpyramids-visoko.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bosnian Pyramids — Visoko, Bosnia & Herzegovina",
    template: "%s | Bosnian Pyramids Visoko",
  },
  description:
    "Discover the Bosnian Pyramids in Visoko — a remarkable archaeological site featuring pyramid-shaped hills, underground tunnels, and ongoing research. Plan your visit today.",
  keywords: [
    "Bosnian Pyramids", "Visoko", "Bosnia tourism", "Pyramid of the Sun",
    "Pyramid of the Moon", "Ravne Tunnels", "Dr Semir Osmanagic",
    "archaeological park", "Bosnia Herzegovina travel", "pyramid discovery",
  ],
  authors: [{ name: "Bosnian Pyramids Visoko" }],
  creator: "Bosnian Pyramids Visoko",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bosnian Pyramids Visoko",
    title: "Bosnian Pyramids — Visoko, Bosnia & Herzegovina",
    description:
      "A remarkable archaeological site in the heart of Bosnia. Explore pyramid-shaped hills, ancient tunnels, and plan your visit to Visoko.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bosnian Pyramids in Visoko",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bosnian Pyramids — Visoko",
    description: "Explore the remarkable Bosnian Pyramids archaeological site in Visoko.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Bosnian Pyramids",
  "description": "Pyramid-shaped hills and underground tunnels in Visoko, Bosnia and Herzegovina.",
  "url": siteUrl,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Visoko",
    "addressCountry": "BA",
    "postalCode": "71300",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.0978,
    "longitude": 18.1787,
  },
  "openingHours": "Mo-Su 08:00-18:00",
  "touristType": "CulturalTourist",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} bg-stone-900 text-stone-50 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
