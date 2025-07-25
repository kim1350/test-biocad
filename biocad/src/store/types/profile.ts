export interface ProfileState {
  isLoading: boolean;
  data: {
    user: Profile;
  } | null;
}

export interface Profile {
  id: number;
  email: string;
  name: string;
  photo?: string;
}
