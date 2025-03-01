'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { platforms } from './data/platforms';
import { useRouter } from 'next/navigation';

export const SelectPlatform = () => {
    const router = useRouter();
  return (
    <Select onValueChange={(value) => router.push(`/${value}`)}>
    <SelectTrigger 
      className="w-full  bg-gray-900 border-gray-800 h-[60px] text-sm md:text-lg  focus:ring-green-500 focus:ring-offset-0 focus:border-green-500"
      aria-label="Select platform"
    >
    <span className='text-left'><SelectValue placeholder="Select a platform to start downloading"/> </span>  
    </SelectTrigger>

    
    <SelectContent className="bg-gray-900 border-gray-800">
      
      {platforms.map((platform) => (
        <SelectItem
          key={platform.id}
          value={platform.id}
          className="h-[40px] data-[highlighted]:bg-green-500/10 focus:bg-green-500/10 cursor-pointer"
        >
          <div className="flex items-center gap-2 ">
            {platform.icon}
            <span className={`font-semibold text-lg`}>{platform.name}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  )
}
