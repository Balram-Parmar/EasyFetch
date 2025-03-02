"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState(false);
  const [c, setC] = useState("");

  function d(u) {
    const r = /(?:\/shorts\/|youtube\.com\/shorts\/)([\w-]{11})(?:[\/?#&]|$)/i;
    const m = u.match(r);
    return m ? m[1] : null;
  }

  const e = async (u) => {
    const id = d(u);
    if (!id) {
      setC(atob("Tm90IGEgdmFsaWQgWW91VHViZSBTaG9ydHMgVVJMLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBTaG9ydHMgVVJMLg=="));
      setTimeout(() => setC(""), 3000);
      return;
    }
    if (!u) return;
    setB(true);
    setC(atob("UHJvY2Vzc2luZyBZb3VyIFJlcXVlc3QuLi4="));
    try {
      const res = await fetch(`${atob("aHR0cHM6Ly8=")}${atob("YmFja2VuZGVhc3lmZXRjaA==")}${atob("LnphcHRvLm9yZy8=")}${atob("ZG93bmxvYWQ=")}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
        },
        body: JSON.stringify({
          url: u,
          token: (Date.now() / 1000).toString()
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      const link = document.createElement("a");
      link.href = data.download_link;
      link.download = `${id}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setC(atob("U3RhcnRpbmcgRG93bmxvYWQuLi4="));
      setTimeout(() => setC(""), 3000);
    } catch (err) {
      console.error("Error processing request:", err);
      setC(atob("RXJyb3IgcHJvY2Vzc2luZyByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluLg=="));
      setTimeout(() => setC(""), 5000);
    } finally {
      setB(false);
    }
  };

  const m = (event) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text");
    setA(pasted);
    e(pasted);
  };

  const o = (event) => {
    if (event.key === "Enter") {
      e(a);
      setA("");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-md dark:bg-card">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Video Downloader</h2>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Paste your YouTube URL here..."
          className="w-full pl-10 pr-4 py-5 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          value={a}
          onChange={(e) => setA(e.target.value)}
          onPaste={m}
          onKeyDown={o}
        />
      </div>
      <Button
        onClick={() => {
          e(a);
          setA("");
        }}
        disabled={b}
        className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300"
      >
        {b ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            Download Now
          </>
        )}
      </Button>
      {c && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {c}
        </div>
      )}
    </div>
  );
};