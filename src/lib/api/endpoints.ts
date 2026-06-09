export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    me: '/auth/me',
  },
  clients: {
    base: '/clients',
    one: (id: string) => `/clients/${id}`,
  },
  equipment: {
    base: (clientId: string) => `/clients/${clientId}/equipment`,
    one: (clientId: string, id: string) => `/clients/${clientId}/equipment/${id}`,
  },
  parts: {
    base: (clientId: string, equipmentId: string) => `/clients/${clientId}/equipment/${equipmentId}/parts`,
    one: (clientId: string, equipmentId: string, id: string) => `/clients/${clientId}/equipment/${equipmentId}/parts/${id}`,
  },
  searchLog: {
    base: '/search-log',
    one: (id: string) => `/search-log/${id}`,
  },
  analytics: {
    base: '/analytics',
  },
} as const;