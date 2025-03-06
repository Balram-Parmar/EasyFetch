import Head from "next/head";
import { FaYoutube, FaInstagram, FaTiktok, FaLock, FaBolt, FaDownload } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Common = () => {
  let font: string = "bg-gradient-to-r from-[#61FF7E] to-[#5EEB5B] bg-clip-text text-transparent";
  
  return (
    <>
      <Head>
        <title>YouTube Shorts Downloader | EasyFetch – Fast & Private Downloads</title>
        <meta name="description" content="Download YouTube Shorts in Full HD & 4K quickly and privately with EasyFetch. Our YouTube Shorts Downloader offers fast, secure, and free downloads with no registration required." />
        <meta name="keywords" content="YouTube Shorts Downloader, Download YouTube Shorts, YouTube Shorts HD, YouTube Shorts 4K, Fast YouTube Downloader, private video downloader, EasyFetch" />
      </Head>
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
                  Our intuitive, user-friendly interface is designed for everyone—even when downloading YouTube Shorts. Simply paste your link, choose your preferred format, and download instantly!
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
                  Enjoy the best quality downloads—whether it's standard HD or stunning 4K for your favorite YouTube Shorts.
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
                  Experience lightning-fast downloads, optimized for YouTube Shorts and all other video formats.
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
                  Your downloads—whether YouTube Shorts or longer videos—are completely anonymous. We don't track or store any data.
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
                  Download YouTube Shorts and other videos in MP4, MP3, and more—ensuring you get the format that suits your device.
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
                  Download YouTube Shorts and other videos instantly without signing up or sharing any personal information.
                </p>
              </div>
            </div>

            {/* What is EasyFetch */}
            <div className="mt-32 max-w-7xl mx-auto">
              <div className="p-6 md:p-8 rounded-xl bg-card border border-gray-800">
                <div className="flex justify-center items-center gap-3 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    What is EasyFetch?
                  </h2>
                </div>
                
                <div className="text-left space-y-6">
                  <p className="text-gray-400 leading-relaxed text-lg">
                    <span className="font-semibold text-green-400">EasyFetch</span> is a privacy-first downloader designed not only for traditional videos but also for the popular <span className="font-medium text-white">YouTube Shorts Downloader</span>. Enjoy fast, secure downloads in the highest quality available—be it Full HD, 4K, or optimized formats for YouTube Shorts.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    We serve your need for quick access to trending YouTube Shorts without compromising your data. Minimal ads support our free service, ensuring that your experience remains uninterrupted.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Compare our privacy-first approach with other services. With <span className="font-semibold text-green-400">EasyFetch</span>, you stay in control—no tracking, no data collection, just safe and reliable downloads.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-lg font-semibold mb-4">Supported Platforms:</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                      <FaYoutube className="w-5 h-5 text-red-500" />
                      <span>YouTube & Shorts</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                      <FaInstagram className="w-5 h-5 text-pink-500" />
                      <span>Instagram (Comming soon)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                      <FaTiktok className="w-5 h-5 text-blue-500" />
                      <span>TikTok (Comming soon)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id='faq'className="mt-16 max-w-7xl mx-auto mb-16">
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
                            <span className="text-lg font-medium">Is it legal to download YouTube videos and Shorts?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                          <div className="pl-11">
                            Downloading YouTube videos and YouTube Shorts for personal use is generally acceptable. However, redistributing or using copyrighted content for commercial purposes without permission may violate copyright laws. Always respect the content creator’s rights and YouTube’s terms of service.
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-b border-gray-800 last:border-0">
                        <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                              <FaDownload className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-lg font-medium">What formats does EasyFetch support?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                          <div className="pl-11">
                            EasyFetch delivers premium quality downloads with support for Full HD 1080p, 4K resolution, and optimized formats for YouTube Shorts. We support MP4, WebM, 3GP, MP3, and M4A. Available formats depend on the source, but we always deliver the best quality.
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
                            <span className="text-lg font-medium">Can I download entire YouTube playlists including Shorts?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                          <div className="pl-11">
                            EasyFetch supports downloading entire YouTube playlists. Paste the playlist URL to get options for individual video downloads or the complete playlist. Note that support for certain features, like batch downloading YouTube Shorts, is coming soon.
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className="border-b border-gray-800 last:border-0">
                        <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                              <FaBolt className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-lg font-medium">Is there a download limit?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                          <div className="pl-11">
                            There is no strict limit on downloading YouTube Shorts or other videos. However, to ensure fair usage, we may implement reasonable restrictions during peak times or for extremely large downloads.
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5" className="border-b border-gray-800 last:border-0">
                        <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                              <FaLock className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-lg font-medium">How does EasyFetch protect my privacy?</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                          <div className="pl-11">
                            EasyFetch operates on a strict no-logs policy. We do not store your IP address, browsing history, or download details, ensuring your privacy is protected while downloading YouTube Shorts and other videos.
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
    </>
  )
}

export default Common;
