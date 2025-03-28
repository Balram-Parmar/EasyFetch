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
      onValueChange={(value) => router.push(`/${value}`)} // Navigate when an item is selected
      onOpenChange={(open) => {
        if (open) {
          // Prefetch all platform pages when the dropdown opens
          platforms.forEach((platform) => router.prefetch(`/${platform.id}`));
        }
      }}
    >
      <SelectTrigger
        className="w-full bg-gray-600 border-gray-800 h-[60px] text-sm md:text-lg focus:ring-green-500 focus:ring-offset-0 focus:border-green-500"
        aria-label="Select platform"
      >
        <span className="text-left">
          <SelectValue placeholder="Choose Downloader" />
        </span>
      </SelectTrigger>
      <SelectContent className="bg-gray-900 border-gray-800">
        {platforms.map((platform) => (
          <SelectItem key={platform.id} value={platform.id}>
            <div className="flex items-center gap-2 p-2 h-[40px]">
              {platform.icon}
              <span className="font-semibold text-lg">{platform.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};