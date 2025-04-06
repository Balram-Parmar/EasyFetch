import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaYoutube } from "react-icons/fa"

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
      <Link href="/" className="w-full sm:w-auto">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto border-gray-800/50 hover:border-red-500/50 
                     hover:scale-[1.02] transition-all duration-200 
                     backdrop-blur-sm bg-card text-sm sm:text-base"
          aria-label="Back to home page"
        >
          ← Back To Home Page
        </Button>
      </Link>

      <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-6">
        <div className="p-2 sm:p-3 rounded-xl bg-black/20 backdrop-blur-lg 
                        border border-gray-800/30 shadow-lg relative w-12 h-12 sm:w-14 sm:h-14"
             role="img"
             aria-label="YouTube Shorts logo">
          <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" 
                    aria-hidden="true" />
          
        </div>
        
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center 
                      bg-gradient-to-r from-red-500 to-red-600 
                      bg-clip-text text-transparent px-4 sm:px-0">
          YouTube Shorts Download
        </h1>
      </div>
    </header>
  )
} 