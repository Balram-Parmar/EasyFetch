"use client";
import { useState, ReactNode, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2, ChevronRight, Clipboard, CheckCircle, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Download = () => {
  const [url, setUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | ReactNode>("");
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const clearStatusMessage = (timeout: number = 5000) => {
    setTimeout(() => {
      setStatusMessage("");
      setError("");
    }, timeout);
  };

  // Effect to automatically hide the notification
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  function extractPornhubId(url: string): string | null {
    // Support Pornhub video URLs from all domains (main site, regional domains, and subdomains)
    const patterns = [
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/view_video\.php\?viewkey=([\w\d]+)/i,
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/video\/show\?viewkey=([\w\d]+)/i,
      /^(?:https?:\/\/)?(?:[\w-]+\.)?pornhub(?:premium)?\.(?:com|org|net|de|fr|es|it|pt|pl|rt|jp|nl)\/videos\/(\w+)/i
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

    try {
      // Input validation
      if (!inputUrl.trim()) {
        throw new Error("Please enter a valid Pornhub video URL.");
      }

      const videoId = extractPornhubId(inputUrl);
      if (!videoId) {
        throw new Error("Invalid Pornhub URL. Please check the URL and try again.");
      }

      // Show initial processing message
      setStatusMessage("Preparing your download...");

      // Generate secure token
      const token = btoa(`${inputUrl}pornhub`).split("").reverse().join("");

      // Set up progress indicators
      const progressTimers = [
        setTimeout(() => setStatusMessage("Processing video..."), 1000),
        setTimeout(() => setStatusMessage("Optimizing quality..."), 3000),
      ];

      // Make API request
      const response = await fetch("https://easyfetchbackend.ddns.net/ph", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl, type: "pornhub", x: token }),
      });

      // Clear progress timers
      progressTimers.forEach(timer => clearTimeout(timer));

      // Handle response
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData);
        throw new Error(errorData.detail || `Failed to process video (Status: ${response.status}). Please try again.`);
      }

      const data = await response.json();
      console.log("API Success Response:", data);

      if (data.message !== "success") {
        throw new Error(data.detail || data.message || "Failed to process video. Please try again.");
      }

      // Success case - display URL with copy button
      const downloadUrl = data.url || `https://easyfetchbackend.ddns.net/v/${data.video_id}.mp4`;
      
      setStatusMessage(
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium mb-1">Copy this URL to use with HLS Downloader Pro:</p>
          <div className="flex w-full items-center gap-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs sm:text-sm font-mono">
              {downloadUrl}
            </div>
            <div className="relative">
              <Button
                ref={copyButtonRef}
                onClick={() => handleCopyToClipboard(downloadUrl)}
                variant="outline"
                size="sm"
                className={`flex-shrink-0 transition-all duration-300 ${copied ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50' : ''}`}
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <Clipboard className="h-4 w-4 mr-1" />
                )}
                <span className="ml-1">{copied ? "Copied!" : "Copy URL"}</span>
              </Button>
              {showTooltip && (
                <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-green-500 text-white text-xs rounded-md shadow-lg whitespace-nowrap animate-bounce">
                  URL copied successfully!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-[#FF9000]/10 rounded-lg border border-[#FF9000]/20 text-sm">
            <h4 className="font-semibold text-[#FF9000] mb-2">What to do next:</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Install the <a href="https://chromewebstore.google.com/detail/hls-downloader-pro/mdfhlmcipgjjilidofjpkookbfiakfdj" target="_blank" rel="noopener noreferrer" className="text-[#FF9000] hover:underline">HLS Downloader Pro</a> extension</li>
              <li>Open the extension from your browser toolbar</li>
              <li>Paste the copied URL into the extension</li>
              <li>Select the quality and download your video</li>
            </ol>
            
            <div className="flex flex-col gap-3 mt-4">
              <div className="text-center">
                <span className="text-sm font-medium">- OR -</span>
              </div>
              
                <Link 
                href={`/downloader?url=${encodeURIComponent(downloadUrl)}`}
                className="w-full bg-[#FF9000] hover:bg-[#FF9000]/80 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                >
                Use Built-in Downloader
                <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            
            <div className="flex items-center justify-center mt-3">
              <Link 
                href="#how-to-download" 
                className="inline-flex items-center text-[#FF9000] hover:underline text-sm font-medium"
              >
                See detailed instructions <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
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