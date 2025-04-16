import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.easyfetch.me/pornhub',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.easyfetch.me/youtube',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.easyfetch.me/instagram',
            lastModified: new Date(),
            changeFrequency: 'monthly', 
            priority: 1,
        },
        {
            url: 'https://www.easyfetch.me/twitter',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
   
        {
            url: 'https://www.easyfetch.me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.easyfetch.me/privacypolicy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.easyfetch.me/contactus',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.easyfetch.me/termsofservice',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.easyfetch.me/aboutus',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
