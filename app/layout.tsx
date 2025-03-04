import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YouTube Shorts Downloader - Fast & Secure | 4K FHD Video Download',
  description: 'Download YouTube Shorts in Full HD, 4K, and MP3 formats quickly and securely with our privacy-first video downloader. No watermarks, no login required!',
  keywords: [
    "YouTube Shorts Downloader",
    "Download YouTube Shorts",
    "Shorts Video Downloader",
    "YouTube Shorts MP4 Download",
    "YouTube Shorts 4K Downloader",
    "Download Shorts without Watermark",
    "Fast YouTube Shorts Saver",
    "Save YouTube Shorts in HD",
    "Free YouTube Shorts Downloader",
    "YouTube Shorts No Watermark",
    "Shorts to MP3 Converter",
    "Online YouTube Shorts Downloader",
    "Private YouTube Shorts Download",
    "FHD YouTube Shorts Downloader",
    "Anonymous YouTube Shorts Downloader",
    "Download Shorts Video Online"
  ].join(", "), // Ensure keywords are formatted correctly
  authors: [{ name: "YourSiteName", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "YouTube Shorts Downloader - Fast & Secure",
    description: "Download YouTube Shorts videos in high quality (4K, 1080p, MP3) quickly and securely with no watermark.",
    url: "https://yourwebsite.com",
    siteName: "YouTube Shorts Downloader",
    images: [
      {
        url: "https://yourwebsite.com/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Shorts Downloader",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Downloader - No Watermark",
    description: "Easily download YouTube Shorts videos in HD, 4K, and MP3 formats with a secure and fast downloader.",
    images: ["https://yourwebsite.com/thumbnail.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <head>
        <meta name="keywords" content={metadata.keywords?.toString()} />
        <meta name="author" content="YourSiteName" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.openGraph?.title?.toString()} />
        <meta property="og:description" content={metadata.openGraph?.description?.toString()} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString()} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName?.toString()} />
      
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter?.title?.toString()} />
        <meta name="twitter:description" content={metadata.twitter?.description?.toString()} />
        <meta name="twitter:image" content={Array.isArray(metadata.twitter?.images) ? metadata.twitter.images[0]?.toString() : metadata.twitter?.images?.toString()} />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
