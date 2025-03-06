'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaDiscord } from "react-icons/fa";
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Construction Notice - Hide on mobile */}
          <span className="hidden md:block font-bold text-red-500">
            Website is under construction
          </span>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://discord.gg/dqZ9B3ASFp">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-300 hover:text-green-400 hover:bg-green-500/10"
            >
              <FaDiscord className="h-6 w-6" />
            </Button>
            </Link>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <span className="block font-bold text-red-500 pb-4">
              Website is under construction
            </span>
            <div className="flex flex-col space-y-4">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 flex items-center justify-center"
              >
                <FaDiscord className="h-6 w-6 mr-2" />
                Discord
              </Button>
              <Link href="/contactus" className="w-full">
                <Button 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white
                  shadow-[0_0_15px_rgba(16,185,129,0.5)] 
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] 
                  transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;