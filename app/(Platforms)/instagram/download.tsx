"use client";
import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "../var";

// Regex for extracting Instagram Reel ID
const REEL_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:reel|reels)\/([\w-]+)(?:\/|\?|$)/i;

export const Download = () => {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clearMessages = useCallback((timeout = 5000) => {
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, timeout);
  }, []);

  const extractInstagramId = useCallback((inputUrl: string) => {
    const match = inputUrl.match(REEL_REGEX);
    return match?.[1] ?? null;
  }, []);

  const handleDownload = useCallback(
    async (inputUrl: string) => {
      if (isProcessing) return;
      setError("");
      setSuccess("");
      setIsProcessing(true);

      try {
        if (!inputUrl.trim())
          throw new Error("Please enter a valid Instagram URL.");
        if (!REEL_REGEX.test(inputUrl))
          throw new Error("Only Instagram Reels are supported at this time.");

        const id = extractInstagramId(inputUrl);
        if (!id)
          throw new Error(
            "Invalid Instagram Reel URL. Please check and try again."
          );

        const response = await fetch(`${BACKEND_URL}/insta`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: inputUrl,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.detail || "Failed to process video. Please try again."
          );
        }

        const data = await response.json();

        setSuccess("Your request was processed successfully!" + data);
        setUrl(""); // Clear input box after successful fetch
        clearMessages();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred.";
        setError(message);
        clearMessages();
      } finally {
        setIsProcessing(false);
      }
    },
    [extractInstagramId, isProcessing, clearMessages]
  );

  const handleUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
    },
    []
  );

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md dark:bg-card p-4 sm:p-6">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
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
            className="w-full pl-10 pr-4 py-4 sm:py-5 text-sm sm:text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={url}
            onChange={handleUrlChange}
            onKeyDown={(e) => e.key === "Enter" && handleDownload(url)}
            aria-label="Instagram Reel URL input"
          />
        </div>
        <Button
          onClick={() => handleDownload(url)}
          disabled={isProcessing}
          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all duration-300 px-4 py-4 sm:px-5 sm:py-5 rounded-xl"
        >
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "START"
          )}
        </Button>
      </div>

      {error && (
        <div
          className="text-center text-sm text-red-500 dark:text-red-400"
          role="alert"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          className="text-center text-sm text-green-500 dark:text-green-400"
          role="status"
        >
          {success}
        </div>
      )}
    </div>
  );
};
