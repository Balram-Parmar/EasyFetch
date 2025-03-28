import { Suspense } from 'react';
import { SelectPlatform } from './components/Select';
import Disclaimer from './components/Disclaimer';

export default function Page() {
  return (
    <>
      <div className="text-center mt-24">
        {/* Existing Hero Section */}
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

        {/* New SEO Sections */}
        <section className="mt-20 px-4">
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
                  '60fps High Frame Rate Support'
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
                  'Metadata preservation'
                ]}
                gradient="from-green-400 to-emerald-600"
              />
            </Suspense>
          </div>
        </section>

        {/* Universal Downloader Section */}
        <section className="my-28 px-4">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-6">
            One-Click Universal Video Downloader
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Our cross-platform download solution supports 50+ social media platforms including:
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['Facebook Watch', 'LinkedIn Videos', 'Twitch Clips', 'Dailymotion', 'Vimeo'].map((platform) => (
              <span key={platform} className="px-6 py-3 bg-gray-800 rounded-full text-emerald-400 font-mono">
                {platform}
              </span>
            ))}
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="bg-gray-900/50 py-16 px-4">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent mb-12">
            Why Choose Our Video Downloader?
          </h3>
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-20 px-4 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent mb-12">
            Frequently Asked Questions
          </h3>
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
        </section>

        {/* Final CTA */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-8">
            Start Downloading Now
          </h3>
          <div className="w-[86%] md:max-w-[40%] mx-auto mt-8">
            <Suspense fallback={<LoadingButton />}>
              <SelectPlatform />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

// Component Definitions
function PlatformFeature({ title, features, gradient }: { title: string; features: string[]; gradient: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-xl hover:border-emerald-400 transition-all">
      <h4 className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
        {title}
      </h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
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
    <div className="text-center p-6 border border-gray-700 rounded-xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-100 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-6">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-emerald-400">
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl transition-transform group-open:rotate-180">▼</span>
      </summary>
      <p className="mt-4 text-gray-400">{answer}</p>
    </details>
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
