import { api } from '@/lib/api/axios';
import { Client, PaginatedResponse } from '@/lib/types';
import { endpoints } from '@/lib/api/endpoints';

export const clientsApi = {
  findAll: async (page: number, limit: number): Promise<PaginatedResponse<Client>> => {
    const response = await api.get<PaginatedResponse<Client>>(
      endpoints.clients.base,
      {
        params: { page, limit },
      });

    return response.data;
  },

  findOne: async (id: string) => {
    const response = await api.get<Client>(endpoints.clients.one(id));

    return response.data;
  },

  create: async (payload: { name: string; inn?: string; notes?: string; }): Promise<Client> => {
    const response = await api.post<Client>(endpoints.clients.base, payload);

    return response.data;
  },

  update: async (id: string, payload: Partial<Pick<Client, 'name' | 'inn' | 'notes'>>): Promise<Client> => {
    const response = await api.patch<Client>(endpoints.clients.one(id), payload);

    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete<Client>(endpoints.clients.one(id));

    return response.data;
  },
}
