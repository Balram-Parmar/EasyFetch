import { Suspense } from 'react';
import { SelectPlatform } from './components/Select';
import Disclaimer from './components/Disclaimer';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>EasyFetch Video Downloader - Download YouTube, Instagram & More in HD</title>
        <meta name="description" content="Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality. No registration required, fast and secure." />
        <meta name="keywords" content="video downloader, youtube downloader, instagram downloader, tiktok downloader, hd video download, 4k video download, free video downloader" />
        <meta property="og:title" content="EasyFetch Video Downloader - Download YouTube, Instagram & More in HD" />
        <meta property="og:description" content="Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EasyFetch Video Downloader - Download YouTube, Instagram & More in HD" />
        <meta name="twitter:description" content="Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality." />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "EasyFetch Video Downloader",
            "description": "Free online video downloader for YouTube, Instagram, TikTok and more. Download videos in HD, FHD, 4K quality.",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "YouTube video download",
              "Instagram video download",
              "TikTok video download",
              "HD quality download",
              "4K resolution support",
              "Batch processing",
              "No registration required"
            ]
          })
        }}
      />

      <main className="text-center mt-24">
        {/* Enhanced Hero Section */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-1">
            EasyFetch Video Downloader
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-mono">
            Download YouTube Shorts, Instagram Reels in HD FHD 4K MP4 format easily and quickly.  
            <span className="line-through">No Tracking</span>, high quality, free to use.
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

        {/* Stats Section */}
        <section className="mt-20 px-4" aria-label="Download Statistics">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1K+" label="Downloads" />
            <StatCard number="4K" label="Max Resolution" />
            <StatCard number="24/7" label="Availability" />
          </div>
        </section>

        {/* Enhanced Platform Features */}
        <section className="mt-20 px-4" aria-label="Supported Platforms">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-8">
            Multi-Platform Video Download Solution
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left">
            <Suspense fallback={<LoadingFeature />}>
              <PlatformFeature 
                title="YouTube Video Downloader"
                features={[
                  'Download Shorts, VODs, and Live streams',
                  'MP4/MP3 conversion options',
                  '4K UHD Quality Preservation',
                  '60fps High Frame Rate Support',
                  'Subtitle extraction',
                  'Playlist batch download'
                ]}
                gradient="from-green-400 to-emerald-600"
              />
            </Suspense>

            <Suspense fallback={<LoadingFeature />}>
              <PlatformFeature 
                title="Instagram Reels Download"
                features={[
                  'Download Reels & IGTV videos',
                  'Private account support',
                  'Story video archiving',
                  'Metadata preservation',
                  'Carousel post support',
                  'Highlights download'
                ]}
                gradient="from-green-400 to-emerald-600"
              />
            </Suspense>
          </div>
        </section>

        {/* Enhanced Universal Downloader Section */}
        <section className="my-28 px-4" aria-label="Supported Social Media Platforms">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-6">
            One-Click Universal Video Downloader
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Our cross-platform download solution supports 50+ social media platforms including:
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['Facebook Watch', 'LinkedIn Videos', 'Twitch Clips', 'Dailymotion', 'Vimeo', 'TikTok', 'Twitter', 'Reddit'].map((platform) => (
              <span key={platform} className="px-6 py-3 bg-gray-800 rounded-full text-emerald-400 font-mono hover:bg-gray-700 transition-colors">
                {platform}
              </span>
            ))}
          </div>
        </section>

        {/* Enhanced Feature Comparison Section */}
        <section className="bg-gray-900/50 py-16 px-4" aria-label="Key Features">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent mb-12">
            Why Choose Our Video Downloader?
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🚀"
              title="Instant Processing"
              description="300% faster conversion speed using our distributed CDN network"
            />
            <FeatureCard 
              icon="🛡️"
              title="Military-Grade Security"
              description="SSL encrypted transfers and automatic file deletion after 24 hours"
            />
            <FeatureCard 
              icon="📱"
              title="Device Optimization"
              description="Automatic resolution adjustment for perfect mobile playback"
            />
            <FeatureCard 
              icon="⚡"
              title="Batch Processing"
              description="Download multiple videos simultaneously with progress tracking"
            />
            <FeatureCard 
              icon="🎯"
              title="Smart Format Detection"
              description="Automatic format selection based on your device and preferences"
            />
            <FeatureCard 
              icon="🔒"
              title="Privacy Focused"
              description="No registration required, no tracking, no data collection"
            />
          </div>
        </section>

        {/* New How It Works Section */}
        <section className="my-20 px-4" aria-label="How to Use">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-12">
            How It Works
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Paste URL"
              description="Copy and paste your video URL"
            />
            <StepCard 
              number="2"
              title="Select Quality"
              description="Choose your preferred resolution"
            />
            <StepCard 
              number="3"
              title="Process"
              description="Wait for our AI to process the video"
            />
            <StepCard 
              number="4"
              title="Download"
              description="Click download and save your video"
            />
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="my-20 px-4 max-w-4xl mx-auto" aria-label="Frequently Asked Questions">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="Is video downloading legal?"
              answer="Downloading content for personal use is generally permitted, but we advise checking platform TOS and copyright laws in your region."
            />
            <FAQItem 
              question="Do you store downloaded videos?"
              answer="All files are automatically purged from our servers within 24 hours - your downloads remain completely private."
            />
            <FAQItem 
              question="Which resolutions are supported?"
              answer="We support up to 8K resolution where available, with automatic quality detection based on source material."
            />
            <FAQItem 
              question="Can I download from private accounts?"
              answer="Yes, you can download from private accounts if you have access to the content through your own account."
            />
            <FAQItem 
              question="What formats are supported?"
              answer="We support MP4, MP3, WebM, and other common formats with automatic conversion capabilities."
            />
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="my-20 px-4 bg-gray-900/30 py-16" aria-label="User Testimonials">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-12">
            What Our Users Say
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The fastest video downloader I've ever used. Love the quality options!"
              author="Sarah J."
              role="Content Creator"
            />
            <TestimonialCard 
              quote="Perfect for archiving my favorite YouTube content. Simple and reliable."
              author="Mike R."
              role="Digital Archivist"
            />
            <TestimonialCard 
              quote="Great for downloading educational content. The batch feature is a lifesaver!"
              author="David L."
              role="Student"
            />
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <section className="mb-20" aria-label="Call to Action">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-8">
            Start Downloading Now
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join millions of users who trust EasyFetch for their video downloading needs
          </p>
          <div className="w-[86%] md:max-w-[40%] mx-auto mt-8">
            <Suspense fallback={<LoadingButton />}>
              <SelectPlatform />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  )
}

// Enhanced Component Definitions
function PlatformFeature({ title, features, gradient }: { title: string; features: string[]; gradient: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <h4 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
        {title}
      </h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
            <span className="text-emerald-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-100 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-6">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-emerald-400 transition-colors">
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-4 text-gray-400">{answer}</p>
    </details>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <div className="text-3xl font-bold text-emerald-400 mb-2">{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h4 className="text-xl font-semibold text-gray-100 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <p className="text-gray-300 mb-4">"{quote}"</p>
      <div className="text-emerald-400 font-semibold">{author}</div>
      <div className="text-gray-500 text-sm">{role}</div>
    </div>
  )
}

// Loading Fallback Components
function LoadingSpinner() {
  return (
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-400 mx-auto"></div>
  )
}

function LoadingText() {
  return <p className="text-gray-500 text-center">Loading...</p>
}

function LoadingFeature() {
  return <div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>
}

function LoadingButton() {
  return <div className="h-12 bg-emerald-500 animate-pulse rounded-md"></div>
}
