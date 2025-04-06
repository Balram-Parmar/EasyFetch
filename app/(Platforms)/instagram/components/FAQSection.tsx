const faqs = [
  {
    question: "Can I download private Instagram Reels?",
    answer: "No, you can only download public Instagram Reels. Private Reels are not accessible for downloading."
  },
  {
    question: "Is it legal to download Instagram Reels?",
    answer: "Make sure to respect copyright laws and get the content creator's permission before using the Reels anywhere."
  },
  {
    question: "What quality will the downloaded Reels be?",
    answer: "We provide the highest quality available for all downloads. The quality depends on the original Reel's resolution."
  },
  {
    question: "Do I need to create an account to use the downloader?",
    answer: "No, our service is completely free and doesn't require any registration or account creation."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-3 sm:py-4">
      <summary className="flex justify-between items-center cursor-pointer text-gray-300 hover:text-pink-400 transition-colors">
        <span className="text-base sm:text-lg font-medium pr-4">{question}</span>
        <span className="text-xl sm:text-2xl transition-transform group-open:rotate-180 shrink-0">▼</span>
      </summary>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">{answer}</p>
    </details>
  )
}

export const FAQSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">FAQs for Instagram Reel Download</h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  )
} 