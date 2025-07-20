import { EstimateFormData } from "@/types/estimate.types";

export async function sendPartialLead(data: EstimateFormData) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error("Partial lead submission failed:", err);
  }
}
