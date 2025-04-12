'use client'
import React, { useState, useEffect } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';

function ParallelHLSDownloader() {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [message, setMessage] = useState('Loading FFmpeg...');
  const [progress, setProgress] = useState(0);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const [ffmpeg, setFfmpeg] = useState(null);
  
  // Target maximum bytes per chunk (100 MB)
  const MAX_BYTES_PER_CHUNK = 100 * 1024 * 1024;
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
        setMessage('FFmpeg loaded successfully. Ready to download.');
        setProgress(0);
      } catch (error) {
        console.error('Error loading FFmpeg:', error);
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
  }, [ffmpeg]);

  const downloadAndProcessChunks = async () => {
    if (!ffmpegLoaded || !ffmpeg) {
      setMessage('FFmpeg is not loaded yet. Please wait...');
      return;
    }

    try {
      setDownloadLinks([]);
      setMessage('Initializing download process...');
      setProgress(0);
      
      // Fetch the m3u8 playlist
      setMessage('Fetching m3u8 playlist...');
      const playlistResponse = await fetch(playlistUrl);
      if (!playlistResponse.ok) {
        throw new Error(`Could not fetch playlist: ${playlistResponse.statusText}`);
      }
      const playlistText = await playlistResponse.text();
      
      // Parse the playlist to get segment URLs
      const baseUrl = new URL(playlistUrl).href.substring(0, playlistUrl.lastIndexOf('/') + 1);
      const segmentUrls = parseM3U8ForSegments(playlistText, baseUrl);
      
      if (segmentUrls.length === 0) {
        throw new Error('No segments found in playlist');
      }
      
      setMessage(`Found ${segmentUrls.length} segments. Starting parallel download...`);
      
      // Download all segments in parallel with concurrency limit
      const segmentData = await downloadSegmentsInParallel(segmentUrls, MAX_CONCURRENT_DOWNLOADS);
      
      // Group segments into chunks of ~100MB
      const chunks = createChunks(segmentData, MAX_BYTES_PER_CHUNK);
      setMessage(`Creating ${chunks.length} video chunks (approximately 100MB each)...`);
      
      // Process each chunk into an MP4 file
      const links = await processChunks(chunks, ffmpeg);
      
      // Set download links
      setDownloadLinks(links);
      setMessage('All chunks processed successfully. Download the parts below.');
      setProgress(100);
    } catch (error) {
      console.error('Error:', error);
      setMessage(`Error: ${error.message}`);
    }
  };
  
  // Parse the M3U8 playlist to extract segment URLs
  const parseM3U8ForSegments = (playlistText, baseUrl) => {
    const lines = playlistText.split('\n');
    const segmentUrls = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // Skip empty lines and playlist directives (lines starting with #)
      if (line && !line.startsWith('#')) {
        // Resolve relative URLs
        let fullUrl;
        try {
          if (line.startsWith('http://') || line.startsWith('https://')) {
            fullUrl = line;
          } else {
            fullUrl = new URL(line, baseUrl).href;
          }
          segmentUrls.push(fullUrl);
        } catch (error) {
          console.warn('Skipping invalid URL:', line);
        }
      }
    }
    
    return segmentUrls;
  };
  
  // Download segments in parallel with a concurrency limit
  const downloadSegmentsInParallel = async (urls, concurrency) => {
    const results = [];
    let completed = 0;
    
    // Process segments in batches to control concurrency
    for (let i = 0; i < urls.length; i += concurrency) {
      const batch = urls.slice(i, i + concurrency);
      const batchPromises = batch.map(async (url, batchIndex) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to download segment: ${response.statusText}`);
          }
          const buffer = await response.arrayBuffer();
          
          // Update progress after each segment is downloaded
          completed++;
          const downloadProgress = Math.floor((completed / urls.length) * 50); // Up to 50% for downloads
          setProgress(downloadProgress);
          setMessage(`Downloaded ${completed}/${urls.length} segments (${downloadProgress}%)...`);
          
          return {
            index: i + batchIndex,
            buffer: buffer,
            size: buffer.byteLength
          };
        } catch (error) {
          console.warn(`Error downloading segment ${i + batchIndex}:`, error);
          return null; // Return null for failed downloads
        }
      });
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults.filter(result => result !== null));
    }
    
    // Sort by original index to maintain correct order
    return results.sort((a, b) => a.index - b.index);
  };
  
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
          totalSize: currentSize
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
        totalSize: currentSize
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
      
      setMessage(`Processing chunk ${i+1}/${chunks.length}: Writing ${chunkSegments.length} segments to FFmpeg...`);
      
      // Write segment files to FFmpeg
      for (let j = 0; j < chunkSegments.length; j++) {
        const segment = chunkSegments[j];
        const fileName = `chunk${i}_segment${j}.ts`;
        await ffmpegInstance.writeFile(fileName, new Uint8Array(segment.buffer));
        segmentFiles.push(fileName);
      }
      
      // Create concat file
      const concatContent = segmentFiles.map(file => `file '${file}'`).join('\n');
      const concatFileName = `chunk${i}_concat.txt`;
      await ffmpegInstance.writeFile(concatFileName, new TextEncoder().encode(concatContent));
      
      // Concatenate segments into a single TS file
      setMessage(`Processing chunk ${i+1}/${chunks.length}: Concatenating segments...`);
      const tsFileName = `chunk${i}.ts`;
      await ffmpegInstance.exec([
        '-f', 'concat',
        '-safe', '0',
        '-i', concatFileName,
        '-c', 'copy',
        tsFileName
      ]);
      
      // Convert TS to MP4
      setMessage(`Processing chunk ${i+1}/${chunks.length}: Converting to MP4...`);
      const mp4FileName = `part_${i+1}.mp4`;
      await ffmpegInstance.exec([
        '-i', tsFileName,
        '-c', 'copy',
        mp4FileName
      ]);
      
      // Read the MP4 file and create a download link
      const mp4Data = await ffmpegInstance.readFile(mp4FileName);
      const blob = new Blob([mp4Data.buffer], { type: 'video/mp4' });
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
      const processingProgress = Math.floor(50 + ((i + 1) / chunks.length) * 50);
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
            HLS Video Downloader
            <span className="block text-sm font-normal text-blue-300 mt-1">
              Split into 100MB chunks for easier handling
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
                  style={{ width: '100%' }}
                >
                </div>
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
                onChange={(e) => setPlaylistUrl(e.target.value)}
                className="flex-grow p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                disabled={!ffmpegLoaded}
              />
              <button 
                onClick={downloadAndProcessChunks}
                className={`px-6 py-3 ${ffmpegLoaded ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} focus:ring-blue-500 focus:ring-offset-gray-800 focus:ring-2 focus:ring-offset-2 text-white font-medium rounded transition-all duration-200 flex-shrink-0 flex items-center justify-center`}
                disabled={!ffmpegLoaded || !playlistUrl}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
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
                >
                </div>
              </div>
              <p className="text-blue-300 mt-3 text-sm">{message}</p>
            </div>
          )}
          
          {/* Download Links */}
          {downloadLinks.length > 0 && (
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Instructions Panel */}
      <div className="w-full max-w-2xl mt-6 bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          How to use
        </h3>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">1</span>
            Wait for FFmpeg to load completely (this happens automatically)
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">2</span>
            Paste the m3u8 playlist URL from your streaming service
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">3</span>
            Click Download and wait for processing to complete (this may take several minutes)
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">4</span>
            Click each download link to save all parts
          </p>
          <p className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">5</span>
            Each part is encoded in H.264 video with 128kbps AAC audio for high compatibility
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParallelHLSDownloader;