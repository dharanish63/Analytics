import { create } from "zustand";

const useSystems = create((set) => ({
  systems: [],
  setSystems: (value) => set({ systems: value }),
}));

export default useSystems;
