import { create } from 'zustand';


interface BadgeStore {
  badges: string[];
  addBadge: (badge: string) => void;
}

interface FactorStore {
  text: string;
  images: File[];
  setText: (text: string) => void;
  setImages: (images: File[]) => void;
  reset: () => void;
}


export const useBadgeStore = create<BadgeStore>((set) => ({
  badges: [],
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
}));


export const useFactorStore = create<FactorStore>((set) => ({
  text: '',
  images: [],
  setText: (text) => set({ text }),
  setImages: (images) => set({ images }),
  reset: () => set({ text: '', images: [] }),
}));
