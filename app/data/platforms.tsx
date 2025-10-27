import { FaYoutube, FaTwitter, FaInstagram, FaPlay } from "react-icons/fa";

export const platforms = [
  {
    id: "youtube",
    name: "YouTube",
    icon: (
      <FaYoutube className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: (
      <FaInstagram className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: (
      <FaTwitter className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  
] as const;

export type PlatformId = (typeof platforms)[number]["id"];

export const platformIds = platforms.map((p) => p.id);
