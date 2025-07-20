"use client";

import { useEffect, useState } from "react";
import { StepOneForm } from "./step-one-form";
import { StepTwoResult } from "./step-two-result";
import { StepThreeConfirmation } from "./step-three-confirmation";
import type { EstimateFormData } from "@/types/estimate.types";

type TEstimateFormWrapperProps = {
  onClose?: () => void;
};

export function EstimateFormWrapper({ onClose }: TEstimateFormWrapperProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EstimateFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    squareFootage: "",
    contactPermission: "yes",
    contactMethod: "phone",
    contactPreferredTime: "evening",
  });

  useEffect(() => {
    const saved = localStorage.getItem("estimateFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("estimateFormData", JSON.stringify(formData));
  }, [formData]);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <div>
      {step === 1 && (
        <StepOneForm
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      )}
      {step === 2 && (
        <StepTwoResult formData={formData} next={next} prev={prev} />
      )}
      {step === 3 && <StepThreeConfirmation formData={formData} />}
    </div>
  );
}
