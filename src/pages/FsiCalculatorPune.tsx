import HeroSection from "@/components/fsi/HeroSection";
import HowItWorksSection from "@/components/fsi/HowItWorksSection";
import CalculatorSection from "@/components/fsi/CalculatorSection";
import EducationalSection from "@/components/fsi/EducationalSection";
import FaqSection from "@/components/fsi/FaqSection";
import FinalCtaSection from "@/components/fsi/FinalCtaSection";

const FsiCalculatorPune = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="py-5 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xl font-bold text-foreground">
            <span className="text-brand">neo</span>Check
          </span>
        </div>
      </header>

      <main>
        <HeroSection />
        <HowItWorksSection />
        <CalculatorSection />
        <EducationalSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      {/* Simple footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          © 2025 NeoCheck. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FsiCalculatorPune;
