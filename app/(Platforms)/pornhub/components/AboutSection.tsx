"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const AboutSection = () => {
  const [showNSFWImages, setShowNSFWImages] = useState(false);

  const toggleImages = () => {
    setShowNSFWImages(!showNSFWImages);
  };

  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
        Pornhub Video Downloader
      </h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Downloading videos directly from Pornhub can be challenging. With our
        Pornhub Video Downloader, you can easily download any video by simply
        pasting the URL. Our service is free, fast, and secure, offering
        multiple quality options for your downloads.
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
            What is Pornhub?
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Pornhub is one of the world&apos;s largest adult entertainment platforms,
            offering a vast library of videos. It features content in various
            categories and formats, with videos of different durations and
            qualities to suit viewer preferences.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
            How to Download Pornhub Videos?
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300">
            <li>Copy the URL of the Pornhub video you want to download</li>
            <li>Paste the URL into the input field above</li>
            <li>Click the download button or press Enter</li>
            <li>Wait for the video to process</li>
            <li>Select your preferred quality option</li>
            <li>Click the download button that appears</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
            Video Specifications
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
            <li>Supported formats: MP4</li>
            <li>Available quality options: 240p to 1080p (when available)</li>
            <li>Download with or without audio</li>
            <li>No watermarks on downloaded videos</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-[#FF9000] pl-4 italic text-sm sm:text-base text-gray-300">
          &ldquo;Our downloader ensures private and secure access to content for
          personal viewing without restrictions.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};
