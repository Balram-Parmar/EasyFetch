"use client";

import { useState, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");

  const clearStatusMessage = (timeout: number = 3000) => {
    setTimeout(() => setStatusMessage(""), timeout);
  };

  // Function to extract video id from a YouTube Shorts URL
  function extractShortsId(url: string): string | null {
    const youtubeShortsRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/shorts\/([\w-]{11})(\/|$)/i;
    const match = url.match(youtubeShortsRegex);
    return match ? match[3] : null;
  }

  const handleDownload = async (downloadUrl: string) => {
    if (!downloadUrl.trim()) {
      setStatusMessage("Please enter a YouTube Shorts URL.");
      clearStatusMessage();
      return;
    }

    // Validate URL format using extractShortsId function
    if (!extractShortsId(downloadUrl)) {
      setStatusMessage("Invalid YouTube Shorts URL. Expected format: https://youtube.com/shorts/{video_id}");
      clearStatusMessage(5000);
      return;
    }

    try {
      setIsProcessing(true);
      setStatusMessage("Processing your request...");
  
  
      const response = await fetch("https://backendeasyfetch.zapto.org/download", {
        method: "POST",
headers: {
  "Content-Type": 
  "application/json"
},
        body: JSON.stringify({
          url: downloadUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.message === "success" && data.video_id) {
        const downloadLink = `https://backendeasyfetch.zapto.org/download/file/${data.video_id}`;
        setStatusMessage(
          <Button
            onClick={() => window.open(downloadLink, "_blank")}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Download Video
          </Button>
        );
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error processing request:", error);
      setStatusMessage(
        `Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`
      );
      clearStatusMessage(5000);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md dark:bg-card">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        Video Downloader
      </h2>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Paste your YouTube Shorts URL here..."
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

      {statusMessage && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};
