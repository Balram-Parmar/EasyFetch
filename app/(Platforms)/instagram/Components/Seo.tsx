import React, { FC } from "react";

// Instagram dark theme gradient
const instagramGradient =
  "bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#E1306C]";

export const Seo: FC = () => {
  return (
    <section className="bg-gray-900 text-white flex flex-col justify-center mt-12 max-w-4xl mx-auto px-6 py-12 rounded-2xl shadow-2xl animate-fadeIn">
      <h2
        className={`${instagramGradient} bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight animate-fadeInSlow`}
      >
        Free Instagram Video Downloader & Insta Saver Reel Tool
      </h2>

      <p className="text-lg text-gray-300 text-justify mb-6 leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
        Discover the ultimate <strong>instagram video downloader free</strong>{" "}
        experience with EasyFetch. As the go-to{" "}
        <strong>insta saver reel</strong> and <strong>insta reels saver</strong>
        , our platform lets you grab any clip in seconds. Enjoy unlimited{" "}
        <strong>instagram video downloader free</strong> performance and{" "}
        <strong>download instagram video mp4 online</strong> without watermarks
        or restrictions. Fast, secure, and completely free.
      </p>

      <p className="text-lg text-gray-300 text-justify mb-6 leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
        Use our <strong>insta reel to mp4 converter</strong> and{" "}
        <strong>insta reels saver</strong> to{" "}
        <strong>download reels video</strong> instantly. Our{" "}
        <strong>instagram to mp4 converter</strong> supports resolutions from{" "}
        <strong>instagram to mp4 converter 1080p</strong> to{" "}
        <strong>instagram to mp4 converter 4k</strong>. Prefer sound? Try the{" "}
        <strong>instagram to mp4 converter audio</strong> or{" "}
        <strong>download instagram mp4 to mp3</strong> feature. Check out how
        enthusiasts discuss us on{" "}
        <strong>instagram to mp4 converter reddit</strong> and see why EasyFetch
        leads the pack in <strong>instagram download mp4 format</strong> and{" "}
        <strong>download insta reels to mp4</strong> workflows.
      </p>
    </section>
  );
};

export function WhatIsInstagram() {
  return (
    <section className="bg-gray-900 text-white flex flex-col justify-center mt-12 max-w-4xl mx-auto px-6 py-12 rounded-2xl shadow-2xl animate-fadeIn">
      <div className="text-center mb-12 space-y-4">
        <h2
          className={`${instagramGradient} bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold inline-block py-2 animate-fadeInSlow`}
        >
          What Is Instagram & How Our Converter Works
        </h2>
        <div className="flex justify-center space-x-3">
          <span className="w-12 h-1 bg-purple-500 rounded-full rotate-12"></span>
          <span className="w-12 h-1 bg-pink-500 rounded-full"></span>
          <span className="w-12 h-1 bg-red-500 rounded-full -rotate-12"></span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-xl blur opacity-20 transition-opacity group-hover:opacity-40 duration-1000 bg-gradient-to-r from-[#833AB4] to-[#E1306C]"></div>
          <p className="relative text-lg text-gray-300 text-justify leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
            Instagram is the world’s favorite platform for visual storytelling.
            Looking for an <strong>instagram to mp4 converter</strong>? Our{" "}
            <strong>instagram to mp4 converter</strong> handles everything from{" "}
            <strong>instagram to mp4 converter reels</strong> to batch{" "}
            <strong>instagram to mp4 converter reels</strong>. Enjoy
            crystal-clear downloads in{" "}
            <strong>instagram to mp4 converter 1080p</strong> or
            ultra-high-definition <strong>instagram to mp4 converter 4k</strong>
            . Dive into community feedback on{" "}
            <strong>instagram to mp4 converter reddit</strong> and unlock audio
            with our <strong>instagram to mp4 converter audio</strong>{" "}
            extension.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fadeInMedium">
          {[
            {
              icon: "📸",
              title: "Visual Sharing",
              desc: "Share photos & videos seamlessly",
            },
            {
              icon: "🎥",
              title: "Reels Hub",
              desc: "Browse trending Reels content",
            },
            {
              icon: "⚡",
              title: "Fast Conversion",
              desc: "In-app <strong>insta reel to mp4 converter</strong> tool",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-gray-700 bg-black/50 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p
                className="text-gray-400 text-sm"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowToDownload() {
  return (
    <section className="bg-gray-900 text-white flex flex-col justify-center mt-12 max-w-4xl mx-auto px-6 py-12 rounded-2xl shadow-2xl animate-fadeIn">
      <div className="text-center mb-12 space-y-2">
        <h2
          className={`${instagramGradient} bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold py-2 animate-fadeInSlow`}
        >
          Download Reels & Videos in Seconds
        </h2>
        <div className="flex justify-center space-x-3 mt-4">
          <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
          <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
          <span className="w-8 h-1 bg-red-500 rounded-full"></span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-lg blur opacity-20 transition-opacity group-hover:opacity-40 duration-1000 bg-gradient-to-r from-[#E1306C] to-[#FD1D1D]"></div>
          <p className="relative text-lg text-gray-300 text-justify leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
            From <strong>download reels video</strong> to{" "}
            <strong>insta reels downloader</strong> and{" "}
            <strong>insta reels downloader</strong>, EasyFetch has you covered.
            Our <strong>ig reels downloader</strong> and{" "}
            <strong>ig reels downloader</strong> tools eliminate the need for
            complex <strong>instagram reel download er</strong> solutions. Enjoy
            smooth <strong>instagram reel download er</strong> flow, use{" "}
            <strong>ins reels download</strong> or{" "}
            <strong>ins reels download</strong> directly, and{" "}
            <strong>download ig reels</strong> or{" "}
            <strong>download ig reels</strong> in one click. Get high-speed{" "}
            <strong>download ig reel video</strong> and{" "}
            <strong>download ig reel video</strong> access instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fadeInMedium">
          {[
            "Paste your Instagram link into our iframe-free <strong>insta reel to mp4 converter</strong>",
            "Select output: MP4, MP3, HD or 4K and choose <strong>download instagram mp4 hd</strong>",
            "Click download and <strong>download instagram mp4 link</strong> to save the file",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-700 bg-black/50"
            >
              <div className="text-5xl mb-4">{i + 1}.</div>
              <p
                className="text-gray-300 text-sm"
                dangerouslySetInnerHTML={{ __html: step }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowToDownloadReelsGuide() {
  return (
    <section className="bg-gray-900 text-white flex flex-col gap-6 mt-12 max-w-4xl mx-auto px-6 py-12 rounded-2xl shadow-2xl animate-fadeIn">
      <h2
        className={`${instagramGradient} bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight animate-fadeInSlow`}
      >
        Step-by-Step Guide: Insta Reels to MP4
      </h2>

      <ol className="list-decimal list-inside space-y-6">
        {[
          {
            title: "Copy Reel URL",
            desc: "Grab the reel link you want to <strong>download insta reels to mp4</strong> with our <strong>insta reel to mp4 converter</strong>. Use the <strong>download instagram video mp4 online</strong> feature for quick access.",
          },
          {
            title: "Choose Format & Quality",
            desc: "Pick <strong>download instagram mp4 hd</strong>, <strong>download instagram mp4 to mp3</strong>, or standard MP4. For direct download use the <strong>download instagram mp4 link</strong> button.",
          },
          {
            title: "Download & Share",
            desc: "Click download to get your file. Supports <strong>download instagram mp4 reels</strong>, <strong>instagram download mp4 format</strong>, and <strong>download insta reels to mp4</strong> in one go.",
          },
        ].map(({ title, desc }, idx) => (
          <li
            key={idx}
            className="bg-black/60 border border-gray-700 p-6 rounded-xl shadow-inner animate-fadeInMedium"
          >
            <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
              {idx + 1}. {title}
            </h3>
            <p
              className="text-gray-300 text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
