import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Common from "../components/common";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <Header/>
          {children}
          <Common/>
          <Footer/>
          </div>

    );
  }