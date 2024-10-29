import { create } from "zustand";

const useEvents = create((set) => ({
  events: [],
  setEvents: (value) => set({ events: value }),
}));

export default useEvents;
