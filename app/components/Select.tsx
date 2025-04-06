'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { platforms } from '../data/platforms';

export const SelectPlatform = () => {
  const router = useRouter();

  return (
    <Select
      onValueChange={(value) => router.push(`/${value}`)}
      onOpenChange={(open) => {
        if (open) {
          platforms.forEach((platform) => router.prefetch(`/${platform.id}`));
        }
      }}
    >
      <SelectTrigger
        className="w-full bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 h-[60px] text-sm md:text-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:border-emerald-500 hover:border-emerald-500/50 transition-all duration-300 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10"
        aria-label="Select platform"
      >
        <span className="text-left flex items-center gap-2">
          <SelectValue placeholder="Choose Downloader" />
        </span>
      </SelectTrigger>
      <SelectContent 
        className="bg-gray-900/95 backdrop-blur-sm border-2 border-gray-700 shadow-xl shadow-emerald-500/5 animate-in fade-in-0 zoom-in-95"
        position="popper"
        sideOffset={8}
      >
        {platforms.map((platform) => (
          <SelectItem 
            key={platform.id} 
            value={platform.id}
            className="data-[highlighted]:bg-emerald-500/10 data-[highlighted]:text-emerald-400 data-[highlighted]:border-emerald-500/20 transition-all duration-200"
          >
            <div className="flex items-center gap-3 p-2 h-[50px] group">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {platform.icon}
              </span>
              <span className="font-semibold text-lg group-hover:text-emerald-400 transition-colors duration-200">
                {platform.name}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};