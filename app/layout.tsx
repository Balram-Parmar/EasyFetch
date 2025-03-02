import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Downloader - Privacy First',
  description: 'Download videos securely and privately with our fast and anonymous video downloader.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} min-h-screen`}>

        {/* <Header/> */}
        {children}
        <Analytics />
    {/* <Common /> */}

{/* <Footer/> */}
      </body>
    </html>
  );
}