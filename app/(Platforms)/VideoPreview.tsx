"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadUrl } from "./var";

type VideoPreviewProps = {
  fileName: string;
};

// The backend only returns a file name, so the media URL is rebuilt from the
// backend base URL. nginx serves ./videos at /downloads/<fileName>.
export function VideoPreview({ fileName }: VideoPreviewProps) {
  const src = downloadUrl(fileName);
  const [isSaving, setIsSaving] = useState(false);

  const handleDownload = async () => {
    setIsSaving(true);

    try {
      // Fetching into a blob is what makes the browser save the file instead of
      // opening it in a new tab: the `download` attribute is ignored on
      // cross-origin URLs.
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const objectUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Give the browser a moment to start the save before releasing the blob.
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    } catch {
      // If the cross-origin fetch is blocked, fall back to the browser.
      window.open(src, "_blank", "noopener,noreferrer");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <video
        src={src}
        controls
        preload="metadata"
        playsInline
        className="w-full max-h-80 rounded-xl bg-black"
      >
        Your browser does not support the video tag.
      </video>

      <Button
        type="button"
        onClick={handleDownload}
        disabled={isSaving}
        className="w-full"
        aria-label={`Download ${fileName}`}
      >
        {isSaving ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
        ) : (
          <Download className="w-4 h-4 mr-2" aria-hidden="true" />
        )}
        {isSaving ? "Preparing download..." : "Download video"}
      </Button>

      <p className="text-xs text-center break-all text-gray-500 dark:text-gray-400">
        {fileName}
      </p>
    </div>
  );
}
