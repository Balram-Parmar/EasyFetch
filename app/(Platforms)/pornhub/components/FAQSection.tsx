import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 dark:text-white font-medium text-left">
            Is it legal to download videos from Pornhub?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            This tool is intended for downloading videos for personal use only. Always respect copyright laws and the terms of service of Pornhub. Only download videos that you have permission to download, such as those marked as downloadable or videos you&apos;ve uploaded yourself.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-800 dark:text-white font-medium text-left">
            Do I need to create an account to use this downloader?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            No, our Pornhub video downloader is completely free to use and doesn&apos;t require any registration or account creation. You can start downloading videos instantly without signing up.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-800 dark:text-white font-medium text-left">
            What video quality can I download?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            Our downloader will attempt to fetch the highest quality version of the video available. The quality of downloaded videos depends on the original quality of the video on Pornhub.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-800 dark:text-white font-medium text-left">
            Is there a limit to how many videos I can download?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            No, there&apos;s no limit to the number of videos you can download using our tool. You can download as many videos as you want, completely free of charge.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-gray-800 dark:text-white font-medium text-left">
            Do you store the videos I download?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            No, we don&apos;t store any videos or personal information on our servers. The entire download process happens through your browser, and the videos are saved directly to your device.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};