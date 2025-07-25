import { useMutation } from "@tanstack/react-query";

import axiosInstance from "../utils/api";
type RegisterData = {
  email: string;
  password: string;
};
export const usePostRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      console.log("mutate: ", data);
      const response = await axiosInstance.post("/register", data);

      return response.data;
    },
  });
};
