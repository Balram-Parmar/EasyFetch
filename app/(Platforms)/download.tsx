"use client";

import { useState, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");
  const [progress, setProgress] = useState<number>(0);

  const clearStatusMessage = (timeout: number = 3000) => {
    setTimeout(() => setStatusMessage(""), timeout);
  };

  function extractShortsId(url: string): string | null {
    const youtubeShortsRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/shorts\/([\w-]{11})(\/|$)/i;
    const match = url.match(youtubeShortsRegex);
    return match ? match[3] : null;
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
      setProgress(0);

      const downloadUrl = `https://backendeasyfetch.zapto.org/download/file/${videoId}`;
      const response = await fetch(downloadUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const totalLength = parseInt(response.headers.get('content-length') || '0', 10);
      let receivedLength = 0;
      const chunks: BlobPart[] = [];

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No readable stream');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.byteLength || 0;
        setProgress((receivedLength / totalLength) * 100);
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `youtube_shorts_${videoId}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setStatusMessage("Download completed! Check your downloads folder.");
      clearStatusMessage(5000);
    } catch (error) {
      setStatusMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
      clearStatusMessage(5000);
    } finally {
      setIsProcessing(false);
      setProgress(0);
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
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Search className="w-5 h-5" />
        )}
        Download Now
      </Button>

      {progress > 0 && (
        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-4">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {statusMessage && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};