"use client";
import { useState, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");

  const clearStatusMessage = (timeout: number = 3000) => {
    setTimeout(() => setStatusMessage(""), timeout);
  };

  // This function tries to extract an Instagram media ID from an Instagram URL.
  // It supports Instagram Reel URLs and regular post URLs.
function extractInstagramId(url: string): string | null {
  const patterns = [
    /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:reel|reels|p)\/([\w-]+)(?:\/|\?|$)/i
  ];
  

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

const triggerDownload = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};

  const handleDownload = async (inputUrl: string) => {
    if (!inputUrl.trim()) {
      setStatusMessage("Please enter a valid Instagram URL.");
      clearStatusMessage();
      return;
    }

    const mediaId = extractInstagramId(inputUrl);
    if (!mediaId) {
      setStatusMessage("Invalid Instagram URL");
      clearStatusMessage(5000);
      return;
    }

    try {
      setIsProcessing(true);
      setStatusMessage("Downloading video in mp4 format & Best Quality Available...");

      const timer1 = setTimeout(() => {
        setStatusMessage("Please Wait Processing Video...");
      }, 1000);

      const timer2 = setTimeout(() => {
        setStatusMessage("Almost Done...");
      }, 3000);

      const token = btoa(`${inputUrl}instagram`).split("").reverse().join("");
      const response = await fetch("https://easyfetchbackend.ddns.net/download", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl, type: "instagram", x: token }),
      });

      clearTimeout(timer1);
      clearTimeout(timer2);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message === "success") {
       
        setStatusMessage(
         
          <Button
            onClick={() =>
              triggerDownload(`https://easyfetchbackend.ddns.net/v/${data.video_id}.mp4`)
            }
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Click To Download Video
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
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md dark:bg-card p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">
        Instagram Video Downloader
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Paste your Instagram URL here..."
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
          className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300 px-4 py-3 sm:px-5 sm:py-5 rounded-xl w-full sm:w-auto"
        >
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </Button>
      </div>

      {statusMessage && (
        <div className="text-sm sm:text-base text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};
