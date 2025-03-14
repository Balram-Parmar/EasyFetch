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
    "A simple and efficient tool for downloading YouTube Shorts videos in Maximum Quality Available. Fast, secure, and no personal data required.",
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
