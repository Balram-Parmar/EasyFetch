import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const platforms = [
  {
    id: "youtube",
    name: "YouTube",
    icon: (
      <FaYoutube className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
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
  // {
  //   id: 'pornhub',
  //   name: 'Pornhub',
  //   icon: (
  //     <FaPlay className="h-5 w-5 text-[#FF9000] transition-transform duration-200 hover:scale-110" />
  //   ),
  // },
] as const;

export type PlatformId = (typeof platforms)[number]["id"];

export const platformIds = platforms.map((p) => p.id);
