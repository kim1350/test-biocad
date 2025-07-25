export interface ProfileState {
  isLoading: boolean;
  data: {};
}

export interface Profile {
  id: number;
  email: string;
  name: string;
  photo?: string;
}
