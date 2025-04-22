import React from "react";

// Features object that contains all feature data
const featuresData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast Download",
    description:
      "Download Instagram videos and convert them to MP4/MP3 in seconds with our lightning-fast service.",
    colorClass: "text-pink-500",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Secure Conversion",
    description:
      "Our service is 100% secure and private. We don't store your media or require any login information.",
    colorClass: "text-orange-500",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    title: "High Quality",
    description:
      "Get the highest quality MP4 videos and MP3 audio from Instagram with no loss in quality during conversion.",
    colorClass: "text-pink-500",
  },
];

export const Features = () => {
  return (
    <div className="bg-card w-full rounded-lg shadow-lg p-4 sm:p-8 mt-20">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center 
                      bg-gradient-to-r from-pink-500 to-orange-500 
                      bg-clip-text text-transparent mb-8"
      >
        Features Of Our EasyFetch Instagram To MP4/MP3 Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="bg-black/50 h-72 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className={`text-4xl mb-4 ${feature.colorClass}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-200 text-center font-light text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
