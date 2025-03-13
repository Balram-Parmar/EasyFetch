
import { SelectPlatform } from './components/Select';
import Common from './components/common';
import Disclaimer from './components/Disclaimer';

export default function Page() {
  return (
    <>
   
  <div className='text-center mt-24'>
    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-1">
    Download YouTube Shorts!
    </h1>
    
    <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-mono">
    Download YouTube Shorts videos in 4K easily and quickly.  <span className='line-through'>No Tracking</span>, high quality, free to use.
    </p>

  {/* Platform Selection */}
    <div className="w-[86%] md:max-w-[50%] mx-auto mt-12">
      <SelectPlatform/>
    </div>
  <Disclaimer/>
    </div>

    <Common/>
   
    </>
  )
}
  
