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
        <meta
          name="59330c6ac59bd33b36ca473799fc7e2483d76e01"
          content="59330c6ac59bd33b36ca473799fc7e2483d76e01"
        />
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
        <script>
(function(dchs){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = dchs || {};
s.src = "\/\/thatywexy.com\/bMX.VPscd_GklP0AYhWJct\/YeKml9\/u-ZOUNlQkhPBT_Y\/ygOyD\/I\/yDOQTWUwt\/NVjCIX4rMmjgIL5\/NKgW";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>
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
