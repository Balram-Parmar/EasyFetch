import Link from "next/link";
import  Header  from '../../components/Header';

function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 min-h-screen mt-10">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-2">
              Terms of Use
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4 font-mono">
              By using EasyFetch, you agree to these terms - please read them carefully.
            </p>
          </div>

          {/* Agreement Overview Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="p-6 md:p-8 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex items-start md:items-center gap-4 mb-6">
                <div className="w-12 h-12 shrink-0 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    Service Agreement Overview
                  </h2>
                  <p className="text-gray-300 mt-1">Effective: February 26, 2025</p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16">
                <p className="text-gray-400 mb-6">
                  These Terms govern your access to and use of EasyFetch's services. Our platform provides tools for content conversion, and by using it, you agree to these legally binding terms.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>You must be at least 13 years old</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Comply with all applicable laws</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Respect copyright laws</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>No misuse of service</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Service Limitations
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>No guaranteed uptime</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Quality may vary</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Subject to fair use</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>May contain ads</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Terms Sections */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    By accessing or using EasyFetch, you agree to be bound by these Terms. If you disagree with any part, you may not use our service.
                  </p>
                  <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <p className="text-gray-300 italic">
                      "Continued use of the service constitutes ongoing acceptance of these terms and any revisions."
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    EasyFetch provides a web-based platform for converting publicly available content into different formats. We:
                  </p>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Do not host or store content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Provide tools for format conversion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Offer service "as is" without warranties</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">You Agree To:</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• Use only legally obtained content</li>
                        <li>• Respect copyrights and licenses</li>
                        <li>• Not overload our systems</li>
                        <li>• Comply with all laws</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">You Agree Not To:</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• Reverse engineer our service</li>
                        <li>• Use for illegal activities</li>
                        <li>• Bypass security measures</li>
                        <li>• Spam or distribute malware</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    All content processed through EasyFetch remains the property of its respective owners. We claim no ownership over:
                  </p>
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg mb-4">
                    <svg className="w-8 h-8 mr-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="text-white">Original content rights remain with:</p>
                      <p className="text-gray-400">• Content creators</p>
                      <p className="text-gray-400">• Copyright holders</p>
                      <p className="text-gray-400">• Licensed owners</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimers</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    The service is provided "as is" without warranties of any kind:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <div>
                        <h3 className="text-lg font-medium text-white">No Guarantees</h3>
                        <p className="text-gray-400">We don't guarantee accuracy, reliability, or continuous availability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <div>
                        <h3 className="text-lg font-medium text-white">Third-Party Content</h3>
                        <p className="text-gray-400">We're not responsible for content processed through our service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    To the maximum extent permitted by law, EasyFetch shall not be liable for:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Indirect or consequential damages</li>
                    <li>• Loss of data or profits</li>
                    <li>• Service interruptions</li>
                    <li>• Unauthorized access to systems</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    We reserve the right to terminate or restrict access to our service:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">For Any Reason</h3>
                      <p className="text-gray-400">At our sole discretion, without notice</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">For Violations</h3>
                      <p className="text-gray-400">Immediately upon terms violation</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400">
                    These Terms shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions.
                  </p>
                </div>
              </section>

              {/* Changes Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    We may revise these Terms periodically. Continued use after changes constitutes acceptance.
                  </p>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-white font-medium">Notification Method:</p>
                    <p className="text-gray-300">Posting revised Terms on this page with updated effective date</p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    For questions about these Terms:
                  </p>
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 inline-block">
                    <p className="text-gray-300">
                      Email: <a href="mailto:xorvfx@gmail.com" className="text-green-500 hover:underline">legal@easyfetch.me</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                Ready to Convert Responsibly?
              </h2>
              <p className="text-gray-400 mb-6">
                Use our service in compliance with these terms and applicable laws.
              </p>
              <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Start Converting Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TermsPage;