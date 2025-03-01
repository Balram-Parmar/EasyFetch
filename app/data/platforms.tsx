import { FaYoutube, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export const platforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    icon: (
      <FaYoutube className="h-5 w-5 text-red-500 transition-transform duration-200 hover:scale-110" />
    ),
  },
  {
    id: 'more',
    name: 'More Platforms Coming Soon',
    icon: (
      <div className="h-5 w-5 text-gray-400 flex items-center justify-center">...</div>
    ),
  },
] as const;

export type PlatformId = typeof platforms[number]['id'];

export const platformIds = platforms.map(p => p.id);
