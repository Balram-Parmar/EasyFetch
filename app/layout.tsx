import "./globals.css";
import Script from "next/script";
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
    "downloading YouTube Shorts videos in MAXIMUM Quality Available. A simple and efficient tool for downloading YouTube Shorts videos. Fast, secure, and no personal data required.",
  keywords: [
    "youtube short video downloader",
    "download youtube shorts video",
    "download youtube short video",
    "youtube shorts download app",
    "download youtube shorts",
    "download youtube short",
    "youtube shorts downloader",
    "youtube short video download",
    "youtube shorts download",
    "youtube shorts to mp4",
    "save youtube shorts",
    "youtube shorts saver",
    "youtube shorts downloader",
    "youtube shorts downloader online",
    "youtube shorts download hd",
    "1080p youtube shorts downloader",
    "best youtube shorts downloader",
    "how to download youtube shorts in gallery",
    "mp4 downloader youtube shorts",
    "download youtube shorts free",
    "yt shorts downloader",
    "yt shorts downloader free download hd",
    "yt shorts downloader mp4 converter",
    "yt shorts downloader 1080p",
    "yt shorts downloader 4k",
    "yt shorts downloader online",
    "yt shorts downloader reddit"
  ],
  openGraph: {
    title: "YT Shorts Downloader FHD 100% Free Online - EasyFetch",
    description:
      "A simple and efficient tool for downloading YouTube Shorts videos in Maximum Quality Available. Fast, secure, and no personal data required.",
    url: "https://easyfetch.me",
    siteName: "EasyFetch",
    images: [
      {
        url: "https://easyfetch.me/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YT Shorts Downloader FHD 100% Free Online - EasyFetch",
    description:
      "A simple and efficient tool for downloading YouTube Shorts videos in Maximum Quality Available. Fast, secure, and no personal data required.",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    images: ["https://easyfetch.me/twitter-image.png"],
  },
  alternates: {
    canonical: "https://easyfetch.me",
  },
  robots: {
    index: true,
    follow: true,
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
