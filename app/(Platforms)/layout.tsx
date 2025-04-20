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
      <head>
        <Script
          id="ad-2"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',9230112,document.body||document.documentElement)`,
          }}
        />
      </head>
      <AdBlockDetectorWrapper>{children}</AdBlockDetectorWrapper>
    </>
  );
}
