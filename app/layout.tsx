import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
       
      </head>
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
