import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iris-ai-glasses.vercel.app"),
  title: "IRIS AI Glasses — The Future Is In Your Vision",
  description:
    "Discover AI-powered smart glasses that redefine work, travel and creativity with seamless real-time assistance. Featuring 48MP AI Camera, 18H battery life, and live translation in 120+ languages.",
  keywords: [
    "AI glasses",
    "smart glasses",
    "wearable technology",
    "IRIS",
    "augmented reality",
    "AI assistant",
  ],
  authors: [{ name: "Hoang" }],
  openGraph: {
    title: "IRIS AI Glasses — The Future Is In Your Vision",
    description:
      "Discover AI-powered smart glasses that redefine work, travel and creativity with seamless real-time assistance.",
    url: "https://iris-ai-glasses.vercel.app",
    siteName: "IRIS AI Glasses",
    images: [
      {
        url: "/images/glassesAI.png",
        width: 1200,
        height: 630,
        alt: "IRIS AI Glasses — Smart Wearable Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRIS AI Glasses — The Future Is In Your Vision",
    description:
      "AI-powered smart glasses with real-time assistance, 48MP camera, and 120+ language translation.",
    images: ["/images/glassesAI.png"],
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
