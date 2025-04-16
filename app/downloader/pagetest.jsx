"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { useSearchParams } from "next/navigation";
import Hls from "hls.js";

// Create a client component that wraps the useSearchParams hook
function HLSDownloaderContent() {
  const searchParams = useSearchParams();
  const urlParam = searchParams.get("url") || "";
  console.log("URL Param:", urlParam);
  const titleParam = sanitizeName(
    decodeURIComponent(
      searchParams.get("title") || "EasyFetch Pornhub Downloader"
    )
  );
//"https://cors-proxy-vercel.thcoc460.workers.dev?url=" 
//smart link
//https://t.slext2.com/370013/5165?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN
  const [playlistUrl, setPlaylistUrl] = useState((url) => {
  
      decodeURIComponent(urlParam);
  });
  const [message, setMessage] = useState("Loading FFmpeg...");
  const [progress, setProgress] = useState(0);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const [ffmpeg, setFfmpeg] = useState(null);
  const videoRef = useRef(null);
  const [downloadSpeed, setDownloadSpeed] = useState(0);

  // Target maximum bytes per chunk (100 MB)
  const MAX_BYTES_PER_CHUNK = 1000 * 1024 * 1024;
  // Maximum concurrent downloads
  const MAX_CONCURRENT_DOWNLOADS = 10;

  // Load FFmpeg when the component mounts
  useEffect(() => {
    const loadFFmpeg = async () => {
      try {
        const ffmpegInstance = new FFmpeg();
        await ffmpegInstance.load();
        setFfmpeg(ffmpegInstance);
        setFfmpegLoaded(true);
        setMessage("FFmpeg loaded successfully. Ready to download.");
        setProgress(0);
      } catch (error) {
        console.error("Error loading FFmpeg:", error);
        setMessage(`Error loading FFmpeg: ${error.message}`);
      }
    };

    loadFFmpeg();

    // Clean up FFmpeg instance when component unmounts
    return () => {
      if (ffmpeg) {
        ffmpeg.terminate();
      }
    };
  }, []); // Removed ffmpeg from dependency array

  // Initialize HLS.js when playlist URL changes or component mounts
  useEffect(() => {
    let hls;

    const initializeHls = () => {
      if (playlistUrl && videoRef.current) {
        // Show message about loading the stream
        setMessage("Attempting to load stream preview...");

        // Destroy any existing HLS instance
        if (hls) {
          hls.destroy();
        }

        // Check if browser supports HLS natively (like Safari)
        if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
          videoRef.current.src = playlistUrl;
        }
        // For other browsers, use HLS.js if available
        else if (Hls.isSupported()) {
          hls = new Hls({
            maxBufferLength: 30,
            maxMaxBufferLength: 60,
            // Add CORS settings to help with cross-origin issues
            xhrSetup: function (xhr, url) {
              xhr.withCredentials = false; // Set to true if authentication is needed
            },
          });

          hls.loadSource(playlistUrl);
          hls.attachMedia(videoRef.current);

          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            setMessage("Stream preview loaded. Ready to download.");
            // Uncomment the next line if you want autoplay
            // videoRef.current.play();
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error("HLS error:", data);

            // Handle different types of errors
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  // Try to recover network error
                  setMessage(
                    "Network error - The stream URL might be protected or requires authentication. Try downloading anyway."
                  );
                  hls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  setMessage("Media error - Trying to recover...");
                  hls.recoverMediaError();
                  break;
                default:
                  // Cannot recover
                  setMessage(
                    "Fatal error encountered. The stream might be protected or require authentication. Try downloading anyway."
                  );
                  break;
              }
            } else {
              setMessage(
                "Non-fatal error encountered. You can still try to download the video."
              );
            }
          });
        } else {
          setMessage(
            "HLS is not supported in this browser. You can still try downloading."
          );
          console.error("HLS is not supported in this browser.");
        }
      }
    };
    initializeHls();

    // Cleanup function
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [playlistUrl]);

  const downloadAndProcessChunks = async () => {
    if (!ffmpegLoaded || !ffmpeg) {
      setMessage("FFmpeg is not loaded yet. Please wait...");
      return;
    }

    try {
      setDownloadLinks([]);
      setMessage("Initializing download process...");
      setProgress(0);

      // Fetch the m3u8 playlist
      setMessage("Fetching m3u8 playlist...");
      const playlistResponse = await fetch(playlistUrl);
      if (!playlistResponse.ok) {
        setMessage(
          `Error fetching playlist: ${playlistResponse.statusText}, Make sure the extension is enabled!`
        );
        throw new Error(
          `Could not fetch playlist: ${playlistResponse.statusText}`
        );
      }
      const playlistText = await playlistResponse.text();

      // Parse the playlist to get segment URLs
      const baseUrl = new URL(playlistUrl).href.substring(
        0,
        playlistUrl.lastIndexOf("/") + 1
      );
      const segmentUrls = parseM3U8ForSegments(playlistText, baseUrl);

      if (segmentUrls.length === 0) {
        throw new Error("No segments found in playlist");
      }

      setMessage(
        `Found ${segmentUrls.length} segments. Starting parallel download...`
      );

      // Download all segments in parallel with concurrency limit
      const segmentData = await downloadSegmentsInParallel(
        segmentUrls,
        MAX_CONCURRENT_DOWNLOADS
      );

      // Group segments into chunks of ~100MB
      const chunks = createChunks(segmentData, MAX_BYTES_PER_CHUNK);
      setMessage(
        `Creating ${chunks.length} video chunks (approximately 100MB each)...`
      );

      // Process each chunk into an MP4 file
      const links = await processChunks(chunks, ffmpeg);

      // Set download links
      setDownloadLinks(links);
      setMessage(
        "All chunks processed successfully. Download the parts below."
      );
      setProgress(100);
    } catch (error) {
      console.error("Error:", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  // Parse the M3U8 playlist to extract segment URLs
  const parseM3U8ForSegments = (playlistText, baseUrl) => {
    const lines = playlistText.split("\n");
    const segmentUrls = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // Skip empty lines and playlist directives (lines starting with #)
      if (line && !line.startsWith("#")) {
        // Resolve relative URLs
        let fullUrl;
        try {
          if (line.startsWith("http://") || line.startsWith("https://")) {
            fullUrl = line;
          } else {
            fullUrl = new URL(line, baseUrl).href;
          }
          segmentUrls.push(fullUrl);
        } catch (error) {
          console.warn("Skipping invalid URL:", line);
        }
      }
    }

    return segmentUrls;
  };

  // Download segments in parallel with a concurrency limit
  const downloadSegmentsInParallel = async (urls, concurrency) => {
    const results = [];
    let completed = 0;
    let totalBytesDownloaded = 0;
    let startTime = Date.now();
    let lastUpdateTime = Date.now();
    let bytesInLastInterval = 0;

    // Process segments in batches to control concurrency
    for (let i = 0; i < urls.length; i += concurrency) {
      const batch = urls.slice(i, i + concurrency);
      const batchPromises = batch.map(async (url, batchIndex) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(
              `Failed to download segment: ${response.statusText}`
            );
          }
          const buffer = await response.arrayBuffer();

          // Update progress after each segment is downloaded
          completed++;
          totalBytesDownloaded += buffer.byteLength;
          bytesInLastInterval += buffer.byteLength;
          const downloadProgress = Math.floor((completed / urls.length) * 50); // Up to 50% for downloads
          setProgress(downloadProgress);
          setMessage(
            `Downloaded ${completed}/${urls.length} segments (${downloadProgress}%)...`
          );

          // Calculate download speed - update every ~500ms to avoid UI thrashing
          const currentTime = Date.now();
          if (currentTime - lastUpdateTime > 500) {
            const intervalInSeconds = (currentTime - lastUpdateTime) / 1000;
            const instantSpeed =
              bytesInLastInterval / (1024 * 1024) / intervalInSeconds; // MB/s

            // Calculate average speed as well
            const totalElapsedTime = (currentTime - startTime) / 1000; // in seconds
            const averageSpeed =
              totalBytesDownloaded / (1024 * 1024) / totalElapsedTime; // in MB/s

            // Use a weighted average to smooth out speed reporting
            const weightedSpeed = instantSpeed * 0.3 + averageSpeed * 0.7;
            setDownloadSpeed(weightedSpeed.toFixed(2));

            // Reset interval tracking
            lastUpdateTime = currentTime;
            bytesInLastInterval = 0;
          }

          return {
            index: i + batchIndex,
            buffer: buffer,
            size: buffer.byteLength,
          };
        } catch (error) {
          console.warn(`Error downloading segment ${i + batchIndex}:`, error);
          return null; // Return null for failed downloads
        }
      });

      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults.filter((result) => result !== null));
    }

    // Sort by original index to maintain correct order
    return results.sort((a, b) => a.index - b.index);
  };

  function sanitizeName(name) {
    return name.replace(/[^\p{L}\p{N}\s.,!?'"()-]/gu, "").trim();
  }

  // Group segments into chunks of approximately MAX_BYTES_PER_CHUNK size
  const createChunks = (segments, maxBytes) => {
    const chunks = [];
    let currentChunk = [];
    let currentSize = 0;

    for (const segment of segments) {
      // If adding this segment would exceed the chunk size and we already have segments,
      // finalize the current chunk and start a new one
      if (currentChunk.length > 0 && currentSize + segment.size > maxBytes) {
        chunks.push({
          segments: currentChunk,
          totalSize: currentSize,
        });
        currentChunk = [];
        currentSize = 0;
      }

      currentChunk.push(segment);
      currentSize += segment.size;
    }

    // Add the last chunk if it's not empty
    if (currentChunk.length > 0) {
      chunks.push({
        segments: currentChunk,
        totalSize: currentSize,
      });
    }

    return chunks;
  };

  // Process chunks into MP4 files using FFmpeg
  const processChunks = async (chunks, ffmpegInstance) => {
    const links = [];

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const chunkSegments = chunk.segments;
      const segmentFiles = [];

      setMessage(
        `Processing chunk ${i + 1}/${chunks.length}: Writing ${
          chunkSegments.length
        } segments to FFmpeg...`
      );

      // Write segment files to FFmpeg
      for (let j = 0; j < chunkSegments.length; j++) {
        const segment = chunkSegments[j];
        const fileName = `chunk${i}_segment${j}.ts`;
        await ffmpegInstance.writeFile(
          fileName,
          new Uint8Array(segment.buffer)
        );
        segmentFiles.push(fileName);
      }

      // Create concat file
      const concatContent = segmentFiles
        .map((file) => `file '${file}'`)
        .join("\n");
      const concatFileName = `chunk${i}_concat.txt`;
      await ffmpegInstance.writeFile(
        concatFileName,
        new TextEncoder().encode(concatContent)
      );

      // Concatenate segments into a single TS file
      setMessage(
        `Processing chunk ${i + 1}/${chunks.length}: Concatenating segments...`
      );
      const tsFileName = `chunk${i}.ts`;
      await ffmpegInstance.exec([
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        concatFileName,
        "-c",
        "copy",
        tsFileName,
      ]);

      // Convert TS to MP4
      setMessage(
        `Processing chunk ${i + 1}/${chunks.length}: Converting to MP4...`
      );

      let mp4FileName;
      if (chunks.length > 1) {
        mp4FileName = `part_${i + 1}_${titleParam}.mp4`;
      } else {
        mp4FileName = `${titleParam}.mp4`;
      }
      await ffmpegInstance.exec(["-i", tsFileName, "-c", "copy", mp4FileName]);

      // Read the MP4 file and create a download link
      const mp4Data = await ffmpegInstance.readFile(mp4FileName);
      const blob = new Blob([mp4Data.buffer], { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      links.push({ url, fileName: mp4FileName });

      // Clean up files
      for (const file of segmentFiles) {
        await ffmpegInstance.deleteFile(file);
      }
      await ffmpegInstance.deleteFile(concatFileName);
      await ffmpegInstance.deleteFile(tsFileName);
      await ffmpegInstance.deleteFile(mp4FileName);

      // Update progress (50% for downloading + 50% for processing)
      const processingProgress = Math.floor(
        50 + ((i + 1) / chunks.length) * 50
      );
      setProgress(processingProgress);
    }

    return links;
  };

  return (
    <div className="min-h-screen mt-20 bg-transparent p-6 flex flex-col items-center justify-center text-gray-100 font-sans">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Header */}

        <div className="bg-gray-700 p-4 border-b border-gray-600">
          <h2 className="text-2xl font-bold text-center">
            EasyFetch HLS Downloader For Pornhub
            <span className="block text-sm font-normal text-blue-300 mt-1">
              The video is split into 1GB Parts for easier handling
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* FFmpeg Loading Status */}
          {!ffmpegLoaded && (
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Loading FFmpeg</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full transition-all duration-300 ease-out animate-pulse"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-yellow-300 mt-3 text-sm">{message}</p>
            </div>
          )}

          {/* Input Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter m3u8 playlist URL"
                value={playlistUrl}
                onChange={(e) => {
                  setPlaylistUrl("");

                  setPlaylistUrl(e.target.value);
                }}
                className="flex-grow p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                disabled={!ffmpegLoaded}
              />
              <button
                onClick={downloadAndProcessChunks}
                className={`px-6 py-3 ${
                  ffmpegLoaded
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-500 cursor-not-allowed"
                } focus:ring-blue-500 focus:ring-offset-gray-800 focus:ring-2 focus:ring-offset-2 text-white font-medium rounded transition-all duration-200 flex-shrink-0 flex items-center justify-center`}
                disabled={!ffmpegLoaded || !playlistUrl}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>

          {/* Progress Section */}
          {(progress > 0 || (!ffmpegLoaded && progress === 0)) && (
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-blue-300 mt-3 text-sm">{message}</p>
              {downloadSpeed > 0 && (
                <p className="text-green-300 mt-1 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Speed:{" "}
                  <span className="font-semibold">{downloadSpeed} MB/s</span>
                </p>
              )}
            </div>
          )}

          {/* Download Links */}
          {downloadLinks.length > 0 && (
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Links
              </h3>
              <div className="space-y-2">
                {downloadLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    download={link.fileName}
                    className="flex items-center p-3 bg-gray-600 hover:bg-gray-500 rounded group transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm mr-3">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <span className="block text-white group-hover:text-blue-200 transition-colors">
                        {link.fileName}
                      </span>
                      <span className="text-xs text-gray-400">
                        Part {index + 1} of {downloadLinks.length}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* HLS Player */}
      <div className="w-full max-w-2xl mt-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-700 p-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Preview Stream
          </h2>
        </div>
        <div className="p-4">
          {playlistUrl ? (
            <div className="aspect-video w-full bg-black rounded overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                autoPlay={false}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          ) : (
            <div className="aspect-video w-full bg-gray-900 rounded flex items-center justify-center">
              <p className="text-gray-500">
                Enter an m3u8 URL to preview the stream
              </p>
            </div>
          )}
          <div className="mt-3 text-sm text-gray-400">
            Powered by HLS.js for better compatibility across browsers.
          </div>
        </div>
      </div>

      {/* Instructions Panel */}
      <div className="w-full max-w-2xl mt-6 bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          How to use
        </h3>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
              1
            </span>
            Wait for FFmpeg to load completely (this happens automatically)
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
              2
            </span>
            Paste the m3u8 playlist URL from your streaming service
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
              3
            </span>
            Click Download and wait for processing to complete (this may take
            several minutes)
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
              4
            </span>
            Click each download link to save all parts
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
              5
            </span>
            Each part is encoded in H.264 video with 128kbps AAC audio for high
            compatibility
          </p>
        </div>
      </div>
    </div>
  );
}

// Fallback component to show while the main component is loading
function LoadingFallback() {
  return (
    <div className="min-h-screen mt-20 bg-transparent p-6 flex flex-col items-center justify-center text-gray-100 font-sans">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-32 bg-gray-700 rounded mb-4"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="mt-4 text-gray-400">Loading downloader...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
function ParallelHLSDownloader() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HLSDownloaderContent />
    </Suspense>
  );
}

export default ParallelHLSDownloader;
