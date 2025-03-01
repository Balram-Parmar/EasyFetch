import Link from "next/link";
import  Header  from '../components/Header';

{/* Privacy Policy Page */}
 function page() {
    return (
      <>
      <Header/>
      <main className="bg-gray-950 min-h-screen mt-10">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent pb-2">
              Privacy Policy
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4 font-mono">
              At EasyFetch, your privacy isn't just a policy — it's our foundation.
            </p>
          </div>
  
          {/* Policy Overview Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="p-6 md:p-8 rounded-xl bg-gray-900 border border-gray-800">
              <div className="flex items-start md:items-center gap-4 mb-6">
                <div className="w-12 h-12 shrink-0 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    Our No-Logs Commitment
                  </h2>
                  <p className="text-gray-300 mt-1">Last Updated: February 26, 2025</p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16">
                <p className="text-gray-400 mb-6">
                  In an online world where your data is often treated as a commodity, EasyFetch stands apart. 
                  Our strict <span className="text-green-500 font-semibold">No-Logs Policy</span> isn't just a feature — it's our core philosophy.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      What We Don't Collect
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>IP addresses or location data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Download history or video URLs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Device information or identifiers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Browsing patterns or usage analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 110-2h1V6a1 1 0 011-1z" clipRule="evenodd"></path>
                      </svg>
                      Why This Matters
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Your downloads remain truly private</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>No data to sell or share with third parties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Protection from tracking and profiling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Complete anonymity while using our service</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Detailed Policy Sections */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    Welcome to EasyFetch's Privacy Policy. This document outlines our fundamental approach to your privacy and explains how we've designed our service to protect your personal information.
                  </p>
                  <p className="text-gray-400">
                    Unlike most online services, EasyFetch was built from the ground up with privacy as its cornerstone. We believe your online activities should remain private, which is why we've implemented a strict no-logs, no-tracking approach to our service.
                  </p>
                </div>
              </section>
  
              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Our Zero-Data Collection Policy</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    <span className="text-green-500 font-semibold">EasyFetch does not collect, store, or process any personal data.</span> This isn't a limited commitment with exceptions—it's absolute. When you use our service:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-400">
                        <strong className="text-white">No server logs:</strong> We maintain no logs of your activities, downloads, or video URLs.
                      </p>
                    </div>
                    
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-400">
                        <strong className="text-white">No IP tracking:</strong> Your IP address is neither recorded nor stored in any form.
                      </p>
                    </div>
                    
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-400">
                        <strong className="text-white">No cookies or trackers:</strong> We don't use cookies, pixels, or any tracking technologies to monitor your behavior.
                      </p>
                    </div>
                    
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-400">
                        <strong className="text-white">No account requirement:</strong> You don't need to create an account or provide any personal information to use our service.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <p className="text-gray-300 italic">
                      "We can't share, sell, or disclose what we don't collect. Your privacy is protected not by promises, but by technical design."
                    </p>
                  </div>
                </div>
              </section>
  
              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How Our Service Works</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    Understanding how our service operates is important to trusting our privacy commitments:
                  </p>
                  
                  <ol className="space-y-4 mb-6 list-decimal list-inside text-gray-400">
                    <li className="pl-2">
                      <span className="text-white font-medium">Direct Processing:</span> When you paste a URL, our system processes it directly without storing it.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">Temporary Files Only:</span> Any files created during the download process exist only temporarily on our servers and are immediately deleted after your download completes.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">No Download History:</span> We maintain no record of your downloads or searches.
                    </li>
                    <li className="pl-2">
                      <span className="text-white font-medium">Client-Side Operations:</span> Whenever possible, processes run on your device rather than our servers.
                    </li>
                  </ol>
                </div>
              </section>
  
              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limited Third-Party Services</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    To maintain our free service, we utilize a minimal set of third-party services:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Advertising</h3>
                      <p className="text-gray-400">
                        We display a limited number of advertisements to support our free service. However, we've selected advertising partners who respect privacy and do not engage in intrusive tracking practices. These ads operate without access to your personal data.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Content Delivery Networks (CDNs)</h3>
                      <p className="text-gray-400">
                        We use CDNs to deliver content efficiently. These services receive only the technical information necessary to provide their service, such as temporary IP addresses, but we ensure they comply with our no-logs policy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <p className="text-gray-300 font-medium mb-2">Our Standards for Partners:</p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Must adhere to strict privacy practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Cannot engage in cross-site tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Cannot build user profiles or retain user data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Must comply with all applicable privacy regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
  
              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Legal Compliance</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    EasyFetch operates in compliance with applicable laws while maintaining our privacy commitments:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Response to Legal Requests</h3>
                      <p className="text-gray-400">
                        If we receive legal requests for user information, we have a simple response: we have no data to provide. Our no-logs policy means we don't possess user-specific information that could be subject to such requests.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                      <p className="text-gray-400">
                        If our policies ever need to change for legal reasons, we commit to full transparency and will notify users clearly before implementing any changes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
  
              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. User Controls</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    Though we don't collect your data, we recommend these additional steps for maximum privacy:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">Browser Settings</h3>
                      <p className="text-gray-400">
                        Consider using private browsing mode and clearing your browser cache regularly.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">VPN Services</h3>
                      <p className="text-gray-400">
                        For enhanced privacy, consider using a reputable VPN service when browsing online.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">Secure Downloads</h3>
                      <p className="text-gray-400">
                        Store downloaded files securely and consider encrypting sensitive content.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-lg font-medium text-white mb-2">Ad Blockers</h3>
                      <p className="text-gray-400">
                        Consider using ad-blocking software to further reduce tracking possibilities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
  
              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-6">
                    We welcome questions about our privacy practices. While we've designed our system to collect no personal data, we're happy to address any concerns you might have:
                  </p>
                  
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 inline-block">
                    <p className="text-gray-300">
                      Email: <a href="mailto:privacy@easyfetch.me" className="text-green-500 hover:underline">privacy@easyfetch.me</a>
                    </p>
                  </div>
                  
                  <p className="text-gray-400 mt-6">
                    We typically respond to all privacy inquiries within 48 hours.
                  </p>
                </div>
              </section>
  
              {/* Policy Updates Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Policy Updates</h2>
                <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                  <p className="text-gray-400 mb-4">
                    While our commitment to collecting zero data will not change, we may occasionally update this policy for clarity or to reflect minor changes in how our service operates.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Any updates will be posted on this page with a revised "Last Updated" date at the top. For significant changes, we'll provide a more prominent notice.
                  </p>
                  
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-white font-medium mb-2">Our Promise:</p>
                    <p className="text-gray-300">
                      We will never compromise on our zero-data collection policy. If business needs ever require us to change this fundamental approach, we would notify users well in advance and provide options for downloading content before any changes take effect.
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
                Experience True Privacy Today
              </h2>
              <p className="text-gray-400 mb-6">
                No cookies. No tracking. No logs. Just a simple, private download experience.
              </p>
              <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Start Downloading Privately
              </a>
            </div>
          </div>
        </div>
      </main>
      </>
    );
  }

  export default page;