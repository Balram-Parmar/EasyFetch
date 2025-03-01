import Header from './components/Header';
import{ Footer }from './components/Footer';
import { SelectPlatform } from './Select';
import Common from './components/common';
import Disclaimer from './components/Disclaimer';

export default function Page() {
  return (
    <>
    <Header/>
    // Main Text Section
    <div className='text-center mt-24'>
      <h1 className=" text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-1">
    Say Hello to Privacy!
  </h1>
  
  <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-mono">
    Download videos securely and privately. No tracking, no logs, just freedom.
  </p>

  {/* Platform Selection */}
    <div className="w-[86%] md:max-w-[50%] mx-auto mt-12">
      <SelectPlatform/>
    </div>
  <Disclaimer/>
    </div>

    <Common/>
    <Footer/>
    </>
  )
}
  
