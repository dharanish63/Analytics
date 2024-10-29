import { create } from "zustand";

const useDuration = create((set) => ({
  duration: null,
  setDuration: (newValue) => set({ duration: newValue }),
}));

export default useDuration;
