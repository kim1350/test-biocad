import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../utils/api";

export const usePostRegister = () => {
  return useMutation({
    mutationFn: async ({}: {}) => {
      const response = await axiosInstance.post("/register", {});

      return response.data;
    },
  });
};
