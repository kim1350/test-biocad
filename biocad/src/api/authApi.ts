import { useMutation } from "@tanstack/react-query";

import axiosInstance from "../utils/api";
export type RegisterData = {
  email: string;
  password: string;
  name: string;
};
export type AuthData = {
  email: string;
  password: string;
};
export const usePostRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    },
  });
};

export const usePostAuth = () => {
  return useMutation({
    mutationFn: async (data: AuthData) => {
      const response = await axiosInstance.post("/login", data);

      return response.data;
    },
  });
};
