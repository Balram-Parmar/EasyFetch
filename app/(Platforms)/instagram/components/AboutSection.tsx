import { Button } from "@/components/ui/button"
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"

export const AboutSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Instagram Reel Downloader</h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Downloading Instagram Reels directly from the platform is not possible. Our website is a free online tool that allows users to quickly download Reels from Instagram. You can bookmark our website to use it again in the future. If you have an Instagram Reel URL, you can download the video to your device. Our website is very simple to use.
      </p>
      
      {/* Share Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
        <Button variant="outline" className="flex-1 sm:flex-none items-center gap-2 text-sm sm:text-base">
          <FaFacebook className="text-blue-500" /> Share
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none items-center gap-2 text-sm sm:text-base">
          <FaLinkedin className="text-blue-600" /> Share
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none items-center gap-2 text-sm sm:text-base">
          <FaInstagram className="text-pink-500" /> Share
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none items-center gap-2 text-sm sm:text-base">
          <FaWhatsapp className="text-green-500" /> Share
        </Button>
      </div>

      {/* What is Instagram Reels */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">What is Instagram Reels</h3>
        <p className="text-sm sm:text-base text-gray-300">
          Instagram Reels is a feature that allows users to create and share short-form videos. Similar to TikTok, Reels are typically 15-90 seconds long and can include music, effects, and creative editing tools. Reels have become a popular way to share entertaining and engaging content on Instagram.
        </p>
      </div>

      {/* How to Download */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">How to Download Instagram Reels</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Open the Instagram Reel you want to download</li>
          <li>Click on the three dots (...) in the top right corner</li>
          <li>Select "Copy link" to copy the URL to your clipboard</li>
          <li>Paste the URL in our website and click the Download button</li>
        </ol>
      </div>

      {/* Video Specifications */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">Instagram Reel Specifications</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Reels can be 15-90 seconds long</li>
          <li>Supported formats: MP4</li>
          <li>Maximum file size: 100MB</li>
          <li>Recommended resolution: 1080x1920 (9:16 aspect ratio)</li>
          <li>We download Reels in their original quality</li>
        </ul>
      </div>

      {/* Quote */}
      <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-pink-500">
        <p className="text-sm sm:text-base text-gray-300 italic">
          "In a world where content is king, having the right tools to save and share what matters to you is essential. Instagram Reels' creative content deserves to be preserved and enjoyed beyond the platform."
        </p>
      </div>
    </section>
  )
} 