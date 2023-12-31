import { UserProps } from 'src/types/User/user';
import { create } from 'zustand';

type UserStoreProps = {
  user: UserProps | null;
  setUser(user: UserProps): void;
};

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
