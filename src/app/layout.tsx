import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AstralVision - Your Cosmic Destiny Awaits",
  description:
    "Discover your cosmic truth through personalized astrology readings, horoscopes, and spiritual guidance. Expert astrologers, 98% satisfaction rate, trusted by 25,000+ souls.",
  keywords:
    "astrology, horoscopes, birth chart, tarot reading, zodiac signs, spiritual guidance, numerology, cosmic destiny",
  authors: [{ name: "AstralVision Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8b5cf6",

  openGraph: {
    title: "AstralVision - Your Cosmic Destiny Awaits",
    description:
      "Unlock the mysteries of your destiny through ancient astrological wisdom and modern spiritual insights.",
    type: "website",
    locale: "en_US",
    siteName: "AstralVision",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstralVision - Your Cosmic Destiny Awaits",
    description:
      "Discover your cosmic truth through personalized astrology readings and spiritual guidance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased cosmic-bg`}>
        {children}
      </body>
    </html>
  );
}
