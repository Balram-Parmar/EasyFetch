import { Metadata } from "next/types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Download } from "./download";
import {
  Seo,
  HowToDownload,
  WhatIsInstagram,
  HowToDownloadReelsGuide,
} from "./Components/Seo";
import { Features } from "./Components/Features";
import { Faq } from "./Components/Faq";
import { ShareStrip } from "./Components/Share";

export const metadata: Metadata = {
  title:
    "Instagram To MP4 Converter - Download Instagram Reels, Videos 1080p & 4K",
  description:
    "EasyFetch.me is a free tool to convert Instagram Reels to MP4 in 1080p or 4K quality. Download Instagram videos, extract audio, and save content without watermarks on any device.",
  keywords:
    "instagram video downloader free, insta saver reel, insta reels saver, instagram to mp4 converter, instagram to mp4 converter reels, instagram to mp4 converter 4k, instagram to mp4 converter reddit, instagram to mp4 converter 1080p, instagram to mp4 converter audio, insta reel to mp4 converter, download reels video, insta reels downloader, ig reels downloader, instagram reel download er, ins reels download, download ig reels, download ig reel video, download instagram mp4 to mp3, download instagram mp4 hd, download instagram mp4 link, download instagram mp4 reels, instagram download mp4 format, download instagram video mp4 online, download insta reels to mp4",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 sm:px-4 py-8 sm:py-15 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center 
                      bg-gradient-to-r from-pink-500 to-orange-500 
                      bg-clip-text text-transparent mb-8"
        >
          Instagram Reels To MP4
        </h1>
        <div className="flex justify-center mb-12">
          <button
            className="transition-all duration-300 px-6 py-3 text-sm sm:text-base font-medium 
                           bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl 
                           shadow-emerald-50 hover:shadow-lg transform hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-card-500 focus:ring-opacity-50"
          >
            <Link href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </button>
        </div>

        <Card className="mx-3 sm:mx-0 shadow-xl border-0 overflow-hidden bg-white dark:bg-gray-800 rounded-xl">
          <CardContent className="p-4 sm:p-8">
            <Download />
          </CardContent>
        </Card>
        <div className="mt-10 w-full">
          <ShareStrip />
        </div>

        <Card className="mt-20 shadow-xl">
          <CardContent className="p-4 sm:p-8">
            <Seo />
          </CardContent>
        </Card>

        <div className=" w-full mt-20">
          <Features></Features>
        </div>
        <div className="mt-20 w-full">
          <Card className="shadow-xl">
            <CardContent className="p-4 sm:p-8">
              <WhatIsInstagram />
            </CardContent>
          </Card>
        </div>
        <div className="mt-20 w-full">
          <Card className="shadow-xl">
            <CardContent className="p-4 sm:p-8">
              <HowToDownload />
            </CardContent>
          </Card>
        </div>
        <div className="mt-20 w-full">
          <Card className="shadow-xl">
            <CardContent className="p-4 sm:p-8">
              <HowToDownloadReelsGuide />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
