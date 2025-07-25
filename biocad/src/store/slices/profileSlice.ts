import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../types/profile";

const initialState: ProfileState = {
  isLoading: false,
  data: {
    email: undefined,
    id: undefined,
    name: undefined,
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default profileSlice.reducer;
