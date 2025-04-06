const faqs = [
  {
    question: "Can we download normal YouTube videos using this website?",
    answer: "Yes, you can download them. The process is the same for downloading normal YouTube videos."
  },
  {
    question: "Can I use these videos anywhere?",
    answer: "Make sure to get the content creator's permission before using the video anywhere."
  },
  {
    question: "Is YouTube shorts available for Desktop?",
    answer: "Yes it is also available for desktop also."
  },
  {
    question: "What is the length of YouTube Shorts Videos?",
    answer: "YouTube shorts videos are generally under 60 seconds."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-700 py-3 sm:py-4">
      <summary className="flex justify-between items-center cursor-pointer text-gray-100 hover:text-red-400 transition-colors">
        <span className="text-base sm:text-lg font-medium pr-4">{question}</span>
        <span className="text-xl sm:text-2xl transition-transform group-open:rotate-180 shrink-0" aria-hidden="true">▼</span>
      </summary>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300">{answer}</p>
    </details>
  )
}

export const FAQSection = () => {
  return (
    <section className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-gray-700 mx-4 sm:mx-0" 
             aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
        FAQs for YouTube Short Video Download
      </h2>
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