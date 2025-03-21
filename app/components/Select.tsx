'use client'
import React from 'react';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from 'next/link';
import { platforms } from '../data/platforms';

export const SelectPlatform = () => {
  return (
    <Select>
      <SelectTrigger 
        className="w-full bg-gray-600 border-gray-800 h-[60px] text-sm md:text-lg focus:ring-green-500 focus:ring-offset-0 focus:border-green-500"
        aria-label="Select platform"
      >
        <span className="text-left " >
          <SelectValue placeholder="Choose Downloader" />
        </span>
      </SelectTrigger>
      <SelectContent className="bg-gray-900 border-gray-800">
        {platforms.map((platform) => (
          <Link key={platform.id} href={`/${platform.id}`}>
            <div className="flex items-center gap-2 p-2 h-[40px] hover:bg-green-500/10 cursor-pointer">
              {platform.icon}
              <span className="font-semibold text-lg">{platform.name}</span>
            </div>
          </Link>
        ))}
      </SelectContent>
    </Select>
  );
};