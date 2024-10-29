import { create } from "zustand";

const useReferrer = create((set) => ({
  referrer: [],
  setReferrer: (value) => set({ referrer: value }),
}));

export default useReferrer;
