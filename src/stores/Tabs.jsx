import { create } from "zustand";

const useTabs = create((set) => ({
  values: "0",
  setValues: (value) => set({ values: value }),
}));

export default useTabs;
