import { FaLock } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PlatformData {
    hero: {
        h2: string;
        p: string;
    };
    features: {
        h2: string;
        cards: {
            h3: string;
            p: string;
            icon: React.ReactNode;
        }[];
    };
    faq: {
        h2: string;
        items: {
            question: string;
            answer: string;
            icon: React.ReactNode;
        }[];
    };
}


const Common = ({ test }: { test: PlatformData }) => {
    if (!test) {
        return <div>Error: Missing data</div>;
    }
    return (
        <>
            <main>
                <div className="container mx-auto px-4 py-5">
                    <div className="text-center">
                        {/* Hero Section */}
                        <div className="max-w-7xl mx-auto mt-20">
                            <h2 className="text-base sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                            {test.hero.h2}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: test.hero.p }} />
                        </div>

                        {/* Features Section */}
                        <div className="max-w-7xl mx-auto mt-20">
                            <h2 className="text-base sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                {test.features.h2}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {test.features.cards.map((card, index) => (
                                    <div key={index} className="p-6 rounded-xl bg-[hsl(var(--card))] border border-gray-800">
                                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{card.h3}</h3>
                                        <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: card.p }} />
                                    </div>
                                ))}
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
                                        {test.faq.h2}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    <Accordion type="single" collapsible className="w-full">
                                        {test.faq.items.map((item, index) => (
                                            <AccordionItem key={index} value={`faq-${index + 1}`} className="border-b border-gray-800 last:border-0">
                                                <AccordionTrigger className="px-4 py-4 hover:bg-gray-800/50 hover:no-underline">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/10">
                                                            {item.icon}
                                                        </div>
                                                        <span className="text-base font-thin sm:text-lg sm:font-medium">
                                                            {item.question}
                                                        </span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-4 pb-4 pt-1 text-gray-400">
                                                    <div className="pl-11" dangerouslySetInnerHTML={{ __html: item.answer }} />
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
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


export default Common;