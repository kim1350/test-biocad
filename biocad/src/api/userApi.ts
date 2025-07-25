import { useQuery } from "@tanstack/react-query";
import { Profile } from "../store/types/profile";
import axiosInstance from "../utils/api";

export const useGetProfile = () => {
  return useQuery<Profile, Error>({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axiosInstance.get<Profile>(`/me`);
      return response.data;
    },
  });
};

export const useGetUsers = () => {
  return useQuery<Profile[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosInstance.get<Profile[]>(`/users`);
      return response.data;
    },
  });
};
