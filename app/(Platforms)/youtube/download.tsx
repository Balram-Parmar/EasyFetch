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

  function extractShortsId(url: string): string | null {
    // YouTube URL patterns
    const patterns = [
      // Shorts format with or without query parameters
      /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([\w-]{11})(?:\?[^/]*)?$/i,
      // Mobile shorts format
      /^(?:https?:\/\/)?(?:m\.)?youtube\.com\/shorts\/([\w-]{11})(?:\?[^/]*)?$/i,
      // Alternative shorts format
      /^(?:https?:\/\/)?youtu\.be\/([\w-]{11})(?:\?[^/]*)?$/i
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
    if (!inputUrl.trim()) {
      setStatusMessage("Please enter a YouTube Shorts URL.");
      clearStatusMessage();
      return;
    }

    const videoId = extractShortsId(inputUrl);
    if (!videoId) {
      setStatusMessage("Invalid YouTube Shorts URL");
      clearStatusMessage(5000);
      return;
    }

    try {
      setIsProcessing(true);
      setStatusMessage("Processing your request...");
    

      const response = await fetch('https://easyfetchbackend.ddns.net/download', {
        method: 'POST',
        headers: {
       "accept": "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl })
      });


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.message === "success") {
        setStatusMessage(
          <Button
        onClick={() => window.open(`https://easyfetchbackend.ddns.net/v/${videoId}.mp4`, '_blank' , 'noopener,noreferrer')}
        className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
       Click To Get Video
          </Button>
        );
      } else {
        throw new Error("Failed to process video");
      }
    } catch (error) {
      setStatusMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
      clearStatusMessage(5000);
    } finally {
      setIsProcessing(false);
    
      setUrl("");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md dark:bg-card">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        YT Shorts Video Downloader
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
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Search className="w-5 h-5" />
        )}
        Download Now
      </Button>

      {statusMessage && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};