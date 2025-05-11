import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="ad-2"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',9230112,document.body||document.documentElement)`,
          }}
        />

        <meta name="monetag" content="a9c180b8e8aba5caa710dde5a086148f"></meta>
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
