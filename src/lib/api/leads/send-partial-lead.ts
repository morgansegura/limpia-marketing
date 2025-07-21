import { EstimateFormData } from "@/types/estimate.types";

export async function sendPartialLead(data: EstimateFormData) {
  console.log("📡 sending to /leads:", data);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("❌ Lead POST failed:", res.status);
    } else {
      console.log("✅ Lead submitted");
    }
  } catch (err) {
    console.error("❌ Network error submitting lead:", err);
  }
}
