export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

// response used by frontend when hitting backend test endpoint
export interface BackendTestResponse {
  message: string;
}
