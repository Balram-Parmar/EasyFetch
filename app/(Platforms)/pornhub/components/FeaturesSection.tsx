import { ShieldCheck, Zap, Download, Cloud, RefreshCw } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10 text-gray-800 dark:text-white">
        Why Use Our Pornhub Downloader?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FF9000]/10 rounded-full p-3">
              <ShieldCheck className="h-6 w-6 text-[#FF9000]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We don't store your videos or personal data. All downloads are processed securely and privately.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FF9000]/10 rounded-full p-3">
              <Zap className="h-6 w-6 text-[#FF9000]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our optimized servers ensure rapid video processing and quick downloads without any hassle.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FF9000]/10 rounded-full p-3">
              <Download className="h-6 w-6 text-[#FF9000]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">High Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Download videos in the highest available quality to enjoy them in full resolution.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FF9000]/10 rounded-full p-3">
              <Cloud className="h-6 w-6 text-[#FF9000]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">No Installation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                100% web-based solution, Just Need to Install One Extention If you want to download in FHD
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300 sm:col-span-2">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FF9000]/10 rounded-full p-3">
              <RefreshCw className="h-6 w-6 text-[#FF9000]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Unlimited Downloads</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Download as many videos as you want without any limits, completely free of charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 