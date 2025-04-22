import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
      <Link href="/" className="w-full sm:w-auto">
        <Button
          variant="outline"
          className="w-full sm:w-auto border-gray-800/50 hover:border-pink-500/50 
                     hover:scale-[1.02] transition-all duration-200 
                     backdrop-blur-sm bg-card text-sm sm:text-base"
        >
          ← Back to platforms
        </Button>
      </Link>

     
    </div>
  );
};
