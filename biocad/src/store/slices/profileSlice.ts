import { createSlice } from "@reduxjs/toolkit";
import { getProfileInfo } from "../thunks/profileThunks";
import { ProfileState } from "../types/profile";

const initialState: ProfileState = {
  isLoading: false,
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfileInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        if (action.payload) state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export default profileSlice.reducer;
