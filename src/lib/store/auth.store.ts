import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Manager } from '@/lib/types';

interface AuthState {
  token: string | null;
  manager: Manager | null;
  setToken: (token: string) => void;
  setManager: (manager: Manager) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      manager: null,
      setToken: (token) => set({ token }),
      setManager: (manager) => set({ manager }),
      logout: () => {
        localStorage.removeItem('access_token');
        set({ token: null, manager: null });
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);
