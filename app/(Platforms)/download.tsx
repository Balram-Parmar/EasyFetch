"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Extract YouTube Shorts ID from URL
  function extractShortsId(url: string): string | null {
    const youtubeShortsRegex = /(?:\/shorts\/|youtube\.com\/shorts\/)([\w-]{11})(?:[\/?#&]|$)/i;
    const match = url.match(youtubeShortsRegex);
    return match ? match[1] : null;
  }

  // Handle the download process
  const handleDownload = async (downloadUrl: string) => {
    // Check if URL is empty
    if (!downloadUrl) {
      setStatusMessage("Please enter a YouTube Shorts URL.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    // Validate URL
    const shortsId = extractShortsId(downloadUrl);
    if (!shortsId) {
      setStatusMessage("Invalid YouTube Shorts URL. Please enter a valid Shorts URL.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    // Start processing
    setIsProcessing(true);
    setStatusMessage("Processing your request...");

    try {
      const response = await fetch("https://backendeasyfetch.zapto.org/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
        },
        body: JSON.stringify({
          url: downloadUrl,
          token: (Date.now() / 1000).toString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 'success') {
        // Open download link in new tab
        const downloadLink = `https://backendeasyfetch.zapto.org/download/file/${shortsId}`;
        window.open(downloadLink, '_blank');
        setStatusMessage("Download started successfully.");
      } else {
        throw new Error('Invalid response from server');
      }

      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      console.error("Error processing request:", error);
      setStatusMessage("Error processing request. Please try again.");
      setTimeout(() => setStatusMessage(""), 5000);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md dark:bg-card">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Video Downloader</h2>

      {/* Input Box with Icon */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Paste your YouTube URL here..."
          className="w-full pl-10 pr-4 py-5 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
              setUrl("");
            }
          }}
        />
      </div>

      {/* Download Button */}
      <Button
        onClick={() => {
          handleDownload(url);
          setUrl("");
        }}
        disabled={isProcessing}
        className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            Download Now
          </>
        )}
      </Button>

      {/* Status Message */}
      {statusMessage && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};