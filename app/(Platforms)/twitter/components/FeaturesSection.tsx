import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Fast Downloading",
    description: "Download Twitter videos with ultra-fast speed. We do not limit speed for downloading videos.",
    icon: "⚡"
  },
  {
    title: "No Limit",
    description: "Download as many videos as you want to download. & Enjoy our service",
    icon: "∞"
  },
  {
    title: "Fully Secure",
    description: "Twitter Video Download website is 100% secure. It has an active SSL certificate that ensures all data is encrypted while in transit.",
    icon: "🔒"
  },
  {
    title: "Select Quality",
    description: "We provide the maximum quality by default for all downloads. No need to select quality - we automatically deliver the best available resolution.",
    icon: "🎯"
  },
  {
    title: "User-Friendly",
    description: "Our website specially designed for mobile users. Fully user-friendly website to make your work even easier.",
    icon: "📱"
  },
  {
    title: "Free to Use",
    description: "Yes, it is completely free and easy to use. All you need is a good internet connection.",
    icon: "🎁"
  }
]


function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
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
  )
} 