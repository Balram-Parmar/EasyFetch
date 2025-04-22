import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// FAQ data object
const faqData = [
  {
    id: 1,
    question: "How does EasyFetch work?",
    answer:
      "EasyFetch works by extracting video content from servers when you provide a link. It processes the content and makes it available for download in high quality formats.",
  },
  {
    id: 2,
    question: "Is EasyFetch free to use?",
    answer:
      "Yes, our service is completely free and doesn't require any registration or account creation. All you need is a good internet connection.",
  },
  {
    id: 3,
    question: "What quality will the downloaded videos be?",
    answer:
      "We provide the highest quality available for all downloads. The quality depends on the original video's resolution.",
  },
  {
    id: 4,
    question: "Is it legal to download videos with EasyFetch?",
    answer:
      "Make sure to respect copyright laws and only download videos for personal use. Don't redistribute or use the content commercially without proper rights.",
  },
  {
    id: 5,
    question: "Which platforms are currently supported?",
    answer:
      "We currently support YouTube Shorts, Instagram Reels, Twitter videos, and more. Additional platforms are continually being added to our service.",
  },
];

// FAQ Item component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-3 sm:py-4">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-emerald-400 transition-colors">
        <span className="text-base sm:text-lg font-medium pr-4">
          {question}
        </span>
        <span className="text-xl sm:text-2xl transition-transform group-open:rotate-180 shrink-0">
          ▼
        </span>
      </summary>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">
        {answer}
      </p>
    </details>
  );
}

export const Faq = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2
        className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 
                     bg-gradient-to-r from-green-400 to-emerald-600 
                     bg-clip-text text-transparent"
      >
        Frequently Asked Questions
      </h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Get answers to common questions about our video downloader service,
        features, and how to download videos in high quality.
      </p>
      <div className="space-y-3 sm:space-y-4">
        {faqData.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
