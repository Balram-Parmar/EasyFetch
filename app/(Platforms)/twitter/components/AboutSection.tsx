import { Button } from "@/components/ui/button"
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const AboutSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
        Twitter Video Downloader
      </h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Downloading Twitter videos directly from the platform is not possible. However, with our Twitter Video Download website, you can easily download any Twitter video by simply pasting its URL. Our service is free, fast, and secure.
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
        <Button variant="outline" className="flex-1 sm:flex-none">
          <FaFacebook className="mr-2" />
          Share on Facebook
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none">
          <FaLinkedin className="mr-2" />
          Share on LinkedIn
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none">
          <FaTwitter className="mr-2" />
          Share on Twitter
        </Button>
        <Button variant="outline" className="flex-1 sm:flex-none">
          <FaWhatsapp className="mr-2" />
          Share on WhatsApp
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
            What are Twitter Videos?
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Twitter videos are short-form videos that can be shared on the Twitter platform. They can be up to 140 seconds long and are designed to be engaging and informative. Twitter videos can be found in tweets and are a popular way to share content on the platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
            How to Download Twitter Videos?
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
            <li>Copy the URL of the Twitter video you want to download</li>
            <li>Paste the URL into the input field above</li>
            <li>Click the download button or press Enter</li>
            <li>Wait for the video to process</li>
            <li>Click the download button that appears</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
            Video Specifications
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
            <li>Maximum length: 140 seconds</li>
            <li>Supported format: MP4</li>
            <li>Maximum file size: 50MB</li>
            <li>Recommended resolution: 1080p</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm sm:text-base text-gray-300">
          &ldquo;In a world of constant updates, having the right tools to save and share what matters is essential.&rdquo;
        </blockquote>
      </div>
    </section>
  )
} 