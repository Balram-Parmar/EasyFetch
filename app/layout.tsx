import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next'
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://easyfetch.app'),
  title: {
    default: 'EasyFetch Video Downloader',
    template: '%s | EasyFetch'
  },
  description: 'Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality. No registration required, fast and secure.',
  keywords: ['video downloader', 'youtube downloader', 'instagram downloader', 'tiktok downloader', 'hd video download', '4k video download', 'free video downloader'],
  openGraph: {
    title: 'EasyFetch Video Downloader - Download YouTube, Instagram & More in HD',
    description: 'Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality.',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'EasyFetch Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyFetch Video Downloader - Download YouTube, Instagram & More in HD',
    description: 'Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
