import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bosnian Pyramids | Visoko, Bosnia & Herzegovina",
  description:
    "Discover the mysterious Bosnian Pyramids in Visoko — the world's largest pyramid complex. Explore research, tourism, history and scientific findings.",
  keywords:
    "Bosnian Pyramids, Visoko, Bosnia, Pyramid of the Sun, Pyramid of the Moon, archaeological discovery, tourism",
  openGraph: {
    title: "Bosnian Pyramids | Visoko",
    description:
      "The world's largest pyramid complex discovered in the heart of Bosnia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-stone-950 text-white antialiased">{children}</body>
    </html>
  );
}
