import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Download } from "../download"
import Disclaimer from "@/app/components/Disclaimer"

export const DownloadSection = () => {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 mb-12 sm:mb-20 mx-4 sm:mx-0">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">Twitter Video Download</CardTitle>
        <CardDescription className="text-center text-base sm:text-lg">Download Twitter videos, photos, and GIFs for free</CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <Download />
        <Disclaimer />
      </CardContent>
    </Card>
  )
} 