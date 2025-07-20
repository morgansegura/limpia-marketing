export type EstimateFormData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  zip: string;
  squareFootage?: string;
  contactPermission?: "yes" | "no";
  contactMethod?: string;
  contactPreferredTime?: string;
  cleaningPreference?: string;
};
