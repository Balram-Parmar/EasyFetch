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
        Free Instagram Video Downloader & Insta Reels MP4 Saver Tool
      </h2>

      <p className="text-lg text-gray-300 text-justify mb-6 leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
        Unlock the full potential of{" "}
        <strong>instagram video downloader free</strong> tools with EasyFetch –
        the top-rated <strong>insta saver reel</strong> and{" "}
        <strong>insta reels saver</strong> solution. Our platform allows you to{" "}
        <strong>download insta reels to mp4</strong> effortlessly. Whether
        you&apos;re looking for an <strong>insta reels downloader</strong> or an{" "}
        <strong>ig reels downloader</strong>, EasyFetch ensures fast, secure
        access without watermarks.
      </p>

      <p className="text-lg text-gray-300 text-justify mb-6 leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
        Try our <strong>insta reel to mp4 converter</strong> for crystal-clear
        video grabs. With support for{" "}
        <strong>instagram to mp4 converter 1080p</strong>,{" "}
        <strong>instagram to mp4 converter 4k</strong>, and{" "}
        <strong>instagram to mp4 converter audio</strong>, you can{" "}
        <strong>download instagram video mp4 online</strong> in any format you
        need. Popular among users on{" "}
        <strong>instagram to mp4 converter reddit</strong>, our tool also lets
        you <strong>download instagram mp4 to mp3</strong> or get the full{" "}
        <strong>download instagram mp4 hd</strong> experience.
      </p>

      <p className="text-lg text-gray-300 text-justify mb-6 leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
        Whether it’s <strong>instagram to mp4 converter reels</strong>,{" "}
        <strong>download ig reel video</strong>,{" "}
        <strong>download reels video</strong>, or{" "}
        <strong>instagram reel download er</strong> needs, EasyFetch delivers.
        Get started with the most complete <strong>ins reels download</strong>{" "}
        toolkit available. Don’t forget to try our features to{" "}
        <strong>download instagram mp4 reels</strong>, copy the{" "}
        <strong>download instagram mp4 link</strong>, and enjoy the ultimate{" "}
        <strong>instagram download mp4 format</strong> experience.
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
          What Is Instagram & How Our MP4 Converter Works
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
            Instagram is the go-to platform for photo and video sharing. Whether
            you&apos;re searching for an{" "}
            <strong>instagram video downloader free</strong> or want to{" "}
            <strong>download reels video</strong> in high quality, we’ve got you
            covered. Our powerful <strong>instagram to mp4 converter</strong>{" "}
            supports everything from{" "}
            <strong>instagram to mp4 converter reels</strong> to{" "}
            <strong>instagram to mp4 converter audio</strong> options. Need HD?
            Try the <strong>instagram to mp4 converter 1080p</strong> or{" "}
            <strong>instagram to mp4 converter 4k</strong> for stunning clarity.
            Curious about user feedback? Search{" "}
            <strong>instagram to mp4 converter reddit</strong> to see how
            EasyFetch leads the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fadeInMedium">
          {[
            {
              icon: "📸",
              title: "Visual Sharing",
              desc: "Post photos & videos and use <strong>insta reels downloader</strong> to save content effortlessly.",
            },
            {
              icon: "🎥",
              title: "Reels Hub",
              desc: "Browse & <strong>download ig reels</strong> with ease via our <strong>ig reels downloader</strong> tool.",
            },
            {
              icon: "⚡",
              title: "Fast Conversion",
              desc: "Use our <strong>insta reel to mp4 converter</strong> or <strong>download instagram mp4 to mp3</strong> instantly.",
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

        <div className="mt-8 text-gray-300 text-justify text-lg leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
          Our advanced downloader lets you{" "}
          <strong>download instagram mp4 link</strong>, access{" "}
          <strong>instagram reel download er</strong> tools, and benefit from{" "}
          <strong>download instagram video mp4 online</strong> capabilities.
          Whether it&apos;s <strong>ins reels download</strong>,{" "}
          <strong>download instagram mp4 reels</strong>, or full{" "}
          <strong>instagram download mp4 format</strong> support, EasyFetch
          provides everything—including{" "}
          <strong>download instagram mp4 hd</strong> and{" "}
          <strong>download insta reels to mp4</strong>.
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
          Download Instagram Reels & Videos in Seconds
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
            Whether you&apos;re looking for an{" "}
            <strong>instagram video downloader free</strong> or want to{" "}
            <strong>download instagram video mp4 online</strong>, our tool makes
            it simple. Access the best <strong>insta saver reel</strong> and{" "}
            <strong>insta reels saver</strong> options. Our{" "}
            <strong>insta reels downloader</strong> and{" "}
            <strong>ig reels downloader</strong> work seamlessly alongside{" "}
            <strong>instagram reel download er</strong> features. From{" "}
            <strong>ins reels download</strong> to full-quality{" "}
            <strong>download ig reels</strong>, we’ve made it fast to{" "}
            <strong>download ig reel video</strong> with high-speed performance
            and no watermarks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fadeInMedium">
          {[
            "Paste your link into our <strong>insta reel to mp4 converter</strong> or <strong>instagram to mp4 converter</strong> input.",
            "Pick output settings: <strong>download instagram mp4 hd</strong>, <strong>instagram to mp4 converter 1080p</strong>, or even <strong>instagram to mp4 converter 4k</strong>.",
            "Tap download to get your <strong>download instagram mp4 link</strong>, convert audio using <strong>instagram to mp4 converter audio</strong>, or save it as <strong>download instagram mp4 to mp3</strong>.",
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

        <div className="mt-8 text-gray-300 text-justify text-lg leading-relaxed backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-gray-700 animate-fadeInMedium">
          Our platform supports all media types—from{" "}
          <strong>instagram to mp4 converter reels</strong> to full{" "}
          <strong>instagram download mp4 format</strong>. With features like{" "}
          <strong>download insta reels to mp4</strong> and community-reviewed
          tools found on <strong>instagram to mp4 converter reddit</strong>,
          EasyFetch is the one-stop destination for anything MP4-related.
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
            desc: "Open Instagram and copy the reel link you want. Our <strong>insta reel to mp4 converter</strong> supports <strong>download insta reels to mp4</strong>, <strong>instagram to mp4 converter reels</strong>, and more. You can even <strong>download instagram video mp4 online</strong> with just the URL.",
          },
          {
            title: "Choose Format & Quality",
            desc: "Select your preferred output: <strong>download instagram mp4 hd</strong>, <strong>instagram to mp4 converter 1080p</strong>, or <strong>instagram to mp4 converter 4k</strong>. Need audio only? Use the <strong>instagram to mp4 converter audio</strong> or go for <strong>download instagram mp4 to mp3</strong> format. Click the <strong>download instagram mp4 link</strong> when ready.",
          },
          {
            title: "Download & Share",
            desc: "Press download to receive your file instantly. This works for <strong>instagram download mp4 format</strong>, <strong>download instagram mp4 reels</strong>, and even those mentioned on <strong>instagram to mp4 converter reddit</strong>. For faster access, try our <strong>ig reels downloader</strong> or <strong>instagram reel download er</strong> built-in tools.",
          },
          {
            title: "Advanced Saving Options",
            desc: "Looking for bulk downloads? Use <strong>instagram to mp4 converter batch</strong>. For quick saves, <strong>insta reels downloader</strong>, <strong>insta reels saver</strong>, and <strong>insta saver reel</strong> are all integrated. You can also <strong>download ig reels</strong> or <strong>download ig reel video</strong> in HD or 4K effortlessly.",
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
