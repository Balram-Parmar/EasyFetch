import { Header } from "./components/Header";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { FAQSection } from "./components/FAQSection";
import { Metadata } from "next/types";
import { Viewport } from "next";
import { ShareStrip } from "./components/Share";



// SEO metadata
export const metadata: Metadata = {
  title: "YouTube Shorts Downloader | EasyFetch",
  description:
    "Free online tool to download YouTube Shorts videos in high quality. No registration required, fast and easy to use.",
  keywords:
    "youtube shorts downloader, download youtube shorts, youtube video downloader, save youtube shorts, free youtube downloader",
  robots: "index, follow",
  openGraph: {
    title: "YouTube Shorts Downloader | EasyFetch",
    description:
      "Free online tool to download YouTube Shorts videos in high quality. No registration required, fast and easy to use.",
    type: "website",
    locale: "en_US",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF0000",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-row">
        {/* Left side ad space */}

        <div className="mt-[20%] hidden lg:block lg:w-1/6">
          <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
            <img
              src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Trading_Conditions_300x600px.gif"
              width="300"
              height="600"
              alt=""
            />
          </a>
          <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
            <img
              className="mt-5"
              src="https://d3dpet1g0ty5ed.cloudfront.net/EN_625k_traders_choose_Exness_300x600.png"
              width="300"
              height="600"
              alt=""
            />
          </a>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="container mx-auto px-0 sm:px-4 py-8 sm:py-15 mt-16 sm:mt-24">
            <div className="max-w-4xl mx-auto">
              <Header />
              <div className="mx-auto">
                <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
                  <img
                    className="mx-auto"
                    src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Take_Control_728x90px.gif"
                    width="728"
                    height="90"
                    alt="Banner-2"
                  />
                </a>
              </div>
              <div className="space-y-8 sm:space-y-12">
                <DownloadSection />
                <div className="mx-auto">
                  <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
                    <img
                      className="mx-auto"
                      src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Save_20on_20every_20trade_8_1_Google_728x90.jpg"
                      width="728"
                      height="90"
                      alt=""
                    />
                  </a>
                </div>
                <ShareStrip />
                <div className="mx-auto">
                  <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
                    <img
                      className="mx-auto"
                      src="https://d3dpet1g0ty5ed.cloudfront.net/EN_C1_PS_C2_T1_EXECUTION_4X_T2_PERF_D_3_13_STATIC_728x90.jpg"
                      width="728"
                      height="90"
                      alt=""
                    />
                  </a>
                </div>
                <FeaturesSection />
                <AboutSection />
                <FAQSection />
              </div>
            </div>
          </div>
        </div>

        {/* Right side ad space */}
        <div className="mt-[20%] hidden lg:block lg:w-1/6">
          <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
            <img
              src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Pay_20less_20keep_20more_2_4_Google_300x600.jpg"
              width="300"
              height="600"
              alt=""
            />
          </a>

          <a href="https://one.exnesstrack.org/intl/en/a/c_rzh3zauo7y">
            <img
              className="mt-5"
              src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Choose_Better_Forex_Conditions_v2300x600px.png"
              width="300"
              height="600"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
