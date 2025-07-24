export interface RegisterRequestBody {
  email: string;
  password: string;
  name: string;
}

export interface UsersRequestBody {
  email: string;
  name: string;
  photo?: string;
}
export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface JwtPayload {
  userId: number;
}
