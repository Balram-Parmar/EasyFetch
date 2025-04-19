import React from "react";
import { Button } from "@/components/ui/button";
import { FaRegSadTear, FaShieldAlt } from "react-icons/fa";

export const AdBlockerDetected = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
        <div className="max-w-2xl w-full bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border-2 border-red-600/50 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-red-600/20 text-red-500">
              <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-100">
            We&apos;ve Detected an Ad Blocker
          </h2>

          <div className="space-y-4 mb-6">
            <p className="text-sm sm:text-base text-gray-300">
              We understand that ads can sometimes be intrusive, but our service
              relies on minimal advertising to keep our EasyFetch downloader free
              for everyone.
            </p>

            <p className="text-sm sm:text-base text-gray-300">
              Would you kindly consider disabling your ad blocker for our site?
              We promise to maintain a clean experience with only essential ads.
            </p>

            <div className="flex items-center justify-center gap-2 text-yellow-400 bg-yellow-400/10 p-3 rounded-lg">
           🙏🙏
              <p className="text-sm">
            WE NEED YOUR SUPPORT TO KEEP THIS SERVICE FREE! 
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.location.reload()}
            >
              I&apos;ve Disabled My Ad Blocker
            </Button>

       
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Thank you for your understanding and support. ❤️
          </p>
        </div>
      </div>
    </div>
  );
};
