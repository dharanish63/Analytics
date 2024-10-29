import { create } from "zustand";

const useStore = create((set) => ({
  details: null,
  setDetails: (newDetails) => set({ details: newDetails }),
}));

export default useStore;
