"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { EstimateFormData } from "@/types/estimate.types";

type Props = {
  formData: EstimateFormData;
};

export function StepThreeConfirmation({ formData }: Props) {
  useEffect(() => {
    // Future: Send data to backend CRM endpoint
    console.log("Submitting to CRM backend:", formData);
  }, [formData]);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-semibold">You're all set!</h2>
      <p className="text-muted-foreground">
        Thank you {formData.name}, we’ve received your info and will be in touch
        soon.
      </p>

      <div className="pt-4">
        <Button asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </div>
  );
}
