import axiosInstance from "@/src/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfileInfo = createAsyncThunk(
  "profile/getProfileInfo",
  async () => {
    const res = await axiosInstance.get("/me");

    return res?.data;
  }
);
