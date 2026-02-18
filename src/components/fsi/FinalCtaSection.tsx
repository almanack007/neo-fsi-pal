import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-section-bg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Automate Your Compliance Checks
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Upload your drawings and let NeoCheck verify FSI, setbacks, margins, and more — instantly.
        </p>
        <Button variant="brand" size="lg" className="rounded-xl px-10 py-6 text-base">
          Try NeoCheck
        </Button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
