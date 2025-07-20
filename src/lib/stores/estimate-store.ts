import { create } from "zustand";

type EstimateForm = {
  name?: string;
  sqft?: number;
  // etc.
};

export const useEstimateStore = create<{
  data: EstimateForm;
  update: (values: Partial<EstimateForm>) => void;
}>((set) => ({
  data: {},
  update: (values) => set((state) => ({ data: { ...state.data, ...values } })),
}));
