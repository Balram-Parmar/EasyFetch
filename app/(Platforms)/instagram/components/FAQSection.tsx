const faqs = [
  {
    question: "How does this Instagram to MP4 converter work?",
    answer:
      "Our Instagram to MP4 converter works by extracting video content from Instagram's servers when you provide a link. It processes the content and makes it available as an Instagram to MP4 converter reddit users recommend for its quality. You can download instagram video mp4 online with just a few clicks, making our insta reel to mp4 converter incredibly convenient.",
  },
  {
    question:
      "Can I download Reels with the Instagram video downloader free tool?",
    answer:
      "Yes, our Instagram video downloader free service works with all public Reels. Use our insta reels saver to download reels video content without restrictions. Private Reels are not accessible for downloading with our service. Our download ig reels tool is designed for public content that creators have already shared.",
  },
  {
    question: "Is it legal to use this insta saver reel service?",
    answer:
      "Make sure to respect copyright laws and get the content creator's permission before using downloaded content elsewhere. Our insta reels downloader is intended for personal use only. Always credit creators when sharing their work on other platforms.",
  },
  {
    question: "What quality will the downloaded Instagram MP4 reels be?",
    answer:
      "We provide the highest quality available with our Instagram to MP4 converter 1080p and Instagram to MP4 converter 4K options. Our tool preserves the original quality without watermarks. For those who need the best quality, our download instagram mp4 hd service ensures pristine video quality.",
  },
  {
    question: "Can I download Instagram videos on mobile devices?",
    answer:
      "Yes, our ig reels downloader works perfectly on mobile devices. You can download ig reel video content directly to your smartphone or tablet without quality loss. Our responsive instagram reel download er design works on any device with a web browser.",
  },
  {
    question:
      "How do I extract audio with the Instagram to MP4 converter audio function?",
    answer:
      "After pasting the Instagram link, you'll see options to download either the video or just the audio. Select the audio option to download instagram mp4 to mp3 format. This is perfect for extracting music, voiceovers, or sound effects from Instagram content.",
  },
  {
    question: "How can I use the download instagram mp4 link feature?",
    answer:
      "Simply copy the URL of any Instagram post containing a video or Reel you want to save. Paste this download instagram mp4 link into our tool, and our ins reels download service will process it for you. Choose your preferred quality and download format to download insta reels to mp4 instantly.",
  },
  {
    question:
      "Why should I choose your Instagram to MP4 converter reels tool over others?",
    answer:
      "Our downloader stands out because we offer consistently high-quality downloads without watermarks, support both HD 1080p and 4K quality options, and allow audio extraction. Plus, our clean interface makes it the simplest way to download instagram mp4 format content with no annoying ads or popups.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-3 sm:py-4">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-pink-400 transition-colors">
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
        Frequently Asked Questions About Instagram to MP4 Converters
      </h2>
      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Get answers to common questions about our Instagram Reel downloader
        service, insta reels saver features, and how to download instagram video
        mp4 online in high quality.
      </p>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
