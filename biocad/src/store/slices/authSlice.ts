import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Login } from "../types/auth";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkIsSigned: (state) => {},
    login: (state, action: PayloadAction<Login>) => {
      if (!state.isAuthenticated) state.isAuthenticated = true;
    },
    logout: (state) => {},
  },
});

export const { checkIsSigned, login, logout } = authSlice.actions;

export default authSlice.reducer;
