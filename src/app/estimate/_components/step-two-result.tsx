"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { EstimateFormData } from "@/types/estimate.types";
import { calculatePrice } from "@/lib/pricing/calculate-price";
import { cn } from "@/lib/utils";

type TStepTwoResultProps = {
  formData: EstimateFormData;
  setFormData: (data: EstimateFormData) => void;
  prev: () => void;
  next: () => void;
  onClose?: () => void;
};

export function StepTwoResult({
  formData,
  setFormData,
  prev,
  next,
}: TStepTwoResultProps) {
  const prices = calculatePrice(formData.zip, formData.squareFootage);

  const handleSelect = (type: string) => {
    setFormData({ ...formData, cleaningPreference: type });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Estimated Cleaning Prices</h2>
        <p className="text-muted-foreground mt-2">
          Based on {formData.squareFootage || "1800"} sq ft in ZIP{" "}
          {formData.zip}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(prices).map(([frequency, price]) => {
          const isSelected = formData.cleaningPreference === frequency;

          return (
            <Card
              key={frequency}
              onClick={() => handleSelect(frequency)}
              className={cn(
                "cursor-pointer transition border-2",
                isSelected ? "border-primary shadow-lg" : "border-transparent",
              )}
            >
              <CardHeader>
                <CardTitle className="capitalize">
                  {frequency.replace("-", " ")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">${price.toFixed(2)}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prev}>
          ← Back
        </Button>
        <Button onClick={next}>Continue →</Button>
      </div>
    </div>
  );
}
