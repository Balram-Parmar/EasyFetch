import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next'
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: {
    default: 'EasyFetch Video Downloader',
    template: '%s | EasyFetch'
  },
  description: 'Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality. No registration required, fast and secure.',
  keywords: ['video downloader', 'youtube downloader', 'instagram downloader', 'tiktok downloader', 'hd video download', '4k video download', 'free video downloader'],

};
interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GM8MXXP029"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GM8MXXP029');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
