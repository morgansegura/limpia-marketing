export const formSteps = [
  { slug: "basic-info", label: "Basic Info" },
  { slug: "details", label: "Details" },
  { slug: "review", label: "Review & Submit" },
];

export const getNextStep = (slug: string) => {
  const index = formSteps.findIndex((s) => s.slug === slug);
  return formSteps[index + 1]?.slug || null;
};

export const getPreviousStep = (slug: string) => {
  const index = formSteps.findIndex((s) => s.slug === slug);
  return formSteps[index - 1]?.slug || null;
};
