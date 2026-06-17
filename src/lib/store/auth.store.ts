import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Manager } from '@/lib/types';

interface AuthState {
  token: string | null;
  manager: Manager | null;
  isHydrated: boolean;
  setToken: (token: string) => void;
  setManager: (manager: Manager) => void;
  setHydrated: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      manager: null,
      isHydrated: false,
      setToken: (token) => set({ token }),
      setManager: (manager) => set({ manager }),
      setHydrated: (value) => set({ isHydrated: value }),
      logout: () => {
        localStorage.removeItem('access_token');
        set({ token: null, manager: null });
      },
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
