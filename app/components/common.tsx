import { FaYoutube, FaInstagram, FaTiktok, FaLock, FaBolt, FaDownload, FaUsers, FaClock, FaCloudDownloadAlt } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Common = () => {
    return (
        <>
            <main>
                <div className="container mx-auto px-4 py-5">
                    <div className="text-center">
                        {/* Hero Section */}
                        <div className="max-w-7xl mx-auto mt-20">
                            <h2 className="text-base sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                The Ultimate YouTube Shorts Experience
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Welcome to EasyFetch – your all-in-one <strong>youtube short video downloader</strong> and <strong>youtube shorts download app</strong> designed to let you <strong>download youtube shorts video</strong> and <strong>download youtube short video</strong> effortlessly. Whether you want to <strong>download youtube shorts</strong> in full HD, or simply <strong>save youtube shorts</strong> for later viewing, our platform is built with cutting-edge technology to ensure you have the <strong>best youtube shorts downloader</strong> experience.
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="max-w-7xl mx-auto mt-20">
                            <h2 className="text-base sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                Powerful Features & Advanced Tools
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Feature Card 1 */}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaYoutube className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Universal Download Capabilities</h3>
                                    <p className="text-gray-400">
                                        Our service works as a robust <strong>youtube shorts downloader online</strong> that enables you to <strong>download youtube short</strong> content in a variety of ways, whether it is <strong>download youtube short video</strong> from individual posts or entire playlists.
                                    </p>
                                </div>

                                {/* Feature Card 2 */}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaDownload className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">High Definition & Multiple Formats</h3>
                                    <p className="text-gray-400">
                                        Enjoy options such as <strong>youtube shorts download hd</strong> with our <strong>1080p youtube shorts downloader</strong> and even <strong>yt shorts downloader 4k</strong>. Convert your files with our <strong>yt shorts downloader mp4 converter</strong> and switch easily between <strong>mp4 downloader youtube shorts</strong> and other formats.
                                    </p>
                                </div>

                                {/* Feature Card 3 */}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaBolt className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Lightning-Fast & Free Downloads</h3>
                                    <p className="text-gray-400">
                                        With our <strong>yt shorts downloader free download hd</strong> service, you can <strong>download youtube shorts free</strong> at incredible speeds. Whether you’re using it as a <strong>youtube shorts downloader</strong> or a <strong>yt shorts downloader</strong>, performance is our promise.
                                    </p>
                                </div>

                                {/* Feature Card 4 - Batch Downloads (SEO Optimized) */}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaUsers className="w-6 h-6 text-green-500" /> {/* Icon for groups/batch */}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Bulk YouTube Shorts Downloader</h3>
                                    <p className="text-gray-400">
                                        Save time with our <strong>bulk youtube shorts downloader</strong>.  Download entire playlists or multiple <strong>youtube shorts videos</strong> at once.  Ideal for content creators and users who need to <strong>download youtube shorts in bulk</strong>.  This feature is a powerful <strong>youtube shorts saver</strong> for large collections.
                                    </p>
                                </div>

                                {/* Feature Card 5 - Scheduled Downloads (SEO Optimized) */}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaClock className="w-6 h-6 text-green-500" /> {/* Clock icon */}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Scheduled YouTube Shorts Downloads</h3>
                                    <p className="text-gray-400">
                                        Set it and forget it!  Our <strong>scheduled youtube shorts downloader</strong> lets you queue up <strong>youtube short video downloads</strong> for later.  Perfect for users with limited bandwidth or those who want to <strong>download youtube shorts</strong> during off-peak hours.  A convenient <strong>youtube shorts download online</strong> solution.
                                    </p>
                                </div>

                                {/* Feature Card 6 - Cloud Storage Integration (SEO Optimized)*/}
                                <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                        <FaCloudDownloadAlt className="w-6 h-6 text-green-500" /> {/*Cloud download icon*/}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Direct to Cloud YouTube Shorts Saver</h3>
                                    <p className="text-gray-400">
                                      Download and <strong>save YouTube Shorts directly to your cloud storage</strong>.  Supports Google Drive, Dropbox, and OneDrive.  Securely <strong>download youtube short video</strong> and access it anywhere.  The ultimate <strong>youtube shorts download app</strong> for cloud users.  Avoid local storage limits.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How It Works Section */}
                        <div className="max-w-7xl mx-auto mt-24">
                            <h2 className="text-base sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                How It Works
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Simply paste your video link and choose your desired option – from a quick <strong>youtube short video download</strong> to a full-fledged conversion using <strong>youtube shorts to mp4</strong>. Our platform even supports users who wonder <strong>how to download youtube shorts in gallery</strong> for effortless media management.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Experience the complete freedom to <strong>download youtube shorts video</strong> across devices. Whether using our <strong>youtube shorts downloader online</strong> tool or exploring options like <strong>download youtube shorts</strong> and <strong>download youtube short</strong>, our service guarantees simplicity and versatility.
                            </p>
                        </div>

                        {/* Supported Platforms & Integrations */}
                        <div className="mt-24 max-w-7xl mx-auto">
                            <div className="p-6 md:p-8 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                                    Multi-Platform Integration
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    Our service doubles as a <strong>youtube shorts saver</strong> and a <strong>youtube short video download</strong> solution that integrates seamlessly with various platforms. Whether you’re using our <strong>yt shorts downloader online</strong> or testing out our beta features, you get top-notch performance.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                                        <FaYoutube className="w-5 h-5 text-red-500" />
                                        <h4 className="m-0">YouTube & Shorts</h4>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                                        <FaInstagram className="w-5 h-5 text-pink-500" />
                                        <h4 className="m-0">Instagram (Coming soon)</h4>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                                        <FaTiktok className="w-5 h-5 text-blue-500" />
                                        <h4 className="m-0">TikTok (Coming soon)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Tools Section */}
                        <div className="max-w-7xl mx-auto mt-24">
                            <div className="p-6 md:p-8 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                                    Advanced Tools & Converters
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    Unlock the full potential of our platform with our industry-leading <strong>mp4 downloader youtube shorts</strong> and <strong>yt shorts downloader 1080p</strong> options. Convert your videos with ease using our state-of-the-art <strong>yt shorts downloader mp4 converter</strong>, and experience a new way to <strong>download youtube shorts</strong> and <strong>download youtube short</strong> in multiple resolutions.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    For enthusiasts looking to <strong>download youtube shorts free</strong> without any hidden costs, our system is optimized to deliver rapid results—making it the go-to <strong>youtube shorts downloader</strong> in today’s digital landscape.
                                </p>
                            </div>
                        </div>

                        {/* Community & Reviews Section */}
                        <div className="max-w-7xl mx-auto mt-24">
                            <div className="p-6 md:p-8 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                                    Community Love & Reviews
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    Praised by users on forums and social media, including <strong>yt shorts downloader reddit</strong>, our platform is known as the ultimate tool to <strong>download youtube short video</strong> content. Users call us a reliable <strong>youtube shorts download</strong> solution that excels in performance and ease of use.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Join the community that trusts us as their personal <strong>youtube shorts saver</strong> and explore endless possibilities in media management.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div id="faq" className="mt-24 max-w-7xl mx-auto mb-16">
                            <div className="p-6 md:p-8 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                                        <FaLock className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="faq-1" className="border-b border-gray-800 last:border-0">
                                            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                        <FaLock className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                        Is it legal to download content using this tool?
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                <div className="pl-11">
                                                    Our service functions as a personal <strong>youtube short video downloader</strong> and <strong>youtube shorts download app</strong> designed solely for personal use. Redistribution or commercial use may infringe on copyrights.
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="faq-2" className="border-b border-gray-800 last:border-0">
                                            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                        <FaDownload className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                        What formats can I choose from?
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                <div className="pl-11">
                                                    We support multiple formats: from <strong>yt shorts downloader 1080p</strong> and <strong>yt shorts downloader 4k</strong> to converting files using <strong>youtube shorts to mp4</strong> and the <strong>mp4 downloader youtube shorts</strong> option.
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="faq-3" className="border-b border-gray-800 last:border-0">
                                            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                        {/* Corrected SVG Icon for List/Playlist */}
                                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                        Can I download playlists including Shorts?
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                <div className="pl-11">
                                                    Absolutely.  Our tool lets you <strong>download youtube shorts video</strong> individually or in bulk, making it a true <strong>youtube shorts downloader online</strong> solution.
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="faq-4" className="border-b border-gray-800 last:border-0">
                                            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                        <FaBolt className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                        Is there any cost or download limit?
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                <div className="pl-11">
                                                    Enjoy unrestricted downloads whether you use our service as a <strong>yt shorts downloader</strong> or opt for our premium <strong>youtube shorts downloader</strong> features. Experience limitless <strong>download youtube shorts</strong> and <strong>download youtube short</strong> without hidden fees.
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="faq-5" className="border-b border-gray-800 last:border-0">
                                            <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                        <FaDownload className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                        How do I view downloads in my gallery?
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                <div className="pl-11">
                                                    Check out our guide on <strong>how to download youtube shorts in gallery</strong> for tips on saving and organizing your files efficiently.
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        {/* Tips & Tricks Section */}
                        <div className="max-w-7xl mx-auto mt-24 mb-16">
                            <div className="p-6 md:p-8 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
                                    Tips & Tricks for an Optimal Experience
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    Enhance your download experience with these expert tips:
                                </p>
                                <ul className="text-gray-400 text-lg list-disc list-inside space-y-2">
                                    <li>
                                        Use our platform as a <strong>yt shorts downloader free download hd</strong> tool to instantly <strong>download youtube short video</strong> content.
                                    </li>
                                    <li>
                                        Switch between quality settings like <strong>yt shorts downloader 1080p</strong> and test the <strong>download youtube shorts video</strong> options for a tailored experience.
                                    </li>
                                    <li>
                                        Experience our <strong>youtube shorts download hd</strong> mode and convert using <strong>yt shorts downloader mp4 converter</strong> for optimal clarity.
                                    </li>
                                    <li>
                                        Our system is recognized as a <strong>youtube short video download</strong> and <strong>youtube shorts download</strong> service trusted by communities, including mentions on <strong>yt shorts downloader reddit</strong>.
                                    </li>
                                    <li>
                                        Leverage our quick conversion tool to switch files to <strong>youtube shorts to mp4</strong> and become the go-to <strong>mp4 downloader youtube shorts</strong> solution.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export const getStaticProps = async () => { };
export default Common;