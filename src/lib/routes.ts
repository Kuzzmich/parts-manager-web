export const routes = {
  auth: {
    login: '/login',
    register: '/register',
  },
  dashboard: {
    clients: (page?: number) => (page ? `/clients?page=${page}` : '/clients'),
    client: (id: string) => `/clients/${id}`,
    equipment: (clientId: string) => `/clients/${clientId}/equipment`,
    searchLog: '/search-log',
    analytics: '/analytics',
  },
} as const;
