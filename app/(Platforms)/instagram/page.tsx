import { FaInstagram } from 'react-icons/fa';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "../download"
import { Card, CardContent} from "@/components/ui/card"
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-15 mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          {/* Back Button */}
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-gray-800/50 hover:border-purple-500/50 
                 hover:scale-[1.02] transition-all duration-200 
                 backdrop-blur-sm bg-black/5"
            >
              ← Back to platforms
            </Button>
          </Link>
        
          {/* Title Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            {/* Icon Container */}
            <div className="p-3 rounded-xl bg-black/20 backdrop-blur-lg 
                    border border-gray-800/30 shadow-lg">
              <FaInstagram className="w-10 h-10 text-purple-500 drop-shadow-[0_0_15px_rgba(199,21,133,0.3)]" />
            </div>
            
            {/* Gradient Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center 
                  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                  bg-clip-text text-transparent py-1 leading-normal">
              Instagram Downloader
            </h1>
          </div>
        </div>
    
        {/* Download Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <Download />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page;