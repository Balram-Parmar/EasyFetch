"use client";
import { useState, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");
  const [error, setError] = useState<string>("");

  const clearStatusMessage = (timeout: number = 5000) => {
    setTimeout(() => {
      setStatusMessage("");
      setError("");
    }, timeout);
  };

  // This function tries to extract an Instagram Reel ID from an Instagram URL.
  // It supports only reel URLs.
  function extractInstagramId(url: string): string | null {
    // Only accept URLs with /reel/ or /reels/ in the path.
    const reelPattern = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:reel|reels)\/([\w-]+)(?:\/|\?|$)/i;
    const match = url.match(reelPattern);
    return match && match[1] ? match[1] : null;
  }

  const triggerDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const handleDownload = async (inputUrl: string) => {
    // Reset states
    setError("");
    setStatusMessage("");
    setIsProcessing(true);

    try {
      // Input validation
      if (!inputUrl.trim()) {
        throw new Error("Please enter a valid Instagram URL.");
      }

      // URL format validation
      if (!/instagram\.com\/(?:reel|reels)\//i.test(inputUrl)) {
        throw new Error("Only Instagram Reels are supported at this time.");
      }

      const mediaId = extractInstagramId(inputUrl);
      if (!mediaId) {
        throw new Error("Invalid Instagram Reel URL. Please check the URL and try again.");
      }

      // Show initial processing message
      setStatusMessage("Preparing your download...");

      // Generate secure token
      const token = btoa(`${inputUrl}instagram`).split("").reverse().join("");

      // Set up progress indicators
      const progressTimers = [
        setTimeout(() => setStatusMessage("Processing video..."), 1000),
        setTimeout(() => setStatusMessage("Optimizing quality..."), 3000),
      ];

      // Make API request
      const response = await fetch("https://easyfetchbackend.ddns.net/download", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl, type: "instagram", x: token }),
      });

      // Clear progress timers
      progressTimers.forEach(timer => clearTimeout(timer));

      // Handle response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to process video. Please try again.");
      }

      const data = await response.json();

      if (data.message !== "success") {
        throw new Error("Failed to process video. Please try again.");
      }

      // Success case
      setStatusMessage(
        <Button
          onClick={() => triggerDownload(`https://easyfetchbackend.ddns.net/v/${data.video_id}.mp4`)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          aria-label="Download video"
        >
          Click To Download Video
        </Button>
      );

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      setStatusMessage("");
      clearStatusMessage(5000);
    } finally {
      setIsProcessing(false);
      setUrl("");
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md dark:bg-card p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">
        Instagram Reels Downloader
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            type="text"
            placeholder="Paste your Instagram Reel URL here..."
            className="w-full pl-10 pr-4 py-3 sm:py-5 text-sm sm:text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            aria-label="Instagram Reel URL input"
          />
        </div>

        <Button
          onClick={() => handleDownload(url)}
          disabled={isProcessing}
          className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300 px-4 py-3 sm:px-5 sm:py-5 rounded-xl w-full sm:w-auto"
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
        <div className="text-sm sm:text-base text-center mt-2 text-red-500 dark:text-red-400" role="alert">
          {error}
        </div>
      )}

      {statusMessage && (
        <div className="text-sm sm:text-base text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};
