import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://easyfetch.me/youtube',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://easyfetch.me/instagram',
            lastModified: new Date(),
            changeFrequency: 'monthly', 
            priority: 1,
        },
        {
            url: 'https://easyfetch.me/twitter',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
   
        {
            url: 'https://easyfetch.me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://easyfetch.me/privacypolicy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://easyfetch.me/contactus',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://easyfetch.me/termsofservice',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://easyfetch.me/aboutus',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
