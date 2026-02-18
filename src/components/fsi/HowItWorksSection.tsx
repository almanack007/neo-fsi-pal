import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enter Plot Details",
    description: "Input plot area, road width and zoning information.",
  },
  {
    number: "02",
    title: "FSI is Calculated",
    description: "Base FSI and premium FSI applied automatically as per UDCPR.",
  },
  {
    number: "03",
    title: "Review Output",
    description: "Instantly see total permissible built-up area.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          How <span className="text-brand">neo</span>
          <span className="font-bold text-foreground">Check</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex">
              <div
                className="bg-card border-[1.5px] border-brand rounded-2xl p-8 flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="text-6xl md:text-7xl font-bold text-brand/30 leading-none select-none">
                    {step.number}
                  </span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center absolute -right-7 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-brand" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
