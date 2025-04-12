"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export const AboutSection = () => {
  const [showNSFWImages, setShowNSFWImages] = useState(false);

  const toggleImages = () => {
    setShowNSFWImages(!showNSFWImages);
  };

  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        About Our Pornhub Downloader
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Our Pornhub video downloader is a simple and efficient tool that allows you to save your favorite videos from Pornhub to watch offline. Whether you want to build a personal collection or just want to watch videos without an internet connection, our downloader makes it quick and easy.
          </p>
          
          <p>
            Using our tool is straightforward - just copy the URL of the Pornhub video you want to download, paste it into the input field above, and click the download button. Our system will process the video and provide you with a download link. The download process is entirely free and doesn't require any registration or software installation.
          </p>

          <p>
            We prioritize your privacy and security. All downloads are processed through secure connections, and we don't store any of your downloaded videos or personal information on our servers. Your data remains completely private throughout the process.
          </p>

          <p>
            Our Pornhub downloader is compatible with all major browsers and devices, including mobile phones, tablets, and computers. You can use it anytime, anywhere, without any limitations.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white" id="how-to-download">How to use our Pornhub video downloader:</h3>
            <Button 
              onClick={toggleImages} 
              variant="outline" 
              className={`flex items-center gap-2 ${showNSFWImages ? 'bg-red-100 hover:bg-red-200 text-red-700 border-red-300' : 'bg-green-100 hover:bg-green-200 text-green-700 border-green-300'} transition-colors`}
              size="sm"
            >
              {showNSFWImages ? (
                <>
                  <EyeOffIcon className="h-4 w-4" />
                  <span>Hide NSFW Images</span>
                </>
              ) : (
                <>
                  <EyeIcon className="h-4 w-4" />
                  <span>Show NSFW Images</span>
                </>
              )}
            </Button>
          </div>
          
          <ol className="list-decimal list-inside space-y-6 text-gray-600 dark:text-gray-300">
            <li>
              Find the video you want to download on Pornhub and copy the URL from your browser's address bar
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
                <img 
                  src="/1.png" 
                  alt="Screenshot showing how to copy a Pornhub video URL from the browser address bar" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              Paste the Pornhub URL into our input field above and click the download button
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/8.png" 
                  alt="Screenshot showing where to paste the Pornhub URL in our downloader tool" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              Copy the link that appears from our website
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/8.png" 
                  alt="Screenshot showing the generated download link that needs to be copied" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              Install the HLS Downloader Pro extension from <a href="https://chromewebstore.google.com/detail/hls-downloader-pro/mdfhlmcipgjjilidofjpkookbfiakfdj" target="_blank" rel="noopener noreferrer" className="text-[#FF9000] hover:underline">Chrome Web Store  (Click Here To Download)  </a>
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/2.png" 
                  alt="Screenshot showing the HLS Downloader Pro extension in Chrome Web Store" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              From The Extension Tab Click On HLS Downloader Pro as shown in the image below
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/3.png" 
                  alt="Screenshot showing how to access the HLS Downloader Pro extension from browser toolbar" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              Now Paste The Link You Copied From Our Website Into The Extension as shown in the image below And Click (+) icon
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/4.png" 
                  alt="Screenshot showing where to paste the copied link in the HLS Downloader Pro extension" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              Now Click The Download Button And Wait For The Video To Download
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/5.png" 
                  alt="Screenshot showing how to click the download button in HLS Downloader Pro" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
            <li>
              The Video has started downloading, You can see the progress in the extension as shown in the image below. Enjoy ✌️
              <div className={`mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 ${showNSFWImages ? 'block' : 'hidden'}`}>
              <img 
                  src="/6.png" 
                  alt="Screenshot showing the download progress of the video in HLS Downloader Pro" 
                  className="w-full max-w-2xl mx-auto h-auto shadow-sm"
                  loading="lazy"
                />
              </div>
              {!showNSFWImages && (
                <div className="mt-2 py-6 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <EyeOffIcon className="h-8 w-8 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500 mt-2">Enable images to view screenshot</p>
                </div>
              )}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}; 