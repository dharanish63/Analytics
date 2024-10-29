import { create } from "zustand";
import React from "react";

const usePagestore = create((set) => ({
  pages: [],
  setPages: (newPages) => set({ pages: newPages }),
}));

export default usePagestore;
