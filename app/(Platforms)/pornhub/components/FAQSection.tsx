const faqs = [
  {
    question: "Can I download private or premium Pornhub videos?",
    answer:
      "No, you can only download public videos that don't require a premium subscription. Private videos and premium content are not accessible for downloading.",
  },
  {
    question: "Is it legal to download Pornhub videos?",
    answer:
      "Make sure to respect copyright laws and only download videos for personal use. Don't redistribute or use the content commercially without proper rights.",
  },
  {
    question: "What quality options are available for downloads?",
    answer:
      "We provide multiple quality options ranging from 240p to 1080p, depending on what's available from the original video. You can choose the quality that best suits your needs.",
  },
  {
    question: "Do I need to create an account to use the downloader?",
    answer:
      "No, our service is completely free and doesn't require any registration or account creation.",
  },
  {
    question: "Why do I need to wait before downloading?",
    answer:
      "The brief waiting period helps us maintain our server resources and provides a better experience for all users.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-3 sm:py-4">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-[#FF9000] transition-colors">
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

export const FAQSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        FAQs for Pornhub Video Download
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
