import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Instagram Video Downloader Free",
    description:
      "Download Instagram Reels with ultra-fast speed and without any cost. Our insta reels saver has no speed limits for downloading media with over 1.1K monthly searches.",
    icon: "⚡",
  },
  {
    title: "Instagram to MP4 Converter 1080p & 4K",
    description:
      "We provide the maximum quality for all downloads with 3.7K monthly searches. Get your videos in high definition with our Instagram to MP4 converter 4K or Instagram to MP4 converter 1080p.",
    icon: "🎯",
  },
  {
    title: "Download Instagram MP4 Link Easily",
    description:
      "Simply paste the download Instagram MP4 link from any post and our system will automatically process it. Over 3K monthly searches prove the demand for our easy-to-use service.",
    icon: "🔗",
  },
  {
    title: "Instagram to MP4 Converter Audio",
    description:
      "Need just the audio? With 3K monthly searches, our tool can extract and download Instagram MP4 to MP3, giving you high-quality audio files from any video.",
    icon: "🎵",
  },
  {
    title: "Insta Reels Downloader For All Devices",
    description:
      "Our IG reels downloader is specially designed for all devices with 1.6K monthly searches. Download Instagram video MP4 online from your phone, tablet, or computer.",
    icon: "📱",
  },
  {
    title: "Ins Reels Download - The #1 Solution",
    description:
      "With an incredible 60K+ monthly searches, our ins reels download service is the most trusted tool to download reels video without any watermarks. Download ig reels in seconds.",
    icon: "✨",
  },
];

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 hover:border-pink-500/50 transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}

export const FeaturesSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </section>
  );
};
