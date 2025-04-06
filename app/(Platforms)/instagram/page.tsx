import { Header } from "./components/Header"
import { DownloadSection } from "./components/DownloadSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { AboutSection } from "./components/AboutSection"
import { FAQSection } from "./components/FAQSection"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Instagram Reel Downloader HD Online | EasyFetch Media Downloader",
  description: "Download Instagram Reels quickly and easily with our free online Instagram downloader. No registration required.",
  keywords: "Instagram downloader, Instagram reels downloader, download Instagram reels, Instagram video downloader, HD Instagram downloader, save Instagram reels, Instagram content saver, free Instagram downloader, no watermark Instagram downloader"
}

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
