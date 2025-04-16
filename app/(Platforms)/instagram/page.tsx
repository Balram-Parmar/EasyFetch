import { Header } from "./components/Header";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { FAQSection } from "./components/FAQSection";
import { Metadata } from "next/types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
        <Header />

        {/* Download Section with H1 placed at the top */}
        <DownloadSection />

        <div className="space-y-8 sm:space-y-10">
          {/* Features Section */}
          <FeaturesSection />

          {/* How to Download Instagram Reels Online Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
              How to Download Instagram Reels Online
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-pink-500/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="relative w-full h-[150px] mb-4 mx-auto">
                    <Image
                      src="/2.png"
                      alt="Copy Instagram URL"
                      width={150}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Step 1: Copy URL
                  </h3>
                  <p className="text-sm text-gray-300">
                    Find the Instagram Reel you want to download and copy its
                    URL from the share button
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-pink-500/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="relative w-full h-[150px] mb-4 mx-auto">
                    <Image
                      src="/3.png"
                      alt="Paste URL"
                      width={150}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Step 2: Paste Link
                  </h3>
                  <p className="text-sm text-gray-300">
                    Paste the URL into our converter tool above
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-pink-500/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="relative w-full h-[150px] mb-4 mx-auto">
                    <Image
                      src="/4.png"
                      alt="Download Reel"
                      width={150}
                      height={150}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Step 3: Download
                  </h3>
                  <p className="text-sm text-gray-300">
                    Click download to save your Instagram reels in HD or extract
                    audio
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What is Instagram Reels Section - Simplified */}
          <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
              What is Instagram Reels?
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Instagram Reels are short-form vertical videos that can be up
                  to 90 seconds long, launched to compete with TikTok. These
                  engaging videos appear on the Explore page, allowing creators
                  to reach a wider audience beyond their followers.
                </p>
                <p className="text-sm sm:text-base text-gray-300">
                  Our Instagram video downloader free service lets you save and
                  share these viral moments. Whether you&apos;re looking for an
                  Instagram to MP4 converter 4K solution for maximum quality or
                  need to download Instagram MP4 to MP3 for audio extraction,
                  we&apos;ve built the tool for you.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-[300px] h-[300px]">
                  <Image
                    src="/1.png"
                    alt="Instagram Reels Example"
                    width={300}
                    height={300}
                    className="rounded-lg border-2 border-pink-500/30 shadow-lg shadow-pink-500/20"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Key Features of Instagram Reels
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Short-form videos (up to 90 seconds)</li>
                    <li>Music and audio library</li>
                    <li>AR effects and speed controls</li>
                    <li>Algorithmic discoverability</li>
                    <li>Seamless sharing to Stories</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Why Save Instagram Reels?
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Create content collections</li>
                    <li>Watch offline</li>
                    <li>Repurpose on other platforms</li>
                    <li>Save tutorials and educational content</li>
                    <li>Archive content that might be deleted</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
