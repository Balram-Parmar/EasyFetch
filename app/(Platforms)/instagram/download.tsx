"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Regex for extracting Instagram Reel ID
const REEL_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:reel|reels)\/([\w-]+)(?:\/|\?|$)/i;

export const Download = () => {
  const [url, setUrl] = useState("");
  const [mediaId, setMediaId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const abortControllerRef = useRef<AbortController | null>(null);
  const skipAutoFetch = useRef(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Derive combined source URL from mediaId
  const combinedSrc = useMemo(
    () =>
      mediaId ? `https://easyfetchbackend.ddns.net/v/${mediaId}.mp4` : null,
    [mediaId]
  );

  const clearFeedback = useCallback((timeout = 5000) => {
    setTimeout(() => setError(""), timeout);
  }, []);

  const extractInstagramId = useCallback((inputUrl: string) => {
    const match = inputUrl.match(REEL_REGEX);
    return match?.[1] ?? null;
  }, []);

  const handleDownload = useCallback(
    async (inputUrl: string) => {
      if (isProcessing || (inputUrl === url && audioSrc)) return;
      setError("");
      setAudioSrc(undefined);
      setVideoSrc(undefined);
      setMediaId(null);
      setIsProcessing(true);

      // Cancel any in-flight request
      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

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

        const token = btoa(`${inputUrl}instagram`).split("").reverse().join("");
        const response = await fetch(
          "https://easyfetchbackend.ddns.net/download",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: inputUrl,
              type: "instagram",
              x: token,
            }),
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.detail || "Failed to process video. Please try again."
          );
        }

        const data = await response.json();
        if (data.message !== "success")
          throw new Error("Failed to process video. Please try again.");

        setAudioSrc(data.audio);
        setVideoSrc(data.video);
        setMediaId(id);
        
        // Clear input box after successful fetch
        setUrl("");
      } catch (err) {
        if ((err as any).name === "AbortError") return;
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred.";
        setError(message);
        clearFeedback();
      } finally {
        setIsProcessing(false);
      }
    },
    [audioSrc, extractInstagramId, isProcessing, url, clearFeedback]
  );

  const handleUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputUrl = e.target.value;
      setUrl(inputUrl);
      if (skipAutoFetch.current) {
        skipAutoFetch.current = false;
        return;
      }
      if (REEL_REGEX.test(inputUrl)) {
        handleDownload(inputUrl);
      }
    },
    [handleDownload]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text");
      if (REEL_REGEX.test(pasted)) {
        // Set skip flag to prevent duplicate processing
        skipAutoFetch.current = true;
        // Set URL value in the input
        setUrl(pasted);
        // Manually trigger download only once
        handleDownload(pasted);
      }
    },
    [handleDownload]
  );

  // Sync video and audio playback
  useEffect(() => {
    const videoEl = videoRef.current;
    const audioEl = audioRef.current;
    if (!videoEl || !audioEl) return;

    const sync = () => {
      if (Math.abs(audioEl.currentTime - videoEl.currentTime) > 0.2) {
        audioEl.currentTime = videoEl.currentTime;
      }
    };

    videoEl.addEventListener("play", () => audioEl.play().catch(console.error));
    videoEl.addEventListener("pause", () => audioEl.pause());
    videoEl.addEventListener("seeked", sync);
    videoEl.addEventListener("timeupdate", sync);

    return () => {
      videoEl.removeEventListener("play", () => audioEl.play());
      videoEl.removeEventListener("pause", () => audioEl.pause());
      videoEl.removeEventListener("seeked", sync);
      videoEl.removeEventListener("timeupdate", sync);
    };
  }, [audioSrc, videoSrc]);

  const triggerDownload = useCallback((src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }, []);

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
            onPaste={handlePaste}
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

      
      {(audioSrc && videoSrc && combinedSrc)?(<div className="text-center text-base sm:text-xl font-mono text-red-500 dark:text-red-400 underline">Scroll Down And Download Your Reel!!</div>):null}
      {(audioSrc || videoSrc || combinedSrc) && (
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <div className="relative">
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="w-full rounded-xl bg-black"
              preload="auto"
            />
            {audioSrc && (
              <audio
                ref={audioRef}
                src={audioSrc}
                preload="auto"
                className="hidden"
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {audioSrc && (
              <Button
                onClick={() => triggerDownload(audioSrc)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3"
              >
                Audio Only
              </Button>
            )}
            {videoSrc && (
              <Button
                onClick={() => triggerDownload(videoSrc)}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl py-3"
              >
                Video Only
              </Button>
            )}
            {combinedSrc && (
              <Button
                onClick={() => triggerDownload(combinedSrc)}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3"
              >
                Audio + Video
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};