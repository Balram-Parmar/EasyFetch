'use client'
import React from 'react'



import { FaYoutube, FaInstagram, FaTiktok, FaLock, FaBolt, FaDownload, FaGoogleDrive } from "react-icons/fa"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const Common = () => {
   
    let font:string="bg-gradient-to-r from-[#61FF7E] to-[#5EEB5B] bg-clip-text text-transparent"
    
  return (
    <main>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center ">

          

{/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-7xl mx-auto">
  {/* Card 1: Ease of Use */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z M8 3v2m8-2v2" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Ease of Use</h3>
    <p className="text-gray-400">
      Our intuitive, user-friendly interface requires no technical knowledge. Just paste your link, choose your preferred format, and download—it's that easy!
    </p>
  </div>

  {/* Card 2: Full HD & 4K Downloads */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Full HD & 4K Downloads</h3>
    <p className="text-gray-400">
      Get the best possible resolution for your downloads, from standard HD to stunning 4K quality. We fetch the highest resolution available from the source video.
    </p>
  </div>

  {/* Card 3: Lightning Fast */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
    <p className="text-gray-400">
      Download videos at maximum speed with our optimized servers.
    </p>
  </div>

  {/* Card 4: 100% Private */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">100% Private</h3>
    <p className="text-gray-400">
      Your downloads are completely anonymous. We don't track or store any data.
    </p>
  </div>

  {/* Card 5: Multiple Formats */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
    <p className="text-gray-400">
      Download in MP4, MP3, and many other formats with quality options.
    </p>
  </div>

  {/* Card 6: No Registration Required */}
  <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">No Registration Required</h3>
    <p className="text-gray-400">
      Start downloading immediately without creating an account or providing personal information.
    </p>
  </div>
          </div>



{/* {What is EasyFetch } */}
<div className="mt-32 max-w-7xl mx-auto">
  <div className="p-6 md:p-8 rounded-xl bg-card border border-gray-800">
    <div className="flex justify-center items-center gap-3 mb-6">
      {/* <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
        <FaDownload className="w-6 h-6 text-green-500" />
      </div> */}
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
        What is EasyFetch?
      </h2>
    </div>
    
    <div className="text-left space-y-6">
      <p className="text-gray-400 leading-relaxed text-lg">
      <span className="font-semibold text-green-400">EasyFetch</span> is not just another downloader—it's a 
      <span className="font-medium text-white"> privacy-first solution</span> designed to give you a seamless
      experience without compromising your personal data. Unlike many other services, we 
      <span className="font-medium text-white"> don't track, store, or sell</span> any of your information. 
      That's right, not a single byte of data is collected from you.
      </p>
      <p className="text-gray-400 leading-relaxed text-lg">
      While you might come across a few ads, we keep them <span className="font-medium text-white">minimal</span>—just 
      enough to sustain our <span className="font-medium text-white">free service</span> without
      disrupting your experience.
      </p>
      <p className="text-gray-400 leading-relaxed text-lg">
      Still not convinced? Take a moment to check the <span className="font-medium text-white">privacy policies</span> of 
      your favorite websites and see for yourself how much data they collect. With 
      <span className="font-semibold text-green-400"> EasyFetch</span>, you stay in 
      <span className="font-medium text-white"> control</span>—no hidden tracking, no invasive
      policies, just <span className="font-medium text-white">safe and reliable downloads</span>.
      </p>
    </div>
    <div className="mt-8">
      <p className="text-lg font-semibold mb-4">Supported Platforms:</p>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
          <FaYoutube className="w-5 h-5 text-red-500" />
          <span>YouTube</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
          <FaInstagram className="w-5 h-5 text-pink-500" />
          <span>Instagram</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
          <FaTiktok className="w-5 h-5 text-blue-500" />
          <span>TikTok</span>
        </div>
     
      </div>
    </div>
  </div>
</div>

{/* FAQ Section */}
<div className="mt-16 max-w-7xl mx-auto mb-16">
  <div className="p-6 md:p-8 rounded-xl bg-card border border-gray-800">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gray-800 rounded-lg overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                  <FaLock className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-lg font-medium">Is it legal to download YouTube videos?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
              <div className="pl-11">
                Downloading YouTube videos for personal use is generally acceptable. However, redistributing or using
                copyrighted content for commercial purposes without permission may violate copyright laws. Always
                respect the content creator's rights and YouTube's terms of service.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                  <FaDownload className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-lg font-medium">What video formats does EasyFetch support?</span>
              </div>
            </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
  <div className="pl-11">
    EasyFetch delivers premium quality downloads with support for Full HD 1080p and stunning 4K resolution videos completely free. Our service supports popular video formats including MP4, WebM, and 3GP, along with high-quality audio options like MP3 and M4A. Download your favorite content in the highest resolution available without any cost or quality loss. Available formats may vary based on the source material, but we always prioritize delivering the best possible quality for your free downloads.
  </div>
</AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Can I download entire YouTube playlists?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
              <div className="pl-11">
              EasyFetch supports downloading entire YouTube playlists. Simply paste the playlist URL into the
                download field, and you'll be given options to download individual videos or the entire playlist.

                However as Of now we are working on this feature and it will be available soon.😉
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                  <FaBolt className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-lg font-medium">Is there a limit to how many videos I can download?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
              <div className="pl-11">
                There's no strict limit on the number of videos you can download. However, to ensure fair usage and
                maintain service quality for all users, we may implement reasonable restrictions during peak times or
                for extremely large downloads.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-gray-800 last:border-0">
            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                  <FaLock className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-lg font-medium">How does EasyFetch ensure my privacy?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
              <div className="pl-11">
                EasyFetch operates on a strict no-logs policy. We don't store your IP address, browsing history, or
                download details. Our service is designed to be as anonymous as possible, ensuring your privacy is
                protected throughout the download process.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
    </main>
  )
}

export default Common;