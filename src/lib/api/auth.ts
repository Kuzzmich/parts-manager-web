import { AuthResponse } from '@/lib/types';
import { api } from '@/lib/api/axios';
import { endpoints } from '@/lib/api/endpoints';

export const authApi = {
  register: async (data: {email: string; password: string; name: string}) => {
    const res = await api.post<AuthResponse>(endpoints.auth.register, data);
    return res.data;
  },
  login: async (data: {email: string; password: string}) => {
    const res = await api.post<AuthResponse>(endpoints.auth.login, data);
    return res.data;
  }
}