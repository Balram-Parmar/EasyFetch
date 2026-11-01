"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BACKEND_URL, apiErrorMessage } from "../var";
import { VideoPreview } from "../VideoPreview";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const clearStatusMessage = (timeout: number = 10000) => {
    setTimeout(() => {
      setStatusMessage("");
      setError("");
    }, timeout);
  };

  function extractYouTubeId(url: string): string | null {
    // Support both shorts and regular YouTube URLs
    const patterns = [
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([\w-]+)(?:\/|\?|$)/i,
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/i,
      /^(?:https?:\/\/)?youtu\.be\/([\w-]+)/i,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  const handleDownload = async (inputUrl: string) => {
    // Reset states
    setError("");
    setStatusMessage("");
    setFileName(null);
    setIsProcessing(true);

    const progressTimers: ReturnType<typeof setTimeout>[] = [];

    try {
      // Input validation
      if (!inputUrl.trim()) {
        throw new Error("Please enter a valid YouTube URL.");
      }

      const videoId = extractYouTubeId(inputUrl);
      if (!videoId) {
        throw new Error(
          "Invalid YouTube URL. Please check the URL and try again."
        );
      }

      // Show initial processing message
      setStatusMessage("Preparing your download...");

      // Set up progress indicators
      progressTimers.push(
        setTimeout(() => setStatusMessage("Processing video..."), 1000),
        setTimeout(() => setStatusMessage("Optimizing quality..."), 3000)
      );

      // Make API request
      const response = await fetch(`${BACKEND_URL}/yt`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl }),
      });

      const data = await response.json().catch(() => null);

      // Handle response
      if (!response.ok) {
        throw new Error(
          apiErrorMessage(data, "Failed to process video. Please try again.")
        );
      }

      if (data?.message !== "success" || !data?.fileName) {
        throw new Error("Failed to process video. Please try again.");
      }

      // Success case - preview it straight from the backend
      setStatusMessage("Download ready");
      setFileName(data.fileName);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      setStatusMessage("");
      clearStatusMessage(5000);
    } finally {
      progressTimers.forEach((timer) => clearTimeout(timer));
      setIsProcessing(false);
      setUrl("");
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md dark:bg-card p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">
        YouTube Shorts Downloader
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            type="text"
            placeholder="Paste your YouTube Shorts URL here..."
            className="w-full pl-10 pr-4 py-3 sm:py-5 text-sm sm:text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            aria-label="YouTube Shorts URL input"
          />
        </div>

        <Button
          onClick={() => handleDownload(url)}
          disabled={isProcessing}
          className="bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] transition-all duration-300 px-4 py-3 sm:px-5 sm:py-5 rounded-xl w-full sm:w-auto"
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

      {fileName && <VideoPreview fileName={fileName} />}
    </div>
  );
};