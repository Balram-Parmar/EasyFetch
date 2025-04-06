import { Button } from "@/components/ui/button"
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const AboutSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">X (Twitter) Video Downloader</h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Downloading X (Twitter) videos directly from the platform is not possible. Our website is a free online tool that allows users to quickly download videos from X (Twitter). You can bookmark our website to use it again in the future. If you have a X (Twitter) video URL, you can download the video to your device. Our website is very simple to use.
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
          <FaTwitter className="text-blue-400" /> Share
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none items-center gap-2 text-sm sm:text-base">
          <FaWhatsapp className="text-green-500" /> Share
        </Button>
      </div>

      {/* What is X (Twitter) */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">What is X (Twitter)</h3>
        <p className="text-sm sm:text-base text-gray-300">
          X (formerly Twitter) is a social media platform that allows users to share short messages and videos. It's known for its real-time updates and has become a popular platform for news, entertainment, and social interaction. X videos are a great way to share content with your followers.
        </p>
      </div>

      {/* How to Download */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">How to Download X Videos</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Open the X video you want to download</li>
          <li>Click on the Share icon</li>
          <li>Select "Copy link" to copy the URL to your clipboard</li>
          <li>Paste the URL in our website and click the Download button</li>
        </ol>
      </div>

      {/* Video Specifications */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">X Video Specifications</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Videos can be up to 2 minutes and 20 seconds long</li>
          <li>Supported formats: MP4, MOV</li>
          <li>Maximum file size: 512MB</li>
          <li>Recommended resolution: 1280x720 (720p) or higher</li>
          <li>We download videos in their original quality</li>
        </ul>
      </div>

      {/* Quote */}
      <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm sm:text-base text-gray-300 italic">
          "In a world where content is king, having the right tools to save and share what matters to you is essential. X's video content deserves to be preserved and enjoyed beyond the platform."
        </p>
      </div>
    </section>
  )
} 