export function getTurnPrice(sqft: number): number {
  if (sqft <= 1500) return 40;
  if (sqft <= 2250) return 45;
  if (sqft <= 2750) return 50;
  if (sqft <= 3250) return 60;
  if (sqft <= 3500) return 65;
  return 70;
}

export function getOneTimeCleaning(): number {
  return 332;
}

export function getMoveInOutCleaning(): number {
  return 232;
}

export function getDeepClean(): number {
  return 83; // applies to both A and B
}
