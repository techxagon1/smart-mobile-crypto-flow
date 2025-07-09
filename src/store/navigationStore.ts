
import { create } from 'zustand';

type NavigationView = 'portfolio' | 'transactions' | 'bitcoin' | 'automation' | 'notifications' | 'settings';

interface NavigationState {
  currentView: NavigationView;
  setCurrentView: (view: NavigationView) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: 'portfolio',
  setCurrentView: (view) => set({ currentView: view }),
}));
