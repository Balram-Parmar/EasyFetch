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
    default: "Download YT Shorts | Insta Reels | X (twitter) Videos FHD 100% Free Online - EasyFetch",
  },
  description:
    "EasyFetch offers fast, free downloading of YouTube Shorts, Instagram Reels, and X (Twitter) videos in maximum HD quality. No sign-up, no watermarks, secure and efficient downloading without personal data collection.",
  keywords: [
    "youtube shorts downloader", 
    "instagram reels download", 
    "twitter video downloader", 
    "x video download", 
    "free video downloader", 
    "HD video download", 
    "online video downloader", 
    "social media downloader",
    "no watermark",
    "high quality video"
  ],
  openGraph: {
    title: "YT Shorts, Instagram Reels & X Videos Downloader - 100% Free, HD Quality",
    description:
      "Fast and secure tool for downloading YouTube Shorts, Instagram Reels, and X (Twitter) videos in maximum quality. No registration, no watermarks, and completely free.",
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
    title: "YT Shorts, Instagram Reels & X Videos Downloader - 100% Free, HD Quality",
    description:
      "Fast and secure tool for downloading YouTube Shorts, Instagram Reels, and X (Twitter) videos in maximum quality. No registration, no watermarks, and completely free.",
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
