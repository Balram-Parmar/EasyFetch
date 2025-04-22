import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download } from "../download";
import Disclaimer from "@/app/components/Disclaimer";

export const DownloadSection = () => {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 mb-10 sm:mb-16 mx-4 sm:mx-0">
      <CardHeader className="px-4 sm:px-6">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center 
                      bg-gradient-to-r from-pink-500 to-orange-500 
                      bg-clip-text text-transparent"
        >
          Instagram Video Downloader Free | Insta Reels Saver
        </h1>
        <p className="text-center text-gray-300 text-base sm:text-lg mt-2">
          Instagram to MP4 Converter for Reels, Stories & Videos
        </p>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="mb-4 text-center text-gray-300">
          <p className="text-sm sm:text-base mb-2">
            Get high-quality videos with our Instagram to MP4 converter 1080p
            and 4K. Download Instagram MP4 HD videos and reels without
            watermarks using our free insta saver reel tool.
          </p>
          <p className="text-sm sm:text-base text-pink-400 font-medium">
            The best IG reels downloader for download reels video in seconds
          </p>
        </div>
        <Download />
        <div className="mt-4 text-center text-gray-400 text-xs">
          <p>
            Use our Instagram reel download er to download IG reel video easily.
            Convert Instagram MP4 reels or download insta reels to MP4 format.
          </p>
          <p className="mt-1">
            Also supports Instagram to MP4 converter audio for extracting sound
            - download Instagram MP4 to MP3 with one click.
          </p>
        </div>
        <Disclaimer />
      </CardContent>
    </Card>
  );
};
