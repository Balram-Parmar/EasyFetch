
import { FaGlobe, FaLock, FaRocket, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
    
      <main>
        <div className="container mx-auto px-4 py-20">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              Your Privacy-First YouTube Shorts Downloader & Video Download Solution.
            </p>
          </div>

          {/* Our Story Section */}
          <section className="mt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                EasyFetch was founded with the vision of delivering a seamless and secure video downloading experience.
                Born out of the need for uncompromised privacy and high-performance downloads, our platform empowers
                users to download YouTube Shorts and other videos without ever sacrificing their data.
              </p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                At EasyFetch, our mission is simple: to empower users with fast, secure, and hassle-free downloads while
                maintaining strict privacy standards. We believe that you shouldn’t have to choose between convenience and
                data protection when downloading your favorite YouTube Shorts or long-form videos.
              </p>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Value 1: Privacy */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FaLock className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Privacy</h3>
                  <p className="text-gray-400">
                    We are committed to safeguarding your privacy. Our no-logs policy ensures that your personal data is never collected or stored.
                  </p>
                </div>
                {/* Value 2: Performance */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FaRocket className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-gray-400">
                    Our optimized servers ensure lightning-fast downloads—whether you’re saving a YouTube Short or a full-length video.
                  </p>
                </div>
                {/* Value 3: Accessibility */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FaGlobe className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-400">
                    We believe in making quality downloads accessible to everyone, regardless of where you are or what device you use.
                  </p>
                </div>
                {/* Value 4: Community */}
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FaUsers className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-400">
                    We value our users and continuously improve our service through your feedback. Together, we shape the future of secure downloads.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="mt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                About the Developer
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                Hi! I'm a solo developer passionate about the web and creating useful tools. EasyFetch is a project born 
                from my love for web development and commitment to user privacy. As a one-person team, I handle everything 
                from development to maintenance, ensuring every aspect meets high quality standards.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800 text-center max-w-md">
                  <h3 className="text-xl font-semibold text-white">Independent Developer</h3>
                  <p className="text-gray-400 mt-2">Building privacy-focused web solutions with passion</p>
                </div>
              </div>
              </div>
            </section>
  
            {/* Meet the Team Section */}
    

          {/* Call to Action Section */}
          <section className="mt-16">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Join Us on Our Journey
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                Whether you’re a long-time user or new to EasyFetch, we’re excited to have you on board. Get in touch, share your
                feedback, and help us shape the future of secure, high-quality video downloads.
              </p>
              <div className="mt-8">
                <a
                  href="/contactus"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
