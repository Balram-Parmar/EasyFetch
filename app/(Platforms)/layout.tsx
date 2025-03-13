import React from 'react';
import Common from '../components/common';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        
          {children}
         <Common/>
        
          </div>

    );
  }