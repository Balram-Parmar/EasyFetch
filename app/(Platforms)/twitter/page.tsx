import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "./download"
import { Card, CardContent } from "@/components/ui/card"
import { FaTwitter } from "react-icons/fa"
import Disclaimer from "@/app/components/Disclaimer"
import Common from '../../components/common'
import { data } from '../../components/data'
import { Metadata } from "next/types"



export const metadata: Metadata = {
  title: "X (Twitter) Video Downloader FHD | EasyFetch Media Download",
  description: "Free online tool to download Twitter videos, photos, and GIFs. Save media from tweets easily with our Twitter downloader.",
  keywords: "Twitter downloader, X video downloader, tweet media saver, download Twitter videos, Twitter GIF downloader, save Twitter photos, Twitter media extractor, high quality Twitter videos, FHD Twitter download"
}



export default function Page() {
  return (
    <div className="container mx-auto px-4 py-15 mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          {/* Back Button */}
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-gray-800/50 hover:border-blue-500/50 
                         hover:scale-[1.02] transition-all duration-200 
                         backdrop-blur-sm bg-card"
            >
              ← Back to platforms
            </Button>
          </Link>

          {/* Title Section */}
          <div className="flex flex-col sm:flex-row items-center w-full">
            {/* Icon Container */}
            <div className="p-3 rounded-xl bg-black/20 backdrop-blur-lg 
                            border border-gray-800/30 shadow-lg">
              <FaTwitter className="w-10 h-10 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            </div>
            
            {/* Animated Gradient Title */}
            <h1 className="text-2xl sm:text-4xl font-bold text-center 
                           bg-gradient-to-r from-blue-500 to-blue-600 
                           bg-clip-text text-transparent">
              Twitter Downloader
            </h1>
          </div>
        </div>

        {/* Download Section */}
        <Card>
          <CardContent className="pt-6">
            <Download />
            <Disclaimer />
          </CardContent>
        </Card>

        <Common test={data.twitter} />
      </div>
    </div>
  )
}
