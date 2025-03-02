"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Download = () => {
  // State variables
  const [url, setUrl] = useState(""); // Tracks the input value
  const [isDownloading, setIsDownloading] = useState(false); // Indicates processing status
  const [statusMessage, setStatusMessage] = useState(""); // Status message for user feedback

  // Extract YouTube Shorts ID from URL
  function extractShortsId(url: string): string | null {
    const youtubeShortsRegex = /(?:\/shorts\/|youtube\.com\/shorts\/)([\w-]{11})(?:[\/?#&]|$)/i;
    const match = url.match(youtubeShortsRegex);
    return match ? match[1] : null;
  }

  // Handle the download process
  const handleDownload = async (downloadUrl: string) => {
   function _0x26c2(){const _0x3de839=['download_l','body','130rbhcqA','Processing','10009716hRetcM','download','630225JFZCJg','URL.','createElem','essing\x20req','39hlLLGJ','ownload...','.webm','.\x20Please\x20e','ink','click','nter\x20a\x20val','now','uest.\x20Plea','!\x20status:\x20','stringify','no-cache','json','n/json','2272218LuUxDw','ent','\x20Your\x20Requ','etch.zapto','HTTP\x20error','11246913CRjCPN','8OpxyJn','status','1985muIHAc','d\x20YouTube\x20','ckendeasyf','2JllPSu','Shorts\x20URL','.org/downl','oad','est...','href','id\x20Shorts\x20','Starting\x20D','se\x20try\x20aga','applicatio','uest:','toString','Error\x20proc','https://ba','458271OpZQQE','in.','13252OStkOB','1311978NjiuWr','Not\x20a\x20vali','appendChil','14CjSKMp','error','POST','removeChil'];_0x26c2=function(){return _0x3de839;};return _0x26c2();}const _0x2720c1=_0x432c;(function(_0x2423a3,_0x19b62f){const _0x9c348=_0x432c,_0x5cb709=_0x2423a3();while(!![]){try{const _0x550247=-parseInt(_0x9c348(0x13a))/(0x12be+-0x2581+0x12c4)+parseInt(_0x9c348(0x129))/(0xc*-0x230+-0x653*-0x4+-0x2*-0x7b)*(-parseInt(_0x9c348(0x147))/(-0x2568+0x9*-0x27e+-0x3bd9*-0x1))+-parseInt(_0x9c348(0x139))/(0x230e+-0xb46*-0x3+-0x44dc)*(parseInt(_0x9c348(0x126))/(0x1b25+0x831+0x1*-0x2351))+-parseInt(_0x9c348(0x11e))/(-0x2253+-0x15c0+0x12b3*0x3)*(parseInt(_0x9c348(0x13d))/(0xda*-0x1d+-0x2582+0x3e3b))+parseInt(_0x9c348(0x124))/(0x1c57+0xe6b+-0x2aba)*(parseInt(_0x9c348(0x123))/(-0x1e77+0x1b1a+0x122*0x3))+parseInt(_0x9c348(0x143))/(-0x20*-0x11f+-0xe0a+-0x3c*0x5d)*(parseInt(_0x9c348(0x137))/(0x1*0x1b2f+-0xd66+-0x2*0x6df))+parseInt(_0x9c348(0x145))/(0xccf*-0x3+-0x2*-0x1385+-0x5*0x1d)*(parseInt(_0x9c348(0x14b))/(0x236+0x147b+-0x16a4));if(_0x550247===_0x19b62f)break;else _0x5cb709['push'](_0x5cb709['shift']());}catch(_0x20c387){_0x5cb709['push'](_0x5cb709['shift']());}}}(_0x26c2,-0x3*0x22847+-0x1*0xce90e+-0x7a*-0x3f0d));const shortsId=extractShortsId(downloadUrl);if(!shortsId){setStatusMessage(_0x2720c1(0x13b)+_0x2720c1(0x127)+_0x2720c1(0x12a)+_0x2720c1(0x14e)+_0x2720c1(0x116)+_0x2720c1(0x12f)+_0x2720c1(0x148)),setTimeout(()=>setStatusMessage(''),0x1f*-0x71+-0x188f*-0x1+0x48*0x3);return;}if(!downloadUrl)return;function _0x432c(_0x454a5b,_0x4cdf8b){const _0x12ae7d=_0x26c2();return _0x432c=function(_0x40ba66,_0x3d1493){_0x40ba66=_0x40ba66-(0x1f91+0x2*-0xb2+-0x1d17);let _0x1da470=_0x12ae7d[_0x40ba66];return _0x1da470;},_0x432c(_0x454a5b,_0x4cdf8b);}setIsDownloading(!![]),setStatusMessage(_0x2720c1(0x144)+_0x2720c1(0x120)+_0x2720c1(0x12d));try{const response=await fetch(_0x2720c1(0x136)+_0x2720c1(0x128)+_0x2720c1(0x121)+_0x2720c1(0x12b)+_0x2720c1(0x12c),{'method':_0x2720c1(0x13f),'headers':{'Content-Type':_0x2720c1(0x132)+_0x2720c1(0x11d),'Accept':_0x2720c1(0x132)+_0x2720c1(0x11d),'Cache-Control':_0x2720c1(0x11b),'Pragma':_0x2720c1(0x11b)},'body':JSON[_0x2720c1(0x11a)]({'url':downloadUrl,'token':(Date[_0x2720c1(0x117)]()/(0x1*-0xd85+0xd*0xfb+0x257*0x2))[_0x2720c1(0x134)]()})});if(!response['ok'])throw new Error(_0x2720c1(0x122)+_0x2720c1(0x119)+response[_0x2720c1(0x125)]);const data=await response[_0x2720c1(0x11c)](),link=document[_0x2720c1(0x149)+_0x2720c1(0x11f)]('a');link[_0x2720c1(0x12e)]=data[_0x2720c1(0x141)+_0x2720c1(0x14f)],link[_0x2720c1(0x146)]=shortsId+_0x2720c1(0x14d),document[_0x2720c1(0x142)][_0x2720c1(0x13c)+'d'](link),link[_0x2720c1(0x150)](),document[_0x2720c1(0x142)][_0x2720c1(0x140)+'d'](link),setStatusMessage(_0x2720c1(0x130)+_0x2720c1(0x14c)),setTimeout(()=>setStatusMessage(''),0x5*0x9e+-0x22ca+-0xadb*-0x4);}catch(_0x722d7f){console[_0x2720c1(0x13e)](_0x2720c1(0x135)+_0x2720c1(0x14a)+_0x2720c1(0x133),_0x722d7f),setStatusMessage(_0x2720c1(0x135)+_0x2720c1(0x14a)+_0x2720c1(0x118)+_0x2720c1(0x131)+_0x2720c1(0x138)),setTimeout(()=>setStatusMessage(''),-0x114c+0x236a+-0xb5*-0x2);}finally{setIsDownloading(![]);}
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

      {/* Download Button */}
      <Button
        onClick={() => {
          handleDownload(url);
          setUrl("");
        }}
        disabled={isDownloading}
        className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300"
      >
        {isDownloading ? (
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

      {/* Status Message */}
      {statusMessage && (
        <div className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
          {statusMessage}
        </div>
      )}
    </div>
  );
};