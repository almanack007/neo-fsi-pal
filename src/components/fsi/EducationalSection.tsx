const EducationalSection = () => {
  return (
    <section id="educational" className="py-20 md:py-28 px-6 bg-section-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          What is FSI in Pune?
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-10">
          Floor Space Index (FSI) determines how much construction is allowed on a plot relative to its area. In Pune, FSI is governed by the Unified Development Control and Promotion Regulations (UDCPR) 2025.
        </p>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Base FSI vs Premium FSI</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span><strong className="text-foreground">Base FSI</strong> is the standard FSI allowed as a right, based on the zone and road width.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span><strong className="text-foreground">Premium FSI</strong> is additional FSI available by paying a premium to the planning authority.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Together, they define the total permissible built-up area (BUA) on a plot.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">How Road Width Impacts FSI</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Wider roads allow higher FSI. A 30m+ road may grant up to 20% additional FSI.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Narrow roads (&lt;9m) significantly limit permissible construction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Road width is measured from the proposed Development Plan road, not the existing road.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">UDCPR 2025 FSI Rules Summary</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Residential zones in Pune Municipal Corporation area: Base FSI of 1.5 with premium FSI up to 0.5.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Commercial zones may qualify for higher premium FSI depending on road width.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>IT Parks enjoy higher base FSI of 2.5 to promote tech industry growth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-1.5 text-xs">●</span>
                <span>Congested areas have lower FSI due to infrastructure capacity constraints.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
