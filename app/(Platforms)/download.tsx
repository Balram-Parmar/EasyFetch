"use client"

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Download = () => {

  const [url, setUrl] = useState('');          // Tracks the input value
  const [progress, setProgress] = useState(0); // Tracks download progress (0-100)
  const [isDownloading, setIsDownloading] = useState(false); // Indicates download status
  const [statusMessage, setStatusMessage] = useState(''); // Status message for user feedback

//get youtube video id
function extractShortsId(url: string): string | null {
    const youtubeShortsRegex = /(?:\/shorts\/|youtube\.com\/shorts\/)([\w-]{11})(?:[\/?#&]|$)/i;
    const match = url.match(youtubeShortsRegex);
    return match ? match[1] : null;
}


  // Function to handle the download process
  const handleDownload = async (downloadUrl: string) => {
    // First check if it's a valid YouTube Shorts URL
    const shortsId = extractShortsId(downloadUrl);
    if (!shortsId) {
      setStatusMessage('Not a valid YouTube Shorts URL. Please enter a valid Shorts URL.');
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      return;
    }
    if (!downloadUrl) return; // Exit if no URL is provided
    setIsDownloading(true);   // Start download state
    setProgress(0);           // Reset progress
    setStatusMessage('Preparing to download your video, this may take up to 15 seconds...'); // Initial status

    try {
      // Send POST request to the backend
      const response = await fetch('http://13.53.190.218:8000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: downloadUrl }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Read the file stream and update progress
      if (!response.body) throw new Error('Response body is null');
      const reader = response.body.getReader();
      const contentLength = +(response.headers.get('Content-Length') ?? 0); // Total file size
      let receivedLength = 0; // Bytes received
      const chunks = [];      // Store file chunks

      setStatusMessage('Downloading video content...'); // Update status message

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          setStatusMessage('Completing download, preparing file...'); // Final status
          break; // Exit when download is complete
        }
        chunks.push(value);
        receivedLength += value.length;
        const currentProgress = (receivedLength / contentLength) * 100;
        setProgress(currentProgress); // Update progress percentage
        
        // Update status message based on progress
        if (currentProgress > 75) {
          setStatusMessage('Almost there, finalizing your download...');
        } else if (currentProgress > 50) {
          setStatusMessage('Download more than halfway complete...');
        } else if (currentProgress > 25) {
          setStatusMessage('Download in progress, please wait...');
        }
      }

      // Create a Blob and trigger the save dialog
      const blob = new Blob(chunks);
      const urlBlob = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlBlob;
    
      a.download = `${shortsId}.webm`; // Default filename (adjust as needed)
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(urlBlob); // Clean up
      setStatusMessage('Download complete!'); // Success message
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('Error downloading video:', error);
      setStatusMessage('Error downloading video. Please try again.'); // Error message
      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsDownloading(false); // Reset download state
      setProgress(0);          // Reset progress after a delay
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
    e.preventDefault(); // Prevent default paste behavior
    const pastedText = e.clipboardData.getData('text');
    setUrl(pastedText);
    handleDownload(pastedText);
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleDownload(url);
      setUrl('');
    }
  }}
/>

      </div>

      {/* Download Button */}
      <Button
        onClick={() => {
          handleDownload(url); // Start download on click
          setUrl('');          // Clear input
        }}
        disabled={isDownloading} // Disable button during download
        className="bg-emerald-500 hover:bg-emerald-600 text-white
                    shadow-[0_0_15px_rgba(16,185,129,0.5)] 
                    hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] 
                    transition-all duration-300"                      
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Downloading...
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

      {/* Progress Bar */}
      {isDownloading && (
        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden mt-2">
          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }} // Dynamic width based on progress
          ></div>
        </div>
      )}
      
      {/* Download Tips */}
      {isDownloading && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
          <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
            <Loader2 className="w-4 h-4 animate-spin mr-2 text-green-500" />
            Download in Progress
          </h3>
          {/* <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Please wait while we process and download your video</li>
            <li>• This process typically takes 10-15 seconds</li>
            <li>• Larger videos may take longer to download</li>
            <li>• Please don't close this window during download</li>
          </ul> */}
        </div>
      )}
    </div>
  );
};