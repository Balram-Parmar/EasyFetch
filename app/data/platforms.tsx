import { FaYoutube, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';


export const platforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: (
      <FaYoutube className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  
] as const;

export type PlatformId = typeof platforms[number]['id'];

export const platformIds = platforms.map(p => p.id);
