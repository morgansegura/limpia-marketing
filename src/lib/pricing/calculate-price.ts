type CleaningFrequency = "one-time" | "monthly" | "bi-weekly" | "weekly";

const BASE_RATES = {
  "one-time": 0.15,
  monthly: 0.13,
  "bi-weekly": 0.11,
  weekly: 0.1,
};

const STATE_MINIMUM_WAGE: Record<string, number> = {
  default: 15.0,
  "92101": 16.5, // Example: San Diego
  // Add more zip overrides
};

export function calculatePrice(zip: string, sqftInput?: string | number) {
  const squareFootage = parseInt(sqftInput?.toString() || "1800", 10);
  const wage = STATE_MINIMUM_WAGE[zip] || STATE_MINIMUM_WAGE["default"];

  const result: Record<CleaningFrequency, number> = {
    "one-time": squareFootage * BASE_RATES["one-time"] * (wage / 15),
    monthly: squareFootage * BASE_RATES["monthly"] * (wage / 15),
    "bi-weekly": squareFootage * BASE_RATES["bi-weekly"] * (wage / 15),
    weekly: squareFootage * BASE_RATES["weekly"] * (wage / 15),
  };

  return result;
}
