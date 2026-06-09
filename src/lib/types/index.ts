export interface Manager {
  id: string;
  email: string;
  name: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  inn?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Equipment {
  id: string;
  clientId: string;
  brand: string;
  model: string;
  year?: number;
  serialNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Part {
  id: string;
  equipmentId: string;
  name: string;
  partNumber?: string;
  category?: string;
  brand?: string;
  price?: string;
  inStock: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchLog {
  id: string;
  managerId: string;
  equipmentId?: string;
  query: string;
  result?: string;
  createdAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface AuthResponse {
  access_token: string;
}