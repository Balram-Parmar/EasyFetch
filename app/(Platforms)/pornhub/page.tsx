import { Header } from "./components/Header"
import { DownloadSection } from "./components/DownloadSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { AboutSection } from "./components/AboutSection"
import { FAQSection } from "./components/FAQSection"
import { Metadata } from "next/types"
import { Viewport } from "next"

// SEO metadata
export const metadata: Metadata = {
  title: "Pornhub Video Downloader | EasyFetch",
  description: "Free online tool to download Pornhub videos in high quality. No registration required, fast and easy to use.",
  keywords: "pornhub downloader, download pornhub videos, pornhub video downloader, save pornhub videos, free pornhub downloader",
  robots: "index, follow",
  openGraph: {
    title: "Pornhub Video Downloader | EasyFetch",
    description: "Free online tool to download Pornhub videos in high quality. No registration required, fast and easy to use.",
    type: "website",
    locale: "en_US",
  }
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF9000",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 sm:px-4 py-8 sm:py-15 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="space-y-8 sm:space-y-12">
          <DownloadSection />
          <FeaturesSection />
          <AboutSection />
          <FAQSection />
        </div>
      </div>
    </div>
  )
}