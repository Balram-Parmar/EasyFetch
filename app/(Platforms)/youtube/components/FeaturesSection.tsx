import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDownload, FaShieldAlt, FaUserFriends, FaLock, FaCheckCircle, FaWater } from "react-icons/fa"

const features = [
  {
    title: "Fast Downloading",
    description: "Download YouTube shorts videos with ultra-fast speed. We do not limit speed for downloading videos.",
    icon: FaDownload
  },
  {
    title: "No Limit",
    description: "Download as many videos as you want to download. & Enjoy our service",
    icon: FaCheckCircle
  },
  {
    title: "Fully Secure",
    description: "YouTube Video Download website is 100% secure. It has an active SSL certificate that ensures all data is encrypted while in transit.",
    icon: FaShieldAlt
  },
  {
    title: "Select Quality",
    description: "You can download videos of different quality, with or without sound. Select the video quality and it will download the video.",
    icon: FaUserFriends
  },
  {
    title: "User-Friendly",
    description: "Our website specially designed for mobile users. Fully user-friendly website to make your work even easier.",
    icon: FaLock
  },
  {
    title: "Free to Use",
    description: "Yes, it is completely free and easy to use. All you need is a good internet connection.",
    icon: FaWater
  }
]

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
  return (
    <div className="p-4 sm:p-6 border border-gray-700 rounded-xl hover:border-red-500/50 
                    transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                       rounded-full bg-red-500/10 mb-4" role="img" aria-label={`${title} icon`}>
          <Icon className="text-3xl sm:text-4xl text-red-500" aria-hidden="true" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export const FeaturesSection = () => {
  return (
    <section className="mb-12 sm:mb-20" aria-labelledby="features-heading">
      <Card className="rounded-lg shadow-sm bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 
                      mb-12 sm:mb-20 mx-4 sm:mx-0">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-100" id="features-heading">
            Why Choose Our YouTube Shorts Downloader?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 