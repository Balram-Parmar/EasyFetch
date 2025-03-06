import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-800/30 bg-black/10 backdrop-blur-lg fixed top-0 z-50">
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          EasyFetch.me
        </span>
        </Link>
        
        {/* Construction Notice */}
        <span className="font-bold text-red-500">
        Website is under construction
        </span>

        {/* Navigation Links */}
        {/* <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="/features" 
          className="text-gray-300 hover:text-green-400 transition-colors"
        >
          Features
        </Link>
        <Link 
          href="/supported" 
          className="text-gray-300 hover:text-green-400 transition-colors"
        >
          Supported Sites
        </Link>
        <Link 
          href="/faq" 
          className="text-gray-300 hover:text-green-400 transition-colors"
        >
          FAQ
        </Link>
        </nav> */}

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="text-gray-300 hover:text-green-400 hover:bg-green-500/10"
        >
        <FaDiscord className="h-6 w-6" />
        </Button>
        <Link href="/contactus">
        <Button 
          className="bg-emerald-500 hover:bg-emerald-600 text-white
          shadow-[0_0_15px_rgba(16,185,129,0.5)] 
          hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] 
          transition-all duration-300"
        >
          Contact Us
        </Button>
        </Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;