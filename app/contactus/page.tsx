import Head from "next/head";
import { FaEnvelope, FaDiscord, FaCommentAlt, FaBug, FaHandshake, FaRegSmile } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | EasyFetch – Get in Touch</title>
        <meta
          name="description"
          content="Have a question, feedback, or need support? Contact EasyFetch for feedback, sponsorship inquiries, error reports, or just to chat. Reach us via email or Discord."
        />
        <meta
          name="keywords"
          content="Contact Us, EasyFetch, feedback, sponsorship, error report, chat, email, Discord"
        />
      </Head>
      <main>
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              We’re here to help! Whether it’s feedback, sponsorship, error reporting, or just a chat.
            </p>
          </div>

          {/* Use Cases Section */}
          <section className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent text-center">
                How You Can Reach Out
              </h2>
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Feedback */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800 flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <FaRegSmile className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Feedback</h3>
                    <p className="text-gray-400">
                      Share your thoughts and help us improve our service. We value every suggestion!
                    </p>
                  </div>
                </div>
                {/* Sponsorship */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800 flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <FaHandshake className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Sponsorship</h3>
                    <p className="text-gray-400">
                      Interested in collaborating or sponsoring our platform? Let’s explore opportunities together.
                    </p>
                  </div>
                </div>
                {/* Just Chatting */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800 flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <FaCommentAlt className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Just Chatting</h3>
                    <p className="text-gray-400">
                      Have a question or just want to say hi? We’re all ears! Drop us a message anytime.
                    </p>
                  </div>
                </div>
                {/* Error Report */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800 flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <FaBug className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Error Report</h3>
                    <p className="text-gray-400">
                      Encountered an issue? Let us know so we can quickly fix it and keep your experience smooth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mt-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                You can reach us via email or join our Discord community.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                  href="mailto:xorvfx@gmail.com"
                  className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg hover:border-green-500 transition-colors"
                >
                  <FaEnvelope className="w-5 h-5 text-green-500" />
                  <span>xorvfx@gmail.com</span>
                </a>
                <a
                  href="https://discord.gg/dqZ9B3ASFp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg hover:border-green-500 transition-colors"
                >
                  <FaDiscord className="w-5 h-5 text-green-500" />
                  <span>Join our Discord</span>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          {/* <section className="mt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent text-center">
                Send Us a Message
              </h2>
              <form className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-gray-800 rounded-lg text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-gray-800 rounded-lg text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-gray-800 rounded-lg text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-gray-800 rounded-lg text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section> */}



        </div>
      </main>
    </>
  );
};

export default ContactUs;
