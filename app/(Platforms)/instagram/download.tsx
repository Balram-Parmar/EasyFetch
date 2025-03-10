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
    const timeoutId = setTimeout(() => setStatusMessage(""), timeout);
    return () => clearTimeout(timeoutId);
  };

  function extractShortsId(url: string): string | null {
    // Instagram Reel URL patterns
    const patterns = [
      // Standard reel format
      /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/reel\/([\w-]+)(?:\/)?(?:\?.*)?$/i,
      // Mobile reel format
      /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([\w-]+)(?:\/)?(?:\?.*)?$/i,
      // Short format
      /^(?:https?:\/\/)?(?:www\.)?instagr\.am\/p\/([\w-]+)(?:\/)?(?:\?.*)?$/i
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
    if (!inputUrl) {
      setStatusMessage("Please enter an Instagram URL.");
      const cleanup = clearStatusMessage();
      return () => cleanup();
    }

    const videoId = extractShortsId(inputUrl);
    if (!videoId) {
      setStatusMessage("Invalid Instagram URL");
      const cleanup = clearStatusMessage(5000);
      return () => cleanup();
    }

    try {
      setIsProcessing(true);
      setStatusMessage("Processing your request...");

      const command = `${inputUrl} -f bestvideo+bestaudio`;
      const encodedCommand = encodeURIComponent(command);
      const downloadUrl = `https://ytdlp.online/stream?command=${encodedCommand}`;

      const response = await fetch(downloadUrl,{ 
        method: "GET",
        mode: 'cors',
        headers :{
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'Origin': 'http://localhost:3000',
          'Referer': 'http://localhost:3000/',
        }
       });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        
        const text = new TextDecoder().decode(value);
        const lines = text.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const content = line.slice(6);
            if (content.includes('href="/download/')) {
              // Extract download link and create clickable element
              const match = content.match(/href="(\/download\/[^"]+)"/);
              if (match) {
                const downloadPath = match[1];
                setStatusMessage(
                  <a 
                    href={`https://ytdlp.online${downloadPath}`} 
                    className="text-blue-500 hover:text-blue-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to download
                  </a>
                );
                return;
              }
            } else if (!content.includes('Command execution completed')) {
              setStatusMessage(content.replace(/<[^>]*>/g, ''));
            }
          }
        }
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
        Instagram Video Downloader
      </h2>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Paste your Instagram URL here..."
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
