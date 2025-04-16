import { Suspense } from "react";
import { SelectPlatform } from "./components/Select";
import Disclaimer from "./components/Disclaimer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Social Media Video Downloader YouTube, Instagram , Pornhub.",
  description:
    "Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality. No registration required, fast and secure.",
  keywords:
    "video downloader, YouTube downloader, Instagram downloader, social media downloader, shorts downloader, reels downloader, twitter video downloader, HD video download, free video downloader",
  authors: [{ name: "EasyFetch", url: "https://www.easyfetch.me" }],
  creator: "EasyFetch",
  publisher: "EasyFetch",
};

export default function Page() {
  return (
    <>
      <main className="text-center mt-24">
        {/* Enhanced Hero Section */}
        <header className="mb-20" role="banner">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-1">
            EasyFetch Video Downloader
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-mono">
            Download YouTube Shorts, Instagram Reels, and Twitter videos in
            maximum quality.
            <span className="line-through">No Tracking</span>, high quality,
            free to use.
          </p>

          <div className="w-[86%] md:max-w-[50%] mx-auto mt-12">
            <Suspense fallback={<LoadingSpinner />}>
              <SelectPlatform />
            </Suspense>
          </div>

          <Suspense fallback={<LoadingText />}>
            <Disclaimer />
          </Suspense>
        </header>

        {/* Current Platforms */}
        <section className="my-20 px-4" aria-label="Current Platforms">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-8">
            Currently Supported Platforms
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <PlatformCard
              icon="🎥"
              title="YouTube Shorts"
              description="Download Shorts in maximum available quality"
              gradient="from-red-400 to-red-600"
            />
            <PlatformCard
              icon="📸"
              title="Instagram Reels"
              description="Download Reels with original quality"
              gradient="from-pink-400 to-purple-600"
            />
            <PlatformCard
              icon="🐦"
              title="Twitter Videos"
              description="Download Twitter videos in FHD"
              gradient="from-blue-400 to-cyan-600"
            />
          </div>
        </section>

        {/* Quality Assurance */}
        <section
          className="my-20 px-4 bg-gray-900/50 py-16"
          aria-label="Quality Assurance"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-8">
            Maximum Quality by Default
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Auto Quality"
              description="Automatically selects the highest available quality"
            />
            <FeatureCard
              icon="⚡"
              title="Fast Processing"
              description="Quick conversion with our optimized servers"
            />
            <FeatureCard
              icon="🔒"
              title="Privacy First"
              description="No tracking, no data collection, no registration"
            />
          </div>
        </section>

        {/* Upcoming Platforms */}
        <section className="my-20 px-4" aria-label="Upcoming Platforms">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent mb-8">
            Coming Soon
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            <UpcomingPlatform
              icon="🎵"
              title="TikTok"
              status="In Development"
            />
            <UpcomingPlatform icon="📌" title="Pinterest" status="Planned" />
            <UpcomingPlatform
              icon="📷"
              title="Instagram Photos"
              status="Planned"
            />
            <UpcomingPlatform
              icon="▶️"
              title="YouTube Videos"
              status="Planned"
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="my-20 px-4" aria-label="How to Use">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-12">
            How It Works
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Paste URL"
              description="Copy and paste your video URL"
            />
            <StepCard
              number="2"
              title="Auto Quality"
              description="Maximum quality selected automatically"
            />
            <StepCard
              number="3"
              title="Download"
              description="Save the video to your device"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="my-20 px-4 max-w-4xl mx-auto"
          aria-label="Frequently Asked Questions"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="Which platforms are currently supported?"
              answer="We currently support YouTube Shorts, Instagram Reels, and Twitter videos. More platforms are coming soon!"
            />
            <FAQItem
              question="What quality are the downloads?"
              answer="We automatically select the maximum available quality for each video."
            />
            <FAQItem
              question="Is my data safe?"
              answer="Yes! We don't collect any personal data, and all downloads are processed securely."
            />
            <FAQItem
              question="When will new platforms be added?"
              answer="We're actively working on adding TikTok, Pinterest, Instagram Photos, and YouTube Videos. Stay tuned for updates!"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-20" aria-label="Call to Action">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-8">
            Start Downloading Now
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Experience the fastest way to download videos from your favorite
            platforms
          </p>
          <div className="w-[86%] md:max-w-[40%] mx-auto mt-8">
            <Suspense fallback={<LoadingButton />}>
              <SelectPlatform />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}

// New Component Definitions
function PlatformCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="p-8 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="text-5xl mb-4">{icon}</div>
      <h3
        className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}
      >
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function UpcomingPlatform({
  icon,
  title,
  status,
}: {
  icon: string;
  title: string;
  status: string;
}) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-100 mb-2">{title}</h4>
      <span className="text-emerald-400 text-sm">{status}</span>
    </div>
  );
}

// Enhanced Component Definitions
function PlatformFeature({
  title,
  features,
  gradient,
}: {
  title: string;
  features: string[];
  gradient: string;
}) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <h4
        className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}
      >
        {title}
      </h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <span className="text-emerald-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-100 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-6">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-emerald-400 transition-colors">
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="mt-4 text-gray-400">{answer}</p>
    </details>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h4 className="text-xl font-semibold text-gray-100 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Loading Fallback Components
function LoadingSpinner() {
  return (
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-400 mx-auto"></div>
  );
}

function LoadingText() {
  return <p className="text-gray-500 text-center">Loading...</p>;
}

function LoadingButton() {
  return <div className="h-12 bg-emerald-500 animate-pulse rounded-md"></div>;
}
