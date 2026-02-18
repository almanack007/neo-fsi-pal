import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FSI_DATA: Record<string, { baseFsi: number; premiumFsi: number }> = {
  residential: { baseFsi: 1.5, premiumFsi: 0.5 },
  commercial: { baseFsi: 1.5, premiumFsi: 1.0 },
  industrial: { baseFsi: 1.0, premiumFsi: 0.0 },
  "it-park": { baseFsi: 2.5, premiumFsi: 1.0 },
  congested: { baseFsi: 1.0, premiumFsi: 0.3 },
};

const getRoadWidthMultiplier = (width: number): number => {
  if (width >= 30) return 1.2;
  if (width >= 18) return 1.0;
  if (width >= 12) return 0.8;
  if (width >= 9) return 0.6;
  return 0.4;
};

const CalculatorSection = () => {
  const [plotArea, setPlotArea] = useState("");
  const [roadWidth, setRoadWidth] = useState("");
  const [zone, setZone] = useState("");
  const [result, setResult] = useState<{
    baseFsi: number;
    premiumFsi: number;
    totalBua: number;
  } | null>(null);

  const handleCalculate = () => {
    const area = parseFloat(plotArea);
    const road = parseFloat(roadWidth);
    if (!area || !road || !zone) return;

    const fsiData = FSI_DATA[zone];
    if (!fsiData) return;

    const multiplier = getRoadWidthMultiplier(road);
    const baseFsi = fsiData.baseFsi * multiplier;
    const premiumFsi = fsiData.premiumFsi * multiplier;
    const totalBua = area * (baseFsi + premiumFsi);

    setResult({ baseFsi: +baseFsi.toFixed(2), premiumFsi: +premiumFsi.toFixed(2), totalBua: +totalBua.toFixed(2) });
  };

  return (
    <section id="calculator" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Calculate Permissible FSI
        </h2>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="plot-area" className="text-sm font-medium">Plot Area (sq.m)</Label>
              <Input
                id="plot-area"
                type="number"
                placeholder="e.g. 500"
                value={plotArea}
                onChange={(e) => setPlotArea(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="road-width" className="text-sm font-medium">Road Width (meters)</Label>
              <Input
                id="road-width"
                type="number"
                placeholder="e.g. 12"
                value={roadWidth}
                onChange={(e) => setRoadWidth(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="zone" className="text-sm font-medium">Zone</Label>
              <Select value={zone} onValueChange={setZone}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="it-park">IT Park</SelectItem>
                  <SelectItem value="congested">Congested Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            variant="brand"
            size="lg"
            className="w-full mt-8 rounded-xl py-6 text-base"
            onClick={handleCalculate}
          >
            Calculate FSI
          </Button>

          {result && (
            <div className="mt-8 bg-section-bg rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Base FSI</p>
                  <p className="text-2xl font-bold text-brand">{result.baseFsi}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Premium FSI</p>
                  <p className="text-2xl font-bold text-brand">{result.premiumFsi}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Permissible BUA</p>
                  <p className="text-2xl font-bold text-brand">{result.totalBua} sq.m</p>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-8 border-[1.5px] border-brand rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-foreground mb-4">
                Want to check if your drawing fits this FSI?
              </p>
              <Button variant="brand-outline" size="lg" className="rounded-xl px-8">
                Upload Drawing to NeoCheck
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
