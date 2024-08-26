import {create} from 'zustand';

interface BadgeStore {
  badges: string[];
  addBadge: (badge: string) => void;
  removeBadge: (index: number) => void;
}

export const useBadgeStore = create<BadgeStore>((set) => ({
  badges: [],
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
  removeBadge: (index) => set((state) => ({
    badges: state.badges.filter((_, idx) => idx !== index)
  })),
}));
