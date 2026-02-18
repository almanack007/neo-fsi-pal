import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FSI and why does it matter?",
    answer: "FSI (Floor Space Index) is the ratio of total built-up area to the plot area. It determines how much you can build on your land. A higher FSI means more construction is allowed.",
  },
  {
    question: "How accurate is this FSI calculator?",
    answer: "This calculator uses the latest UDCPR 2025 guidelines for Pune. It provides an indicative estimate based on zone, road width, and plot area. For official approvals, always consult the local planning authority.",
  },
  {
    question: "Can I use premium FSI on any plot in Pune?",
    answer: "Premium FSI availability depends on the zone and specific conditions of your plot. Not all plots qualify. The premium must be paid to the planning authority before it can be utilized.",
  },
  {
    question: "How does road width affect my FSI in Pune?",
    answer: "Road width directly impacts the permissible FSI. Wider roads (18m+) allow higher FSI due to better infrastructure capacity. Plots on narrow roads (<9m) have significantly lower FSI limits.",
  },
  {
    question: "What is UDCPR 2025?",
    answer: "UDCPR stands for Unified Development Control and Promotion Regulations. The 2025 update is the latest amendment that governs construction rules, FSI limits, setbacks, and other development parameters across Maharashtra.",
  },
  {
    question: "Does NeoCheck only calculate FSI?",
    answer: "No. NeoCheck is a comprehensive compliance checking platform. You can upload your architectural drawings and NeoCheck will automatically verify FSI usage, setbacks, building height, margins, and other UDCPR parameters.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 data-[state=open]:border-brand transition-colors"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
