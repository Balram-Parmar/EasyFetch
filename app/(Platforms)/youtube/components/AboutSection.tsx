import { Button } from "@/components/ui/button"
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const AboutSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">YouTube Shorts Downloader</h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Downloading YouTube shorts video directly from YouTube is not possible. Our website is a free online tool that allows users to quickly download short videos from YouTube. You can bookmark our website to use it again in the future. Anyways, If You have YouTube short video URL, you can download the video to your device. Our website is very simple to use.
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

      {/* What is YouTube Shorts */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">What is YouTube Shorts</h3>
        <p className="text-sm sm:text-base text-gray-300">
          YouTube Shorts is a new short-form video feature from YouTube that allows users to create and watch videos up to 60 seconds long. YouTube launched YouTube shorts to compete with other apps like Tiktok, and Instagram reels. You do not need any extra app to watch YouTube shorts. It is integrated into the official YouTube app. Watch endless content in YouTube shorts via your mobile devices. Watch videos of your choice in short form.
        </p>
        <p className="text-sm sm:text-base text-gray-300 mt-2">
          If you are bored with long-form video content, YouTube shorts provided videos under 1 minute for your entertainment.
        </p>
      </div>

      {/* How to Make Shorts */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">How to Make YouTube Shorts Video</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Open the YouTube app from your phone.</li>
          <li>Click on + Icon from the middle.</li>
          <li>Hit "Create a Short" button.</li>
          <li>Now follow on-screen instructions to make a YouTube shorts video.</li>
        </ol>
      </div>

      {/* How to Download */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">How to Download YouTube Shorts</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
          <li>Open YouTube Shorts video which you wish to download.</li>
          <li>Click on the Share icon.</li>
          <li>Select the "Copy link" option to copy the URL to your clipboard.</li>
          <li>Enter Video URL in our website, click on the Download Button</li>
        </ol>
      </div>

      {/* Quote */}
      <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-emerald-500">
        <p className="text-sm sm:text-base text-gray-300 italic">
          "Sometimes, the hardest battles bring the greatest rewards. They teach us resilience, patience, and the importance of perseverance. It's in the struggle that we discover our true potential and learn what we are truly capable of."
        </p>
      </div>
    </section>
  )
} 