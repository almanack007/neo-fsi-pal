import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
          Free Pune{" "}
          <span className="text-brand">FSI Calculator</span>
          <br />
          (Updated for UDCPR 2025)
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Calculate your permissible FSI in 3 clicks. No signup required.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button variant="brand" size="lg" className="text-base px-10 py-6 rounded-xl" onClick={scrollToCalculator}>
            Calculate Now
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <a href="#educational" className="text-sm text-muted-foreground hover:text-brand transition-colors underline underline-offset-4">
            View UDCPR 2025 Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
