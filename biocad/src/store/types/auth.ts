import { Profile } from "./profile";

export interface AuthState {
  isAuthenticated: boolean;
}

export interface Login {
  expires_in: number;
  expires_timestamp: number;
  refreshToken: string;
  accessToken: string;
  user: Profile;
}
