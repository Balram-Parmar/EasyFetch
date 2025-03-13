import "./globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | EasyFetch",
    default: "YT Shorts Downloader FHD 100% Free Online - EasyFetch",
  },
  description:
    "A simple and efficient tool for downloading YouTube Shorts videos in Maximum Quality Available. Fast, secure, and no personal data required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
