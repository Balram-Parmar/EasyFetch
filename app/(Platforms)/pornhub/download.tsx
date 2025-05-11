"use client";
import { useState, ReactNode, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Search,
  Loader2,
  ChevronRight,
  Clipboard,
  CheckCircle,
  Bell,
  Lock,
  Unlock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
interface apiData {
  title: string;
  url?: string;
  message: string;
  detail?: string;
  resolutions?: {
    [key: string]: string; // e.g. "144p": "https://url-for-144p-resolution"
  };
}

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const [downloadData, setDownloadData] = useState<{
    url?: string;
    title: string;
    resolutions?: {
      [key: string]: string;
    };
  } | null>(null);
  const [id, setId] = useState<string>("");
  const [currentBanner, setCurrentBanner] = useState<number>(0); // Start with the first banner
  const banners = ["/banner1.gif", "/banner2.gif", "/banner3.jpg"];

  const clearStatusMessage = (timeout: number = 5000) => {
    setTimeout(() => {
      setStatusMessage("");
      setError("");
    }, timeout);
  };

  // Effect for banner rotation only
  useEffect(() => {
    // Set initial banner to the first one (index 0)
    setCurrentBanner(0);

    // Rotate banners every 5 seconds
    const bannerRotator = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    // Clear banner rotator on cleanup
    return () => {
      clearInterval(bannerRotator);
    };
  }, [banners.length]);

  // Effect to automatically hide the notification
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    const extractedId = extractPornhubId(url) || "";
    setId(extractedId);
    console.log("Extracted ID:", extractedId);
  }, [url]);
  function extractPornhubId(url: string): string | null {
    // Support Pornhub video URLs from all domains (main site, regional domains, and subdomains)
    const patterns = [
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/view_video\.php\?viewkey=([\w\d]+)/i,
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/video\/show\?viewkey=([\w\d]+)/i,
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/videos\/(\w+)/i,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  const handleCopyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show both the button state change and floating notification
      setCopied(true);
      setShowTooltip(true);
      setShowNotification(true);

      // Reset button state after 2 seconds
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    });
  };

  const handleDownload = async (inputUrl: string) => {
    // Reset states
    setError("");
    setStatusMessage("");
    setIsProcessing(true);
    setCopied(false);
    setShowTooltip(false);
    setShowNotification(false);
    setDownloadData(null);

    try {
      // Input validation
      if (!inputUrl.trim()) {
        throw new Error("Please enter a valid Pornhub video URL.");
      }

      const videoId = extractPornhubId(inputUrl);
      if (!videoId) {
        throw new Error(
          "Invalid Pornhub URL. Please check the URL and try again."
        );
      }

      // Save the video ID
      setId(videoId);

      // Show initial processing message
      setStatusMessage("Preparing your download...");

      // Generate secure token
      const token = btoa(`${inputUrl}pornhub`).split("").reverse().join("");

      // Make API request
      const response = await fetch("https://easyfetchbackend.ddns.net/ph", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl, type: "pornhub", x: token }),
      });

      // Handle response
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData);
        throw new Error(
          errorData.detail ||
            `Failed to process video (Status: ${response.status}). Please try again.`
        );
      }

      const data: apiData = await response.json();
      console.log("API Success Response:", data);

      if (data.message !== "success") {
        throw new Error(
          data.detail ||
            data.message ||
            "Failed to process video. Please try again."
        );
      }

      // Success case - store download data
      setDownloadData({
        url: data.url || "",
        title: data.title || "video",
        resolutions: data.resolutions || {},
      });

      // Set status message
      setStatusMessage(`Your download is ready.`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      setStatusMessage("");
      clearStatusMessage(5000);
    } finally {
      setIsProcessing(false);
      // Don't clear the URL here as it would affect the ID as well
      // setUrl("");
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md dark:bg-card p-4 sm:p-6">
      {/* Global notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top duration-300">
          <Bell className="h-5 w-5" />
          <span>URL copied to clipboard!</span>
        </div>
      )}

      <h2 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">
        Pornhub Video Downloader
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            type="text"
            placeholder="Paste your Pornhub video URL here..."
            className="w-full pl-10 pr-4 py-3 sm:py-5 text-sm sm:text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9000] focus:border-[#FF9000] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onPaste={(e) => {
              e.preventDefault();
              const pastedText = e.clipboardData.getData("text");
              setUrl(pastedText);
              handleDownload(pastedText);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDownload(url);
              }
            }}
            aria-label="Pornhub video URL input"
          />
        </div>

        <Button
          onClick={() => handleDownload(url)}
          disabled={isProcessing}
          className="bg-[#FF9000] hover:bg-[#FF9000]/80 text-white shadow-[0_0_15px_rgba(255,144,0,0.5)] hover:shadow-[0_0_20px_rgba(255,144,0,0.7)] transition-all duration-300 px-4 py-3 sm:px-5 sm:py-5 rounded-xl w-full sm:w-auto"
          aria-label={isProcessing ? "Processing video" : "Download video"}
        >
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          ) : (
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          )}
        </Button>
      </div>

      {error && (
        <div
          className="text-sm sm:text-base text-center mt-2 text-red-500 dark:text-red-400"
          role="alert"
        >
          {error}
        </div>
      )}

      {statusMessage && (
        <div className="text-sm sm:text-base text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}

      {downloadData && (
        <div className="flex flex-col items-center gap-6 mt-4">
          {/* Download Buttons */}
          <div className="w-full mt-4">
            <h3 className="text-center font-bold text-lg mb-3 text-gray-800 dark:text-white">
              Select Quality to Download
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {downloadData?.resolutions ? (
                // Display up to 6 resolution buttons
                Object.entries(downloadData.resolutions)
                  .slice(0, 6)
                  .map(([resolution, downloadUrl]) => (
                    <Link
                      key={resolution}
                      href={`/downloader?url=${encodeURIComponent(
                        downloadUrl
                      )}&title=${encodeURIComponent(
                        `${downloadData.title} (${resolution})`
                      )}&id=${encodeURIComponent(id)}`}
                      className="py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition-all duration-300 bg-[#FF9000] hover:bg-[#FF9000]/80 shadow-[0_0_15px_rgba(255,144,0,0.5)] hover:shadow-[0_0_20px_rgba(255,144,0,0.7)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Unlock className="h-4 w-4" />
                      Download {resolution}
                    </Link>
                  ))
              ) : downloadData?.url ? (
                // Fallback for legacy API format (single URL)
                <Link
                  href={`/downloader?url=${encodeURIComponent(
                    downloadData.url
                  )}&title=${encodeURIComponent(
                    downloadData.title
                  )}&id=${encodeURIComponent(id)}`}
                  className="py-3 px-6 col-span-2 sm:col-span-3 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition-all duration-300 bg-[#FF9000] hover:bg-[#FF9000]/80 shadow-[0_0_15px_rgba(255,144,0,0.5)] hover:shadow-[0_0_20px_rgba(255,144,0,0.7)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Unlock className="h-5 w-5" />
                  Download Now
                </Link>
              ) : (
                <div className="col-span-2 sm:col-span-3 text-center text-gray-500">
                  No download options available
                </div>
              )}
            </div>
          </div>

          {/* Copy URL section */}
          <div className="w-full mt-2">
            <p className="text-sm font-medium mb-2 text-center">
              {downloadData?.resolutions
                ? "Or copy a direct download URL:"
                : "Or copy the direct download URL:"}
            </p>
            {downloadData?.resolutions ? (
              <div className="flex flex-col gap-2">
                <select
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm sm:text-base"
                  onChange={(e) => {
                    if (e.target.value) {
                      handleCopyToClipboard(e.target.value);
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a resolution to copy
                  </option>
                  {Object.entries(downloadData.resolutions).map(
                    ([resolution, url]) => (
                      <option key={resolution} value={url}>
                        {resolution}
                      </option>
                    )
                  )}
                </select>
              </div>
            ) : downloadData?.url ? (
              <div className="flex w-full items-center gap-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs sm:text-sm font-mono">
                  {downloadData.url}
                </div>
                <div className="relative">
                  <Button
                    ref={copyButtonRef}
                    onClick={() =>
                      downloadData.url &&
                      handleCopyToClipboard(downloadData.url)
                    }
                    variant="outline"
                    size="sm"
                    className={`flex-shrink-0 transition-all duration-300 ${
                      copied
                        ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50"
                        : ""
                    }`}
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <Clipboard className="h-4 w-4 mr-1" />
                    )}
                    <span className="ml-1">
                      {copied ? "Copied!" : "Copy URL"}
                    </span>
                  </Button>
                  {showTooltip && (
                    <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-green-500 text-white text-xs rounded-md shadow-lg whitespace-nowrap animate-bounce">
                      URL copied successfully!
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
