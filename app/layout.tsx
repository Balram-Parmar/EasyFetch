import './globals.css';

import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
  
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
