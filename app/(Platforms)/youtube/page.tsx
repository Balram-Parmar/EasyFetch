import { Header } from "./components/Header";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { FAQSection } from "./components/FAQSection";
import { Metadata } from "next/types";
import { Viewport } from "next";
import { ShareStrip } from "./components/Share";

// SEO metadata
export const metadata: Metadata = {
  title: "YouTube Shorts Downloader | EasyFetch",
  description:
    "Free online tool to download YouTube Shorts videos in high quality. No registration required, fast and easy to use.",
  keywords:
    "youtube shorts downloader, download youtube shorts, youtube video downloader, save youtube shorts, free youtube downloader",
  robots: "index, follow",
  openGraph: {
    title: "YouTube Shorts Downloader | EasyFetch",
    description:
      "Free online tool to download YouTube Shorts videos in high quality. No registration required, fast and easy to use.",
    type: "website",
    locale: "en_US",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF0000",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-row">
        {/* Left side ad space */}

        <div className="mt-[20%] hidden lg:block lg:w-1/6"></div>

        {/* Main content */}
        <div className="flex-1">
          <div className="container mx-auto px-0 sm:px-4 py-8 sm:py-15 mt-16 sm:mt-24">
            <div className="max-w-4xl mx-auto">
              <Header />
              <div className="mx-auto"></div>
              <div className="space-y-8 sm:space-y-12">
                <DownloadSection />
                <div className="mx-auto"></div>
                <ShareStrip />
                <div className="mx-auto"></div>
                <FeaturesSection />
                <AboutSection />
                <FAQSection />
              </div>
            </div>
          </div>
        </div>

        {/* Right side ad space */}
        <div className="mt-[20%] hidden lg:block lg:w-1/6"></div>
      </div>
    </>
  );
}
