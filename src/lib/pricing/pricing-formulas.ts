export function calculateBasePrice(sqft: number) {
  const base = 75.68 + ((sqft - 500) / 250) * 1;
  return +base.toFixed(2);
}

export function calculateLinearSizeCharge(sqft: number) {
  const additional = ((sqft - 500) / 100) * 7.5;
  return Math.max(0, +additional.toFixed(2));
}

export function estimateHybridPrice(sqft: number) {
  const base = calculateBasePrice(sqft);
  const extra = calculateLinearSizeCharge(sqft);
  return +(base + extra).toFixed(2);
}
