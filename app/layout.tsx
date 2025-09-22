import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FomoFi - Cryptocurrency Investment Platform | Earn Daily Returns",
  description: "Join FomoFi, the leading cryptocurrency investment platform. Earn up to 15% APY with TRC20 USDT deposits. Secure, transparent, and profitable investment plans for all levels.",
  keywords: "cryptocurrency investment, USDT investment, TRC20, daily returns, passive income, crypto trading, investment platform",
  authors: [{ name: "FomoFi Team" }],
  creator: "FomoFi",
  publisher: "FomoFi",
  robots: "index, follow",
  openGraph: {
    title: "FomoFi - Cryptocurrency Investment Platform",
    description: "Earn up to 15% APY with secure cryptocurrency investments. Start with just $100 USDT.",
    url: "https://fomofi.com",
    siteName: "FomoFi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FomoFi - Cryptocurrency Investment Platform",
    description: "Earn up to 15% APY with secure cryptocurrency investments. Start with just $100 USDT.",
    creator: "@fomofi",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00ff88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
