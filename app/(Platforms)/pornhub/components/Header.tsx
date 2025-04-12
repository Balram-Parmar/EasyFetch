import { FaPlay } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
      <div className="flex items-center justify-center mb-4">
        <FaPlay className="h-8 w-8 sm:h-10 sm:w-10 text-[#FF9000]" aria-hidden="true" />
        <h1 className="text-2xl sm:text-4xl font-bold ml-2 text-gray-800 dark:text-white">
          Pornhub Downloader
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
          Download your favorite Pornhub videos in the highest quality with our free online downloader.
          No registration, no software installation, and no limits.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            <span className="mr-1 text-[#FF9000]">✓</span> Free to use
          </div>
          <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            <span className="mr-1 text-[#FF9000]">✓</span> No registration
          </div>
          <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            <span className="mr-1 text-[#FF9000]">✓</span> High-quality videos
          </div>
          <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            <span className="mr-1 text-[#FF9000]">✓</span> Fast downloads
          </div>
        </div>
      </div>
    </header>
  );
}; 