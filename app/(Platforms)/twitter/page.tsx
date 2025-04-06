import { Header } from "./components/Header"
import { DownloadSection } from "./components/DownloadSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { AboutSection } from "./components/AboutSection"
import { FAQSection } from "./components/FAQSection"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "X (Twitter) Video Downloader FHD | EasyFetch Media Download",
  description: "Free online tool to download Twitter videos, photos, and GIFs. Save media from tweets easily with our Twitter downloader.",
  keywords: "Twitter downloader, X video downloader, tweet media saver, download Twitter videos, Twitter GIF downloader, save Twitter photos, Twitter media extractor, high quality Twitter videos, FHD Twitter download"
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
