import React from "react";
import Script from "next/script";
import AdBlockDetectorWrapper from "./AdBlockDetectorWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
  
      <AdBlockDetectorWrapper>{children}</AdBlockDetectorWrapper>
    </>
  );
}
