export interface AuthState {
  isAuthenticated: boolean;
}

export interface Login {
  expires_in: number;
  expires_timestamp: number;
  filled?: number;
  id?: number;
  status?: string;
  token: string;
}
