"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StepOneForm } from "./step-one-form";
import { StepTwoResult } from "./step-two-result";
import { StepThreeConfirmation } from "./step-three-confirmation";
import { sendPartialLead } from "@/lib/api/leads/send-partial-lead";

import type { EstimateFormData } from "@/types/estimate.types";

export function EstimateFormWrapper({}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EstimateFormData>({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    squareFootage: "",
    contactPermission: "no",
    contactMethod: "",
    cleaningPreference: "",
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

  const next = async () => {
    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep === 2) {
      // Save to localStorage and send to CRM
      localStorage.setItem("estimateFormData", JSON.stringify(formData));
      await sendPartialLead(formData);
    }
  };

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
        <StepTwoResult
          formData={formData}
          setFormData={setFormData}
          next={next}
          prev={prev}
        />
      )}
      {step === 3 && <StepThreeConfirmation formData={formData} />}
    </div>
  );
}
