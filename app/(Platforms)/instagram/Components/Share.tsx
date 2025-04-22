import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,

  FaReddit,
  FaTelegram,
} from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
export function ShareStrip() {
  return (
    <div className="mt-12 bg-card backdrop-blur-sm border-2 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 py-6 px-4 sm:px-6 rounded-xl shadow-xl">
      <h3 className="text-white text-center text-xl sm:text-2xl font-bold mb-4">
        🚀 Share this tool with your friends on your favorite platform!
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20Instagram%20Reels%20Downloader%20tool%3A%20https%3A%2F%2Feasyfetch.me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <FaWhatsapp className="text-green-500" />
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://easyfetch.me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <FaFacebook className="text-blue-600" />
          Facebook
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Download%20Instagram%20Reels%20with%20this%20free%20tool%20👉%20https://easyfetch.me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <FaTwitter className="text-blue-400" />
          Twitter
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <PiInstagramLogoBold className="text-pink-500" />
          Instagram
        </a>
        <a
          href="https://reddit.com/submit?url=https://easyfetch.me&title=Instagram%20Reels%20Downloader%20Tool"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <FaReddit className="text-orange-600" />
          Reddit
        </a>
        <a
          href="https://t.me/share/url?url=https://easyfetch.me&text=Check%20out%20this%20free%20Instagram%20Reels%20Downloader!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/50 hover:bg-black/70 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:scale-[1.02] shadow-md flex items-center gap-2"
        >
          <FaTelegram className="text-sky-500" />
          Telegram
        </a>
      </div>
    </div>
  );
}
