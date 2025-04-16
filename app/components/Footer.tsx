import Link from "next/link";
import {
  Instagram,
  Youtube,
  Twitter,
  Home,
  FileText,
  Phone,
  HelpCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - New Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                EasyFetch
              </h3>
              <p className="text-gray-400">
                A simple and efficient tool for downloading videos from multiple
                platforms. Fast, secure, and no personal data required.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-md font-medium mb-3 text-gray-300">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="/instagram"
                  className="p-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-600 hover:to-emerald-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="/youtube"
                  className="p-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-600 hover:to-emerald-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Youtube size={18} />
                </Link>
                <Link
                  href="/twitter"
                  className="p-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-600 hover:to-emerald-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="/pornhub"
                  className="p-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-green-600 hover:to-emerald-700 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-bold">PH</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Services & Platforms */}
          <div>
            <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Our Platforms
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Youtube size={16} className="text-gray-500" />
                <Link
                  href="/youtube"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  YouTube Downloader
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-gray-500" />
                <Link
                  href="/instagram"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Instagram Downloader
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Twitter size={16} className="text-gray-500" />
                <Link
                  href="/twitter"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Twitter Downloader
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs font-bold w-4 h-4 flex items-center justify-center text-gray-500">
                  PH
                </span>
                <Link
                  href="/pornhub"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Pornhub Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Home size={16} className="text-gray-500" />
                <Link
                  href="/"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle size={16} className="text-gray-500" />
                <Link
                  href="/aboutus"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <Link
                  href="/contactus"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-gray-500" />
                <Link
                  href="/privacypolicy"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-gray-500" />
                <Link
                  href="/termsofservice"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section - Styled with card effect */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-lg shadow-inner border border-gray-800">
            <h4 className="text-sm font-medium mb-2 text-gray-300">
              Disclaimer
            </h4>
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                This website is not affiliated with or endorsed by YouTube,
                Instagram, Twitter, Pornhub, or any other platform. Our use of
                the name &quot;EasyFetch&quot; is for context, not claiming any
                ownership. It remains the property of the copyright holder.
              </p>
              <p>
                EasyFetch.me doesn&apos;t host any copyrighted material. We
                utilize third-party services to accomplish our goals. All videos
                and content remain the property of their respective owners.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright with animated gradient line */}
        <div className="mt-8 text-center">
          <div className="h-0.5 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EasyFetch.me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
