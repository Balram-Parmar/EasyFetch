import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          About EasyFetch
        </h3>
        <p className="text-gray-400 mb-4">
          A simple and efficient tool for downloading YouTube Shorts videos. Fast, secure, and no personal data required.
        </p>
     
        </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
            
          
           
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacypolicy" className="text-gray-400 hover:text-green-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termsofservice" className="text-gray-400 hover:text-green-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            
           
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contactus" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li  >
  <Link className='text-gray-400 hover:text-green-500 transition-colors'href="aboutus">
        About Us
          </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-500 leading-relaxed">
            <p className="mb-1">
              This website is not affiliated with or endorsed by YouTube, Instagram, TikTok, or any other platform. Our use of the name "EasyFetch" is for context, not claiming any ownership. It remains the property of the copyright holder.
            </p>
            <p className="mb-4">
              EasyFetch.me doesn’t host any copyrighted material. We utilize third-party services to accomplish our goals. All videos and content remain the property of their respective owners.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EasyFetch.me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;