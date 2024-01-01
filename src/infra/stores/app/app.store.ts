import { create } from 'zustand';

type AppStoreProps = {
  isFontsLoaded: boolean;
  setIsFontsLoaded(loaded: boolean): void;
};

export const useAppStore = create<AppStoreProps>((set) => ({
  isFontsLoaded: false,
  setIsFontsLoaded: (isFontsLoaded: boolean) => set({ isFontsLoaded }),
}));
