import { create } from 'zustand';


interface BadgeStore {
  [x: string]: any;
  badges: string[];
  addBadge: (badge: string) => void;
}

export const useBadgeStore = create<BadgeStore>((set) => ({
  badges: [],
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
  removeBadge: (index: number) => set((state) => ({
    badges: state.badges.filter((_, idx) => idx !== index)
  })),
}));


////////////////////////

interface FactorStore {
  text: string;
  images: File[];
  setText: (text: string) => void;
  setImages: (images: File[]) => void;
  reset: () => void;
}

export const useFactorStore = create<FactorStore>((set) => ({
  text: '',
  images: [],
  setText: (text) => set({ text }),
  setImages: (images) => set({ images }),
  reset: () => set({ text: '', images: [] }),
}));
